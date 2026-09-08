import Input from "../common/Input";
import Button from "../common/Button";

const FormularioSucursal = ({
    nombre,
    setNombre,
    direccion,
    setDireccion,
    telefono,
    setTelefono,
    guardarSucursal,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">

            <h2 className="text-xl font-bold mb-4">
                Nueva Sucursal
            </h2>

            <Input
                label="Nombre"
                placeholder="Sucursal Centro"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <Input
                label="Dirección"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />

            <Input
                label="Teléfono"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <Button onClick={guardarSucursal}>
                Guardar Sucursal
            </Button>

        </div>
    );
};

export default FormularioSucursal;