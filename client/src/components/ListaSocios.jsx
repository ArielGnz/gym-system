import SocioCard from "./SocioCard";

function ListaSocios({ socios }) {
  return (
    <div>
      <h2>Lista de Socios</h2>

      {socios.map((socio) => (
        <SocioCard
         key={socio.id}
         socio={socio}
        />
))}
    </div>
  );
}

export default ListaSocios;