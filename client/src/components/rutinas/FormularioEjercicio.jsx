import Input from "../common/Input";
import Button from "../common/Button";

const FormularioEjercicio = ({
    nombre,
    setNombre,
    series,
    setSeries,
    repeticiones,
    setRepeticiones,
    peso,
    setPeso,
    descanso,
    setDescanso,
    guardarEjercicio,
}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        await guardarEjercicio();

        setNombre("");
        setSeries("");
        setRepeticiones("");
        setPeso("");
        setDescanso("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-6 mb-6"
        >

            <h3 className="text-lg font-bold mb-4">
                Agregar ejercicio
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                <Input
                    label="Ejercicio"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Sentadilla"
                />

                <Input
                    label="Series"
                    type="number"
                    min="1"
                    value={series}
                    onChange={(e) => setSeries(e.target.value)}
                />

                <Input
                    label="Repeticiones"
                    type="number"
                    min="1"
                    value={repeticiones}
                    onChange={(e) => setRepeticiones(e.target.value)}
                />

                <Input
                    label="Peso (kg)"
                    type="number"
                    min="0"
                    step="0.5"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />

                <Input
                    label="Descanso (seg)"
                    type="number"
                    min="0"
                    value={descanso}
                    onChange={(e) => setDescanso(e.target.value)}
                />

            </div>

            <div className="mt-4">
                <Button type="submit">
                    Agregar ejercicio
                </Button>
            </div>

        </form>
    );
};

export default FormularioEjercicio;