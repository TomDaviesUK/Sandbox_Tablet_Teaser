# Sandbox_Tablet_Teaser

This is a simple GEAN stack application (Node, Express, Angular - but using Google Sheets for the database instead of MongoDB).

It uses the Model-View-Controller approach with some boostrap 4, though it really doesn't need to, given the size of the thing right now and it's purpose. But it was fun.

It only has a single route to a leaderboard of data page.

If anyone wanted to use this, they would need to use their Google Sheets ID, replacing it where I have `<MY SPREADSHEET ID>` in the controller code. Then they would need to make sure they were retrieving the right range of data from their spreadsheet in the code just below that phrase, again in the controller file.

To start it up, just navigate to the top level folder once cloned and enter: `node server.js`, then hit your browser at localhost:8080.
