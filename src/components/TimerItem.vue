<template>
	<div class="timer-item">
		<div class="display">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
		<div class="buttons">
			<button
				class="button"
				@click="onStartClick"
				v-if="this.togglePlayPause === false"
			>
				<font-awesome-icon :icon="['fas', 'play']" size="2xl" />
			</button>
			<button
				class="button"
				@click="onStartClick"
				v-if="this.togglePlayPause === true"
			>
				<font-awesome-icon :icon="['fas', 'pause']" size="2xl" />
			</button>
			<button class="button" @click="onStopClick">
				<font-awesome-icon :icon="['fas', 'stop']" size="2xl" />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			seconds: 0,
			minutes: 0,
			hours: 0,
			interval: null,
			togglePlayPause: false,
		};
	},
	methods: {
		onStartClick() {
			if (this.togglePlayPause === false) {
				this.interval = setInterval(this.incrementSeconds, 1000);
			} else {
				clearInterval(this.interval);
			}
			this.togglePlayPause = !this.togglePlayPause;
		},
		onStopClick() {
			clearInterval(this.interval);
			this.togglePlayPause = false;
			this.seconds = 0;
			this.minutes = 0;
			this.hours = 0;
		},
		incrementSeconds() {
			this.seconds++;
			if (this.seconds === 60) {
				this.minutes++;
				this.seconds = 0;
				if (this.minutes === 60) {
					this.hours++;
					this.minutes = 0;
				}
			}
		},
	},
};
</script>

<style>
.timer-item {
	max-width: 225px;
	min-height: 120px;
	background-color: #ffffff;
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	gap: 1px;
}

.display {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #696969;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 22px;
	color: #ffffff;
}

.buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	background-color: #696969;
}

.button {
	background-color: inherit;
	border: none;
	color: #ffffff;
}
</style>
