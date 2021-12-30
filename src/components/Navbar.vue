<template>
	<nav class="main-nav">
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'Projects' }">Projects</router-link>
		<router-link :to="{ name: 'Notebooks' }">Notebooks</router-link>
		<router-link :to="{ name: 'Contact' }">Contact</router-link>
		<router-link v-if="showOther" :to="{ name: 'Other' }">Other</router-link>
	</nav>
</template>

<script>
export default {
  props: ['showOther'],
}
</script>

<style>
.main-nav {
	text-align: center;
	margin: 40px auto;
}
.main-nav a{
	display: inline-block;
	text-decoration: none;
	margin: 0 10px;
	color: #999;
	font-size: 18px;
}
a.router-link-active {
	border-bottom: 2px solid #da7707;
	padding-bottom: 4px;
}
</style>