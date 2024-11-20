/**
 * Fetches data from a GitHub API endpoint, handling pagination.
 *
 * @param {string} GH_TOKEN - The GitHub access token.
 * @param {string} URL - The URL of the GitHub API endpoint to fetch data from.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of data objects fetched from the API.
 */
async function fetcher(GH_TOKEN, URL) {
  
  const options = getHttpOptions('GET', GH_TOKEN);

  const allData = [];
  
  let page = 1;

  while (true) {
    
    const pageUrl = `${URL}?page=${page}`;

    const response = await UrlFetchApp.fetch(pageUrl, options);

    if (response.getResponseCode() !== 200) {
      return handleHttpStatus(response.getResponseCode());
    }

    const data = JSON.parse(response.getContentText());
    
    if (data.length === 0) {
      break;
    }

    allData.push(...data);
    page++;
    
  }
  
  return allData;
  
}
