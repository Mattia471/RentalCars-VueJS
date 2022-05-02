<template >
  <div class="container" v-if="item" style="width: 50%">
    <div class="card bg-light text-center" style="padding: 20px">
      <form autocomplete="off" >
        <div class="form-group" v-for="(row) in input" :key="row">
          <label>{{ row.head }}</label>
          <input :type="row.type" class="form-control"
                 :placeholder="row.head"> <!-- v-model="item[row.key]"-->
          <small class="form-text text-muted">{{ row.verify }}</small>
          <hr>
        </div>
        <button type="submit" class="btn btn-success form-control">Salva</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "formManage",
  props: {
    input: Array,
    item: Object,
    test: null,
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style scoped>

</style>