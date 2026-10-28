
const StatCard = ({ titulo, valor, icono, color }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">
            {titulo}
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            {valor ?? 0}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-sm sm:h-14 sm:w-14 sm:text-2xl ${color}`}
        >
          {icono}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
