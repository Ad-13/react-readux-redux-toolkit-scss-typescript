export const truncateTxt = (description = '', maxLength = 100): string =>
  description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
