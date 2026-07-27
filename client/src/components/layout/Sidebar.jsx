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

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen p-4">
      
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="Logo" className="w-20 h-20 object-contain mb-3" />
        <h2 className="text-xl font-bold text-center">
          Funcional Training
        </h2>

      </div>
      
      <nav className="flex flex-col gap-2">
        
        {menu.map((item) => (
          <NavLink
            key={item.ruta}
            to={item.ruta}
            className={linkClass}
          >
            <item.icono size={20} />
            <span>{item.nombre}</span>
          </NavLink>
        ))}

      </nav>
    </aside>
  );
}

export default Sidebar;