# GithubHttpApp

GitHubHttpApp is a library that simplifies the creation of HTTP requests to the GitHub API within Google Apps Script. It abstracts away the details of building the request, allowing you to concentrate on the logic of your application.


## Installation

Add to the library of your Google Apps Script project using the ID:

```plaintext
1suWVnfT6mr4PlgV2-djY0DhVZW3LRuV1zR10SWrk0IN2wRHtTwuasinq
```

Or clone the repository, and create your own project using [clasp](https://github.com/google/clasp)


## Usage

```javascript
const response = await GithubHttpApp.putter(GH_TOKEN, endpoint, payload = null);

Logger.log(response.getResponseCode()); // Returns the response status code
```

For a complete and detailed overview of all functions and features, including parameters and examples, visit the full documentation on the project wiki: <a href="https://github.com/ws2git/githubhttpapp-gas/wiki"><img alt="Static Badge" src="https://img.shields.io/badge/GithubHttpApp-documentation?style=social&logo=github&logoSize=auto&label=docs&link=https%3A%2F%2Fgithub.com%2Fws2git%2Fgithubhttpapp-gas%2Fwiki"></a> or <a href="https://gitlab.com/ws2git/githubhttpapp-gas/-/wikis/home"><img alt="Static Badge" src="https://img.shields.io/badge/GithubHttpApp-documentation?style=social&logo=gitlab&logoSize=auto&label=docs&link=https%3A%2F%2Fgitlab.com%2Fws2git%2Fgithubhttpapp-gas%2F-%2Fwikis%2Fhome"></a>.


## Features

* **Requests:** GET, POST, PUT, DELETE
* **Header management:** Authentication with GitHub token and other required headers.
* **Pagination:** The `fetcher` function supports pagination automatically.
* **Return:** Returns an `UrlFetchApp.HTTPResponse` object for parsing the response.


## Limitations

Limited by the capabilities of the Google Apps Script library `UrlFetchApp`.


---

Thank you for considering the GithubHttpApp for your needs. If you have any questions or need further assistance, please don't hesitate to reach out.

<br />
<br />
<div align="center">
  <a href="https://bitbucket.org/rmottalabs/workspace/projects/WGIT"><img alt="Static Badge" src="https://img.shields.io/badge/-Bitbucket?style=social&logo=bitbucket&logoSize=auto&label=Bitbucket&link=https%3A%2F%2Fbitbucket.org%2Frmottalabs%2Fworkspace%2Fprojects%2FWGIT"></a>
  <a href="https://gitlab.com/ws2git"><img alt="Static Badge" src="https://img.shields.io/badge/-Gitlab?style=social&logo=gitlab&logoSize=auto&label=Gitlab&link=https%3A%2F%2Fgitlab.com%2Fws2git"></a>
  <a href="https://github.com/ws2git"><img alt="Static Badge" src="https://img.shields.io/badge/-Github?style=social&logo=github&logoSize=auto&label=Github&link=https%3A%2F%2Fgithub.com%2Fws2git"></a>
</div>
