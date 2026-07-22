import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">
        Funcional Training
      </h2>

      <nav className="flex flex-col gap-2">
        <Link
          to="/"
          className="p-2 rounded hover:bg-slate-700"
        >
          Dashboard
        </Link>

        <Link
          to="/socios"
          className="p-2 rounded hover:bg-slate-700"
        >
          Socios
        </Link>

        <Link
          to="/pagos"
          className="p-2 rounded hover:bg-slate-700"
        >
          Pagos
        </Link>

        <Link
          to="/asistencias"
          className="p-2 rounded hover:bg-slate-700"
        >
          Asistencias
        </Link>

        <Link
          to="/rutinas"
          className="p-2 rounded hover:bg-slate-700"
        >
          Rutinas
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;