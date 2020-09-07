<template>
	<cu-custom bgColor="bg-gradual-blue" :isBack="true">
		<block slot="backText"></block>
		<block slot="content">课表</block>
	</cu-custom>
	<u-calendar v-model="show" :mode="mode"></u-calendar>
	<u-button @click="show = true">打开</u-button>
</template>

<script>
	export default {
			data() {
				return {
					show: false,
					mode: 'date'
				}
			}
		}
</script>

<style>
</style>
