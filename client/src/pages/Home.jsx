// client/src/pages/Home.jsx
import React, { useState } from "react";
import Dropzone from "./../components/Dropzone";
import UrlForm from "./../components/UrlForm";
import { scanFile, scanUrl } from "./../api/virusTotal";

function Home() {
    const [result, setResult] = useState(null);

    const handleFile = async (file) => {
        const responce = await scanFile(file);
        setResult(responce);
    };

    const handleUrl = async (url) => {
        const responce = await scanUrl(url);
        setResult(responce);
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">VirusTotal Scanner</h1>

            <div className="mb-6">
                <h2 className="text-lg mb-2">File Scan</h2>
                <Dropzone onFileSelected={handleFile} />
            </div>

            <div className="mb-6">
                <h2 className="text-lg mb-2">URL Scan</h2>
                <UrlForm onSubmit={handleFile} />
            </div>

            {
                result && (
                    <div className="mt-6 bg-gray-100 p-4 rounded">
                        <h3 className="text-md font-bold mb-2">Scan Result</h3>
                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                )
            }
        </div>
    );
}

export default Home;