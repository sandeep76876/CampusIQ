# OpenCV image preprocessing pipeline: grayscale, thresholding, deskewing, noise reduction
import cv2
import numpy as np

def preprocess_attendance_sheet(image_bytes: bytes) -> np.ndarray:
    # Convert bytes to OpenCV image matrix and apply thresholding
    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    # Apply Otsu thresholding placeholder
    return img
