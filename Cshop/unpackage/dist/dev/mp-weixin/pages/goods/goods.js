"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cid: "",
      pagenum: 1,
      pagesize: 20,
      goodList: [],
      flag: false
    };
  },
  methods: {
    async getGoodsList(callBack) {
      const res = await this.$myRequest({
        url: "goods/search",
        data: {
          cid: this.cid,
          pagenum: this.pagenum
        }
      });
      const goods = res.data.message.goods;
      if (goods.length <= 0) {
        this.flag = true;
      }
      goods.map((item) => {
        this.goodList.push(item);
      });
      callBack && callBack();
    },
    async goGoodsDetail(id) {
      common_vendor.index.navigateTo({
        url: "/pages/goods/goodsDetail?goods_id=" + id
      });
    }
  },
  onLoad(options) {
    this.cid = options.cid;
    this.getGoodsList();
  },
  onPullDownRefresh() {
    this.pagenum = 1;
    this.flag = false;
    this.goodList.splice(0, this.goodList.length);
    setTimeout(() => {
      this.getGoodsList(() => {
        common_vendor.index.stopPullDownRefresh();
      });
    }, 1e3);
  },
  onReachBottom() {
    if (this.flag)
      return;
    this.pagenum = this.pagenum * 1e3;
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
  return common_vendor.e({
    a: common_vendor.o($options.goGoodsDetail),
    b: common_vendor.p({
      goods: $data.goodList
    }),
    c: $data.flag
  }, $data.flag ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HXProjects/vthinkshop/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
