<template>
  <div class="form" v-if="this.viewForm">
    <br>
    <formManage :input="headColumn"></formManage>
  </div>
  <div class="user container" v-else>
    <tableCustom
        className="text-dark"
        :headColumn="headColumn"
        msg="Utenti"
        :items="this.items"
        :button="button"
        :newItem="newUser"
        :editItem="editUser"
        :deleteItem="deleteUser"/>
  </div>
</template>

<script>

import tableCustom from '@/components/tableCustom.vue'
import formManage from "@/components/formManage";
import {mapState} from 'vuex';

export default {
  name: 'UsersPage',
  components: {
    tableCustom,
    formManage
  },
  data() {
    return {
      action: null,
      user: null,
      itemsIterator:[],
      headColumn: [
        {head: 'NOME', key: 'name', type: 'text', verify: 'Inserisci il nome dell\'utente'},
        {head: 'COGNOME', key: 'surname', type: 'text', verify: 'Inserisci il cognome dell\'utente'},
        {head: 'EMAIL', key: 'email', type: 'email', verify: 'Inserisci l\'email dell\'utente'},
        {head: 'DATA DI NASCITA', key: 'birthdate', type: 'date', verify: 'Inserisci la data di nascita dell\'utente'},
      ],
      button: [
        {action: 'new', class: 'btn btn-success form-control', value: 'Crea Utente'},
        {action: 'edit', class: 'btn btn-warning form-control', value: 'Modifica Utente'},
        {action: 'delete', class: 'btn btn-danger form-control', value: 'Elimina Utente'},
      ]
    };
  },
  methods: {

  },
  computed: mapState({
    items: state => state.users.items
}),
  mounted() {
    this.$store.dispatch("users/getAllUsers")
  },
}
</script>
