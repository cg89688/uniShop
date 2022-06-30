<template>
	<!-- 首页 -->
	<view class="home">
		<!-- 轮播图 -->
		<swiper class="swiper" indicator-dots autoplay circular="true">
			<swiper-item v-for="item in imageList" :key="item.id">
				<image :src="item.image_src"></image>
			</swiper-item>			
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in nvalist" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goodList" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				imageList:[],
				nvalist:[
					{
						icon:'iconfont icon-ziyuan',
						title:'CShop超市',
						path:'/pages/goods/goods?cid='
					},
					{
						icon:'iconfont icon-tupian',
						title:'商品类型',
						path:'/pages/category/category'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'关于我们',
						path:'/pages/contact/contact'
					}
				],
				goodList:[]
			}
		},
		methods: {
			async getSwiperImage(){
				const res = await this.$myRequest({
					url:'home/swiperdata'
				})
				this.imageList = res.data.message
			},
			async getGoodsList(){
				const res = await this.$myRequest({
					url:'goods/search'
				})
				this.goodList = res.data.message.goods.filter(function(item) {return item.goods_small_logo !== ''})
			},
			navItemClick(url){
				uni.navigateTo({
					url:url
				})
			},
			async goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods/goodsDetail?goods_id='+id
				})
			}
		},
		onLoad() {
			this.getSwiperImage()
			this.getGoodsList()
		}
	}
</script>

<style lang="scss">
	.home{
		.swiper{
			width:750rpx;
			height: 380rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		
		.nav{
			display: flex;
			justify-content: space-between;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					margin: 10px auto;
					line-height: 120rpx;
					background: $shop-color;
					font-size: 50rpx;
					color: #fff;
					border-radius: 60rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				margin: 10rpx auto;
				line-height: 50px;
				font-size: 48rpx;
				text-align: center;
				letter-spacing: 20px;
				color: $shop-color;
				background: #fff;
			}
		}
	}
</style>
