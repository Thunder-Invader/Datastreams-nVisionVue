<template>
  <Container>
    <div id="index">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'index',
  components: {
      Container,
      HelloWorld
  }
}
</script>

<style>

</style>
