import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import FormularioSucursal from "../components/sucursales/FormularioSucursal";
import ListaSucursales from "../components/sucursales/ListaSucursales";
import ModalEditarSucursal from "../components/sucursales/ModalEditarSucursal";
import { useSucursales } from "../hooks/useSucursales";

const Sucursales = () => {

    const {
        sucursales,
        obtenerSucursales,
        guardarSucursales,
        eliminarSucursal,
        actualizarSucursales,
    } = useSucursales();

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [sucursalEditando, setSucursalEditando] = useState(null);

    useEffect(() => {
        obtenerSucursales();
    }, []);

    const handleGuardarSucursal = async () => {

        await guardarSucursales({
            nombre,
            direccion,
            telefono,
        });

        setNombre("");
        setDireccion("");
        setTelefono("");
    };

    return (
        <Layout>

            <h1 className="text-3xl font-bold mb-6">
                Sucursales
            </h1>

            <FormularioSucursal
                nombre={nombre}
                setNombre={setNombre}
                direccion={direccion}
                setDireccion={setDireccion}
                telefono={telefono}
                setTelefono={setTelefono}
                guardarSucursal={handleGuardarSucursal}
            />

            <ListaSucursales
                sucursales={sucursales}
                eliminarSucursal={eliminarSucursal}
                setSucursalEditando={setSucursalEditando}
            />

            {sucursalEditando && (
                <ModalEditarSucursal
                    sucursal={sucursalEditando}
                    setSucursalEditando={setSucursalEditando}
                    actualizarSucursal={actualizarSucursales}
                />
            )}

        </Layout>
    );
};

export default Sucursales;