<template>
      <div class="container">
          <h1>{{ title }}</h1>
          <slot></slot>
      </div>
</template>

<script>
export default {
  name: 'Container',
  props: ['title'],
  template: '<h1>{{ title }}</h1>'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
margin-left: 200px;
}
</style>
