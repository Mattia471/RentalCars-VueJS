<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary" v-if="!this.viewForm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueJS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="text-white">Utenti</router-link> |
          </li>
          <li class="nav-item">
            <router-link to="/cars" class="text-white">Auto</router-link> |
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
<script>

import { mapState} from 'vuex';

export default {

  computed: mapState({
    viewForm: state => state.global.viewForm,
  }),
}
</script>
