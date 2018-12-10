# Sandbox Tablet Teaser

## Overview

This is a simple leaderboard display application, for presenting a user leaderboard of data, from a Google Sheet as the database, that I tied to a Google Form. the form then provides a simple way of capturing and displaying (this is the display piece!) of 'at event' challenge data.

It's essentially a GEAN stack (Node, Express, Angular, but Google Sheets for the database instead of MongoDB).

It uses the Model-View-Controller approach with some bootstrap 4, though it really doesn't need to use MVC, given the minimal complexity of the thing right now and it's purpose. But it was fun. And useful in case I want to expand it later.

It only has a single route right now - to the leaderboard of data.

If you wanted to use this, you would need to use your Google Sheets ID, replacing it where I have `<MY SPREADSHEET ID>` in the controller code. Then you would need to make sure you were retrieving the right range of data from your spreadsheet in the code just below that phrase, again in the controller file.

Once you've got that right, you just need to start the server - locally will do - just navigate to the top level folder once cloned and edited as above, then enter:

 `node server.js`

Then hit your browser at `localhost:8080`.
