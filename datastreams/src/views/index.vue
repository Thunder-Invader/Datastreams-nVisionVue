<template>
  <Container title="Dashboard">
    <div id="index">
      <img alt="Vue logo" src="../assets/logo.png">
      <app-text msg="Welcome to Your Vue.js App"/>
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
      'app-text': HelloWorld
  }
}
</script>

<style>

</style>
