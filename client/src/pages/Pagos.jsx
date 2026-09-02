import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import FormularioPago from "../components/pagos/FormularioPago";
import ListaPagos from "../components/pagos/ListaPagos";
import ModalEditarPago from "../components/pagos/ModalEditarPago";
import { usePagos } from "../hooks/usePagos";
import { useSocios } from "../hooks/useSocios";
import { usePlanes } from "../hooks/usePlanes";

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
    const [socioId, setSocioId] = useState("");
    const [planId, setPlanId] = useState("");
    const [pagoEditando, setPagoEditando] = usetState(null);

    useEffect(() =>{
        obtenerPagos();
        obtenerSocios();
        obtenerPlanes();
    }, []);

    const handleGuardarPago = async () => {
        await guardarPago({
            fechaPago,
            fechaVencimiento,
            importe,
            estado,
            socioId,
            planId,
        });

        setFechaPago("");
        setFechaVencimiento("");
        setImporte("");
        setEstado("PAGADO");
        setSocioId("");
        setPlanId("");
    }

    return (
        <Layout>

            <h1 className="text-3xl font-bold mb-6"> Pagos </h1>

            <FormularioPago 
                fechaPago={fechaPago}
                setFechaPago={setFechaPago}
                fechaVencimiento={fechaVencimiento}
                setFechaVencimiento={setFechaVencimiento}
                importe={importe}
                setImporte={setImporte}
                estado={estado}
                setEstado={setEstado}
                socioId={socioId}
                setSocioId={setSocioId}
                planId={planId}
                setPlanId={setPlanId}
                socios={socios}
                planes={planes}
                guardarPago={handleGuardarPago}
            />

            <ListaPagos 
                pagos={pagos}
                eliminarPago={eliminarPago}
                setPagoEditando={setPagoEditando}
            />

            {pagoEditando && (
                <ModalEditarPago 
                    pago={pagoEditando}
                    setPagoEditando={setPagoEditando}
                    actualizarPago={actualizarPago}
                    socios={socios}
                    planes={planes}
                />
            )}

        </Layout>
    );

}

export default Pagos;