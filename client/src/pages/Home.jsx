// client/src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "./../components/Dropzone";
import UrlForm from "./../components/UrlForm";
import { scanFile, scanUrl } from "./../api/virusTotal";

function Home() {
    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const handleFile = async (file) => {
        const response = await scanFile(file);
        navigate("/result", { state: { result: response } });
    };

    const handleUrl = async (url) => {
        const response = await scanUrl(url);
        navigate("/result", { state: { result: response } });
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
                <UrlForm onSubmit={handleUrl} />
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