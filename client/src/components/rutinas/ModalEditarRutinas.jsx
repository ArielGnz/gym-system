import { useState } from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const ModalEditarRutina = ({
    rutina,
    setRutinaEditando,
    actualizarRutina,
    socios,
}) => {

    const [nombre, setNombre] = useState(rutina.nombre || "");
    const [descripcion, setDescripcion] = useState(
        rutina.descripcion || ""
    );
    const [nivel, setNivel] = useState(
        rutina.nivel || "Principiante"
    );
    const [diasPorSemana, setDiasPorSemana] = useState(
        rutina.diasPorSemana || ""
    );
    const [socioId, setSocioId] = useState(
        rutina.socioId || ""
    );

    const opcionesSocios = socios.map((socio) => ({
        value: socio.id,
        label: `${socio.nombre} ${socio.apellido}`,
    }));

    const opcionesNivel = [
        { value: "Principiante", label: "Principiante" },
        { value: "Intermedio", label: "Intermedio" },
        { value: "Avanzado", label: "Avanzado" },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        await actualizarRutina(rutina.id, {
            nombre,
            descripcion,
            nivel,
            diasPorSemana,
            socioId,
        });

        setRutinaEditando(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg">

                <h2 className="text-2xl font-bold mb-6">
                    Editar Rutina
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="space-y-4">

                        <Input
                            label="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />

                        <Input
                            label="Descripción"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />

                        <Select
                            label="Nivel"
                            value={nivel}
                            onChange={(e) => setNivel(e.target.value)}
                            options={opcionesNivel}
                        />

                        <Input
                            label="Días por semana"
                            type="number"
                            min="1"
                            max="7"
                            value={diasPorSemana}
                            onChange={(e) =>
                                setDiasPorSemana(e.target.value)
                            }
                        />

                        <Select
                            label="Socio"
                            value={socioId}
                            onChange={(e) => setSocioId(e.target.value)}
                            options={opcionesSocios}
                        />

                    </div>

                    <div className="flex gap-2 mt-6">

                        <Button type="submit">
                            Guardar cambios
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setRutinaEditando(null)}
                        >
                            Cancelar
                        </Button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default ModalEditarRutina;