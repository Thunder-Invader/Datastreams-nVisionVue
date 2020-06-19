<template>
<div>
  <div class="background">
  <div class="wrapper">
      <div class="navigation" v-bind:class="[!menuState ? 'navigation--collapsed' : 'navigation--expanded']">
              <div><img class="logo" alt="Datastreams logo" src="./assets/img/Datastreams_logo.png"></div>
              <ul>                
                  <router-link to="/Dashboard"><li><img class="icon" src="./assets/img/dashboard.svg">Dashboard</li></router-link>
                  <router-link to="/Documents"><li><img class="icon" src="./assets/img/documents.svg">Documenten</li></router-link>
                  <a href="#"><li><img class="icon" src="./assets/img/messages.svg">Berichten</li></a>
                  <a href="#"><li><img class="icon" src="./assets/img/sources.svg">Bronnen</li></a>
                  <router-link to="/Sending"><li><img class="icon" src="./assets/img/share.svg">Bestanden delen</li></router-link>                  
              </ul> 
              <div class="log_out">
                <a href="#">Uitloggen<img class="out" src="./assets/img/log_out.svg"></a>
              </div>
      </div>
      <div class="fade" v-bind:class="{'fade--active':menuState}" />   
          <div>
            <router-view/>
          </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
        return {
            menuState: false
        }
    },
  methods: {
    toggleMenu() {
      this.menuState ? this.menuState = false : this.menuState = true;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/_toplevel.scss";
</style>
