# server/main.py
from fastapi import FastAPI, File, UploadFile
import requests
import os  # Accessing OS information
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv  # To read environment variables

load_dotenv()  # Load environment variables from .env file

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

url = "https://www.virustotal.com/api/v3/files"
VIRUSTOTAL_API_KEY = os.getenv("VIRUSTOTAL_API_KEY")

@app.get("/")
async def root():
    return {"message": "VirusTotal File Scanner"}

@app.post("/scan/file")
async def scan_file(file: UploadFile = File(...)):
    contents = await file.read()
    
    # Send th file to VirusTotal
    files = {"file": (file.filename, contents)}
    headers = {
        "accept": "application/json",
        "x-apikey": VIRUSTOTAL_API_KEY,
    }
    response = requests.post(url, files=files, headers=headers)

    if response.status_code != 200:
        return {
            "error": response.json()
        }
    
    # Get result ID
    analysis_id = response.json()["data"]["id"]
    
    # Get results
    analysis_url = f"https://www.virustotal.com/api/v3/analyses/{analysis_id}"
    result = requests.get(analysis_url, headers=headers)
    
    return result.json()
