import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        items: [],
        item:[],
        viewForm:null
    },
    getters: {},
    mutations: {
        items(state, items) {
            state.items = items
        },
        idItem(state,item){
            state.item.id = item
        },
        item(state,item){
            state.item = item
        },
        viewForm(state,authorize){
            state.viewForm=authorize
        },
        goBack(state){
            state.viewForm=null
        },
    },
    actions: {
        //UTENTI
        newUser: function ({commit}) {
            commit('viewForm', 'view')
            this.item = {
                name: '',
                surname: '',
                email: '',
                birthdate: ''
            }
            commit('item', this.item)
        },
        getUsers: function ({commit}) {
            axios.get('http://localhost:8081/api/users')
                .then(item => {
                    commit('items', item.data)
                })
                .catch(error => console.log(error))
        },
        deleteUser: function ({commit},id) {
            axios.delete(`http://localhost:8081/api/users/delete/` + id)
                .then(
                    commit('idItem',id),
                );
        },
        editUser: function ({commit},id) {
            this.viewForm = 'view';
            axios.get('http://localhost:8081/api/users/id/' + id)
                .then(item => {
                    commit('item', item.data)
                    commit('viewForm', 'view')
                })
                .catch(error => console.log(error))
        },


        //CARS
        newCar: function ({commit}) {
            commit('viewForm', 'view')
            this.item = {
                licensePlate: '',
                model: '',
                type: '',
                year: '',
                manufacturer: ''
            }
            commit('item', this.item)
        },
        getCars: function ({commit}) {
            axios.get('http://localhost:8081/api/cars')
                .then(item => {
                    commit('items', item.data)
                })
                .catch(error => console.log(error))
        },
        deleteCar: function ({commit},id) {
            axios.delete(`http://localhost:8081/api/cars/delete/` + id)
                .then(
                    commit("item",id)
                );
        },
        editCar: function ({commit},id) {
            this.viewForm = 'view';
            axios.get('http://localhost:8081/api/cars/car/' + id)
                .then(item => {
                    commit('item', item.data)
                    commit('viewForm', 'view')
                })
                .catch(error => console.log(error))
        },
    },
    modules: {}
})
