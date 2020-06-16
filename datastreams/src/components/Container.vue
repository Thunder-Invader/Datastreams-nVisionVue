<template>
      <div class="container">
          <h1>{this.props.title}</h1>
      </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
margin-left: 200px;
}
</style>
