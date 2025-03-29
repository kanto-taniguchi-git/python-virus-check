// client/src/components/UrlForm.jsx
import React, { useState } from "react";

function UrlForm({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent automatic reloading
    if (url) onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Please Enter URL"
        className="flex-1 border px-2 py-1 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default UrlForm;
