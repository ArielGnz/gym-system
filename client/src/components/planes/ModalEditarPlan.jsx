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
            
        </Modal>
    )

}