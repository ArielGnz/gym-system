import { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import FormularioPlan from "../components/planes/FormularioPlan";
import ListaPlanes from "../components/planes/ListaPlanes";
import ModalEditarPlan from "../components/planes/ModalEditarPlan";
import { usePlanes } from "../hooks/usePlanes";
import { useSucursales } from "../hooks/useSucursales";

const Planes = () => {

    const {
        planes,
        obtenerPlanes,
        guardarPlan,
        eliminarPlan,
        actualizarPlan
    } = usePlanes();

    const { sucursales, obtenerSucursales } = useSucursales();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [duracionDias, setDuracionDias] = useState("");
    const [sucursalId, setSucursalId] = useState("");

    const handleGuardarPlan = async () => {
        await guardarPlan({
            nombre,
            descripcion,
            precio,
            duracionDias,
            sucursalId
        });

        setNombre("");
        setDescripcion("");
        setPrecio("");
        setDuracionDias("");
        setSucursalId("");
    }

    return (
        <Layout>

            <h1 className="text-3xl font-bold mb-6">
                Planes
            </h1>

            <FormularioPlan 
                nombre={nombre}
                setNombre={setNombre}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                precio={precio}
                setPrecio={setPrecio}
                duracionDias={duracionDias}
                setDuracionDias={setDuracionDias}
                sucursalId={sucursalId}
                setSucursalId={setSucursalId}
                sucursales={sucursales}
                handleGuardarPlan={handleGuardarPlan}
            />

            <ListaPlanes 
                planes={planes} 
                eliminarPlan={eliminarPlan}
                setPlanEditando={setPlanEditando}
            />

            {planEditando && (
                <ModalEditarPlan 
                    plan={planEditando}
                    setPlanEditando={setPlanEditando}
                    actualizarPlan={actualizarPlan}
                    sucursales={sucursales}
                />
            )}
                            
        </Layout>
    );

}