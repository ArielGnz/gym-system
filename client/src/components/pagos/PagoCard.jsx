

const PagoCard = ({pago, eliminarPago, setPagoEditando}) => {
    return(
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
            <h3 className="font-bold text-lg">
                {pago.Socio?.nombre} {pago.Socio?.apellido}
            </h3>
        </div>
    )
}