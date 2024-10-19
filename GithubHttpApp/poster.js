/**
 * Makes an HTTP POST request to a GitHub API endpoint.
 *
 * @param {string} GGH_TOKEN - The GitHub access token.
 * @param {string} URL - The URL of the endpoint to which the request will be sent.
 * @param {object} payload - The request payload, which will be converted to JSON and included in the request body.
 * @returns {Object} A response object from the `UrlFetchApp.fetch` function.
 * @throws {Error} Throws an exception if an error occurs during the request.
 */
async function poster(GH_TOKEN, URL, payload) {
  
  const options = getHttpOptions('POST', GH_TOKEN, payload);

  try {

    return UrlFetchApp.fetch(URL, options);
    
  } catch (error) {
      Logger.log('Error posting: ' + error);
    throw error;
  }
}
