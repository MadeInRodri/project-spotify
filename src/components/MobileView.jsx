import CarouselSongs from "./CarouselSongs";
import Enjambre from "../resourses/Enjambre.json";
import JoseJose from "../resourses/JoseJose.json";
import Joji from "../resourses/Joji.json";
import "./styles/MobileView.css";

import myAlert from "../functions/myAlert";

import { FaXmark } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BsCollectionPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../fireBase/appConfig";
import { useState, useEffect } from "react";

export default function MobileView() {
  const [activeSesion, setActiveSesion] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setActiveSesion(user);
        console.log(activeSesion);
      } else {
        setActiveSesion(false);
      }
    });
  });

  const [displayMenu, setDisplayMenu] = useState("none");
  return (
    <>
      <section className="mobile-menu" style={{ display: displayMenu }}>
        <header>
          <button
            className="button-menu"
            onClick={() => setDisplayMenu("none")}
          >
            <FaXmark className="icon" />
          </button>
        </header>
        <section>
          {activeSesion ? (
            <>
              <article className="article-one">
                <Link
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        console.log("Se ha deslogeado con exito");
                      })
                      .catch((error) => {
                        console.error("Ha ocurrido un error: ", error);
                      });
                  }}
                >
                  Cerrar Sesión
                </Link>
              </article>
            </>
          ) : (
            <>
              <article className="article-one">
                <Link to="/accounts">Iniciar sesión</Link>
                <Link to="/login">Registrarse</Link>
              </article>
            </>
          )}
          <article className="article-two">
            <a>Premium</a>
            <a>Ayuda</a>
            <a>Descargar</a>
            <a>Privacidad</a>
            <a>Términos y condiciones</a>
          </article>
        </section>
      </section>

      <header className="mobile-header">
        <div className="logo-name">
          <FaSpotify className="spotify-icon" />
          <h1>Spotify</h1>
        </div>
        <div className="lateral-menu">
          {activeSesion ? (
            <h2>Bienvenido {activeSesion.displayName}</h2>
          ) : (
            <button onClick={myAlert}>Abrir aplicación</button>
          )}
          <div
            className="button-lateral"
            onClick={() => setDisplayMenu("flex")}
          >
            <FiMenu className="icon" />
          </div>
        </div>
      </header>
      <main className="mobile-main">
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
      <footer className="mobile-footer">
        <button onClick={myAlert}>
          <IoHomeOutline className="icon" />
          <p>Inicio</p>
        </button>

        <button onClick={myAlert}>
          <CiSearch className="icon" />
          <p>Buscar</p>
        </button>

        <button onClick={myAlert}>
          <BsCollectionPlayFill className="icon" />
          <p>Biblioteca</p>
        </button>

        <button onClick={myAlert}>
          <FaSpotify className="icon" />
          <p>Premium</p>
        </button>
      </footer>
    </>
  );
}
