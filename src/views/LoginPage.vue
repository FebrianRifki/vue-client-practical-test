<template>

    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Welcome</b></a>
            </div>
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="handleLogin">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" v-model="email" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" v-model="password" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <!-- /.social-auth-links -->


                    <p class="mt-4 mb-0">
                        <a href="register.html" class="text-center">Register a new membership</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </body>
</template>

<script>
import authService from '../services/authService';
export default {
    name: "LoginPage",
    data() {
        return {
            email: "",
            password: "",
            remember: false,
            isLoading: false,
        };
    },
    methods: {
        async handleLogin() {
            // eslint-disable-next-line no-debugger
            debugger;
            this.isLoading = true;
            try {
                const data = {
                    email: this.email,
                    password: this.password
                }
                const result = await authService.login(data);
                if (result.data.success) {
                    localStorage.setItem('access_token', result.data.access_token);
                    this.$router.push({ name: 'Dashboard' });
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>
