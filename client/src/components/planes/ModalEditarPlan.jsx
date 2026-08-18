import { useState, useEffect } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import Modal from "../common/Modal";

const ModalEditarPlan = ({
    plan, 
    setPlanEditando, 
    actualizarPlan, 
    sucursal}) => {

    const [nombre, setNombre] = useState(plan.nombre);
    const [descripcion, setDescripcion] = useState(plan.descripcion);
    const [precio, setPrecio] = useState(plan.precio);
    const [duracionDias, setDuracionDias] = useState(plan.duracionDias);
    const [sucursalId, setSucursalId] = useState(plan.sucursalId); 
    
    const handleActualizar = async () => {
        await actualizarPlan(plan.id, {
            nombre,
            descripcion,
            precio,
            duracionDias,
            sucursalId
        });

        setPlanEditando(null);
    };

    return (
        <Modal>

            <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">Editar Plan</h2>

                <button onClick={() => setPlanEditando(null)}
                        className="text-gray-500 text-xl"> ✕
                
                </button>
                
            </div>

            <Input 
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <Input
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                
            />

            <Input
                label="Precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <Input
                label="Duración (días)"
                type="number"
                value={duracionDias}
                onChange={(e) => setDuracionDias(e.target.value)}
            />

            <Select
                label="Sucursal"
                value={sucursalId}
                onChange={(e) => setSucursalId(e.target.value)}
                options={sucursal}
            />

            <Button onClick={handleActualizar}>
                Actualizar Plan
            </Button>
        
        </Modal>
    );

}

export default ModalEditarPlan;