import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const FormularioPlan = ({
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
    precio,
    setPrecio,
    duracionDias,
    setDuracionDias,
    sucursalId,
    setSucursalId,
    sucursales,
    guardarPlan,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
                Nuevo Plan
            </h2>

            <Input
                label="Nombre"
                placeholder="Plan Mensual"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <Input 
                label="Descripción"
                placeholder="Descripción del plan"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            <Input 
                label="Precio"
                type="number"
                placeholder="Precio del plan"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <Input 
                label="Duración (días)"
                placeholder="Duración del plan en días"
                value={duracionDias}
                onChange={(e) => setDuracionDias(e.target.value)}
            />

            <Select
                label="Sucursal"
                value={sucursalId}
                onChange={(e) => setSucursalId(e.target.value)}
                options={sucursales} 
            />

            <Button onClick={guardarPlan}>
                Guardar Plan
            </Button>

        </div>
    )
}

export default FormularioPlan;