'use strict';

let State = require("./model/State");

let Router = Backbone.Router.extend({
  routes: {
    '': 'page',
    'page(:id)': 'page'
  },

  page: (id) => {
    State.instance.set('pageNo', id || 1);
  }
});

module.exports = Router;