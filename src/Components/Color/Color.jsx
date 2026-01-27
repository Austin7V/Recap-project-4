import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({
  color,
  onDeleteColor,
  isConfirming,
  onConfirmDelete,
  onCancelDelete,
  onStartEdit,
  isEditing,
  onCancelEdit,
}) {
  if (isEditing) {
    return (
      <div
        className="color-card"
        style={{ backgroundColor: color.hex, color: color.contrastText }}
      >
        <ColorForm
          onSubmitColor={() => {}}
          initialData={{
            role: color.role,
            hex: color.hex,
            contrastText: color.contrastText,
          }}
        />

        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      </div>
    );
  }

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
          <button type="button" onClick={onStartEdit}>
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
