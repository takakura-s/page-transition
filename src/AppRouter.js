'use strict';

let State = require("./model/State");

let Router = Backbone.Router.extend({
  routes: {
    '': 'page',
    'page(:id)': 'page'
  },

  page: (id) => {
    if (!id) {
      window.location.replace('#page1');
    } else {
      State.instance.set('pageNo', id * 1);
    }
  }
});

module.exports = Router;