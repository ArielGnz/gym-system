import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

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
  sucursalId,
  setSucursalId,
  sucusales,
}) {
  return (
    <div>
      <h2>Nuevo Socio</h2>

      <Input
        label="Nombre"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <br />
      <br />

      <Input
        label="Apellido"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <br />
      <br />

      <Input
        label="DNI"
        placeholder="DNI"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />

      <br />
      <br />

      <Input
        label="Teléfono"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <Select 
        value={sucursalId}
        onChange={(e) => setSucursalId(e.target.value)}
      >
        <option value=""> Seleccione una sucursal </option>
        {sucusales.map((sucursal) => (
          <option
            key={sucursalId}
            value={sucursalId}
          >
            {sucursal.nombre}
          </option>
        ) )}
      </Select>

      <br />
      <br />

      <Button onClick={guardarSocio}>
        Guardar Socio
      </Button>
    </div>
  );
}

export default FormularioSocio;