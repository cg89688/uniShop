<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：{{17726637582}}(点击拨打)</view>
			<view>地址：重庆市北碚区双元大道196号(状元碑地铁站2C口步行440米)</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers" show-compass></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:29.805286,
				longitude:106.395628,
				covers: [{
					latitude:29.805286,
					longitude:106.395628,
					iconPath: '../../static/Login_background.jpg',
					width:30,
					height:30
				}]
			};
		},
		methods:{
			phone(){
				uni.makePhoneCall({
					phoneNumber:17726637582
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 100%;
		height: 320rpx;
	}
	.info{
		line-height: 80rpx;
		font-size: 30rpx;
		view{
			border-bottom: solid 1rpx #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
