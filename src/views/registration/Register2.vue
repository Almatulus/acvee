<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            <div class="authentication-template__content">
                <div class="authentication-template__form-stage">
                    Этап 2 из 2
                </div>
                <h2>{{ title }}</h2>
                <form @submit.prevent="submitHandler" class="authentication-template__form" action="">
                    <div class="authentication-template__form-item">
                        <p>Пароль</p>
                        <input 
                        type="password"
                        v-model.trim="password"
                        :class="$v.password.$error ? 'invalid' : ''"
                        >
                        <p v-if="$v.password.$dirty && !$v.password.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.password.$dirty && !$v.password.minLength" class="invalid-feedback">Данное поле должно содержать больше 7 символов</p>
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Повторите пароль</p>
                        <input 
                        type="password"
                        v-model.trim="repeatPassword"
                        :class="$v.repeatPassword.$error ? 'invalid' : ''"
                        >
                        <p v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.minLength" class="invalid-feedback">Данное поле должно содержать больше 7 символов</p>
                        <p v-if="$v.repeatPassword.$dirty && !$v.repeatPassword.sameAsPassword" class="invalid-feedback">Данное поле должно соответствовать предыдущему</p>
                        
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
import AuthenticationTemplateRoles from '@/components/authentication/authentication-template-roles.vue'

export default {
    data: () => ({
        name: 'registration2',
        title: 'Регистрация',
        buttonText: 'Зарегистрироваться',
            password: '',
            repeatPassword: ''
    }),
    methods: {
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
                    //console.log(response)
                    console.log(localStorage.getItem('userType'))
                    this.$router.push('/register/2')
                })
            }
        }
    },
    components:{
        AuthenticationTemplateRoles
    },
    validations: {
        password: {required, minLength: minLength(8)},
        repeatPassword: {required, minLength: minLength(8), sameAsPassword: sameAs('form.password')}
    }
}
</script>

<style lang="scss" scoped>
    .authentication-template{
        &__button{
            display: flex;
            justify-content: end;
            button{
                padding: 15px 20px;
                margin: 30px 0 0 0;
            }
        }
        .invalid{
            border-bottom: 0.5px solid #ff0000;
        }
        .invalid-feedback{
            color: #ff0000;
        }
    }
</style>