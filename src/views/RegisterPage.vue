<template>

    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="#"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Register to create your account</p>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Name" v-model="name">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input class="form-control" placeholder="Address" v-model="address">
                        <div class="input-group-append">
                            <div class="input-group-text">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div class="col-12">
                            <button @click="register()" class="btn btn-primary btn-block" :disabled="isLoading">
                                {{ isLoading ? "Loading..." : "Register" }}
                            </button>
                        </div>
                        <!-- /.col -->
                    </div>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </body>
</template>

<script>
import authService from '../services/authService';
export default {
    name: "RegisterPage",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            address: "",
            isLoading: false,
        };
    },
    methods: {
        async register() {
            this.isLoading = true;
            try {
                const request = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address: this.address,
                    role: 1
                }
                let result = await authService.register(request);
                if (result.data.success) {
                    localStorage.setItem("access_token", result.data.access_token);
                    this.$router.push({ name: 'Dashboard' });
                }
            } catch (error) {
                console.error("Registrasi gagal:", error.response.data.message);
                alert(error.response.data.message || "Registrasi gagal");
            } finally {
                this.isLoading = false;
            }
        }
    },
};
</script>

<style scoped>
@import '../assets/css/adminlte.min.css';
@import '../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
@import '../assets/plugins/fontawesome-free/css/all.min.css';
</style>