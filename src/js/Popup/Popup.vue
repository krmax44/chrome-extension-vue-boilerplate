<template>
	<div>
		<h1>{{ msg }}</h1>
		<p>Current settings:</p>
		<p>{{ settings }}</p>
		<button @click="changeFoo">Change it</button>
		<p>Try inspecting the background view!</p>
	</div>
</template>

<script>
import Settings from '../Settings';

export default {
	data() {
		return {
			msg: 'Hello from Vue.js!',
			settings: {}
		}
	},
	created() {
		Settings.subscribe(settings => {
			this.settings = settings;
		}, true);
	},
	methods: {
		changeFoo() {
			const foo = prompt('Change settings to...', '');
			Settings.set({ foo });
		}
	}
}
</script>