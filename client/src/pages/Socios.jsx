
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaSearch,
  FaUserPlus,
  FaBuilding,
} from "react-icons/fa";

import { useSocios } from "../hooks/useSocios";
import { useSucursales } from "../hooks/useSucursales";
import FormularioSocio from "../components/socios/FormularioSocio";
import ListaSocios from "../components/socios/ListaSocios";
import ModalEditarSocio from "../components/socios/ModalEditarSocio";
import Layout from "../components/layout/Layout";

function Socios() {
  const [busqueda, setBusqueda] = useState("");
  const [socioEditando, setSocioEditando] = useState(null);
  const [sucursalId, setSucursalId] = useState("");

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");

  const {
    socios,
    obtenerSocios,
    guardarSocio,
    eliminarSocio,
  } = useSocios();

  const {
    sucursales,
    obtenerSucursales,
  } = useSucursales();

  useEffect(() => {
    obtenerSocios();
    obtenerSucursales();
  }, []);

  const handleGuardarSocio = async () => {
    await guardarSocio({
      nombre,
      apellido,
      dni,
      telefono,
      sucursalId,
    });

    setNombre("");
    setApellido("");
    setDni("");
    setTelefono("");
    setSucursalId("");
  };

  const textoBusqueda = busqueda.trim().toLocaleLowerCase();

  const sociosFiltrados = socios.filter((socio) => {
    return (
      (socio.nombre || "").toLocaleLowerCase().includes(textoBusqueda) ||
      (socio.apellido || "").toLocaleLowerCase().includes(textoBusqueda) ||
      String(socio.dni || "").toLocaleLowerCase().includes(textoBusqueda)
    );
  });

  return (
    <Layout>
      <div className="space-y-7">

        {/* Encabezado */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
              <FaUsers />
              Administración
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              Gestión de socios
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Administrá los socios registrados en tu gimnasio.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaUsers size={19} />
            </div>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Total de socios
              </p>

              <p className="text-2xl font-bold text-slate-800">
                {socios.length}
              </p>
            </div>
          </div>
        </header>

        {/* Formulario */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FaUserPlus size={18} />
            </div>

            <div>
              <h2 className="font-semibold text-slate-800">
                Registrar nuevo socio
              </h2>

              <p className="text-sm text-slate-500">
                Completá los datos para dar de alta un socio.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <FormularioSocio
              nombre={nombre}
              setNombre={setNombre}
              apellido={apellido}
              setApellido={setApellido}
              dni={dni}
              setDni={setDni}
              telefono={telefono}
              setTelefono={setTelefono}
              sucusales={sucursales}
              sucursalId={sucursalId}
              setSucursalId={setSucursalId}
              guardarSocio={handleGuardarSocio}
            />
          </div>
        </section>

        {/* Listado */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Socios registrados
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Consultá, buscá y administrá los socios.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Buscador */}
              <div className="relative w-full sm:w-80">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Buscar por nombre, apellido o DNI..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {busqueda && (
                  <button
                    type="button"
                    onClick={() => setBusqueda("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {/* Cantidad de resultados */}
              <div className="flex shrink-0 items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm text-slate-600">
                <FaUsers className="text-slate-400" />

                <span>
                  <strong className="text-slate-800">
                    {sociosFiltrados.length}
                  </strong>{" "}
                  {sociosFiltrados.length === 1 ? "resultado" : "resultados"}
                </span>
              </div>
            </div>
          </div>

          {/* Contenido del listado */}
          {sociosFiltrados.length === 0 ? (
            <div className="flex flex-col items-center px-5 py-14 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                {busqueda ? (
                  <FaSearch size={24} />
                ) : (
                  <FaBuilding size={24} />
                )}
              </div>

              <h3 className="font-semibold text-slate-700">
                {busqueda
                  ? "No encontramos socios"
                  : "Todavía no hay socios registrados"}
              </h3>

              <p className="mt-2 max-w-md text-sm text-slate-500">
                {busqueda
                  ? "Probá con otro nombre, apellido o número de DNI."
                  : "Usá el formulario de arriba para registrar el primer socio."}
              </p>

              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda("")}
                  className="mt-4 rounded-lg px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              <ListaSocios
                socios={sociosFiltrados}
                eliminarSocio={eliminarSocio}
                setSocioEditando={setSocioEditando}
              />
            </div>
          )}
        </section>

        {/* Modal de edición */}
        {socioEditando && (
          <ModalEditarSocio
            socio={socioEditando}
            setSocioEditando={setSocioEditando}
            obtenerSocios={obtenerSocios}
            sucursales={sucursales}
          />
        )}

      </div>
    </Layout>
  );
}

export default Socios;
