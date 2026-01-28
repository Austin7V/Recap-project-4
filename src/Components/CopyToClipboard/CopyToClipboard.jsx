import { useEffect, useState } from "react";

export default function CopyToClipboard({ textToCopy }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(textToCopy);

      setCopied(true);
      setError(null);
    } catch (err) {
      setError("Copy failed. Please copy manually.");
      setCopied(false);
    }
  }

  useEffect(() => {
    if (!copied && !error) return;

    const timeoutId = setTimeout(() => {
      setCopied(false);
      setError(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [copied, error]);

  return (
    <>
      <button type="button" onClick={handleCopy}>
        {copied ? "Copied!" : error ? "Copy failed" : "Copy"}
      </button>
    </>
  );
}
