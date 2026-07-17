import { useState, useEffect } from "react";
import api from "../services/api";

function ModalEditarSocio ({ socio, setSocioEditando, obtenersocios }) {

    const [nombre, setNombre] = useState(socio.nombre);
    const [apellido, setApellido] = useState(socio.apellido);
    const [dni, setDni] = useState(socio.dni);
    const [telefono, setTelefono] = useState(socio.telefono);

} 