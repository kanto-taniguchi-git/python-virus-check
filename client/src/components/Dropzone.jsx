// client/src/components/Dropzone.jsx

import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onFileSelected }) {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false, // One file can be uploaded
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 border-gray-400 p-8 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      <p>Drop or click to select files here</p>
    </div>
  );
}

export default Dropzone;
