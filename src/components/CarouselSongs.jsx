import "./styles/CarouselSongs.css";

export default function CarouselSongs({ canciones }) {
  return (
    <div className="carousel">
      {canciones.map((cancion) => (
        <div className="card-carousel" id={cancion.id}>
          <picture>
            <img src={cancion.url}></img>
          </picture>
          <h3>{cancion.title}</h3>
          <p>{cancion.artist}</p>
        </div>
      ))}
    </div>
  );
}
