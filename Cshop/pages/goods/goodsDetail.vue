<template>
	<view class="goods_item">
		<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
			<swiper-item v-for="(img,index) in item.pics" :key="img.pics_id" @click="previewImage(index)">
				<image class="image" :src="img.pics_big"></image>
			</swiper-item>
		</swiper>
		<view class="pric">
			<text>￥{{item.goods_price}}</text>
			<text>数量:{{item.goods_number}}</text>
		</view>
		<view class="name">{{item.goods_name}}</view>
		<view class="line"></view>
		<view class="attr" v-show="item.attrs !== ''">
			<view class="tit">商品参数</view>
			<view class="attr_item" v-for="attr in item.attrs" :key="attr.attr_id">
				<text>{{attr.attr_name}}：</text>
				<text>{{attr.attr_value}}</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="introduce">
			<view class="tit">商品详情</view>
			<rich-text :nodes="item.goods_introduce"></rich-text>
		</view>
		<view class="good_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item:{},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, 
					{
						icon: 'shop',
						text: '店铺'
					}, 
					{
						icon: 'cart',
						text: '购物车',
						info: 2
					}],
					buttonGroup: [
						{
						  text: '加入购物车',
						  backgroundColor: '#ff0000',
						  color: '#fff'
						},
						{
						  text: '立即购买',
						  backgroundColor: '#ffa200',
						  color: '#fff'
						}
					]
				}
		},
		methods: {
			async getGoodsDetail(id){
				const res = await this.$myRequest({
					url:'goods/detail?goods_id='+id
				})
				this.item = res.data.message
			},
			previewImage(index){
				uni.previewImage({
					current:index,
					urls:this.item.pics.map(function(item){return item.pics_big})
				})
			},
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(options){
			this.getGoodsDetail(options.goods_id)
		}
	}
</script>

<style lang="scss">
.goods_item{
	.swiper{
		width: 750rpx;
		height: 700rpx;
		.image{
			width: 100%;
			height: 100%;
		}
	}
	
	.pric{
		font-size: 38rpx;
		color: $shop-color;
		line-height: 80rpx;
		text:nth-child(2){
			color: #ccc;
			font-size: 28rpx;
			margin-left: 20rpx;
		}
	}
	.name{
		font-size: 32rpx;
		line-height: 60rpx;
	}
	.line{
		height: 10rpx;
		background: #eee;
	}
	.tit{
		text-align: center;
		font-size: 38rpx;
		line-height: 80rpx;
		border-bottom: solid 1px #ccc;
	}
	.attr_item{
		font-size: 28rpx;
		line-height: 58rpx;
		border-bottom: solid 1px #eee;
		text:nth-child(2){
			margin-left: 10rpx;
			color: gray;
		}
	}
	.introduce{
		padding-bottom: 50px;
	}
	.good_nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>
