import React, {useState} from "react";
import MealList from "./MealList";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Features from "./components/feature";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=3dc2a64c413f4a38a1138aad368103f5&timeFrame=day&targetCalories=${calories}`
    )
    .then(response => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  }

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Benefits />
      <Features />
      <Testimonials />
      <h1 id="orders" className="h1">Personalize seu pedido</h1>
      <section className="controls">
      <input className="input" type="number" placeholder="Calorias (e.g. 2000)" onChange={handleChange}/>
      </section>
      <button className="btn" onClick={getMealData}>Obtenha Seus Pratos</button>
      {mealData &&  <MealList mealData={mealData} />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
