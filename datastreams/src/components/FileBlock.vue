<template>
      <div class="file">
          <div class="file__icon"  v-bind:style="{ 'background-color': color }">
              <div class="file__icon__content">{{ id }}</div>
          </div>
            <div class="file__type">
                <img class="file__type__image" alt="File type" src="../assets/img/pdf.png">
            </div>
            <div class="file__name">
                <p>{{ type  }} {{ job }} {{ date }}</p>
            </div>
      </div>
</template>

<script>
export default {
  name: 'FileBlock',
  props: {
      id: String,
      job: String,
      date: String,
      type: String,
      color: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/_toplevel.scss";
</style>