<script setup>
import HelloWorld from "./components/HelloWorld.vue";

const chromeVersion = versions.chrome();
const darkModeToggle = () => darkMode.toggle();
const darkModeSystem = () => darkMode.system();
const quit = () => electronApp.quit();
</script>

<template>
	<div>
		<button @click="quit()">Close</button>
		<button @click="darkModeToggle()">Toggle Dark Mode</button>
		<button @click="darkModeSystem()">Reset to System Theme</button>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<div>{{ chromeVersion }}</div>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
