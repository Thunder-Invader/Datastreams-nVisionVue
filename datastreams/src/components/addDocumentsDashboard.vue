<template>
  <div class="dashboard__component">
          <h4 class="dashboard__component__title title-blob">
            Toegevoegde documenten
          </h4>
          <div class="dashboard__component__items">
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                ju
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Datastreams 04-2020
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                ju
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Datastreams 03-2020
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                ju
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Datastreams 02-2020
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--blue">
                ik
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Ikea 01-2020
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--blue">
                ik
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Ikea 12-2019
              </div>
            </div>
          </div>
          <router-link to="/Documents">
            <button class="dashboard__component__action btn-primary">
                Ga naar mijn documenten
            </button>
          </router-link>
        </div>
</template>

<script>
export default {
  name: 'addDocumentsDashboard',
  props: {
  }
}
</script>

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>

