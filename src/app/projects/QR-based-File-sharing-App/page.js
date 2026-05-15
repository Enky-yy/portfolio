"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
export default function QRSharePage() {
  const [readme, setReadme] = useState("");
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Enky-yy/QR-based-File-sharing-App/main/README.md",
    )
      .then((res) => res.text())
      .then((data) => setReadme(data));
  }, []);
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-28">
      
      <div className="max-w-5xl mx-auto prose prose-invert max-w-none">
        
        <ReactMarkdown>{readme}</ReactMarkdown>
      </div>
    </main>
  );
}
