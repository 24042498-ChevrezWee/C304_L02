import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {pizzaData} from "./data";

function Header({isOpen}) {
  return (
    <header className="header">
      <h1>Andy's Pizza Co.</h1>
      
      {isOpen && <p>Authentic Italian Cuisine</p>}
    </header>
  );
}

function Pizza({ pizza, isFavourite, onToggleFavourite }) {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  const pizzaClass = soldOut ? "pizza sold-out" : "pizza";
  return (
    <li className={pizzaClass}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        <div className="pizza-bottom">
          {soldOut ? (<span>Sold Out</span>) : (<span>${price}</span>)}

          <button className="favourite-btn" type="button" onClick={() => onToggleFavourite(name)}>
            {isFavourite ? "Unfavourite" : "Favourite"}
          </button>
        </div>
      </div>
    </li>
  );
}

function Menu({ favourites, onToggleFavourite }) {
  const [search, setSearch] = useState("");

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Fresh ingredients, handmade dough, and pizzas prepared with care.</p>

      <input className="search" type="text" placeholder="Search pizzas" value={search} onChange={(event) => setSearch(event.target.value)} />

      <ul className="pizzas">
        {filteredPizzas.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} isFavourite={favourites.includes(pizza.name)} onToggleFavourite={onToggleFavourite} />
        ))}
      </ul>
    </main>
  );
}

function Order() {
  function handleOrder() {
    alert("Order placed!");
  }

  return (
    <div className="order">
      <button className="btn" type="button" onClick={handleOrder}>Order</button>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? (<><p>We're currently open</p><Order /></>) : (<p>Sorry we're closed</p>)}
    </footer>
  );
}

function App() {
  //const hour = new Date().getHours();
  const hour = 11;
  const isOpen = hour >= 10 && hour < 22;

  const [favourites, setFavourites] = useState([]);

  function handleToggleFavourite(pizzaName) {
    setFavourites((currentFavourites) => {
      if (currentFavourites.includes(pizzaName)) {
        return currentFavourites.filter((name) => name !== pizzaName);
      }
      
      return [...currentFavourites, pizzaName];
    });
  };

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu favourites={favourites} onToggleFavourite={handleToggleFavourite} />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
