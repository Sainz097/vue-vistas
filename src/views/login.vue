<template>
    <div>
        <div>
            <h1 class="login-tittle">Login</h1>
            <img :src="'../images/ps3.jpg'" alt="altText" class="img-fondo"/>
        </div>
        <div class="loginbox">
            <h1>Inicie sesion</h1>
            <form>
                <p>Correo electronico</p>
                <input type="email" name=""  placeholder="Ingrese correo electronico">
                <p>Contraseña</p>
                <input type="password" name="" placeholder="Ingrese contraseña">
                <input type="submit" name="" value="Ingresar" @click="entry()">
                <!-- <a href="/register">Registrarse</a><br>
                <a href="">¿Olvidaste tu contraseña?</a> -->
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        entry() {
            this.$router.push('/home-so');
        },
    },
};
</script>

<style>
 *{
        box-sizing: border-box;
    }
    body{
        margin:0;
        padding:0;
        background-position: center;
        background-size: cover;
        font-family: sans-serif;
    }
    img{
    display: block;
    width: 100%;
    max-width: 100%;
    }
    .img-fondo{
        margin-top: -150px;
        position: relative;
    }
      .login-tittle{
        width: 90%;
        color:white;
        text-align: center;
        position: relative;
        margin-top: 20px;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 30px;
        font-weight: bold;
    }
    .loginbox{
        width: 320px;
        height: 420px;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        top:50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
    }
    h1{
        margin: 0;
        padding: 0 0 20px;
        font-size: 20px;
        text-align: center;
    }
    .loginbox p{
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: bold;
    }
    .loginbox input{
        width: 100%;
        margin-bottom: 20px;
    }
    .loginbox input[type="email"],[type="password"]{
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
    }
    .loginbox input[type="submit"]{
        border: none;
        outline: none;
        height: 40px;
        background: #fb2525;
        color:#fff;
        font-size: 18px;
        border-radius: 20px;
    }
    .loginbox input[type="submit"]:hover{
        cursor: pointer;
        background: #ffc107;
        color: #000;
    }
    .loginbox a{
        text-decoration: none;
        font-size: 12px;
        line-height: 20px;
        color: darkgrey;
    }
    .loginbox a:hover{
        color: #ffc107;
    }
</style>