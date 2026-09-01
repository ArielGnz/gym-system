import { useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const ModalEditarPago = ({
    pago,
    setPagoEditando,
    actualizarPago,
    socios,
    planes,
}) => {

    const [fechaPago, setFechaPago] = usetState(pago.fechaPago);
    const [fechaVencimiento, setFechaVencimiento] = useState(pago.fechaVencimiento);
    const [importe, setImporte] = useState(pago.importe);
    const [estado, setEstado] = useState(pago.estado);
    const [socioId, setSocioId] = useState(pago.socioId);
    const [planId, setPlanId] = usestate(pago.planId);

    const opcionesSocios = socios.map((socio) => ({
        id: socio.id,
        nombre: `${socio.nombre} ${socio.apellido}`
    }));

    const handleActualizar = async () => {
        await actualizarPago(pago.id, {
            fechaPago,
            fechaVencimiento,
            importe,
            estado,
            socioId,
            planId,
        });

        setPagoEditando(null);
    }

    


}