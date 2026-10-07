import Card from "../common/Card";
import Button from "../common/Button";

const EjercicioCard = ({
    ejercicio,
    eliminarEjercicio,
    setEjercicioEditando,
    rutinaId,
}) => {

    return (
        <Card>

            <div className="flex justify-between items-start">

                <div>
                    <h4 className="text-lg font-bold">
                        {ejercicio.nombre}
                    </h4>

                    <p className="text-gray-600 mt-2">
                        {ejercicio.series} series ×{" "}
                        {ejercicio.repeticiones} repeticiones
                    </p>

                    <p className="text-gray-600">
                        Peso: {ejercicio.peso || 0} kg
                    </p>

                    <p className="text-gray-600">
                        Descanso: {ejercicio.descanso || 0} segundos
                    </p>
                </div>

            </div>

            <div className="flex gap-2 mt-4">

                <Button
                    variant="warning"
                    onClick={() => setEjercicioEditando(ejercicio)}
                >
                    Editar
                </Button>

                <Button
                    variant="danger"
                    onClick={() =>
                        eliminarEjercicio(
                            ejercicio.id,
                            rutinaId
                        )
                    }
                >
                    Eliminar
                </Button>

            </div>

        </Card>
    );
};

export default EjercicioCard;