import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return <header>
    <h1>Andy's Pizza Co.</h1>
  </header>;
}

function Pizza() {
  return (
    <article>
      <img
        src="/pizzas/spinaci.jpg"
        alt="Spinach pizza"
        width="300"
      />
      <h2>Spinach Pizza</h2>
      <p>Tomato, mozzarella, spinach, and ricotta cheese.</p>
    </article>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);