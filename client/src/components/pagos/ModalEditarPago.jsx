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
    

}