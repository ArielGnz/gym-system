
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useAsistencias } from "../hooks/useAsistencias";
import { useSocios } from "../hooks/useSocios";
import {
    FaClipboardCheck,
    FaSearch,
    FaTrash,
    FaUsers,
    FaClock,
} from "react-icons/fa";

function Asistencias() {
    const {
        asistencias,
        cargando,
        error,
        obtenerAsistencias,
        registrarAsistencia,
        eliminarAsistencia,
    } = useAsistencias();

    const { socios, obtenerSocios } = useSocios();

    const [socioId, setSocioId] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [fechaFiltro, setFechaFiltro] = useState("");

    useEffect(() => {
        obtenerAsistencias();
        obtenerSocios();
    }, []);

    const registrarEntrada = async (e) => {
        e.preventDefault();

        if (!socioId) return;

        const resultado = await registrarAsistencia({
            socioId: Number(socioId),
        });

        if (resultado) {
            setSocioId("");
        }
    };

    const confirmarEliminacion = async (id) => {
        if (window.confirm("¿Querés eliminar esta asistencia?")) {
            await eliminarAsistencia(id);
        }
    };

    const asistenciasFiltradas = asistencias.filter((asistencia) => {
        const nombreSocio = `${asistencia.Socio?.nombre || ""} ${
            asistencia.Socio?.apellido || ""
        }`.toLowerCase();

        const coincideNombre = nombreSocio.includes(
            busqueda.toLowerCase()
        );

        const coincideFecha =
            !fechaFiltro || asistencia.fecha === fechaFiltro;

        return coincideNombre && coincideFecha;
    });

    const fechaHoy = new Date();
    const hoy = [
        fechaHoy.getFullYear(),
        String(fechaHoy.getMonth() + 1).padStart(2, "0"),
        String(fechaHoy.getDate()).padStart(2, "0"),
    ].join("-");

    const asistenciasHoy = asistencias.filter(
        (asistencia) => asistencia.fecha === hoy
    ).length;

    return (
        <Layout>
            <div className="space-y-6">
                {/* Encabezado */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Control de asistencias
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Registrá las entradas y consultá el historial de los socios.
                    </p>
                </div>

                {/* Resumen */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                        <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                            <FaUsers size={22} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                Asistencias de hoy
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                                {asistenciasHoy}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                        <div className="rounded-lg bg-green-100 p-3 text-green-600">
                            <FaClipboardCheck size={22} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">
                                Registros encontrados
                            </p>
                            <p className="text-2xl font-bold text-gray-800">
                                {asistenciasFiltradas.length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Registrar asistencia */}
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">
                        Registrar entrada
                    </h2>

                    <form
                        onSubmit={registrarEntrada}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <select
                            value={socioId}
                            onChange={(e) => setSocioId(e.target.value)}
                            required
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">Seleccioná un socio</option>

                            {socios.map((socio) => (
                                <option key={socio.id} value={socio.id}>
                                    {socio.apellido}, {socio.nombre}
                                </option>
                            ))}
                        </select>

                        <button
                            type="submit"
                            disabled={!socioId}
                            className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <FaClipboardCheck />
                            Registrar entrada
                        </button>
                    </form>

                    {socios.length === 0 && (
                        <p className="mt-3 text-sm text-amber-600">
                            No hay socios cargados para registrar asistencias.
                        </p>
                    )}

                    {error && (
                        <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                            {error}
                        </p>
                    )}
                </div>

                {/* Historial */}
                <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-100 p-5 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Historial de asistencias
                        </h2>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    value={busqueda}
                                    onChange={(e) => setBusqueda(e.target.value)}
                                    placeholder="Buscar socio..."
                                    className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 outline-none focus:border-blue-500 sm:w-52"
                                />
                            </div>

                            <input
                                type="date"
                                value={fechaFiltro}
                                onChange={(e) => setFechaFiltro(e.target.value)}
                                className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {cargando ? (
                        <p className="p-8 text-center text-gray-500">
                            Cargando asistencias...
                        </p>
                    ) : asistenciasFiltradas.length === 0 ? (
                        <div className="p-10 text-center">
                            <FaClipboardCheck className="mx-auto mb-3 text-4xl text-gray-300" />
                            <p className="font-medium text-gray-600">
                                No se encontraron asistencias
                            </p>
                            <p className="mt-1 text-sm text-gray-400">
                                Registrá una entrada o modificá los filtros.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-500">
                                    <tr>
                                        <th className="px-5 py-4 font-medium">Socio</th>
                                        <th className="px-5 py-4 font-medium">Fecha</th>
                                        <th className="px-5 py-4 font-medium">Hora</th>
                                        <th className="px-5 py-4 text-right font-medium">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {asistenciasFiltradas.map((asistencia) => (
                                        <tr
                                            key={asistencia.id}
                                            className="transition hover:bg-gray-50"
                                        >
                                            <td className="px-5 py-4">
                                                <p className="font-medium text-gray-800">
                                                    {asistencia.Socio?.apellido},{" "}
                                                    {asistencia.Socio?.nombre}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    ID: {asistencia.socioId}
                                                </p>
                                            </td>

                                            <td className="px-5 py-4 text-gray-600">
                                                {asistencia.fecha
                                                    ? asistencia.fecha.split("-").reverse().join("/")
                                                    : "-"}
                                            </td>

                                            <td className="px-5 py-4 text-gray-600">
                                                <span className="inline-flex items-center gap-2">
                                                    <FaClock className="text-gray-400" />
                                                    {asistencia.hora
                                                        ? String(asistencia.hora).slice(0, 5)
                                                        : "-"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        confirmarEliminacion(asistencia.id)
                                                    }
                                                    title="Eliminar asistencia"
                                                    className="rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-700"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Asistencias;
