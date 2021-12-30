<template>
  <div class="contact">
    <a :href="url">
      <img :src="social" alt="">
    </a>
  </div>
</template>

<script>
export default {
  props: ['social', 'url']
}
</script>

<style>
.contact {
  top: 200px;
  margin: 20px auto;
  background: #2a2f30;
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 1px 10px 2px #ad6a1d80;
  animation-name: zoom;
  animation-duration: 2s;
  animation-direction: alternate;
  width: 100px;
  background-color: #da7707;
  position: relative;
  animation-name: zoom;
  animation-duration: 0.5s;
}

@keyframes zoom {
  0%   {top:800px;}
  75%  {top:150px;}
  100% {top:200px;}
}
</style>