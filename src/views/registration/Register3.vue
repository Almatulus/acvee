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
                        <p>Пароль</p>
                        <input 
                        type="password"
                        v-model.trim="password"
                        
                        >
                        
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Повторите пароль</p>
                        <input 
                        type="password"
                        v-model.trim="repeatPassword"
                        
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
        name: 'registration2',
        title: 'Регистрация',
        buttonText: 'Далее',
            password: '',
            repeatPassword: ''
    }),
    methods:{
        submitHandler(){
            //this.$v.$touch()
            if(!this.$v.$error){
                
                axios.post('http://127.0.0.1:8000/api/v1/registr/',
                    {
                        phone_number: localStorage.getItem('phone'),
                        user_type: localStorage.getItem('userType'),
                    
                
                        password: this.password,
                        password2: this.repeatPassword
                    }
                ). 
                then(function (response){
                    localStorage.removeItem('phone')
                    console.log(response.data.user_id)
                    console.log(localStorage.getItem('userType'))
                    this.$router.push('/register/2')
                })
            }
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