import React, { useEffect } from "react";
import Meal from "./Meal";

export default function MealList({mealData}) {
    const nutrients = mealData.nutrients;
    return (
        <main>
            <section className="nutrients">
                <h1>Macros</h1>
                <ul>
                    <li>Calorias: {nutrients.calories.toFixed(0)}</li>
                    <li>Carboidratos: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Gorduras: {nutrients.fat.toFixed(0)}</li>
                    <li>Proteinas: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="meals">
                {mealData.meals.map((meal) =>{
                    return <Meal key={meal.id} meal={meal}/>;
                })}
            </section>
        </main>
    )
}