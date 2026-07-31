function SocioCard({ socio, eliminarSocio, setSocioEditando }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
            <h3>
                {socio.nombre} {socio.apellido}
            </h3>

            <p>DNI: {socio.dni}</p>
            <p>Teléfono: {socio.telefono}</p>
            <p>{socio.Sucursal?.nombre}</p>

            <div className="flex gap-2 mt-4">

                <button onClick={() => setSocioEditando(socio)}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition"> Editar
                </button>

                <button onClick={() => eliminarSocio(socio.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"> Eliminar
                </button>
                
            </div>

        </div>
    )
}

export default SocioCard;