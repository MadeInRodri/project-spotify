import "./styles/AsideNav.css";
import { FaPlus } from "react-icons/fa6";

export default function AsideNav() {
  return (
    <aside className="computer-aside">
      <div className="aside-header">
        <h2>Tu biblioteca</h2>
        <button>
          <FaPlus className="icon" />
        </button>
      </div>
      <div className="aside-card">
        <h3>Crea tu primera lista</h3>
        <p>Es muy fácil, y te echaremos una mano</p>
        <button>Crear lista</button>
      </div>
      <div className="aside-card">
        <h3>Encuentar podcast que quieras seguir</h3>
        <p>Te avisaremos cuando salgan nuevos episodios</p>
        <button>Explorar pódcasts</button>
      </div>
    </aside>
  );
}
