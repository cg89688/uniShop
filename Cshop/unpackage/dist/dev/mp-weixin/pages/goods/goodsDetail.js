"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      item: {},
      options: [
        {
          icon: "headphones",
          text: "\u5BA2\u670D"
        },
        {
          icon: "shop",
          text: "\u5E97\u94FA"
        },
        {
          icon: "cart",
          text: "\u8D2D\u7269\u8F66",
          info: 2
        }
      ],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    };
  },
  methods: {
    async getGoodsDetail(id) {
      const res = await this.$myRequest({
        url: "goods/detail?goods_id=" + id
      });
      this.item = res.data.message;
    },
    previewImage(index) {
      common_vendor.index.previewImage({
        current: index,
        urls: this.item.pics.map(function(item) {
          return item.pics_big;
        })
      });
    },
    onClick(e) {
      common_vendor.index.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      console.log(e);
      this.options[2].info++;
    }
  },
  onLoad(options) {
    this.getGoodsDetail(options.goods_id);
  }
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.item.pics, (img, index, i0) => {
      return {
        a: img.pics_big,
        b: img.pics_id,
        c: common_vendor.o(($event) => $options.previewImage(index), img.pics_id)
      };
    }),
    b: common_vendor.t($data.item.goods_price),
    c: common_vendor.t($data.item.goods_number),
    d: common_vendor.t($data.item.goods_name),
    e: common_vendor.f($data.item.attrs, (attr, k0, i0) => {
      return {
        a: common_vendor.t(attr.attr_name),
        b: common_vendor.t(attr.attr_value),
        c: attr.attr_id
      };
    }),
    f: $data.item.attrs !== "",
    g: $data.item.goods_introduce,
    h: common_vendor.o($options.onClick),
    i: common_vendor.o($options.buttonClick),
    j: common_vendor.p({
      fill: true,
      options: $data.options,
      buttonGroup: $data.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/pages/goods/goodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
