"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      latitude: 29.805286,
      longitude: 106.395628,
      covers: [{
        latitude: 29.805286,
        longitude: 106.395628,
        iconPath: "../../static/Login_background.jpg",
        width: 30,
        height: 30
      }]
    };
  },
  methods: {
    phone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: 17726637582
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(17726637582),
    b: common_vendor.o((...args) => $options.phone && $options.phone(...args)),
    c: $data.latitude,
    d: $data.longitude,
    e: $data.covers
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
