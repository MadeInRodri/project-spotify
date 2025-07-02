import Swal from "sweetalert2";
import "./myAlert.css";

export default function myAlert() {
  Swal.fire({
    title: "¡Esta función no está implementada!",
    text: "Pero muchas gracias por probarla",
    icon: "info",
    customClass: {
      popup: "mi-popup",
      confirmButton: "mi-confirmar",
    },
  });
}

export function myErrorAlert() {
  Swal.fire({
    title: "¡Ha habido un problema!",
    text: "Parece que algo malo ha ocurrido... Revisa la consola",
    icon: "error",
    customClass: {
      popup: "mi-popup",
      confirmButton: "mi-confirmar",
    },
  });
}
