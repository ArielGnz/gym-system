const Select = ({
    label,
    value,
    onChange,
    options,
}) => {
    return (
        <div className="mb-4">
            {label && 
                <label className="block mb-1 font-medium">{label}</label>
            }

            <select
                value={value}
                onChange={onChange}
                className="w-full border rounded-lg px-3 py-2"
            >
                <option value="">Seleccione</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;