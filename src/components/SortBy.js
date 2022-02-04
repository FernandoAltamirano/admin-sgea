import "./styles/SortBy.css";
export default function SortBy({ handleOption }) {
  return (
    <div className="sortby">
      <select onChange={(ev) => handleOption(ev.target.value)}>
        <option disabled selected>
          Ordenar por
        </option>
        <option value={1} key="1">
          Alfabéticamente (A - Z)
        </option>
        <option value={2} key="2">
          Alfabéticamente (Z - A)
        </option>
      </select>
    </div>
  );
}
