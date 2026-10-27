
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const styles = {
    primary:
      "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:ring-blue-500",

    danger:
      "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-500",

    warning:
      "bg-amber-500 text-white shadow-sm hover:bg-amber-600 focus-visible:ring-amber-500",

    success:
      "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 focus-visible:ring-emerald-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant] ?? styles.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
