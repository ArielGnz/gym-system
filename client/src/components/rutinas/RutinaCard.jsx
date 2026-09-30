import Card from "../common/Card";
import Button from "../common/Button";

const RutinaCard = ({
    rutina,
    eliminarRutina,
    setRutinaEditando,
}) => {

    return (
        <Card>

            <h3 className="text-xl font-bold mb-2">
                {rutina.nombre}
            </h3>

            <p className="text-gray-600 mb-2">
                {rutina.descripcion || "Sin descripción"}
            </p>

            <p>
                <span className="font-semibold">Socio:</span>{" "}
                {rutina.Socio?.nombre} {rutina.Socio?.apellido}
            </p>

            <p>
                <span className="font-semibold">Nivel:</span>{" "}
                {rutina.nivel}
            </p>

            <p>
                <span className="font-semibold">
                    Días por semana:
                </span>{" "}
                {rutina.diasPorSemana}
            </p>

            <div className="flex gap-2 mt-4">

                <Button
                    onClick={() => setRutinaEditando(rutina)}
                    variant="warning"
                >
                    Editar
                </Button>

                <Button
                    onClick={() => eliminarRutina(rutina.id)}
                    variant="danger"
                >
                    Eliminar
                </Button>

            </div>

        </Card>
    );
};

export default RutinaCard;