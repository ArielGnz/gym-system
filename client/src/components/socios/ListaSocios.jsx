import SocioCard from "./SocioCard";

function ListaSocios({ socios, eliminarSocio, setSocioEditando }) {
  return (
    <div>
      <h2>Lista de Socios</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

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