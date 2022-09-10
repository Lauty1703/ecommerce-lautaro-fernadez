import Navbar from "./components/NavBar";

import "./App.css";
import ItemListContainer from "./components/ItemsListContainer";

const  App=()=> {
  return (
    <div>
    <Navbar />
    <ItemListContainer saludo="hola usuario que catalogo desea visualizar"/>
    </div>
    );
}

export default App;


