<template>
  <div class="dashboard__component">
          <h4 class="dashboard__component__title title-blob">
            Bekeken door ontvanger
          </h4>
          <div class="dashboard__component__items">
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--blue">
                gj
              </div>
              <div class="dashboard__component__items__item__content">
                RE: Hypoleen lening aanvragen
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--gray">
                gj
              </div>
              <div class="dashboard__component__items__item__content">
                Hypoleen heeft bestanden gedownload
              </div>
            </div>
            <div class="dashboard__component__items__item">
              <div class="dashboard__component__items__item__sender dashboard__component__items__item__sender--green">
                gj
              </div>
              <div class="dashboard__component__items__item__content">
                Hypoleen heeft u een bericht gestuurd
              </div>
            </div>
          </div>
          <router-link to="/Messages">
            <button class="dashboard__component__action btn-primary">
                Ga naar mijn berichten
            </button>
          </router-link>
        </div>
</template>

<script>
export default {
  name: 'viewedByReciever',
  props: {
  }
}
</script>

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>

