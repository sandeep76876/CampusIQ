// Utility functions for formatting ISO timestamps into localized dates
export const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString();
};
