<template>
  <Container title="Documenten">
    <h1>Documenten</h1>
    <div>   
    </div>
    <FilterBlock/>
    <DocumentBlock/>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import FilterBlock from '../components/FilterBlock.vue'
import DocumentBlock from '../components/DocumentBlock.vue'


export default {
  name: 'DocumentsPage',
  components: {
    Container,
    FilterBlock,
    DocumentBlock
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
