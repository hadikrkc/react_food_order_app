import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvaliableMeals></AvaliableMeals>
        </Fragment>
    )
}

export default Meals;