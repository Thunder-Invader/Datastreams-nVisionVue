<template>
  <Container title="Bestanden delen">
    <div>
      <h2>Sending test</h2>
      <SendingFiles/>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import SendingFiles from '../components/SendingFiles.vue'
//import AddDetails from '../components/AddDetails.vue'
//import DetailCheck from '../components/DetailCheck.vue'
//import Confirmation from '../components/Confirmation.vue'

export default {
  name: 'SendingPage',
  components: {
    Container,
    SendingFiles,
    //AddDetails,
    //DetailCheck,
    //Confirmation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
