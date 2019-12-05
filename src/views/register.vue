<template>
    <div>
        <div>
            <h1 class="register-tittle">Sistemas</h1>
            <img :src="'../images/ps3.jpg'" alt="altText" class="img-fondo"/>
        </div>
        <div class="registerbox">
            <h1>Registrate</h1>
            <form action="">
                <p>Nombre</p>
                <input type="text" name="" placeholder="Ingrese el nombre">
                <p>Apellidos</p>
                <input type="text" name="" placeholder="Ingrese los apellidos">
                <p>Edad</p>
                <input type="number" name="" placeholder="Ingrese la edad">
                <p>Sexo</p>
                <input type="text" name="" placeholder="Ingrese el sexo">
                <p>Direccion</p>
                <input type="text" name="" placeholder="Ingrese la direccion">
                <p>Carrera</p>
                <input type="text" name="" placeholder="Ingrese la carrera">
                <input type="submit" name="" value="Registrar" @click="registrar()">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        registrar() {
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
        margin-top: -135px;
        position: relative;
    }
      .register-tittle{
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
    .registerbox{
        width: 480px;
        height: 500px;
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
    .registerbox p{
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: bold;
    }
    .registerbox input{
        width: 100%;
        margin-bottom: 20px;
    }
    .registerbox input[type="email"],[type="password"],[type="text"],[type="number"]{
        border: none;
        border-bottom: 1px solid #fff;
        background: transparent;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px;
    }
    .registerbox input[type="submit"]{
        border: none;
        outline: none;
        height: 40px;
        background: #fb2525;
        color:#fff;
        font-size: 18px;
        border-radius: 20px;
    }
    .registerbox input[type="submit"]:hover{
        cursor: pointer;
        background: #ffc107;
        color: #000;
    }
    .registerbox a{
        text-decoration: none;
        font-size: 12px;
        line-height: 20px;
        color: darkgrey;
    }
    .registerbox a:hover{
        color: #ffc107;
    }
</style>