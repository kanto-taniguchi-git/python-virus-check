// client/src/api/virusTotal.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const scanFile = async(file) => {
    const formData = new FormData();
    formData.append("file", file);

    const responce = await axios.post(`${BASE_URL}/scan/file`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return responce.data;
};

export const scanUrl = async(url) => {
    const responce = await axios.post(`${BASE_URL}/scan/url`, { url });
    return responce.data;
};


