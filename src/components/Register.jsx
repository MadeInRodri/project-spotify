import { FaSpotify } from "react-icons/fa";
import "./styles/Register.css";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../fireBase/appConfig";
import { useNavigate } from "react-router-dom";
import { myErrorAlert } from "../functions/myAlert";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  return (
    <div className="register-form">
      <header>
        <FaSpotify className="spotify-icon" />
      </header>
      <form
        onSubmit={handleSubmit((data) => {
          createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: data.name,
              })
                .then(() => {
                  console.log("Usuario creado con nombre:", user.displayName);
                  navigate("/");
                })
                .catch((error) => {
                  console.error("Error al actualizar el perfil:", error);
                  myErrorAlert();
                });
            })
            .catch((error) => {
              console.error("Error al crear la cuenta:", error);
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
        <section>
          <label>Nombre</label>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Debe colocar un nombre",
              },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "El nombre solo debe contener letras",
              },
            })}
          ></input>
          {errors.name?.message && <span>{errors.name.message}</span>}
        </section>
        <section>
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            {...register("date", {
              required: {
                value: true,
                message: "Debe colocar una fecha",
              },
            })}
          ></input>
          {errors.date?.message && <span>{errors.date.message}</span>}
        </section>
        <section className="genre-section">
          <label>Género</label>
          <article className="genre-article">
            <article className="article-radio">
              <label>Hombre</label>
              <input
                type="radio"
                name="genre"
                value="Hombre"
                {...register("genre", {
                  required: {
                    value: true,
                    message: "Debe seleccionar una opción",
                  },
                })}
              ></input>
            </article>
            <article className="article-radio">
              <label>Mujer</label>
              <input
                type="radio"
                name="genre"
                value="Mujer"
                {...register("genre")}
              ></input>
            </article>
            <article className="article-radio">
              <label>No binario</label>
              <input
                type="radio"
                name="genre"
                value="No binario"
                {...register("genre")}
              ></input>
            </article>
            <article className="article-radio">
              <label>Otro</label>
              <input
                type="radio"
                name="genre"
                value="Otro"
                {...register("genre")}
              ></input>
            </article>
            <article className="article-radio">
              <label>Prefiero no aclararlo</label>
              <input
                type="radio"
                name="genre"
                value="Prefiero no aclararlo"
                {...register("genre")}
              ></input>
            </article>
          </article>
          {errors.genre?.message && <span>{errors.genre.message}</span>}
          <button type="submit">Enviar</button>
        </section>
      </form>
    </div>
  );
}
