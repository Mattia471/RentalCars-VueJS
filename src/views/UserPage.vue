<template>
  <div class="form" v-if="viewForm">
    <br>
    <formManage :input="headColumn" :item="user"></formManage>
  </div>
  <div class="user" v-else>
    <tableCustom
        className="text-dark"
        :headColumn="headColumn"
        msg="Utenti"
        :items="this.items"
        :button="button"
        :deleteItem="deleteUser"
        :newItem="newUser"
        :editItem="editUser"/>
  </div>
</template>

<script>

import tableCustom from '@/components/tableCustom.vue'
import axios from "axios";
import formManage from "@/components/formManage";
import { mapState } from 'vuex';

export default {
  name: 'UsersPage',
  components: {
    tableCustom,
    formManage
  },
  data() {
    return {
      viewForm: null,
      action: null,
      user: null,
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
    deleteUser: function (id) {
      axios.delete(`http://localhost:8081/api/users/delete/` + id)
          .then(response => {
            this.getUsers()
            console.log(response);
          });
    },
    newUser: function () {
      this.viewForm = 'view';
      this.user = {
        name: '',
        surname: '',
        email: '',
        birthdate: ''
      }
    },
    editUser: function (id) {
      this.viewForm = 'view';
      axios.get('http://localhost:8081/api/users/id/' + id)
          .then(item => {
            this.user = item.data;
          })
          .catch(error => console.log(error))
    }
  },
  computed: mapState([
      'items',
  ]),
  mounted() {
    this.$store.dispatch('getUsers')
    console.log(this.items)
  },
}
</script>
