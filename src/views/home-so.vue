<template>
    <header>
        <div class="container">
            <nav>
                <h1 class="Instagamers"><a href="">Sistemas<span>O</span>perativos</a></h1>
                <ul>
                    <li><a href="/home-so">Inicio</a></li>
                    <li><a href="/register">Buscar</a></li>
                    <li><a href="/profile">Perfil</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

};
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 10px;
        font-family: "Roboto Cn",sans-serif;
    }
    body{
        overflow: hidden;
    }
    a{
        color: #eee;
        text-decoration: none;
    }
    header{
        width: 100%;
        height: 100vh;
        background: url(/images/ps3.jpg);
        background-size: cover;
        margin-top: -60px;
    }
    .container{
        max-width: 120rem;
        width: 90%;
        margin: 0 auto;
    }
    nav{
        padding-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.6rem;
    }
    .Instagamers{
        font-size: 3rem;
        font-weight: 300;
        transform: translateX(-100rem);
        animation: slideIn .5s forwards;
    }
    .Instagamers span{
        color: crimson;
    }
    nav ul{
        display: flex;
    }
    nav ul li{
        list-style: none;
        transform: translateX(100rem);
        animation: slideIn .5s forwards;
    }
    nav ul li:nth-child(1){
        animation-delay: 0s;
    }
    nav ul li:nth-child(2){
        animation-delay: .5s;
    }
    nav ul li:nth-child(3){
        animation-delay: 1s;
    }
    nav ul li:nth-child(4){
        animation-delay: 1.5s;
    }

    nav ul li a{
        padding: 1rem 0;
        margin: 0 3rem;
        position: relative;
        letter-spacing: 2px;
    }
    nav ul li a:last-child{
        margin-right: 0;
    }
    nav ul li a::before,
    nav ul li a::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: crimson;
        left: 0;
        transform: scaleX(0);
        transition: all .5s;
    }
    nav ul li a::before{
        top: 0;
        transform-origin: left;
    }
    nav ul li a::after{
        bottom: 0;
        transform-origin: right;
    }
    nav ul li a:hover::before,
    nav ul li a:hover::after{
        transform: scaleX(1);
    }
    @keyframes slideIn{
        from{

        }
        to{
            transform: translateX(0);
        }
    }
</style>