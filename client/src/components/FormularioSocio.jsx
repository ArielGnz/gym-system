function FormularioSocio({
  nombre,
  setNombre,
  apellido,
  setApellido,
  dni,
  setDni,
  telefono,
  setTelefono,
  guardarSocio,
}) {
  return (
    <div>
      <h2>Nuevo Socio</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <br />
      <br />

      <button onClick={guardarSocio}>
        Guardar Socio
      </button>
    </div>
  );
}

export default FormularioSocio;