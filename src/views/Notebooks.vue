<template>
  <p>Here be notebooks</p>
	<div v-for="n in 10" :key="n">
		<SingleNotebook :n="n" />
	</div>
</template>

<script>
import SingleNotebook from '../components/SingleNotebook.vue'

export default {
	components: { SingleNotebook }
}
</script>

<style>

</style>