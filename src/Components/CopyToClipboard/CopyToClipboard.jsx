import { useEffect, useState } from "react";

export default function CopyToClipboard({ textToCopy }) {
  const [copied, setCopied] = useState(false);
  async function handleCopie() {
    await navigator.clipboard.writeText(textToCopy);

    setCopied(true);
  }
  useEffect(() => {
    if (!copied) return;

    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [copied]);

  return (
    <>
      <button type="button" onClick={handleCopie}>
        Copy
      </button>
      ;{copied && <p>Copied!</p>}
    </>
  );
}
