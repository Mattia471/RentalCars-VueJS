<template>
  <div class="container" v-if="this.item" style="width: 50%">
    <div class="card bg-light text-center" style="padding: 20px">
      <form autocomplete="off" v-on:submit.prevent="submitForm">
        <div class="form-group" v-for="row in input" :key="row">
          <label>{{ row.head }}</label>
          <input :type="row.type" class="form-control" v-model="item[row.key]"
                 :placeholder="row.head">
          <small class="form-text text-muted">{{ row.verify }}</small>
          <hr>
        </div>
        <div class="row">
          <div class="col">
            <button type="submit" class="btn btn-success form-control">Salva</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "formManage",
  props: {
    input: [],
    test: null,
    item: []
  },
  computed: mapState({}),
  methods: {
    submitForm(){
      if(this.item.id){
        axios.put('http://localhost:8081/api/users/edit', this.item)
            .then(() => {
              alert("modificato utente" + this.item)
              location.replace('/')
              //Perform Success Action
            })
            .catch((error) => {
              console.log(error)
              // error.response.status Check status code
            }).finally(() => {
          //Perform action in always
        });
      }else {
        axios.post('http://localhost:8081/api/users/add', this.item)
            .then(() => {
              alert("aggiunto nuovo utente" + this.item)
              location.replace('/')
              //Perform Success Action
            })
            .catch((error) => {
              console.log(error)
              // error.response.status Check status code
            }).finally(() => {
          //Perform action in always
        });
      }
    },
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

<style scoped>

</style>