import { useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import Modal from "../common/Modal";

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

    return (
        <div>
            <Modal>
                <div className="flex justify-end">
                    <button 
                        onClick={() => setPagoEditando(null)}
                        className="text-gray-500 text-xl"
                    >
                        X
                    </button>
                
                </div>

                <h2 className="text-2xl font-bold mb-4">Editar Pago</h2>

                <Select
                    label="Socio"
                    value={socioId}
                    onChange={(e) => setSocioId(e.target.value)}
                    options={opcionesSocios}
                />

                <Select
                    label="Plan"
                    value={planId}
                    onChange={(e) => setPlanId(e.target.value)}
                    options={planes}
                />

                <Input
                    label="Fecha de Pago"
                    type="date"
                    value={fechaPago}
                    onChange={(e) => setFechaPago(e.target.value)}
                />

                <Input
                    label="Fecha de Vencimiento"
                    type="date"
                    value={fechaVencimiento}
                    onChange={(e) => setFechaVencimiento(e.target.value)}
                />

                <Input
                    label="importe"
                    date="number"
                    value={importe}
                    onChange={(e => setImporte(e.target.value))}
                />

                <Select 
                    label="Estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    options={[
                        {id: "PAGADO", nombre: "PAGADO"},
                        {id: "VENCIDO", nombre: "VENCIDO"}
                    ]}
                />

                <Button onClick={handleActualizar}>Actualizar Pago</Button>

            </Modal>
        </div>
    )
}

export default ModalEditarPago;