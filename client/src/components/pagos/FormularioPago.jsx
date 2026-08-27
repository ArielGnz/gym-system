import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const FormularioPago = ({
    fechaPago,
    setFechaPago,
    fechaVencimiento,
    setFechaVencimiento,
    importe,
    setImporte,
    estado,
    setEstado,
    socioId,
    setSocioId,
    planId,
    setPlanId,
    socios,
    planes,
    guardarPago
}) => {
    
    const opcionesSocios = socios.map((socio) => ({
        id: socio.id,
        nombre: `${socio.nombre} ${socio.apellido}`,
    }) );

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">

            <h2 className="text-xl font-bold mb-4"> Registrar Pago </h2>

            <Select
                label="Socio"
                value={socioId}
                onChange={(e) => setSocioId(e.target.value)}
                options={opcionesSocios}
            >

            </Select>

        </div>
    )
}