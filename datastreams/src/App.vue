<template>
<div>
  <div class="background">
  <div class="wrapper">
      <div class="navigation">
              <h2>Datastreams</h2>
              <ul>                
                  <li><router-link to="/Dashboard"><i class="fas"></i>Dashboard</router-link></li>
                  <li><router-link to="/Documents"><i class="fas"></i>Documenten</router-link></li>
                  <li><a href="#"><i class="fas"></i>Berichten</a></li>
                  <li><a href="#"><i class="fas"></i>Bronnen</a></li>
                  <li><router-link to="/Sending"><i class="fas"></i>Bestanden delen</router-link></li>                  
              </ul> 
              <div className="log_out">
                <a href="#"><i Name="fab"></i>Uitloggen</a>
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
