<template>
  <div class="form" v-if="this.viewForm">
    <br>
    <formManage :input="headColumn"></formManage>
  </div>
  <div class="cars" v-else>
    <tableCustom
        class="text-dark"
        :headColumn="headColumn"
        msg="Auto"
        :items="this.items"
        :button="button"
        :newItem="newCar"
        :editItem="editCar"
        :deleteItem="deleteCar"/>
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
    ...mapActions([
      'editCar',
      'getCars',
      'deleteCar',
      'newCar'
    ])
  },
  computed: mapState([
    'items',
    'viewForm'
  ]),
  mounted() {
    this.getCars()
  },
}
</script>
