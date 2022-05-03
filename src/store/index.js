import {createStore} from 'vuex'
import users from "@/store/modules/users";
import cars from "@/store/modules/cars";

export default createStore({
    modules: {
        users,
        cars
    }
})


