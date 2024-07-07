import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Actor from "../src/views/actor/Actor";
import Dia from "../src/views/dia/Dia";
import Director from "../src/views/director/Director";
import MasVotada from "../src/views/masVotada/MasVotada";
import Mes from "../src/views/mes/Mes";
import Popularidad from "../src/views/popularidad/Popularidad";
import Recomendacion from "../src/views/recomendacion/Recomendacion";
import "./App.css";

function App() {
  return (
    <div className="bg-dark bg-contain bg-center h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actor" element={<Actor />} />
        <Route path="/dia" element={<Dia />} />
        <Route path="/director" element={<Director />} />
        <Route path="/mas_votada" element={<MasVotada />} />
        <Route path="/mes" element={<Mes />} />
        <Route path="/popularidad" element={<Popularidad />} />
        <Route path="/recomendacion" element={<Recomendacion />} />
      </Routes>
    </div>
  );
}

export default App;
