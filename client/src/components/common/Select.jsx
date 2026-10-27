
const Select = ({
  label,
  value,
  onChange,
  options = [],
  children,
  name,
  required = false,
  disabled = false,
  placeholder = "Seleccione una opción",
}) => {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-slate-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition hover:border-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
      >
        {children ?? (
          <>
            <option value="">{placeholder}</option>

            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.nombre}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default Select;
