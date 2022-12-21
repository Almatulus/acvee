<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            <div class="authentication-template__content">
                <div class="authentication-template__form-stage">
                    Этап 3 из 3
                </div>
                <h2>{{ title }}</h2>
                <form @submit.prevent="submitHandler" class="authentication-template__form" action="">
                    <div class="authentication-template__form-item">
                        <p>Имя</p>
                        <input 
                        type="text"
                        v-model.trim="firstName"
                        
                        >
                        
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Фамилия</p>
                        <input 
                        type="text"
                        v-model.trim="secondName"
                        
                        >
                       
                        
                    </div>
                    <div class="authentication-template__button">
                        <button class="button" type="submit">
                            {{buttonText}}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
    data: () => ({
        title: 'Регистрация',
        buttonText: 'Далее',
        firstName: '',
        secondName: ''
    }),
    methods:{
        submitHandler(){
            //this.$v.$touch()
            
                
                axios.post('http://127.0.0.1:8000/api/v1/registr-profile/',
                    {
                        first_name: this.firstName,
                        second_name: this.secondName,
                        user: localStorage.getItem('user_id')
                    }
                ). 
                then(function (response){
                    
                })
           
        },
        validations: {
            password: {required, minLength: minLength(8)},
            repeatPassword: {required, minLength: minLength(8), sameAsPassword: sameAs('form.password')}
        }
    }
}
</script>

<style lang="scss" scoped>

</style>