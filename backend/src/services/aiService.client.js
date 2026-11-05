// HTTP client proxying requests from Node.js backend to the Python AI/ML microservice
const axios = require('axios');
const { aiServiceUrl } = require('../config/env.config');

const aiClient = axios.create({
  baseURL: aiServiceUrl,
  timeout: 30000
});

module.exports = {
  predictGrade: async (payload) => {
    // Calls Python /predict-grade endpoint
    return (await aiClient.post('/grade-prediction/predict', payload)).data;
  },
  processOcrAttendance: async (imagePayload) => {
    // Calls Python /ocr/attendance endpoint
    return (await aiClient.post('/ocr/process-attendance', imagePayload)).data;
  },
  checkPlagiarism: async (documentPayload) => {
    // Calls Python /plagiarism/check endpoint
    return (await aiClient.post('/plagiarism/check', documentPayload)).data;
  }
};
