<template>

    <div>
        <img src="../../image/logo.png" alt="gg"><br>
        用户名:<label>
        <input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    </label>
        <br><br>
        密码： <label>
        <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    </label>
        <br><br>
        <button v-on:click="login">登录</button>
    </div>
</template>

<script>



    export default {
        name: 'Login',
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                responseResult: []
            }
        },

        methods: {
            login () {
                //this.$router.replace({path:'/index'});
                //debugger
                this.$axios
                    //前端发送数据的代码段-----------------
                    .post('/login', {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    })
                    //----------------------------------
                    .then(successResponse => {
                        if (successResponse.data.code === 200) {
                          this.$router.replace({path:'/index'});
                            //this.$router.push({path:'/index'});
                            //console.log(12345);
                        }
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(failResponse => {
                    })
            }
        }
    }
</script>

