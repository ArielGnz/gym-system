function ListaSocios({ socios }) {
  return (
    <div>
      <h2>Lista de Socios</h2>

      {socios.map((socio) => (
        <div key={socio.id}>
          <h3>
            {socio.nombre} {socio.apellido}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default ListaSocios;