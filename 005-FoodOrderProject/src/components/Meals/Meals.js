import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";

import MealsSummary from "./MealsSummary";

const Meals = () => {

    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
};

export default Meals;