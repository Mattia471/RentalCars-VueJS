<template>
  <div class="form" v-if="viewForm">
    <br>
    <formManage :input="headColumn" :item="car"></formManage>
  </div>
  <div class="cars" v-else>
    <tableCustom
        class="text-dark"
        :headColumn="headColumn"
        msg="Auto"
        :items="this.items"
        :button="button"
        :deleteItem="deleteCar"
        :newItem="newCar"
        :editItem="editCar"/>
  </div>
</template>

<script>
import tableCustom from '@/components/tableCustom.vue'
import axios from "axios";
import formManage from "@/components/formManage";
import {mapState} from "vuex";


export default {
  name: 'CarsPage',
  components: {
    tableCustom,
    formManage
  },
  data() {
    return {
      viewForm: null,
      car: null,
      headColumn: [
        {head: 'TARGA', key: 'licensePlate', type: 'text', verify: 'Inserisci la targa'},
        {head: 'MODELLO', key: 'model', type: 'text', verify: 'Inserisci il modello'},
        {head: 'TIPO', key: 'type', type: 'text', verify: 'Inserisci il tipo'},
        {head: 'ANNO', key: 'year', type: 'text', verify: 'Inserisci l\'anno d\'immatricolazione'},
        {head: 'CASA', key: 'manufacturer', type: 'text', verify: 'Inserisci la casa produttrice'},
      ],
      button: [
        {action: 'new', class: 'btn btn-success form-control', value: 'Inserisci Auto'},
        {action: 'edit', class: 'btn btn-warning form-control', value: 'Modifica Auto'},
        {action: 'delete', class: 'btn btn-danger form-control', value: 'Elimina Auto'},
      ]
    };
  },
  methods: {
    deleteCar: function (id) {
      axios.delete(`http://localhost:8081/api/cars/delete/` + id)
          .then(response => {
            this.getCars()
            console.log(response);
          });
    },
    newCar: function () {
      this.viewForm = 'newItem';
      this.car = {
        licensePlate: '',
        model: '',
        type: '',
        year: '',
        manufacturer: ''
      }
    },
    editCar: function (id) {
      this.viewForm = 'editItem';
      axios.get('http://localhost:8081/api/cars/car/' + id)
          .then(item => {
            this.car = item.data;
          })
          .catch(error => console.log(error))
    }
  },
  computed: mapState([
    'items',
  ]),
  mounted() {
    this.$store.dispatch('getCars')
    console.log(this.items)
  },
}
</script>
