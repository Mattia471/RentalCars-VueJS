import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        items: []
    },
    getters: {},
    mutations: {
        items(state, items) {
            state.items = items
        }
    },
    actions: {
        getUsers: function ({commit}) {
            axios.get('http://localhost:8081/api/users')
                .then(item => {

                    commit('items', item.data)
                })
                .catch(error => console.log(error))
        },
        getCars: function ({commit}) {
            axios.get('http://localhost:8081/api/cars')
                .then(item => {

                    commit('items', item.data)
                })
                .catch(error => console.log(error))
        },
    },
    modules: {}
})
