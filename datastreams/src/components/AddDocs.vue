<template>
  <div class="dashboard__component1">
          <h4 class="dashboard__component__title title-blob">
            Toevoegen van bestanden
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
            
          </div>
        </div>
</template>

<script>
  export default {
    name: 'AddDocs',
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .dashboard__component1{
    margin-top: 5rem;
    margin-left: 6rem;
    width: 300px;
    }

   .dashboard__component__items__item {
        display: flex;
        align-items: center;
        

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        .dashboard__component__items__item__sender {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 30px;
            min-height: 30px;
            padding: 5px;
            margin-right: 10px;
            color: #fff;
            text-align: center;
            text-transform: uppercase;
            border-radius: 5px;
        }

        .dashboard__component__items__item__sender--green {
            background-color: rgba(#7EBB05, 0.5);
        }

        .dashboard__component__items__item__sender--blue {
            background-color: rgba(#39B2E3, 0.5);
        }

        .dashboard__component__items__item__sender--gray {
            background-color: rgba(#33617B, 0.5);
        }

        .dashboard__component__items__item__content {
            font-size: 0.875rem;
        }
    }


    .dashboard__component__add {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .dashboard__component__content {
        display: flex;
        justify-content: space-between
    }

</style>