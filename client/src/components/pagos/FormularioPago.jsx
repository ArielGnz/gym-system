import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

const FormularioPago = ({
    fechaPago,
    setFechaPago,
    fechaVencimiento,
    setFechaVencimiento,
    importe,
    setImporte,
    estado,
    setEstado,
    socioId,
    setSocioId,
    planId,
    setPlanId,
    socios,
    planes,
    guardarPago
}) => {
    
    const opcionesSocios = socios.map((socio) => ({
        id: socio.id,
        nombre: `${socio.nombre} ${socio.apellido}`,
    }) );

    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">

            <h2 className="text-xl font-bold mb-4"> Registrar Pago </h2>

            <Select
                label="Socio"
                value={socioId}
                onChange={(e) => setSocioId(e.target.value)}
                options={opcionesSocios}
            />
               
            <Select
                label="plan"
                value={planId}
                onChange={(e) => setPlanId(e.target.value)}
                options={planes}
            />

            <Input 
                label="Fecha de Pago"
                type="date"
                value={fechaPago}
                onChange={(e) => setFechaPago(e.target.value)}
            />

            <Input 
                label="Fecha de Vencimiento"
                type="date"
                value={fechaVencimiento}
                onChange={(e) => setFechaVencimiento(e.target.value)}
            />

            <Input 
                label="Importe"
                type="number"
                placeholder="Importe de pago"
                value={importe}
                onChange={(e) => setImporte(e.target.value)}
            />

            <Select 
                label="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                options={[
                    {id: "PAGADO", nombre: "PAGADO"},
                    {id: "VENCIDO", nombre: "VENCIDO"}
                ]}
            />

            <Button onClick={guardarPago}>
                Registrar Pago
            </Button>        

        </div>
    )
}

export default FormularioPago;