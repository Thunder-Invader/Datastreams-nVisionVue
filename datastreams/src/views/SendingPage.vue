<template>
  <Container title="Bestanden delen">
    <h1>Bestanden delen met ontvanger</h1>
    <div class="window">
      <Progress :stage=progressStage />
      <div class="wrapper1">
        <ReceiverAdd v-show="sending" />
        <SelectReceiver v-show="sending" />
      </div>
      <div class="wrapper1">
        <div class="wrapperleft">
        <AddDetails v-show="details" />
        </div>
        <div class="wrapperright">
          <AddDocs v-show="details" />
          <img class="plus" src="../assets/img/AddWidget.png" v-show="details">
          <Privacy v-show="details" />
        </div>
      </div>
      <div class="wrapper1">
        <div class="wrapperleft">
        <CompletedMsg v-show="check" />
        </div>
        <div class="wrapperright">
          <AddDocs v-show="check" />
          <Privacy v-show="check" />
        </div>
      </div>
      <Confirmation v-show="confirm" />
      <div class="next">
        <button class="btn-primary" v-show="sending" @click="firstStep">Volgende</button>
        <button class="btn-primary" v-show="details" @click="secondStep">Volgende</button>
        <button class="btn-primary" v-show="check" @click="thirdStep">Volgende</button>
        <button class="btn-primary" v-show="confirm">
          <router-link class="path" to="/Dashboard">Terug naar dashboard</router-link>
        </button>
      </div>
      <div class="back">
        <button class="btn-primary" v-show="details" @click="backOne">Terug</button>
        <button class="btn-primary" v-show="check" @click="backTwo">Terug</button>
      </div>
    </div>
  </Container>
</template>
<script>
  import Container from '../components/Container.vue'
  import ReceiverAdd from '../components/ReceiverAdd.vue'
  import AddDetails from '../components/AddDetails.vue'
  import CompletedMsg from '../components/CompletedMsg.vue'
  import Confirmation from '../components/Confirmation.vue'
  import Progress from '../components/Progress.vue'
  import SelectReceiver from '../components/SelectReceiver.vue'
  import AddDocs from '../components/AddDocs.vue'
  import Privacy from '../components/Privacy.vue'

export default {
  name: 'SendingPage',
  components: {
    Container,
    ReceiverAdd,
    AddDetails,
    Confirmation,
    Progress,
    SelectReceiver,
    AddDocs,
    Privacy,
    CompletedMsg
  },
  data() {
          return {
                sending: true,
                details: false,
                check: false,
                confirm: false,
                progressStage: 1
            };
        },
        methods: {
            firstStep() {
                this.details = true;
                this.sending = false;
                this.progressStage = 2;
            },
            backOne() {
                this.sending = true;
                this.details = false;
                this.progressStage = 1;
            },
            secondStep() {
                this.check = true;
                this.details = false;
                this.progressStage = 3;
            },
            backTwo() {
                this.details = true;
                this.check = false;
                this.progressStage = 2;
            },
            thirdStep() {
                this.confirm = true;
                this.check = false;
            }
      }
    };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/_toplevel.scss";

  .window {
    margin-top: 1rem;
    position: relative;
    width: 78vw;
    height: 83vh;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .next {
    position: absolute;
    bottom: calc(0% - 17.5px);
    right: 120px;
  }

  .back {
    position: absolute;
    bottom: calc(0% - 17.5px);
    right: 340px;
  }

  .wrapper1 {
    display: flex;
    flex-direction: row;
  }
  
  #wrapperright{
    display: flex;
    flex-direction: column;
 
  }
  .plus{
    width: 50px;
    margin-left: 200px;
    margin-top: 10px;
    position: relative;
  }
  
</style>