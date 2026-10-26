
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-4 border-b border-slate-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
      {/* Título */}
      <div className="min-w-0">
        <h1 className="truncate text-lg font-bold tracking-tight text-slate-800 sm:text-xl">
          Panel de administración
        </h1>

        <p className="mt-1 hidden text-sm text-slate-500 sm:block">
          Gestioná tu gimnasio desde un solo lugar
        </p>
      </div>

      {/* Acciones y perfil */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          aria-label="Notificaciones"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-blue-600"
        >
          <FaBell size={19} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
        </button>

        <div className="h-9 w-px bg-slate-200" />

        <div className="flex items-center gap-2.5 sm:gap-3">
          <FaUserCircle className="shrink-0 text-3xl text-slate-400 sm:text-4xl" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">
              Ariel
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              Administrador
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
