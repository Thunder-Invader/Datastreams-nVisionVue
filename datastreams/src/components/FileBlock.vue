<template>
      <div class="file">
          <div class="file__icon">
              <div class="file__icon__text">JU</div>
          </div>
            <div class="file__type">
                <img class="file__type__image" alt="File type" src="../assets/img/pdf.png">
            </div>
            <div class="file__name">
                <p>Loonstrook test</p>
                <p>datum</p>
            </div>
      </div>
</template>

<script>
export default {
  name: 'FileBlock',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_toplevel.scss";

.file{
margin: 20px 25px 25px 0px;
position: relative;
width: 200px;
height: 200px;
background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
}

.file__icon{
position: absolute;
right: 0px;
width: 40px;
height: 40px;
background-color: $green-tile;
border-radius: 0px 12px 0px 5px;
}

.file__icon__text{
text-align: center;
padding: 5px;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: white;
}

.file__type{
position: absolute;
padding: 50px 0px 0px 57px;
}

.file__name{
position: absolute;
margin-left: 17px;
margin-bottom: 4px;
bottom: 0px;
}

</style>