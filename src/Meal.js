import React, { useState, useEffect } from 'react';

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");
    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=3dc2a64c413f4a38a1138aad368103f5&includeNutrition=false`
        )
        .then(response => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id])
    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className='instructions'>
                <li>Tempo de preparo: {meal.readyInMinutes} Minutos</li>
                <li>Numero de Porções: {meal.servings}</li>

            </ul>
            <a className='link' href={meal.sourceUrl}>Pedir agora</a>
        </article>
    )
}