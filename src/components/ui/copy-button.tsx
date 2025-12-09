"use client";

import { useState } from "react";

function CopyButton() {
  const [copyStatus, setCopyStatus] = useState("COPY");

  function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopyStatus("COPIED!");
    setTimeout(() => setCopyStatus("COPY"), 2000);
  }

  return (
    <button
      onClick={copyLink}
      className="cursor-pointer rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
    >
      {copyStatus}
    </button>
  );
}

export default CopyButton;
