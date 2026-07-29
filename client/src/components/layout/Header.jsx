
import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">

            <div>
                <h1 className="text-2xl font-bold">
                  Sistema de Gestion
                </h1>
            </div>

            <div className="flex items-center gap-6">

                <button className="relative text-2xl text-slate-600 hover:text-blue-600 transition-colors cursor-pointer">

                    <FaBell />

                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        3
                    </span>

                </button>

                <div className="flex items-center gap-2">

                    <FaUserCircle className="text-3xl text-slate-600" />

                    <div>

                        <p className="font-semibold">
                            Ariel
                        </p>

                        <p className="text-sm text-gray-500">
                            Administrador
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;