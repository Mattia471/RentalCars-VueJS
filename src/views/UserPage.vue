<template>
  <div class="form" v-if="this.viewForm">
    <br>
    <formManage :input="headColumn" :item="item"></formManage>
  </div>
  <div class="user container" v-else>
    <tableCustom
        className="text-dark"
        :headColumn="headColumn"
        msg="Utenti"
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
import {mapActions, mapState} from 'vuex';

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
      button: [
        {action: 'new', class: 'btn btn-success form-control', value: 'Crea Utente'},
        {action: 'edit', class: 'btn btn-warning form-control', value: 'Modifica Utente'},
        {action: 'delete', class: 'btn btn-danger form-control', value: 'Elimina Utente'},
      ]
    };
  },
  methods: {
    ...mapActions({
      new: 'users/newUser',
      edit: 'users/editUser',
      viewUser: 'users/getAllUsers',
      delete: 'users/deleteUser'
    })
  },
  computed: mapState({
    items: state => state.users.items,
    headColumn: state => state.users.headColumn,
    viewForm: state => state.users.viewForm,
    item: state => state.users.item
  }),
  mounted() {
    this.viewUser()
  },
}
</script>
