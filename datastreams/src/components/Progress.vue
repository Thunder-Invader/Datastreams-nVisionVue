<template v-show="sending">
  <div class="wrapper">
 
    <div class="component_progress">
      <div class="progress_circle" v-bind:class="[stage<1 && 'unactive']">
        <div class="progress_circle_text">1</div>
        <div class="progress_currenttask" v-bind:class="[stage!=1 && 'hidden']">Selecteer de ontvanger</div>
      </div>
      <hr class="progress_line" v-bind:class="[stage<2 && 'unactive']">
      <div class="progress_circle" v-bind:class="[stage<2 && 'unactive']">
        <div class="progress_circle_text">2</div>
        <div class="progress_currenttask" v-bind:class="[stage!=2 && 'hidden']">Berichten en bestanden toevoegen</div>
      </div>
      <hr class="progress_line" v-bind:class="[stage<3 && 'unactive']">
      <div class="progress_circle" v-bind:class="[stage<3 && 'unactive']">
        <div class="progress_circle_text">3</div>
        <div class="progress_currenttask" v-bind:class="[stage!=3 && 'hidden']">Gegevens controleren</div>
      </div>
    </div>
    </div>
   
</template>

<script>
  export default {
    name: 'ReceiverAdd',
    props: [
      'stage'
    ]
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/_toplevel.scss";

  .component_progress {
    margin: 0 auto;
    padding-top: 25px;
  }

  .progress_currenttask{
    position: absolute;
    font-weight: bold;
    margin-top: 30px;
    margin-left: -6%;
    color: grey;
    font-size: 16px;
  }

  .progress_circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: $primary-blue;
    display: inline-block;
  }

  .progress_circle_text {
    text-align: center;
    color: white;
    font-weight: bold;
    margin-top: 15px;
  }

  .unactive{
    opacity: 0.2;
  }

  .hidden {
    visibility: hidden;
  }

  .progress_line{
    display: inline-block;
    border-top: 1px solid grey;
    width: 100px;
    margin-bottom: 4px;
  }

  
</style>