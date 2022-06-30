"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentSelect: 0,
      categorys: [],
      categoryChild: []
    };
  },
  methods: {
    async getCategoriges() {
      const res = await this.$myRequest({
        url: "categories"
      });
      this.categorys = res.data.message;
      this.categoryChild = res.data.message[0].children;
    },
    categorySelct(index, item) {
      this.currentSelect = index;
      this.categoryChild = item.children;
    },
    getCategoryGoods(cateid) {
      common_vendor.index.navigateTo({
        url: "../goods/goods?cid=" + cateid
      });
    }
  },
  onLoad() {
    this.getCategoriges();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.categorys, (item, index, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n($data.currentSelect === index ? "isActive" : ""),
        c: item.cat_id,
        d: common_vendor.o(($event) => $options.categorySelct(index, item), item.cat_id)
      };
    }),
    b: common_vendor.f($data.categoryChild, (item, index, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.f(item.children, (good, k1, i1) => {
          return {
            a: good.cat_icon,
            b: common_vendor.t(good.cat_name),
            c: good.cat_id,
            d: common_vendor.o(($event) => $options.getCategoryGoods(good.cat_id), good.cat_id)
          };
        }),
        c: item.cat_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
