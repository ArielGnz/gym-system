
const WelcomeCard = () => {
    
    const fecha = new Date();

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">
                        Bienvenido
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Panel Principal del Sistema
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-gray-500">
                        {fecha.toLocaleDateString()}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WelcomeCard;