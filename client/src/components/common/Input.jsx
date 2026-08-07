

const Input = ({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="block mb-1 font-medium">{label}</label>
            )}

            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded-lg px-3 py-2 "
            />
        </div>
    );
}

export default Input;
        