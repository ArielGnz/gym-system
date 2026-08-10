import PlanCard from "./PlanCard";

const ListaPlan = ({ planes, eliminarPlan, setPlanEditando }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">
                Lista de Planes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {planes.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        eliminarPlan={eliminarPlan}
                        setPlanEditando={setPlanEditando}
                    />
                ))}
            </div>
        </div>
    )
}
