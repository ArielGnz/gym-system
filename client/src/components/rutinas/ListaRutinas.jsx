import RutinaCard from "./RutinaCard";

const ListaRutinas = ({
    rutinas,
    eliminarRutina,
    setRutinaEditando,
}) => {

    return (
        <div>

            <h2 className="text-xl font-bold mb-4">
                Lista de Rutinas
            </h2>

            {rutinas.length === 0 ? (
                <p className="text-gray-500">
                    No hay rutinas registradas.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {rutinas.map((rutina) => (
                        <RutinaCard
                            key={rutina.id}
                            rutina={rutina}
                            eliminarRutina={eliminarRutina}
                            setRutinaEditando={setRutinaEditando}
                        />
                    ))}

                </div>
            )}

        </div>
    );
};

export default ListaRutinas;