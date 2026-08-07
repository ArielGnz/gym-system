import { FaBuilding } from "react-icons/fa";

function SocioCard({ socio, eliminarSocio, setSocioEditando }) {
    return (
        <Card>
            <h3>
                {socio.nombre} {socio.apellido}
            </h3>

            <p>DNI: {socio.dni}</p>
            <p>Teléfono: {socio.telefono}</p>
            <div className="flex items-center gap-2">
                <FaBuilding />
                <span>{socio.Sucursal?.nombre}</span>
            </div>

            <div className="flex gap-2 mt-4">

                <Button onClick={() => setSocioEditando(socio)}
                    variant="warning"> Editar
                </Button>

                <Button onClick={() => eliminarSocio(socio.id)}
                    variant="danger"> Eliminar
                </Button>

            </div>

        </Card>
    )
}

export default SocioCard;