import Button from "../common/Button";
import Card from "../common/Card";

const SucursalCard = ({
    sucursal,
    eliminarSucursal,
    setSucursalEditando,
}) => {
    return (
        <Card>

            <h3 className="font-bold text-lg">
                {sucursal.nombre}
            </h3>

            <p>Dirección: {sucursal.direccion}</p>

            <p>Teléfono: {sucursal.telefono}</p>

            <div className="mt-3 flex gap-2">

                <Button
                    onClick={() => setSucursalEditando(sucursal)}
                    variant="warning"
                >
                    Editar
                </Button>

                <Button
                    onClick={() => eliminarSucursal(sucursal.id)}
                    variant="danger"
                >
                    Eliminar
                </Button>

            </div>

        </Card>
    );
};

export default SucursalCard;