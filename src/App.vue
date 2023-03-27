<template>
	<div class="app">
		<timer-list />
	</div>
</template>

<script>
import TimerList from './components/TimerList.vue';

export default {
	components: {
		TimerList,
	},
};
</script>

<style>
* {
	margin: 0;
	box-sizing: border-box;
}

body {
	background-color: #353638;
	height: 100vh;
}
</style>
