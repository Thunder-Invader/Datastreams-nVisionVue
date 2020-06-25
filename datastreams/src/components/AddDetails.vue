<template>
  <div class="wrapper">
    <div class="component_adddetails">
      <h4 class="component-title title-blob">
        Bericht Toevoegen
      </h4>
      <div class="component bericht">
        <form>
            <div class="info">
              <input class="fname" type="text" name="name" placeholder="Onderwerp">
              <img src="../assets/img/textarea.png" class="imgtext">
              <textarea class="textarea"></textarea>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddDetails',
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../scss/_toplevel.scss";

  .component_adddetails {
    margin-top: 5rem;
    margin-left: 6rem;
  }

  form{
    width: 800px;
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
    width: 450px;
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
  .textarea{
    width: 750px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 300px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .imgtext{
    width: 700px;
  }

</style>