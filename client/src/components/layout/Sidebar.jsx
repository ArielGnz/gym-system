import { NavLink } from "react-router-dom";
import  logo  from "../../assets/logo.png";
import {FaHome, FaUsers, FaMoneyBill, FaClipboardCheck, FaDumbbell, FaCog } from "react-icons/fa";

function Sidebar() {

  const linkClass = ({ isActive }) => 
    `flex items-center gap-3 p-3 rounded-lg transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-700"

  }`;

  const menu = [
    {
      nombre: "Dashboard",
      ruta: "/",
      icono: FaHome,
    },
    {
      nombre: "Socios",
      ruta: "/socios",
      icono: FaUsers,
    },
    {
      nombre: "Pagos",
      ruta: "/pagos",
      icono: FaMoneyBill,
    },
    {
      nombre: "Asistencias",
      ruta: "/asistencias",
      icono: FaClipboardCheck,
    },
    {
      nombre: "Rutinas",
      ruta: "/rutinas",
      icono: FaDumbbell,
    }
  ]

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen p-4">
      
      <div clasName="flex flex-col items-center mb-8">
        <img src={logo} alt="Logo" className="w-20 h-20 object-contain mb-3" />
        <h2 className="text-xl font-bold text-center">
          Funcional Training
        </h2>

      </div>
      
      

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className="p-2 rounded hover:bg-slate-700"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/socios"
          className="p-2 rounded hover:bg-slate-700"
        >
          Socios
        </NavLink>

        <NavLink
          to="/pagos"
          className="p-2 rounded hover:bg-slate-700"
        >
          Pagos
        </NavLink>

        <NavLink
          to="/asistencias"
          className="p-2 rounded hover:bg-slate-700"
        >
          Asistencias
        </NavLink>

        <NavLink
          to="/rutinas"
          className="p-2 rounded hover:bg-slate-700"
        >
          Rutinas
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;