import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const FormularioRutina = ({
    nombre,
    setNombre,
    descripcion,
    setDescripcion,
    nivel,
    setNivel,
    diasPorSemana,
    setDiasPorSemana,
    socioId,
    setSocioId,
    socios,
    guardarRutina,
}) => {

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

        await guardarRutina();

        setNombre("");
        setDescripcion("");
        setNivel("Principiante");
        setDiasPorSemana("");
        setSocioId("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
            <h2 className="text-xl font-bold mb-6">
                Nueva Rutina
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                    label="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Fuerza Inicial"
                />

                <Select
                    label="Socio"
                    value={socioId}
                    onChange={(e) => setSocioId(e.target.value)}
                    options={opcionesSocios}
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
                    onChange={(e) => setDiasPorSemana(e.target.value)}
                    placeholder="Ej: 3"
                />

                <div className="md:col-span-2">
                    <Input
                        label="Descripción"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        placeholder="Descripción de la rutina"
                    />
                </div>

            </div>

            <div className="mt-6">
                <Button type="submit">
                    Guardar Rutina
                </Button>
            </div>
        </form>
    );
};

export default FormularioRutina;