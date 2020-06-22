<template>
  <div class="dashboard__component">
          <h4 class="dashboard__component__title title-blob">
            Verwijderde deellinks
          </h4>
          <div class="dashboard__component__items">
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                ik
              </div>
              <div class="dashboard__component__items__item__content">
                Loonstrook Ikea december
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--blue">
                sl
              </div>
              <div class="dashboard__component__items__item__content">
                Studielening 2019
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--gray">
                ju
              </div>
              <div class="dashboard__component__items__item__content">
                Jaaropgave 2019
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                cv
              </div>
              <div class="dashboard__component__items__item__content">
                CV pdf voor sollicitatie
              </div>
            </div>
          </div>
          <router-link to="/Documents">
            <button class="dashboard__component__action btn-primary">
                Ga naar deellinks
            </button>
          </router-link>
        </div>
</template>

<script>
export default {
  name: 'shareLinks',
  props: {
  }
}
</script>

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>

