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
        className="border rounded-lg px-3 py-2 w-full"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br />
      <br />

      <input
        className="border rounded-lg px-3 py-2 w-full"
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <br />
      <br />

      <input
        className="border rounded-lg px-3 py-2 w-full"
        type="text"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      <br />
      <br />

      <input
        className="border rounded-lg px-3 py-2 w-full"
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <br />
      <br />

      <button onClick={guardarSocio}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
        Guardar Socio
      </button>
    </div>
  );
}

export default FormularioSocio;