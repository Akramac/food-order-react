import Logo from '../assets/logo.jpg'
import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
const requestConfig = {}
export default function Meals(){
    /*async function fetchMeals(){
        const response = await fetch('http://localhost:3000/meals')
        const jsonData = await response.json()

        if(!response.ok){
            throw new Error('Could not find meals')
        }

        return jsonData
    }*/
    /*const [loadedMeals,setLoadedMeals]=useState(fetchMeals())*/
    /*const [data, setData]=useState([])*/
/*
    useEffect(() => {
        loadedMeals.then(setData)
    }, []);*/
        const {data: data,isLoading , error} = useHttp('http://localhost:3000/meals', requestConfig , [])

        if(isLoading){
                return <p className="center">Fetching Meals ...</p>
        }
        if(error){
                return <Error title="FAiled to fetch meals" message={error}></Error>
        }
        return (<>
        <ul id="meals">
            {data && data.map((meal, index)=> (
                <MealItem key={meal.id} meal={meal}></MealItem>
                )
            )}

        </ul></>)
}