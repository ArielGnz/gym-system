import Card from "../common/Card";

const EstadoCuotas = ({
    pagosPagados,
    pagosPendientes,
    pagosVencidos,
}) => {
    const total = pagosPagados + pagosPendientes + pagosVencidos;

    const porcentaje = (cantidad) => {
        if (total === 0) return 0;

        return Math.round((cantidad / total) * 100);
    };

    return (
        <Card>
            <h2 className="text-xl font-bold mb-6">
                Estado de Cuotas
            </h2>

            <div className="space-y-5">

                <div>
                    <div className="flex justify-between mb-1">
                        <span>Pagados del mes</span>
                        <span className="font-semibold">
                            {pagosPagados}
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-green-500 h-3 rounded-full"
                            style={{
                                width: `${porcentaje(pagosPagados)}%`,
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between mb-1">
                        <span>Pendientes</span>
                        <span className="font-semibold">
                            {pagosPendientes}
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-yellow-500 h-3 rounded-full"
                            style={{
                                width: `${porcentaje(pagosPendientes)}%`,
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between mb-1">
                        <span>Vencidos</span>
                        <span className="font-semibold">
                            {pagosVencidos}
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-red-500 h-3 rounded-full"
                            style={{
                                width: `${porcentaje(pagosVencidos)}%`,
                            }}
                        />
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default EstadoCuotas;