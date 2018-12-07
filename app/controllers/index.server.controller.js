// Controller functions to obtain data from Google Sheets model and then render it.

/**
 * Gets the list of contestants from the Google sheet and adds it to request data.
 * @see https://docs.google.com/spreadsheets/d/<MY SPREADSHEET ID>/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function getContestants (req, res, next) {

  const fs = require('fs');

  // Include the model that authorizes the sheet access and gets the authorized client for talking to
  // Google Sheets API.
  const {authorize, google} = require('../models/contestants.server.model');

  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(JSON.parse(content), (auth) => {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
        spreadsheetId: '<MY SPREADSHEET ID>',
        range: 'Form Responses 1!G2:K',
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          const rows = res.data.values;
          if (rows.length) {
            req.contestant_data = rows;
            next();
          } else {
            // By convention, adding a parameter into next will invoke error.
            next('No data found');
          }
      });
    });
  });
}


// Render the Home Page, passing contestant data and title to the views.
function renderData (req, res) {
    res.render('index', {
        title: 'Tablet Teaser Leaderboard',
        contestant_data: req.contestant_data
    })
}

module.exports = { getContestants, renderData };
