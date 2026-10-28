
import { FaRegCalendarAlt, FaDumbbell } from "react-icons/fa";

const WelcomeCard = () => {
  const fecha = new Date();

  const fechaFormateada = fecha.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* Detalle decorativo */}
      <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-blue-50" />
      <div className="absolute -right-2 -top-6 h-28 w-28 rounded-full bg-blue-100/60" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm sm:h-14 sm:w-14">
            <FaDumbbell size={23} />
          </div>

          <div>
            <p className="mb-1 text-sm font-semibold text-blue-600">
              FUNCIONAL TRAINING
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
              ¡Bienvenido!
            </h1>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Administrá tu gimnasio desde el panel principal.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:self-center">
          <FaRegCalendarAlt className="shrink-0 text-lg text-blue-600" />

          <div>
            <p className="text-xs font-medium text-slate-500">
              Hoy
            </p>

            <p className="mt-0.5 text-sm font-semibold capitalize text-slate-700">
              {fechaFormateada}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;
