import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.hex}</p>
      <p>{color.role}</p>
      <p>contrast:{color.contrastText}</p>
      <button type="button" onClick={() => onDeleteColor(color.id)}>
        Delete
      </button>
    </div>
  );
}
