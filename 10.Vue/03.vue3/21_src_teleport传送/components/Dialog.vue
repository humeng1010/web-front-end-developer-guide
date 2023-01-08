<template>
	<div>
		<button @click="isShow = true">点我弹出</button>
		<!-- 使用 teleport 可以让里面的结构进行传送到指定的选择器中 -->
		<teleport to='body'>
			<div class="mask" v-if="isShow" @click.self="isShow = false">
				<div class="dialog">
					<h3>我是弹窗</h3>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<h4>一些内容</h4>
					<button @click="isShow = false">关闭弹窗</button>
					<p>或者点击背景关闭弹窗</p>
				</div>
			</div>
		</teleport>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'Dialog',
	setup() {
		let isShow = ref(false)

		return { isShow }
	}
}
</script>

<style scoped>
.dialog {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	max-width: 400px;
	/* height: 300px; */
	background-color: skyblue;
}

.mask {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
}
</style>