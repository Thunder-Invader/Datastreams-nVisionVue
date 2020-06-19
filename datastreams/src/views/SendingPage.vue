<template>
  <Container title="Bestanden delen">
    <div class="window">
      <SendingFiles v-show="sending"/>
      <AddDetails v-show="details"/>
      <DetailCheck v-show="check"/>
      <Confirmation v-show="confirm"/>
      <div class="next">
      <button class= "btn-primary" v-show="sending" @click="firstStep">Volgende</button>
      <button class= "btn-primary" v-show="details" @click="secondStep">Volgende</button>
      <button class= "btn-primary" v-show="check" @click="thirdStep">Volgende</button>     
      <button class= "btn-primary" v-show="confirm"><router-link class="path" to="/Dashboard">Terug naar dashboard</router-link></button>
      </div>
      <div class="back">
        <button class= "btn-primary" v-show="details" @click="backOne">terug</button>
        <button class= "btn-primary" v-show="check" @click="backTwo">terug</button>
      </div>
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
  .window{
    position: relative;
    width: 78vw;
    height: 83vh;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .next{
    position: absolute;
    bottom: calc(0% - 17.5px);
    right: 120px;
  }

  .back{
    position: absolute;
    bottom: calc(0% - 17.5px);
    right: 340px;
  }
</style>
