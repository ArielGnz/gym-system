function SocioCard({ socio, eliminarSocio, setSocioEditando }) {
    return (
        <div className="card">
            <h3>
                {socio.nombre} {socio.apellido}
            </h3>

            <p>DNI: {socio.dni}</p>
            <p>Teléfono: {socio.telefono}</p>

            <button onClick={() => eliminarSocio(socio.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"> Eliminar
            </button>

            <button onClick={() => setSocioEditando(socio)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"> Editar
            </button>

        </div>
    )
}

export default SocioCard;