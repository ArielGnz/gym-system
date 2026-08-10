import Card from "../common/Card";
import Button from "../common/Button";

const PlanCard = ({plan, eliminarPlan, setPlanEditando}) => {
    return (
        <Card>
            
            <h3 className="text-xl font-bold">{plan.nombre}</h3>
            <p className="text-gray-600">{plan.descripcion}</p>
            <p className="mt-2"><strong>Precio:</strong> ${plan.precio}</p>
            <p><strong>Duración:</strong> {plan.duracionDias} días</p>
            <p><strong>Sucursal:</strong>{" "}{plan.Sucursal?.nombre || "Sin sucursal"}</p>

            <div className="flex gap-2 mt-4">

                <Button
                    variant="warning"
                    onClick={() => setPlanEditando(plan)}
                >
                    Editar
                </Button>

                <Button
                    variant="danger"
                    onClick={() => eliminarPlan(plan.id)}
                >
                    Eliminar
                </Button>

            </div>

        </Card>
    );
}

export default PlanCard;