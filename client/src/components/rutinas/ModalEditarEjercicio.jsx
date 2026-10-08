import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const ModalEditarEjercicio = ({
    ejercicio,
    setEjercicioEditando,
    actualizarEjercicio,
}) => {

    const [nombre, setNombre] = useState(
        ejercicio.nombre || ""
    );

    const [series, setSeries] = useState(
        ejercicio.series || ""
    );

    const [repeticiones, setRepeticiones] = useState(
        ejercicio.repeticiones || ""
    );

    const [peso, setPeso] = useState(
        ejercicio.peso || ""
    );

    const [descanso, setDescanso] = useState(
        ejercicio.descanso || ""
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        await actualizarEjercicio(ejercicio.id, {
            nombre,
            series,
            repeticiones,
            peso,
            descanso,
            rutinaId: ejercicio.rutinaId,
        });

        setEjercicioEditando(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg">

                <h2 className="text-2xl font-bold mb-6">
                    Editar ejercicio
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="space-y-4">

                        <Input
                            label="Ejercicio"
                            value={nombre}
                            onChange={(e) =>
                                setNombre(e.target.value)
                            }
                        />

                        <Input
                            label="Series"
                            type="number"
                            min="1"
                            value={series}
                            onChange={(e) =>
                                setSeries(e.target.value)
                            }
                        />

                        <Input
                            label="Repeticiones"
                            type="number"
                            min="1"
                            value={repeticiones}
                            onChange={(e) =>
                                setRepeticiones(e.target.value)
                            }
                        />

                        <Input
                            label="Peso (kg)"
                            type="number"
                            min="0"
                            step="0.5"
                            value={peso}
                            onChange={(e) =>
                                setPeso(e.target.value)
                            }
                        />

                        <Input
                            label="Descanso (seg)"
                            type="number"
                            min="0"
                            value={descanso}
                            onChange={(e) =>
                                setDescanso(e.target.value)
                            }
                        />

                    </div>

                    <div className="flex gap-2 mt-6">

                        <Button type="submit">
                            Guardar cambios
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() =>
                                setEjercicioEditando(null)
                            }
                        >
                            Cancelar
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default ModalEditarEjercicio;