"use strict";

let State = require("../model/State");

let PanelView = Backbone.Marionette.ItemView.extend({
  ui: {
    prev: '.prev',
    next: '.next',
    finish: '#finish'
  },

  events() {
    return {
      "click @ui.prev" (e) {
        e.preventDefault();
        window.history.back();
      },
      "click @ui.next" (e) {
        State.instance.set('clickNext', true);
      },
      "click @ui.finish" () {
        State.instance.set('finish', true);
      }
    };
  }
});

module.exports = {
  View: PanelView
}