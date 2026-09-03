import PagoCard from "./PagoCard";

const ListaPagos = ({
    pagos, 
    eliminarPago, 
    setPagoEditando,   
}) => {
    return (
        <div>

            <h2 className="text-xl font-bold mb-4">
                Lista de Pagos
            </h2>

            {pagos.map ((pago) => (
                <PagoCard
                    key={pago.id}
                    pago={pago}
                    eliminarPago={eliminarPago}
                    setPagoEditando={setPagoEditando}
                />
            ))

            }
        </div>
    )
}

export default ListaPagos;