<template>
	<div class="timer-list">
		<timer-item v-for="timer in timers" :id="id" />
		<button class="add-button" @click="addTimer">
			<font-awesome-icon :icon="['fas', 'plus']" size="2xl" />
		</button>
	</div>
</template>

<script>
import TimerItem from './TimerItem.vue';

export default {
	components: {
		TimerItem,
	},
	data() {
		return {
			timers: [],
		};
	},
	methods: {
		addTimer() {
			const newTimer = {
				id: Date.now(),
			};
			this.timers.push(newTimer);
		},
	},
};
</script>

<style>
.timer-list {
	max-width: 775px;
	padding-top: 70px;
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 50px;
}

.add-button {
	max-width: 225px;
	min-height: 120px;
	background-color: #696969;
	border: none;
	color: #ffffff;
}

@media screen and (max-width: 768px) {
	.timer-list {
		max-width: 500px;
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 510px) {
	.timer-list {
		max-width: 225px;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
