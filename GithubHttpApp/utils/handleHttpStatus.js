/**
 * Handles HTTP status codes returned from a GitHub API request.
 *
 * @param {number} statusCode - The HTTP status code.
 * @returns {Object} An object containing `success` (boolean) and `message` properties.
 * @throws {Error} Throws an error if the status code is invalid or unexpected.
 */
function handleHttpStatus(statusCode) {
  switch (statusCode) {
    case 204:
      return { success: true, message: 'Operation successfully completed.' };
    case 304:
      return { success: false, message: 'Not modified.' };
    case 401:
      return { success: false, message: 'Requires authentication.' };
    case 403:
      return { success: false, message: 'Forbidden.' };
    case 404:
      return { success: false, message: 'Resource not found.' };
    default:
      throw new Error(`Invalid HTTP status code: ${statusCode}`);
  }
}
