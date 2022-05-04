import {createStore} from 'vuex'
import users from "@/store/modules/users";
import cars from "@/store/modules/cars";
import global from "@/store/global";
export default createStore({
    modules: {
        users,
        cars,
        global
    }
})


