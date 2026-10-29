
import {
  FaBuilding,
  FaIdCard,
  FaPhone,
  FaUser,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import Card from "../common/Card";
import Button from "../common/Button";

function SocioCard({ socio, eliminarSocio, setSocioEditando }) {
  return (
    <Card>
      <div className="flex h-full flex-col">
        {/* Encabezado */}
        <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FaUser size={19} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-slate-800">
              {socio.nombre} {socio.apellido}
            </h3>
            <p className="text-xs text-slate-400">
              Socio registrado
            </p>
          </div>
        </div>

        {/* Información */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-3 text-sm">
            <FaIdCard className="shrink-0 text-slate-400" />
            <span className="text-slate-500">DNI:</span>
            <span className="font-medium text-slate-700">
              {socio.dni || "No informado"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <FaPhone className="shrink-0 text-slate-400" />
            <span className="text-slate-500">Teléfono:</span>
            <span className="font-medium text-slate-700">
              {socio.telefono || "No informado"}
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <FaBuilding className="shrink-0 text-slate-400" />
            <span className="text-slate-500">Sucursal:</span>
            <span className="font-medium text-slate-700">
              {socio.Sucursal?.nombre || "Sin sucursal"}
            </span>
          </div>
        </div>

        {/* Acciones */}
        <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
          <Button
            onClick={() => setSocioEditando(socio)}
            variant="warning"
            className="flex-1"
          >
            <FaEdit size={13} />
            Editar
          </Button>

          <Button
            onClick={() => eliminarSocio(socio.id)}
            variant="danger"
            className="flex-1"
          >
            <FaTrash size={13} />
            Eliminar
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default SocioCard;
