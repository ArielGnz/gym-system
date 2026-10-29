
import SocioCard from "./SocioCard";

function ListaSocios({ socios, eliminarSocio, setSocioEditando }) {
  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-800">
          Listado de socios
        </h2>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {socios.length} {socios.length === 1 ? "socio" : "socios"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {socios.map((socio) => (
          <SocioCard
            key={socio.id}
            socio={socio}
            eliminarSocio={eliminarSocio}
            setSocioEditando={setSocioEditando}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaSocios;
