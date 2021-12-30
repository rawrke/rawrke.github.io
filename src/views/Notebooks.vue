<template>
	<div class="notebooks">
		<p>Here be notebooks</p>
		<div v-for="n in 10" :key="n">
			<SingleNotebook :n="n" />
		</div>
	</div>
</template>

<script>
import SingleNotebook from '../components/SingleNotebook.vue'

export default {
	components: { SingleNotebook }
}
</script>

<style>
/* TODO: Figure out global style */
/* .notebooks {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
p {
  border-bottom: 3px double #3e4750;
  display: inline-flex;
  padding-bottom: 5px;
  height:auto;
} */
</style>