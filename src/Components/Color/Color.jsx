import "./Color.css";

export default function Color({
  color,
  onDeleteColor,
  isConfirming,
  onConfirmDelete,
  onCancelDelete,
  onStartEdit,
}) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-highlight">{color.hex}</p>
      <p>{color.role}</p>
      <p>contrast:{color.contrastText}</p>

      {!isConfirming ? (
        <>
          <button type="button" onClick={onDeleteColor}>
            Delete
          </button>
          <button type="button" onClick={() => onStartEdit(color.id)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button type="button" onClick={onConfirmDelete}>
            Confirm
          </button>
          <button type="button" onClick={onCancelDelete}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
