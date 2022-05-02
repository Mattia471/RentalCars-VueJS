<template>
  <div class="container" v-if="this.item" style="width: 50%">
    <div class="card bg-light text-center" style="padding: 20px">
      <form autocomplete="off">
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
          <div class="col">
            <button class="btn btn-danger form-control" @click="goBack">Indietro</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "formManage",
  props: {
    input: Array,
    test: null,
  },
  computed: mapState([
    "item"
  ]),
  methods: {
    ...mapMutations([
      'goBack'
    ]),
    goBack: function () {
      this.$store.commit('goBack')
    }
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

<style scoped>

</style>