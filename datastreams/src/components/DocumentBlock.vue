<template>
  <div class=documents>
    <h2 class=documents__title>Loonstroken</h2>
    <div class=documents__files>
      <fileblock 
        v-for="file in files"
        :key="file.files"
        :id="file.id" 
        :job="file.job"
        :date="file.date"
        :type="file.type"  
        :color="file.color"
      />
    </div>
    <h2 class=documents__title>Jaaropgaven</h2>
    <div class=documents__yearfiles>
      <fileblock 
        v-for="yearfile in yearfiles"
        :key="yearfile.yearfiles"
        :id="yearfile.id" 
        :job="yearfile.job"
        :date="yearfile.date"
        :type="yearfile.type"
        :color="yearfile.color"
      />
    </div>
  </div>
</template>

<script>
import fileblock from '../components/FileBlock.vue'
import { files } from "../demodata/Files";
import { yearfiles } from "../demodata/Files";

export default {
  name: 'DocumentBlock',
  components: {
    fileblock
  },
  props: {
  },
    data: () => ({
    files: files,
    yearfiles: yearfiles
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.documents__title{
  margin-top: 20px;
}

.documents__files{
  display: flex;
  flex-wrap: wrap;
  max-height: 466px;
  min-height: 466px;
  max-width: 1280px;
  min-width: 1280px;
}

.documents__yearfiles{
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  min-width: 1080px;
  max-height: 466px;
}
</style>
