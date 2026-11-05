# FastAPI entry point hosting REST API routes for Grade Prediction, OCR, Plagiarism, and AI Features
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from grade_prediction.predictor import router as grade_router
from ocr.attendance_ocr import router as ocr_router
from plagiarism.similarity_checker import router as plagiarism_router
from ai_features.gemini_client import router as ai_features_router

load_dotenv()

app = FastAPI(
    title="CampusIQ AI & Machine Learning Services",
    description="Microservice providing predictive grade analytics, OCR attendance extraction, and NLP features",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "OK", "service": "CampusIQ AI Service"}

# Include submodule routers
app.include_router(grade_router, prefix="/grade-prediction", tags=["Grade Prediction"])
app.include_router(ocr_router, prefix="/ocr", tags=["OCR Attendance"])
app.include_router(plagiarism_router, prefix="/plagiarism", tags=["Plagiarism Detection"])
app.include_router(ai_features_router, prefix="/ai-features", tags=["AI Features"])

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main.py:app", host="0.0.0.0", port=port, reload=True)
