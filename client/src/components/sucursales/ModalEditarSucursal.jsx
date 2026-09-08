import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const ModalEditarSucursal = ({
    sucursal,
    setSucursalEditando,
    actualizarSucursal,
}) => {

    const [nombre, setNombre] = useState(sucursal.nombre);
    const [direccion, setDireccion] = useState(sucursal.direccion);
    const [telefono, setTelefono] = useState(sucursal.telefono);

    const handleActualizar = async () => {

        await actualizarSucursal(sucursal.id, {
            nombre,
            direccion,
            telefono,
        });

        setSucursalEditando(null);
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl w-full max-w-md">

                <div className="flex justify-end">
                    <button
                        onClick={() => setSucursalEditando(null)}
                        className="text-gray-500 text-xl"
                    >
                        ✕
                    </button>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                    Editar Sucursal
                </h2>

                <Input
                    label="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <Input
                    label="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />

                <Input
                    label="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <Button onClick={handleActualizar}>
                    Actualizar Sucursal
                </Button>

            </div>

        </div>
    );
};

export default ModalEditarSucursal;