function SocioCard({ socio, eliminarSocio }) {
    return (
        <div classname="card">
            <h3>
                {socio.nombre} {socio.apellido}
            </h3>

            <p>DNI: {socio.dni}</p>
            <p>Teléfono: {socio.telefono}</p>

            <button onClick={() => eliminarSocio(socio.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"> Eliminar
            </button>

        </div>
    )
}

export default SocioCard;