import Button from "../common/Button";
import Card from "../common/Card";

const PagoCard = ({pago, eliminarPago, setPagoEditando}) => {
    return(
        <Card>
            <h3 className="font-bold text-lg">
                Socio: {pago.Socio?.nombre} {pago.Socio?.apellido}
            </h3>

            <p>Plan: {pago.Plan?.nombre} </p>

            <p>Fecha de Pago: {pago.fechaPago} </p>

            <p>Vencimiento: {pago.fechaVencimiento} </p>

            <p>Importe: ${pago.importe} </p>

            <p>Estado: {pago.estado} </p>

            <div className="mt-3 flex gap-2">
                
                <Button
                    onClick={() => setPagoEditando(pago)}
                    variant="warning"
                >
                    Editar
                </Button>

                <Button
                    onClick={() => eliminarPago(pago.id)}
                    variant="danger"
                >
                    Eliminar
                </Button>

            </div>
        </Card>
    )
}

export default PagoCard;