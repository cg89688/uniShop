<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.goods_id" @click="navigator(item.goods_id)">
			<image :src="item.goods_small_logo"></image>
			<view class="pric">
				<text>￥{{item.goods_price}}</text>
				<text>￥{{item.goods_number}}</text>
			</view>
			<view class="goodsname">{{item.goods_name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods-list",
		data() {
			return {
				
			};
		},
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods_item{
		width: 355rpx;
		margin: 10rpx auto;
		background: #fff;
		padding: 15rpx;
		box-sizing: border-box;
		image{
			width: 90%;
			height: 150px;
			margin: auto;
			display: block;
		}
		.pric{
			margin-bottom: 5rpx;
			font-size: 36rpx;
			color: $shop-color;
			text:nth-child(2){
				margin-left: 17rpx;
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}
		.goodsname{
			font-size: 28rpx;
			line-height: 50rpx;
			padding: 10rpx 0 15rpx 0;
		}
	}
}
</style>