"use strict";
var common_vendor = require("../common/vendor.js");
const BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1/";
const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + options.url,
      method: options.method || "GET",
      data: options.data || {},
      success: (res) => {
        if (res.statusCode !== 200) {
          return common_vendor.index.showToast({
            title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
          });
        }
        resolve(res);
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u63A5\u53E3\u5931\u8D25"
        });
        reject(err);
      }
    });
  });
};
exports.myRequest = myRequest;
