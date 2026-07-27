import { formatearFecha } from "../../utils/formatearFecha";

function Header() {

  const fechaActual = formatearFecha(new Date());

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Sistema de Gimnasio
      </h1>

      <span className="text-gray-500">
        {fechaActual}
      </span>
    </header>
  );
}

export default Header;