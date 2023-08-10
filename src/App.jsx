import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  const greetingMessage = "Bienvenido a la mejor tienda de ropa";
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
};

export default App;
