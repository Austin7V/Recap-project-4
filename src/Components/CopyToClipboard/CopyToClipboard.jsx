import { useState } from "react";

export default function CopyToClipboard({ textToCopy }) {
  const [copied, setCopied] = useState(false);
  async function handleCopie() {
    await navigator.clipboard.writeText(textToCopy);

    setCopied(true);
  }
  return (
    <>
      <button type="button" onClick={handleCopie}>
        Copy
      </button>
      ;{copied && <p>Copied!</p>}
    </>
  );
}
