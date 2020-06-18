<template>
<div>
  <div class="background">
  <div class="wrapper">
      <div class="sidebar">
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

<style>
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  p {
    font-family: 'proxima-nova', sans-serif;
    font-size: 13px;
  }
  
  h1 {
    font-family: 'proxima-nova', sans-serif;
    font-weight: bold;
    font-size: 28px;
  }

  h2 {
    font-family: 'proxima-nova', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  li {
    font-family: 'proxima-nova', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  a {
    font-family: 'proxima-nova', sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  body{
    background-color: #E1E8F2;
  }


  .wrapper{
    display: flex;
    position: relative;
  }
  
  .wrapper .sidebar{
    width: 200px;
    height: 100%;
    background: #33617B;
    padding: 30px 0px;
    position: fixed;
  }
  
  .wrapper .sidebar h2{
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .wrapper .sidebar ul li{
    padding: 15px;
    border-bottom: 1px solid #cccccc;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    border-top: 1px solid rgba(255,255,255,0.05);
  }    
  
  .wrapper .sidebar ul li a{
    color: #ffffff;
    display: block;
  }
  
  .wrapper .sidebar ul li a .fas{
    width: 25px;
  }
  
  .wrapper .sidebar ul li:hover{
    background-color: rgba(255, 255, 255, 0.5);
  }
      
   
  .wrapper .sidebar .log_out{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  
  .wrapper .sidebar .log_out a{
    text-align: center;
    margin: 0 5px;
    color: #ffffff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  
  .wrapper .main_content{
    width: 100%;
    margin-left: 200px;
  }
  
  .wrapper .main_content .header{
    padding: 20px;
    background: #fff;
    color: #717171;
    border-bottom: 1px solid #e0e4e8;
  }
  
  .wrapper .main_content .info{
    margin: 20px;
    color: #717171;
    line-height: 25px;
  }
  
  .wrapper .main_content .info div{
    margin-bottom: 20px;
  }
</style>
