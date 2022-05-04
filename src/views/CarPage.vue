<template>
  <div class="form" v-if="this.viewForm">
    <br>
    <formManage :input="headColumn" :item="item"></formManage>
  </div>
  <div class="cars" v-else>
    <tableCustom
        class="text-dark"
        :headColumn="headColumn"
        msg="Auto"
        :items="this.items"
        :button="button"
        :newItem="this.new"
        :editItem="this.edit"
        :deleteItem="this.delete"/>
  </div>
</template>

<script>
import tableCustom from '@/components/tableCustom.vue'
import formManage from "@/components/formManage";
import {mapActions, mapState} from "vuex";


export default {
  name: 'CarsPage',
  components: {
    tableCustom,
    formManage
  },
  data() {
    return {
      button: [
        {action: 'new', class: 'btn btn-success form-control', value: 'Inserisci Auto'},
        {action: 'edit', class: 'btn btn-warning form-control', value: 'Modifica Auto'},
        {action: 'delete', class: 'btn btn-danger form-control', value: 'Elimina Auto'},
      ]
    };
  },
  methods: {
    ...mapActions({
      edit: 'cars/editCar',
      new: 'cars/newCar',
      delete: 'cars/deleteCar'
    })
  },
  computed: mapState({
    items: state => state.cars.items,
    headColumn: state => state.cars.headColumn,
    viewForm: state => state.cars.viewForm,
    item: state => state.cars.item
  }),
  mounted() {
    this.$store.dispatch("cars/getAllCars")
  },

}
</script>
