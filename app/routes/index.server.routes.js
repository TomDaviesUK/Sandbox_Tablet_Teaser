module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    // Call the controller functions in the right order, so we get the data first, then use it in view.
    app.get('/', index.getContestants, index.renderData);
};
