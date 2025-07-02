import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/HeaderNav.css";

import { FaSpotify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsCollectionPlayFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import myAlert from "../functions/myAlert";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../fireBase/appConfig";
import { useState, useEffect } from "react";

export default function HeaderNav() {
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

  return (
    <header className="computer-header">
      <section>
        <Link to="/">
          <picture>
            <FaSpotify className="spotify-icon" />
          </picture>
        </Link>
        <Link to="/">
          <picture className="home">
            <IoHomeOutline className="icon" />
          </picture>
        </Link>
      </section>

      <div className="search">
        <section>
          <picture>
            <CiSearch className="icon" />
          </picture>
          <input type="text" placeholder="¿Qué quieres reproducir?"></input>
        </section>
        <picture>
          <BsCollectionPlayFill className="icon" onClick={myAlert} />
        </picture>
      </div>

      <section>
        {activeSesion ? (
          <div className="account">
            <h3>Bienvenido: {activeSesion.displayName}</h3>
            <button
              className="account-btn"
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
              Cerrar sesión
            </button>
          </div>
        ) : (
          <>
            {" "}
            <div className="hiperlink">
              <a onClick={myAlert}>Premium</a>
              <a onClick={myAlert}>Asistencia</a>
              <a onClick={myAlert}>Descargar</a>
            </div>
            <div className="account">
              <a onClick={myAlert}>Instalar app</a>
              <Link to="/login">Registrate</Link>
              <Link to="/accounts" className="account-btn">
                Iniciar sesión
              </Link>
            </div>
          </>
        )}
      </section>
    </header>
  );
}
