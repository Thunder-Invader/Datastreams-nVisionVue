<template>
  <Container title="Bestanden delen">
    <div>
      <SendingFiles v-show="sending"/>
      <AddDetails v-show="details"/>
      <DetailCheck v-show="check"/>
      <Confirmation v-show="confirm"/>
      <button v-show="sending" @click="firstStep">Volgende</button>
      <button v-show="details" @click="secondStep">Volgende</button>
      <button v-show="details" @click="backOne">terug</button>
      <button v-show="check" @click="thirdStep">Volgende</button>
      <button v-show="check" @click="backTwo">terug</button>
      <button v-show="confirm"><router-link to="/Dashboard">Terug naar dashboard</router-link></button>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import SendingFiles from '../components/SendingFiles.vue'
import AddDetails from '../components/AddDetails.vue'
import DetailCheck from '../components/DetailCheck.vue'
import Confirmation from '../components/Confirmation.vue'

export default {
  name: 'SendingPage',
  components: {
    Container,
    SendingFiles,
    AddDetails,
    DetailCheck,
    Confirmation
  },
  data() {
          return {
                sending: true,
                details: false,
                check: false,
                confirm: false
            };
        },
        methods: {
            firstStep() {
                this.details = true;
                this.sending = false;
            },
            backOne() {
                this.sending = true;
                this.details = false;
            },
            secondStep() {
                this.check = true;
                this.details = false;
            },
            backTwo() {
                this.details = true;
                this.check = false;
            },
            thirdStep() {
                this.confirm = true;
                this.check = false;
            }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
