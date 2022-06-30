<template>
	<view class="category">
		<scroll-view class="category_items" scroll-y>
			<view class="category_itme" :class="currentSelect===index?'isActive':''" v-for="(item,index) in categorys" :key="item.cat_id" @click="categorySelct(index,item)">{{item.cat_name}}</view>
		</scroll-view>
		<!--  -->
		<scroll-view class="category_goods"  scroll-y> 
			<view class="category_goods" v-for="(item,index) in categoryChild" :key="item.cat_id">
				<view class="child_name">{{item.cat_name}}</view>
				<view class="category_child">
					<view class="child_goods" v-for="good in item.children" :key="good.cat_id" @click="getCategoryGoods(good.cat_id)">
						<image :src="good.cat_icon"></image>
						<view class="name">{{good.cat_name}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentSelect:0,
				categorys:[],
				categoryChild:[]
			}
		},
		methods: {
			async getCategoriges(){
				const res = await this.$myRequest({
					url:'categories'
				})
				this.categorys = res.data.message
				this.categoryChild = res.data.message[0].children
			},
			categorySelct(index,item){
				this.currentSelect = index
				this.categoryChild = item.children
			},
			getCategoryGoods(cateid){
				uni.navigateTo({
					url:'../goods/goods?cid='+cateid,
				})
			}
		},
		onLoad() {
			this.getCategoriges()
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.category{
	display: flex;
	justify-content: space-between;
	height: 100%;
	.category_items{
		width: 200rpx;
		box-sizing: border-box;
		border-right: solid 1px #eee;
		.category_itme{
			line-height: 100rpx;
			text-align: center;
			font-size: 30rpx;
			border-top: solid 1px #eee;
		}
		.isActive{
			background: $shop-color;
			color: #fff;
		}
	}
	.category_goods{
		background: #eee;
		width: 540rpx;
		text-align: center;
		.child_name{
			margin-top: 2rpx;
			line-height: 60rpx;
			font-size: 30rpx;
			background: $shop-color;
			color: #fff;
			border-bottom: solid 1px #ccc;
		}
		.category_child{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			background: #eee;
			.child_goods{
				margin: 10rpx 10rpx;
				background: #fff;
				image{
					width: 240rpx;
					height: 240rpx;
				}
				.name{
					font-size: 28rpx;
					padding-bottom: 10rpx;
				}
			}
		}
	}
}
</style>
