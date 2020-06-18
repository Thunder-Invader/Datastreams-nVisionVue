<template>
<div>
  <div class="background">
  <div class="wrapper">
      <div class="navigation">
              <div><img class="logo" alt="Datastreams logo" src="./assets/img/Datastreams_logo.png"></div>
              <ul>                
                  <li><router-link to="/Dashboard"><i class="fas"></i><img class="icon" src="./assets/img/dashboard.svg">Dashboard</router-link></li>
                  <li><router-link to="/Documents"><i class="fas"></i><img class="icon" src="./assets/img/documents.svg">Documenten</router-link></li>
                  <li><a href="#"><i class="fas"></i><img class="icon" src="./assets/img/messages.svg">Berichten</a></li>
                  <li><a href="#"><i class="fas"></i><img class="icon" src="./assets/img/sources.svg">Bronnen</a></li>
                  <li><router-link to="/Sending"><i class="fas"></i><img class="icon" src="./assets/img/share.svg">Bestanden delen</router-link></li>                  
              </ul> 
              <div class="log_out">
                <a href="#"><i Name="fab"></i>Uitloggen<img class="out" src="./assets/img/log_out.svg"></a>
              </div>
      </div>
          <div>
            <router-view/>
          </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
@import "./scss/_toplevel.scss";
</style>
