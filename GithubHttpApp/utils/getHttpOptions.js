/**
 * Creates an options object for HTTP requests to the GitHub API.
 *
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} GH_TOKEN - The access token for the GitHub API.
 * @param {object} [payload] - The request payload, which will be converted to JSON and included in the request body.
 * @returns {object} An options object to be used with `UrlFetchApp.fetch`.
 * @throws {Error} Throws an error if the payload is not an object.
 *
 */
function getHttpOptions(method, GH_TOKEN, payload = null) {
  
  const baseOptions = {
    'headers': {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${GH_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
    'method': method,
  };

  if (payload) {
    // Ensure payload is an object and handle potential errors
    if (typeof payload !== 'object' || payload === null) {
      throw new Error('Invalid payload format. Payload must be an object.');
    }

    // Convert non-string values to strings for correct JSON serialization
    baseOptions.payload = JSON.stringify(payload);
  }

  return baseOptions;
}
