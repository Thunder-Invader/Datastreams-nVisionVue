<template>
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
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  name: 'remindersDashboard',
  components: {
    DatePicker
    },
  props: {
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

