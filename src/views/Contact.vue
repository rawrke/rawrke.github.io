<template>
  <SingleContact :social="gitIcon" :url="gitUrl" />
  <SingleContact :social="linkedInIcon" :url="linkedInUrl" />
</template>

<script>
import SingleContact from '../components/SingleContact.vue'

export default {
  components: { SingleContact },
  data() {
    return {
      // require is necessary with Vue CLI for relative paths
      gitIcon: require('../assets/github-64px.png'),
      linkedInIcon: require('../assets/linkedin-64px.png'),
      gitUrl: 'https://github.com/rawrke',
      linkedInUrl: 'https://www.linkedin.com/in/evan-rourke/'
    }
  }
  
}
</script>

<style>
img {
  cursor: pointer;
}
</style>