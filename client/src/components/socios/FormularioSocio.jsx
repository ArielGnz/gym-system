
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { FaUserPlus } from "react-icons/fa";

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
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
          <FaUserPlus size={18} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Nuevo socio
          </h2>
          <p className="text-sm text-slate-500">
            Completá los datos para registrar un socio.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          label="Nombre"
          placeholder="Ingresá el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <Input
          label="Apellido"
          placeholder="Ingresá el apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />

        <Input
          label="DNI"
          placeholder="Ingresá el DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <Input
          label="Teléfono"
          placeholder="Ingresá el teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <Select
          label="Sucursal"
          value={sucursalId}
          onChange={(e) => setSucursalId(e.target.value)}
        >
          <option value="">Seleccioná una sucursal</option>

          {sucusales.map((sucursal) => (
            <option key={sucursal.id} value={sucursal.id}>
              {sucursal.nombre}
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-4 flex justify-end">
        <Button onClick={guardarSocio}>
          Guardar socio
        </Button>
      </div>
    </div>
  );
}

export default FormularioSocio;
