import "./styles/MainNav.css";
import CarouselSongs from "./CarouselSongs.jsx";
import Enjambre from "../resourses/Enjambre.json";
import JoseJose from "../resourses/JoseJose.json";
import Joji from "../resourses/Joji.json";

export default function MainNav() {
  return (
    <main className="computer-main">
      <section>
        <h4>Lo mejor de Enjambre</h4>
        <CarouselSongs canciones={Enjambre}></CarouselSongs>
      </section>
      <section>
        <h4>Recuerda con José José</h4>
        <CarouselSongs canciones={JoseJose}></CarouselSongs>
      </section>
      <section>
        <h4>¡Es el momento de llorar!</h4>
        <CarouselSongs canciones={Joji}></CarouselSongs>
      </section>
    </main>
  );
}
