import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faPlay,
	faStop,
	faPause,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

library.add(faPlay, faStop, faPause, faPlus);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
