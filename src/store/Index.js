import {createStore} from 'vuex'
import userStore from './user';
import firebaseStorage from './firebase'
export default createStore({
    modules:{
        user: userStore,
        storage:firebaseStorage
    }
})