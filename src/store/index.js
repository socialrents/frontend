import { createStore } from "vuex";
import Api from "../services/api";

const store = createStore({
    state() {
        return {
            loggedIn: false,
            user: null
        }
    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
            sessionStorage.setItem('socialrents-loggedIn', JSON.stringify(value));
        },
        setUser(state, user) {
            state.user = { ...user };
            localStorage.setItem('socialrents-user', JSON.stringify(user));
        },
        logout(state) {
            state.user = null;
            state.loggedIn = false;
            sessionStorage.removeItem('socialrents-loggedin');
            localStorage.removeItem('socialrents-user');
        }
    },
    actions: {
        async initialCredentialCheck({ commit }) {
            try {
                const user = await JSON.parse(localStorage.getItem('socialrents-user'));
                const response = await Api.post('/login', {
                    login: user.login,
                    password: user.password
                })
                if (response.status === 200) {
                    const { user } = response.data;
                    console.log(user);
                    commit('setUser', {
                        id: user.id,
                        login: user.login,
                        password: user.password,
                        type: user.type
                    })
                    commit('setLoggedIn', true);
                } else {
                    commit('setLoggedIn', false);
                }
            } catch (error) {
                commit('setLoggedIn', false);
            }
        }
    }
});

export default store;