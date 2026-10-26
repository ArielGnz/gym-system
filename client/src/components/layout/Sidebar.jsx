
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { menu } from "../../constants/menu";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20"
        : "text-slate-300 hover:bg-slate-700/70 hover:text-white"
    }`;

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-slate-700/50 bg-slate-900 p-4 text-white">
      {/* Logo y nombre */}
      <div className="mb-8 flex flex-col items-center border-b border-slate-700/70 px-2 pb-6 pt-3">
        <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-md">
          <img
            src={logo}
            alt="Logo de Funcional Training"
            className="h-full w-full object-contain"
          />
        </div>

        <h2 className="text-center text-lg font-bold tracking-wide">
          Funcional Training
        </h2>

        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          Gestión del gimnasio
        </p>
      </div>

      {/* Navegación */}
      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">
        <p className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Menú principal
        </p>

        {menu.map((item) => (
          <NavLink
            key={item.ruta}
            to={item.ruta}
            end={item.ruta === "/"}
            className={linkClass}
          >
            <item.icono
              size={19}
              className="shrink-0 transition-transform duration-200 group-hover:scale-105"
            />

            <span>{item.nombre}</span>
          </NavLink>
        ))}
      </nav>

      {/* Pie del menú */}
      <div className="mt-4 border-t border-slate-700/70 px-3 pt-4">
        <p className="text-xs text-slate-500">
          Funcional Training
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Panel de administración
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
