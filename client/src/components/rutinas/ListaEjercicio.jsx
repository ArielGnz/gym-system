import EjercicioCard from "./EjercicioCard";

const ListaEjercicios = ({
    ejercicios,
    eliminarEjercicio,
    setEjercicioEditando,
    rutinaId,
}) => {

    return (
        <div>

            <h3 className="text-xl font-bold mb-4">
                Ejercicios
            </h3>

            {ejercicios.length === 0 ? (
                <p className="text-gray-500">
                    Esta rutina todavía no tiene ejercicios.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {ejercicios.map((ejercicio) => (
                        <EjercicioCard
                            key={ejercicio.id}
                            ejercicio={ejercicio}
                            eliminarEjercicio={eliminarEjercicio}
                            setEjercicioEditando={
                                setEjercicioEditando
                            }
                            rutinaId={rutinaId}
                        />
                    ))}

                </div>
            )}

        </div>
    );
};

export default ListaEjercicios;