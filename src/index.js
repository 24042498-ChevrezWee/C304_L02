import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>Andy's Pizza Co.</h1>
    </header>
  );
}

function Pizza({ image, name, desc, price }) {
  return (
    <li className="pizza">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{desc}</p>
        <span>${price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        <Pizza image="/pizzas/spinaci.jpg" name="Spinach Pizza" desc="Tomato, mozzarella, spinach, and ricotta cheese." price={10} />
        <Pizza image="/pizzas/margherita.jpg" name="Margherita Pizza" desc="Tomato, mozzarella, and basil." price={12} />
        <Pizza image="/pizzas/focaccia.jpg" name="Focaccia Pizza" desc="Tomato, mozzarella, and focaccia bread." price={14} />
        <Pizza image="/pizzas/funghi.jpg" name="Funghi Pizza" desc="Tomato, mozzarella, and mushrooms." price={16} />
        <Pizza image="/pizzas/prosciutto.jpg" name="Prosciutto Pizza" desc="Tomato, mozzarella, and prosciutto." price={18} />
        <Pizza image="/pizzas/salamino.jpg" name="Salamino Pizza" desc="Tomato, mozzarella, and salami." price={20} />
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour < 22;

  return (
    <footer className="footer">
      {isOpen ? "We're currently open" : "Sorry we're closed"}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);