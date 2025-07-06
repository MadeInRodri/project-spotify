import { FaSpotify } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./styles/LoginNav.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, provider, auth } from "../fireBase/appConfig";

export default function LoginNav() {
  const navigate = useNavigate();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Ha ocurrido un problema al iniciar sesión", error);
      });
  };

  return (
    <div className="login-nav">
      <header>
        <FaSpotify className="spotify-icon" />
        <h3>Regístrate para empezar a escuchar contenido</h3>
      </header>
      <main>
        <section className="register">
          <Link to="/register">
            <button className="register-button">Registrate</button>
          </Link>
        </section>
        <section className="google-register">
          <button className="google-register-button" onClick={googleAuth}>
            <FaGoogle className="google-icon" />
            Registrate con google
          </button>
        </section>
      </main>
      <footer>
        <section>
          <h4>¿Ya tienes una cuenta?</h4>
          <Link to="/accounts">Inicia sesión aquí.</Link>
        </section>
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
        </p>
      </footer>
    </div>
  );
}
