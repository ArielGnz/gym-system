

const PagoCard = ({pago, eliminarPago, setPagoEditando}) => {
    return(
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h3 className="font-bold text-lg">
                {pago.Socio?.nombre} {pago.Socio?.apellido}
            </h3>

            <p>Plan: {pago.Plan?.nombre} </p>

            <p>Fecha de Pago: {pago.fechaPago} </p>

            <p>Vencimiento: {pago.fechaVencimiento} </p>

            <p>Importe: ${pago.importe} </p>

            <p>Estado: {pago.estado} </p>

            <div className="mt-3 flex gap-2">
                
                <button
                    onClick={() => setPagoEditando(pago)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                    Editar
                </button>

                <button
                    onClick={() => eliminarPago(pago.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Eliminar
                </button>

            </div>
        </div>
    )
}

export default PagoCard;