<template>
  <div class="wrapper">
    <div class="component_adddocs">
      <h4 class="component-title title-blob">
        Document Toevoegen
      </h4>
      <div class="component document">
        <div class="document_items">
          <div class="document_item">
            <div class="dashboard__component__items__item__sender--green">
              JU
            </div>
            <div class="document_item_content">
              Loonstrook Jumbo 04-2020
            </div>
          </div>
          <div class="document_item">
            <div class="dashboard__component__items__item__sender--blue">
              JU
            </div>
            <div class="document_item_content">
              Loonstrook Jumbo 04-2020
            </div>
          </div>
          <div class="document_item">
            <div class="dashboard__component__items__item__sender--blue">
              JU
            </div>
            <div class="document_item_content">
              Loonstrook Jumbo 04-2020
            </div>
          </div>
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
<style lang="scss" scoped>
  @import "../scss/_toplevel.scss";

  .component_adddocs {
    margin-top: 5rem;
    margin-left: 6rem;
    width: 300px;
  }

  .document_item{
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
            background-color: rgba(#7EBB05, 0.5) ;
        }

        .dashboard__component__items__item__sender--blue {
            background-color: $blue-tile;
        }

        .dashboard__component__items__item__sender--gray {
            background-color: $gray-tile;
        }

        .dashboard__component__items__item__content {
            font-size: 0.875rem;
        }
    }
    .document_item_content {
        display: flex;
        justify-content: space-between;
        margin-left: 5px;
    }
  
</style>