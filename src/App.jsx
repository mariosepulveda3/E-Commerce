import "./App.scss";
import Akatsuki from "./components/Akatsuki";
import Parrafo1 from "./components/Atoms/Parrafo1";
import Clase from "./components/Clase";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

function App() {
  console.log("Hola desde App");
  const nombre = "Sasuke";

  return (
    <div className="App">
      <Akatsuki />
      <Akatsuki member="Pain" color="red" />
      <Akatsuki member="Madara" color="brown" />
      <Akatsuki member="Sasuke" color="gray" />
      <Clase />
      <Navbar />
      <h1>App works!</h1>
      <p> Hola {nombre}</p>
      <Home />
      <Characters />
      <Parrafo1 />
    </div>
  );
}

export default App;
