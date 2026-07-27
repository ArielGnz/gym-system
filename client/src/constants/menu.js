import {FaHome, FaUsers, FaMoneyBill, FaClipboardCheck, FaDumbbell, FaCog } from "react-icons/fa";

export const menu = [
    {
      nombre: "Dashboard",
      ruta: "/",
      icono: FaHome,
    },
    {
      nombre: "Socios",
      ruta: "/socios",
      icono: FaUsers,
    },
    {
      nombre: "Pagos",
      ruta: "/pagos",
      icono: FaMoneyBill,
    },
    {
      nombre: "Asistencias",
      ruta: "/asistencias",
      icono: FaClipboardCheck,
    },
    {
      nombre: "Rutinas",
      ruta: "/rutinas",
      icono: FaDumbbell,
    }
  ]