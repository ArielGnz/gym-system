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

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4"> Registrar Pago </h2>

                {/* Socio */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Socio</label>

                    <select
                        className="w-full border rounded-lg px-3 py-2"
                        value={socioId}
                        onChange={(e) => setSocioId(e.target.value)}
                    >
                        <option value="">Seleccione una Opcion</option>
                        {socios.map((socio) =>{
                            <option 
                                value={socio.id}
                                key={socio.id}                            
                            >
                                {socio.nombre} {socio.apellido}
                            </option>
                        })}

                    </select>
                </div>

                {/* Plan */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Plan</label>

                    <select 
                        value={planId}
                        onChange={(e) => setPlanId(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    >
                        <option value="">Seleccionar un Plan</option>

                        {planes.map((plan) =>(
                            <option
                                key={plan.id}
                                value={plan.id}
                            >
                                {plan.nombre}
                            </option>
                        ))

                        }

                    </select>
                </div>

                {/* Fecha de Pago */}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Fecha de Pago</label>

                    <input 
                        type="date"
                        value={fechaPago}
                        onChange={(e) => setFechaPago(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                </div>

                {/* Fecha de Vencimiento */}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Fecha de Vencimiento</label>

                    <input 
                        type="date"
                        value={fechaVencimiento}
                        onChange={(e) => setFechaVencimiento(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2" 
                    />

                    {/* Importe */}

                </div>

            </div>

        </Layout>
    )

}