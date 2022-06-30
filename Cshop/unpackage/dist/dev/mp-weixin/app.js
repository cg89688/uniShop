"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var http_api = require("./http/api.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/news/news.js";
  "./pages/cart/cart.js";
  "./pages/member/member.js";
  "./pages/goods/goods.js";
  "./pages/goods/goodsDetail.js";
  "./pages/contact/contact.js";
  "./pages/category/category.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HXProjects/vthinkshop/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  console.info(2);
  app.config.globalProperties.$myRequest = http_api.myRequest;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
