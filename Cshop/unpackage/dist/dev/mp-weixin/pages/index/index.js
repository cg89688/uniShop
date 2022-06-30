"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imageList: [],
      nvalist: [
        {
          icon: "iconfont icon-ziyuan",
          title: "CShop\u8D85\u5E02",
          path: "/pages/goods/goods?cid="
        },
        {
          icon: "iconfont icon-tupian",
          title: "\u5546\u54C1\u7C7B\u578B",
          path: "/pages/category/category"
        },
        {
          icon: "iconfont icon-shipin",
          title: "\u5B66\u4E60\u89C6\u9891",
          path: "/pages/videos/videos"
        },
        {
          icon: "iconfont icon-guanyuwomen",
          title: "\u5173\u4E8E\u6211\u4EEC",
          path: "/pages/contact/contact"
        }
      ],
      goodList: []
    };
  },
  methods: {
    async getSwiperImage() {
      const res = await this.$myRequest({
        url: "home/swiperdata"
      });
      this.imageList = res.data.message;
    },
    async getGoodsList() {
      const res = await this.$myRequest({
        url: "goods/search"
      });
      this.goodList = res.data.message.goods.filter(function(item) {
        return item.goods_small_logo !== "";
      });
    },
    navItemClick(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    async goGoodsDetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/goods/goodsDetail?goods_id=" + id
      });
    }
  },
  onLoad() {
    this.getSwiperImage();
    this.getGoodsList();
  }
};
if (!Array) {
  const _easycom_goods_list2 = common_vendor.resolveComponent("goods-list");
  _easycom_goods_list2();
}
const _easycom_goods_list = () => "../../components/goods-list/goods-list.js";
if (!Math) {
  _easycom_goods_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.imageList, (item, k0, i0) => {
      return {
        a: item.image_src,
        b: item.id
      };
    }),
    b: common_vendor.f($data.nvalist, (item, index, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $options.navItemClick(item.path))
      };
    }),
    c: common_vendor.o($options.goGoodsDetail),
    d: common_vendor.p({
      goods: $data.goodList
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
