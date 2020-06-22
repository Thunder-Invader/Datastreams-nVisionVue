<template>
  <Container title="Dashboard">
    <div id="index">
      <div class="dashboard">
        <addDocumentsDashboard/>
        <viewedByReciever/>
        <shareLinks/>
        <addWidgets/>
        <remindersDashboard/>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import addDocumentsDashboard from '../components/addDocumentsDashboard.vue'
import viewedByReciever from '../components/viewedByReciever.vue'
import shareLinks from '../components/shareLinks.vue'
import addWidgets from '../components/addWidgets.vue'
import remindersDashboard from '../components/remindersDashboard.vue'

export default {
  name: 'Dashboard',
  components: {
      Container,
      addDocumentsDashboard,
      viewedByReciever,
      shareLinks,
      addWidgets,
      remindersDashboard
  }
}
</script>

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>
