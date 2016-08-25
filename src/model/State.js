"use strict";

let StateModel = Backbone.Model.extend({
  defaults() {
    return {
      pageNo: 0,
      beforePageNo: 0,
      clickNext: false,
      finish: false
    };
  }
});

module.exports = {
  instance: new StateModel()
}