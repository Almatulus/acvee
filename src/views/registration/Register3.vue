<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            <div class="authentication-template__content">
                <h2>Вы успешно прошли регистрацию!</h2>
                <div class="authentication-succes">
                    Вы можете <router-link tag="a" :to="url"><a href="#">Войти</a></router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data: () => ({
        url: '/login',
    })
}
</script>

<style lang="scss" scoped>
    .authentication-succes{
        margin: 100px 0;
        text-align: center;
        font-size: 25px;
        a{
            color: #0345FF;
        }
    }
</style>