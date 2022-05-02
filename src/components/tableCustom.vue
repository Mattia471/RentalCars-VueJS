<template >
  <div class="container" ><hr>
    <div class="row">
      <div class="col-4" >
        <button :class="button[0].class" @click="newItem">{{button[0].value}}</button>
      </div>
      <div class="col-8" >
        <input type="text" v-model="search" class="form-control" placeholder="Inserisci valore da ricercare">
      </div>
    </div><hr>
    <div class="alert alert-primary" v-if="items" role="alert">
      Lista {{msg}} generata correttamente!
    </div>
    <table class="table bg-dark text-white ">
      <thead>
      <tr>
        <th scope="col" class="text-white bg-success" v-for="head in headColumn" :key="head.head">{{ head.head }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item" >
        <template v-for="key in headColumn" :key="key.key">
          <th class="text-uppercase">{{ item[key.key] }}</th>

        </template>
        <th v-for="btn in button" :key="btn">
          <button v-if="btn.action==='edit'" :class="btn.class" @click="editItem(item.id)">{{btn.value}}</button>
          <button v-if="btn.action==='delete'" :class="btn.class" @click="deleteItem(item.id)">{{btn.value}}</button>

        </th>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>


export default {
  name: 'tableCustom',
  components: {

  },
  props: {
    msg: String,
    headColumn: Array,
    items: Object,
    button:Array,
    deleteItem:function (){},
    newItem:function (){},
    editItem: function (){},
  },
  data(){
    return{
      action:null,
    }
  }
}

</script>
<style>
tbody>tr{
  cursor: pointer;
}
tbody>tr:hover{
  background: grey;
}
</style>