<template>
  <div class="documents">
    <h2 class="documents__title">Loonstroken</h2>
    <div class="documents__files">
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
    <h2 class="documents__title">Jaaropgaven</h2>
    <div class="documents__yearfiles">
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

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>
