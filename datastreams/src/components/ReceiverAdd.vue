<template>
  <div class="wrapper">
    <div class="component_receiveradd">
      <h4 class="component-title title-blob">
        Nieuwe ontvanger toevoegen
      </h4>
      <div class="component ontvanger">
        <div class="ontvanger_list">
          <form>
            <div class="info">
              <input class="fname" type="text" name="name" placeholder="Naam Ontvanger">
              <input type="text" name="name" placeholder="e-mail ontvanger">
              <input type="text" name="name" placeholder="Bedrijf">
              <input type="text" name="name" placeholder="Telefoon nummer">
              <input type="text" name="name" placeholder= "Gegevens ontvanger">
            </div>
            <button class= "btn-primary btn-form">Contact opslaan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReceiverAdd',
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/_toplevel.scss";
  form{
    width: 500px;
  }

  .left-part {
    text-align: center;
  }

  .fa-graduation-cap {
    font-size: 72px;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  input,
  select {
    padding: 5px;
    margin-bottom: 30px;
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
  }

  input::placeholder {
    color: grey;
  }

  option:focus {
    border: none;
  }

  option {
    background: black;
    border: none;
  }

  .checkbox input {
    margin: 0 10px 0 0;
    vertical-align: middle;
  }

  .checkbox a {
    color: #26a9e0;
  }

  .checkbox a:hover {
    color: #85d6de;
  }

  .component_receiveradd {
    margin-top: 5rem;
    margin-left: 6rem;
  }
  .btn-form{
    margin-left: 300px;
  }
</style>