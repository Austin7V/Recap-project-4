import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({
  color,
  onDeleteColor,
  isConfirming,
  onConfirmDelete,
  onCancelDelete,
  onStartEdit,
  isEditing,
  onCancelEdit,
  onSubmitEdit,
}) {
  if (isEditing) {
    return (
      <div
        className="color-card"
        style={{ backgroundColor: color.hex, color: color.contrastText }}
      >
        <ColorForm
          initialData={{
            role: color.role,
            hex: color.hex,
            contrastText: color.contrastText,
          }}
          onSubmitColor={(data) => onSubmitEdit(color.id, data)}
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
      <CopyToClipboard textToCopy={color.hex} />
      <p>{color.role}</p>
      <p>contrast:{color.contrastText}</p>

      {!color.contrastCheck && <p>Contrast: No data</p>}

      {color.contrastCheck?.error && <p>Contrast: Check failed</p>}

      {color.contrastCheck && !color.contrastCheck.error && (
        <p>Contrast: {color.contrastCheck.Overall}</p>
      )}

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
