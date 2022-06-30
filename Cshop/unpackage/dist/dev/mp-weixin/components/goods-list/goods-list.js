"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "goods-list",
  data() {
    return {};
  },
  props: ["goods"],
  methods: {
    navigator(id) {
      this.$emit("goodsItemClick", id);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.goods, (item, k0, i0) => {
      return {
        a: item.goods_small_logo,
        b: common_vendor.t(item.goods_price),
        c: common_vendor.t(item.goods_number),
        d: common_vendor.t(item.goods_name),
        e: item.goods_id,
        f: common_vendor.o(($event) => $options.navigator(item.goods_id), item.goods_id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/components/goods-list/goods-list.vue"]]);
wx.createComponent(Component);
