
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
  FaReceipt,
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

  const formatoFecha = (fecha) => {
    if (!fecha) return "—";

    const fechaTexto = String(fecha).slice(0, 10);
    const partes = fechaTexto.split("-");

    if (partes.length !== 3) return fechaTexto;

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  };

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
      color: "bg-emerald-600",
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
      icono: <FaReceipt />,
      color: "bg-orange-600",
    },
    {
      titulo: "Pagos realizados",
      valor: pagosPagados,
      icono: <FaCheckCircle />,
      color: "bg-teal-600",
    },
  ];

  const estiloEstado = {
    PAGADO: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    PENDIENTE: "bg-amber-50 text-amber-700 ring-amber-600/20",
  };

  return (
    <Layout>
      <div className="space-y-8">
        <WelcomeCard />

        {/* Resumen */}
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Resumen del gimnasio
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Un vistazo al estado actual de tu gimnasio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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

        {/* Últimos pagos */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaReceipt size={18} />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                Últimos pagos registrados
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Consulta los movimientos más recientes.
              </p>
            </div>
          </div>

          {ultimosPagos.length === 0 ? (
            <div className="flex flex-col items-center px-5 py-12 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <FaReceipt size={20} />
              </div>

              <p className="font-medium text-slate-700">
                Todavía no hay pagos registrados
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Cuando registres pagos, aparecerán aquí.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold sm:px-6">
                      Socio
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Plan
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Fecha
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Importe
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Estado
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {ultimosPagos.map((pago) => (
                    <tr
                      key={pago.id}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      <td className="px-5 py-4 sm:px-6">
                        <span className="font-medium text-slate-800">
                          {pago.Socio
                            ? `${pago.Socio.apellido}, ${pago.Socio.nombre}`
                            : "Socio no disponible"}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {pago.Plan?.nombre || "—"}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                        {formatoFecha(pago.fechaPago)}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-800">
                        {formatoMoneda(pago.importe)}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                            estiloEstado[pago.estado] ??
                            "bg-red-50 text-red-700 ring-red-600/20"
                          }`}
                        >
                          {pago.estado || "SIN ESTADO"}
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
