
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import { useEstadisticas } from "../hooks/useEstadisticas";
import {
    FaUsers,
    FaMoneyBill,
    FaExclamationTriangle,
    FaClock,
    FaCheckCircle,
} from "react-icons/fa";

function Dashboard() {
    const {
        totalSocios,
        pagosDelMes,
        pagosVencidos,
        pagosPorVencer,
        pagosPagados,
        pagosPendientes,
        ultimosPagos,
        obtenerEstadisticas,
    } = useEstadisticas();

    useEffect(() => {
        obtenerEstadisticas();
    }, []);

    const formatoMoneda = (importe) =>
        new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 2,
        }).format(Number(importe) || 0);

    const estadisticas = [
        {
            titulo: "Total de socios",
            valor: totalSocios,
            icono: <FaUsers />,
            color: "bg-blue-600",
        },
        {
            titulo: "Pagos del mes",
            valor: pagosDelMes,
            icono: <FaMoneyBill />,
            color: "bg-green-600",
        },
        {
            titulo: "Cuotas vencidas",
            valor: pagosVencidos,
            icono: <FaExclamationTriangle />,
            color: "bg-red-600",
        },
        {
            titulo: "Por vencer (7 días)",
            valor: pagosPorVencer,
            icono: <FaClock />,
            color: "bg-amber-500",
        },
        {
            titulo: "Pagos pendientes",
            valor: pagosPendientes,
            icono: <FaClock />,
            color: "bg-orange-600",
        },
        {
            titulo: "Pagos realizados",
            valor: pagosPagados,
            icono: <FaCheckCircle />,
            color: "bg-emerald-600",
        },
    ];

    return (
        <Layout>
            <div className="space-y-6">
                <WelcomeCard />

                <section>
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Resumen del gimnasio
                    </h2>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {estadisticas.map((item) => (
                            <StatCard
                                key={item.titulo}
                                titulo={item.titulo}
                                valor={item.valor}
                                icono={item.icono}
                                color={item.color}
                            />
                        ))}
                    </div>
                </section>

                <section className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Últimos pagos registrados
                    </h2>

                    {ultimosPagos.length === 0 ? (
                        <p className="py-6 text-center text-sm text-gray-500">
                            Todavía no hay pagos registrados.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-500">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">
                                            Socio
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Plan
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Fecha
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Importe
                                        </th>
                                        <th className="px-4 py-3 font-medium">
                                            Estado
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {ultimosPagos.map((pago) => (
                                        <tr key={pago.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-gray-700">
                                                {pago.Socio
                                                    ? `${pago.Socio.apellido}, ${pago.Socio.nombre}`
                                                    : "Socio no disponible"}
                                            </td>

                                            <td className="px-4 py-3 text-gray-600">
                                                {pago.Plan?.nombre || "—"}
                                            </td>

                                            <td className="px-4 py-3 text-gray-600">
                                                {pago.fechaPago
                                                    ? String(pago.fechaPago)
                                                        .slice(0, 10)
                                                        .split("-")
                                                        .reverse()
                                                        .join("/")
                                                    : "—"}
                                            </td>

                                            <td className="px-4 py-3 font-medium text-gray-800">
                                                {formatoMoneda(pago.importe)}
                                            </td>

                                            <td className="px-4 py-3">
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                                        pago.estado === "PAGADO"
                                                            ? "bg-green-100 text-green-700"
                                                            : pago.estado === "PENDIENTE"
                                                            ? "bg-amber-100 text-amber-700"
                                                            : "bg-red-100 text-red-700"
                                                    }`}
                                                >
                                                    {pago.estado}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </div>
        </Layout>
    );
}

export default Dashboard;
