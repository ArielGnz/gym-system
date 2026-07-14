import SocioCard from "./SocioCard";

function ListaSocios({ socios, eliminarSocio }) {
  return (
    <div>
      <h2>Lista de Socios</h2>

      {socios.map((socio) => (
        <SocioCard
         key={socio.id}
         socio={socio}
         eliminarSocio={eliminarSocio}
        />
))}
    </div>
  );
}

export default ListaSocios;