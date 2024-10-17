/**
 * Performs an HTTP DELETE request to a GitHub API endpoint.
 *
 * @param {string} GH_TOKEN - The GitHub access token.
 * @param {string} URL - The URL of the endpoint to which the request will be sent.
 * @returns {Object} A response object from the `UrlFetchApp.fetch` function.
 * @throws {Error} Throws an exception if an error occurs during the request.
 */
async function deleter(GH_TOKEN, URL) {

  const options = getHttpOptions('DELETE', GH_TOKEN);
  
  try {
    
    return UrlFetchApp.fetch(URL, options);
    
  } catch (error) {
      Logger.log('Error deleting: ' + error);
    throw error;
  }
}
