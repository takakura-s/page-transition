'use strict';

let $ = require('jquery');
let _ = require('underscore');
let Backbone = require('backbone');
let Marionette = require('backbone.marionette');
let State = require("./model/State");
let Panel = require("./view/Panel");
let AppRouter = require("./AppRouter");

let App = Backbone.Marionette.Application.extend({
  regions: {
    panel: '#panel'
  },

  initialize(options) {
    // 完了ページの表示
    let finished = () => {
      window.document.title = 'エラー';
      this.panel.show(new Panel.View({
        template: '#pageFinished'
      }));
    }

    // 処理完了のイベント
    State.instance.on('change:finish', (model, value) => {
      if (value) {
        window.document.title = '終了';
        this.panel.show(new Panel.View({
          template: '#pageEnd'
        }));
      }
    });

    // 表示するページが変更される時のイベント
    State.instance.on('change:pageNo', (model, value) => {
      if ((model.get('beforePageNo') < 1 && value > 1) || model.get('finish')) {
        finished();
        return;
      }
      window.document.title = 'ページ' + value;
      if (!model.get('clickNext') && value > model.get('beforePageNo') && model.get('beforePageNo') > 0) {
        window.history.back();
        return;
      }
      model.set('clickNext', false);
      model.set('beforePageNo', value);
      this.panel.show(new Panel.View({
        template: '#page' + value
      }));
    });

    // ルータの設定
    let router = new AppRouter();
    Backbone.history.start();
  }
});

// アプリ開始
$(() => {
  let app = new App();
  global.app = app;
  app.start();
});