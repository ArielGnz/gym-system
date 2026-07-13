function SocioCard({ socio}) {
    return (
        <div classname="card">
            <h3>
                {socio.nombre} {socio.apellido}
            </h3>

            <p>DNI: {socio.dni}</p>
            <p>Teléfono: {socio.telefono}</p>

        </div>
    )
}

export default SocioCard;