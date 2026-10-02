import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import FormularioRutina from "../components/rutinas/FormularioRutina";
import ListaRutinas from "../components/rutinas/ListaRutinas";
import ModalEditarRutina from "../components/rutinas/ModalEditarRutina";
import { useRutinas } from "../hooks/useRutinas";
import { useSocios } from "../hooks/useSocios";

const Rutinas = () => {

    const {
        rutinas,
        obtenerRutinas,
        guardarRutina,
        eliminarRutina,
        actualizarRutina,
    } = useRutinas();

    const {
        socios,
        obtenerSocios,
    } = useSocios();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [nivel, setNivel] = useState("Principiante");
    const [diasPorSemana, setDiasPorSemana] = useState("");
    const [socioId, setSocioId] = useState("");

    const [rutinaEditando, setRutinaEditando] = useState(null);

    useEffect(() => {
        obtenerRutinas();
        obtenerSocios();
    }, []);

    const handleGuardarRutina = async () => {

        await guardarRutina({
            nombre,
            descripcion,
            nivel,
            diasPorSemana,
            socioId,
        });

        setNombre("");
        setDescripcion("");
        setNivel("Principiante");
        setDiasPorSemana("");
        setSocioId("");
    };

    return (
        <Layout>

            <h1 className="text-3xl font-bold mb-6">
                Rutinas
            </h1>

            <FormularioRutina
                nombre={nombre}
                setNombre={setNombre}
                descripcion={descripcion}
                setDescripcion={setDescripcion}
                nivel={nivel}
                setNivel={setNivel}
                diasPorSemana={diasPorSemana}
                setDiasPorSemana={setDiasPorSemana}
                socioId={socioId}
                setSocioId={setSocioId}
                socios={socios}
                guardarRutina={handleGuardarRutina}
            />

            <ListaRutinas
                rutinas={rutinas}
                eliminarRutina={eliminarRutina}
                setRutinaEditando={setRutinaEditando}
            />

            {rutinaEditando && (
                <ModalEditarRutina
                    rutina={rutinaEditando}
                    setRutinaEditando={setRutinaEditando}
                    actualizarRutina={actualizarRutina}
                    socios={socios}
                />
            )}

        </Layout>
    );
};

export default Rutinas;