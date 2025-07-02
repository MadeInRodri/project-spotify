import { FaSpotify } from "react-icons/fa";
import "./styles/Register.css";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase/appConfig";
import { useNavigate } from "react-router-dom";

import { myErrorAlert } from "../functions/myAlert";

export default function LoginEmailAndPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  console.log(errors);

  return (
    <div className="register-form" style={{ height: "100%" }}>
      <header>
        <FaSpotify className="spotify-icon" />
      </header>
      <form
        onSubmit={handleSubmit((data) => {
          signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
              navigate("/");
            })
            .catch((error) => {
              console.error("Error al iniciar sesión", error);
              myErrorAlert();
            });
        })}
      >
        <section>
          <label>Dirección de email</label>
          <input
            type="text"
            placeholder="nombre@dominio.com"
            {...register("email", {
              required: {
                value: true,
                message: "Debe colocar un correo",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El correo debe seguir el standar nombre@dominio.some",
              },
            })}
          ></input>
          {errors.email?.message && <span>{errors.email.message}</span>}
        </section>
        <section>
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Debe colocar una contraseña",
              },
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          ></input>
          {errors.password?.message && <span>{errors.password.message}</span>}
        </section>

        <section className="genre-section">
          <button type="submit">Acceder</button>
        </section>
      </form>
    </div>
  );
}
