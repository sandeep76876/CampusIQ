# Configuration settings loader reading environment variables for Python service
import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PORT: int = int(os.getenv("PORT", 8000))
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    TESSERACT_CMD: str = os.getenv("TESSERACT_CMD", "")

settings = Settings()
