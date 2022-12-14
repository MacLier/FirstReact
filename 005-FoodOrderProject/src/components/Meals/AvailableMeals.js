import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
    const [isLoading, setIsloading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        setIsloading(true);
        const fetchMeals = async () => {
            const response = await fetch("https://react-http-c672b-default-rtdb.firebaseio.com/meals.json");
            // const response = await fetch("https://react-http-c672b-default-rtdb.firebaseio.com/meals");
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals);
            setIsloading(false);
        }


        fetchMeals().catch(err => {
            setIsloading(false);
            setHttpError(err.message);
        });
    }, []);


    if (isLoading) {
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if (httpError) {
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }

    const mealsList = meals.map(meal => {
        return <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        >{meal.name}</MealItem>
    })

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;