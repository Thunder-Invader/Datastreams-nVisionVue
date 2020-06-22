<template>
  <div class=documents>
    <h2>Loonstroken</h2>
    <div class=documents__files>
    <fileblock/>
    <fileblock/>
    <fileblock/>
    </div>
    <h2>Jaaropgaven</h2>
    <div class=documents__yearfiles>
      <fileblock/>
    </div>
  </div>
</template>

<script>
import fileblock from '../components/FileBlock.vue'
import { files } from "../demodata/Files";

export default {
  name: 'DocumentBlock',
  components: {
    fileblock
  },
  props: {
  },
    data: () => ({
    files: files
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.documents{
  margin-top: 20px;
}

.documents__files{
  display: flex;
  flex-wrap: wrap;
  max-height: 466px;
  min-height: 466px;
  max-width: 1080px;
  min-width: 1080px;
}

.documents__yearfiles{
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  min-width: 1080px;
  max-height: 466px;
}
</style>
