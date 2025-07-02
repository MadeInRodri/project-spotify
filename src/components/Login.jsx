import { FaSpotify } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "./styles/LoginNav.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../fireBase/appConfig";
import { myErrorAlert } from "../functions/myAlert";

export default function Login() {
  const navigate = useNavigate();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al iniciar sesión", error);
        myErrorAlert();
      });
  };

  return (
    <div className="login-nav">
      <header>
        <FaSpotify className="spotify-icon" />
        <h3>Inicia sesión para empezar a escuchar contenido</h3>
      </header>
      <main>
        <section className="register">
          <Link to="/accounts/email">
            <button className="register-button">Email y contraseña</button>
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
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a>Privacy Policy</a> and <a>Terms of Service</a> apply.
        </p>
      </footer>
    </div>
  );
}
