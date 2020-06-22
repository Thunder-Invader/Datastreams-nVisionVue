<template>
  <Container title="Dashboard">
    <div id="index">
      <div class="dashboard">
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
        <div class="dashboard__component">
          <h4 class="dashboard__component__title title-blob">
            Widget toevoegen
          </h4>
          <div class="dashboard__component__add">
            <img src="../assets/img/AddWidget.png" alt="Toevoegen">
          </div>
        </div>
        <div class="dashboard__component dashboard__component--wide">
          <h4 class="dashboard__component__title title-blob">
            Herinneringen
          </h4>
          <div class="dashboard__component__content">
            <div class="dashboard__component__content__reminders">
              <table>
                <tr>
                  <th>Datum</th>
                  <th>Opmerking</th>
                </tr>
                <tr>
                  <td>6-4-2020</td>
                  <td>Loonstrook Ikea</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
                <tr>
                  <td>6-5-2020</td>
                  <td>Loonstrook Ikea</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
                <tr>
                  <td>20-12-2020</td>
                  <td>Jaaropgaven Datastreams</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
                <tr>
                  <td>6-6-2020</td>
                  <td>Loonstrook Ikea</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
                <tr>
                  <td>6-7-2020</td>
                  <td>Loonstrook Ikea</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
                <tr>
                  <td>6-8-2020</td>
                  <td>Loonstrook Ikea</td>
                  <td>
                    <img src="../assets/svg/gear.svg" alt="x" class="dashboard__component__reminders__settings">
                  </td>
                </tr>
              </table>
            </div>
            <div class="dashboard__component__content__calendar">
              <DatePicker
                ref="datepicker"
                :is-required="true"
                is-inline
                is-expanded
                color="gray"   
                :attributes="attributes"         
              />
            </div>
          </div>
          <button class="dashboard__component__action dashboard__component__action--no-center btn-primary">
              Herinnering toevoegen
          </button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  name: 'Dashboard',
  components: {
      Container,
      DatePicker
  },
  data() {
  return {
    attributes: [
        {
          key: "full",
          highlight: {
            color: "blue",
            fillMode: "solid"
          },
          dates: { start: new Date(2020, 5, 15), end: new Date(2020, 5, 22) }
        }]
  }
}
}
</script>

<style lang="scss">
@import "../scss/_toplevel.scss";
</style>
