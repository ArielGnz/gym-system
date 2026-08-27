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

    
}