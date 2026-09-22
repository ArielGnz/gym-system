import Card from "../common/Card";

const UltimosPagos = ({ pagos }) => {

    return (
        <Card>
            <h2 className="text-xl font-bold mb-4">
                Últimos Pagos
            </h2>

            {pagos.length === 0 ? (
                <p className="text-gray-500">
                    No hay pagos registrados.
                </p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="py-3">Socio</th>
                                <th className="py-3">Plan</th>
                                <th className="py-3">Fecha</th>
                                <th className="py-3">Importe</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pagos.map((pago) => (
                                <tr
                                    key={pago.id}
                                    className="border-b last:border-b-0"
                                >
                                    <td className="py-3">
                                        {pago.Socio?.nombre}{" "}
                                        {pago.Socio?.apellido}
                                    </td>

                                    <td className="py-3">
                                        {pago.Plan?.nombre || "-"}
                                    </td>

                                    <td className="py-3">
                                        {pago.fechaPago}
                                    </td>

                                    <td className="py-3 font-semibold">
                                        ${pago.importe}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Card>
    );
};

export default UltimosPagos;