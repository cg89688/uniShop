<template>
	<view class="goods_list">
		<goods-list :goods="goodList" @goodsItemClick="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">----------已无数据----------</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cid:'',
				pagenum:1,
				pagesize:20,
				goodList:[],
				flag:false
			}
		},
		methods: {
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'goods/search',
					data:{
						cid:this.cid,
						pagenum:this.pagenum,
						//pagesize:this.pagesize
					}
				})
				const goods = res.data.message.goods//.filter(function(item) {return item.goods_small_logo !== ''})
				if(goods.length <= 0){
					this.flag = true
				}
				goods.map((item)=>{this.goodList.push(item)})
				callBack && callBack()
			},
			async goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods/goodsDetail?goods_id='+id
				})
			}
		},
		onLoad(options){
			this.cid = options.cid
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pagenum = 1
			this.flag = false
			this.goodList.splice(0,this.goodList.length)
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		},
		onReachBottom(){
			if(this.flag) return
			this.pagenum=this.pagenum * 1000
			this.getGoodsList()
		}
	}
</script>

<style lang="scss">
.goods_list{
	background: #eee;
	
	.isOver{
		line-height: 50px;
		text-align: center;
		color: gray;
	}
}
</style>
