<template>
      <div class="container">
        <div class="header">
          <h1>{{ title }}</h1>
          <slot></slot>
        </div>
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
padding-left: 273px;
}

.header{
  padding-left: 65px;
  padding-top: 70px;
}
</style>
