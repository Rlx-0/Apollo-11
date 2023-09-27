import React from "react"
import {useState, useEffect} from 'react'

function MoonAgeInDays() {
	const [moonAge, setMoonAge] = useState([])
	const [moonRise, setMoonRise] = useState([])
	const [phaseOfMoon, setPhaseOfMoon] = useState([])

	async function MoonDataFunc() {

	const url = 'https://moon-phase.p.rapidapi.com/advanced?lat=51.4768&lon=-0.0004';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'ea752ba19amshfb504aa314bebacp12ba6bjsn57d76cbdd911',
			'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		const parsedData = (JSON.parse(result));
		const moonAge= parsedData.moon.age_days
		const moonRise = parsedData.moon.moonrise
		const phaseOfMoon = parsedData.moon.phase_name
		setMoonAge(moonAge)
		setMoonRise(moonRise)
		setPhaseOfMoon(phaseOfMoon)
		console.log(parsedData)
	} 	catch (error) {
		console.error(error);
	}}

	
	useEffect(() => {
		MoonDataFunc();}, [{}]
		)

	return (
	<>
		<h1>moon age: {moonAge}</h1>
		<h1>moon-rise today: {moonRise}</h1>
		<h1>type of moon today: {phaseOfMoon} </h1>
	</>
	)

}

export default MoonAgeInDays




