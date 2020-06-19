<template>
      <div class="container">
          <slot></slot>
      </div>
</template>

<script>
export default {
  name: 'Container',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  padding: 70px 65px;
}

}
</style>
