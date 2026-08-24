import { useEffe, useState } from "react";
import Layout from "../components/layout/Layout";
import { usePagos } from "../hooks/usePagos";
import { useSocios } from "../hooks/useSocios";
import { usePlanes } from "../hooks/usePlanes";
import { useEffect } from "react";

const Pagos = () => {
    const {
        pagos,
        obtenerPagos,
        guardarPago,
        eliminarPago,
        actualizarPago,
    } = usePagos();

    const {
        socios,
        obtenerSocios,
    } = useSocios();

    const {
        planes,
        obtenerPlanes,
    } = usePlanes();

    const [fechaPago, setFechaPago] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");
    const [importe, setImporte] = useState("");
    const [estado, setEstado] = useState("PAGADO");
    const [socio, setSocioId] = useState("");
    const [planId, setPlanId] = useState("");

    useEffect(() =>{
        obtenerPagos();
        obtenerSocios();
        obtenerPlanes();
    }, []);


}