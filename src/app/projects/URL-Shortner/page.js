"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "github-markdown-css/github-markdown-dark.css";

export default function QRSharePage() {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Enky-yy/URL-Shortner/main/README.md"
    )
      .then((res) => res.text())
      .then((data) => setReadme(data));
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0F19] px-6 py-4">

      <div
        className="markdown-body max-w-5xl mx-auto p-8 rounded-xl"
        style={{
          backgroundColor: "#0d1117",
        }}
      >

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >
          {readme}
        </ReactMarkdown>

      </div>

    </main>
  );
}