export default function Filter({ label = "", value, onFilterChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          value={value}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
}
