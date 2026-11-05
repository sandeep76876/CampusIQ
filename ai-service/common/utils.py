# Shared mathematical and string cleaning utilities for AI data processing
import re

def clean_extracted_text(raw_text: str) -> str:
    # Remove excessive whitespace, non-printable characters
    return re.sub(r'\s+', ' ', raw_text).strip()
