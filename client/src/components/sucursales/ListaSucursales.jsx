import SucursalCard from "./SucursalCard";

const ListaSucursales = ({
    sucursales,
    eliminarSucursal,
    setSucursalEditando,
}) => {
    return (
        <div>

            <h2 className="text-xl font-bold mb-4">
                Lista de Sucursales
            </h2>

            {sucursales.map((sucursal) => (
                <SucursalCard
                    key={sucursal.id}
                    sucursal={sucursal}
                    eliminarSucursal={eliminarSucursal}
                    setSucursalEditando={setSucursalEditando}
                />
            ))}

        </div>
    );
};

export default ListaSucursales;