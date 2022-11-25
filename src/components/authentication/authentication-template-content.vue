<template>
    <div class="authentication-template__content">
        <div v-show="isRegistrationPage" class="authentication-template__form-stage">
            Этап 1 из 2
        </div>
        <h2>{{ title }}</h2>
        <form @submit.prevent="submitHandler" action="" class="authentication-template__form">
            <div v-show="isLoginPage" class="">
                <div v-for="inputElement in inputList" :key="inputElement.inputPlaceholder" class="authentication-template__form-item">
                    <p>{{inputElement.inputPlaceholder}}</p>
                    <input type="text">
                </div>
            </div>
            <div v-show="isRegistrationPage" class="">
                <div v-for="inputElement in inputList" :key="inputElement.inputPlaceholder" class="authentication-template__form-item">
                    <p>{{inputElement.inputPlaceholder}}</p>
                    <input type="text">
                </div>
            </div>
            <div v-show="isRegistrationPage" class="authentication-template__sms">
                Повторно <a href="#">отправить код</a> 
            </div>
            <div class="authentication-template__enter">
                {{enterText}} <router-link tag="a" :to="url"><a href="#">{{enterLinkText}}</a></router-link>
            </div>
            <div class="authentication-template__button">
                <button class="button" type="submit">
                    {{buttonText}}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['title', 'inputList', 'enterText', 'enterLinkText', 'isLoginPage', 'isRegistrationPage', 'url', 'buttonText', 'email'],
    data: () => ({

    }),
    methods: {
        submitHandler(){
            this.$router.push('/')
        }
    }
}
</script>