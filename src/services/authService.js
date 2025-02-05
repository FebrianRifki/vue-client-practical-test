import axios from '../plugins/axios';

const AuthService = {

    async register(req) {
        return await axios.post('/register', req);
    },

    async login(req) {
        return await axios.post('/login', req);
    },

    async logout() {
        return await axios.post('logout');
    },

    async getUser() {
        return await axios.get('/user');
    }
}

export default AuthService;