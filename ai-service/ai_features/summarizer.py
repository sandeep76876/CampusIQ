# Helper module encapsulating contextual prompt templates for academic study aids
def build_academic_summary_prompt(text: str) -> str:
    return f"Provide a structured academic summary and 3 review questions for the following lecture material:\n{text}"
