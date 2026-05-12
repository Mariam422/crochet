export default function FilterBar({ filter, setFilter }) {
  const buttons = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="filters">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={filter === btn ? "active" : ""}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}