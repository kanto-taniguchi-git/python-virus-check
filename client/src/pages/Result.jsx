// client/src/pages/Result.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Scan Result</h1>

      {result ? (
        <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      ) : (
        <div>
          <p className="mb-4">No Result.</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
