export default function Select({ label, id, value, onChange, options }) {
  return (
    <div className="mb-3 text-left">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-text-primary mb-1.5"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2.5 w-full max-w-xs rounded-lg bg-surface text-text-primary text-sm
                   border border-border-light focus:outline-none focus:ring-2 focus:ring-accent-warm/40
                   focus:border-accent-warm transition-all duration-200"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
