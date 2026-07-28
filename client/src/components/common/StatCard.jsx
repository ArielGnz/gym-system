const StatCard = ({ titulo, valor, icono, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center">
                <div>
                <p className="text-gray-500">
                    {titulo}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                    {valor}
                </h2>
                </div>

                <div
                    className={`${color} p-4 rounded-xl text-white text-3xl`}
                >
                    {icono}
                </div>
            </div>
        </div>
    )
}

export default StatCard;