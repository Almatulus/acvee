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
                        v-model.trim="form.password"
                        :class="$v.form.password.$error ? 'invalid' : ''"
                        >
                        <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.form.password.$dirty && !$v.form.password.minLength" class="invalid-feedback">Данное поле должно содержать больше 7 символов</p>
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Повторите пароль</p>
                        <input 
                        type="password"
                        v-model.trim="form.repeatPassword"
                        :class="$v.form.repeatPassword.$error ? 'invalid' : ''"
                        >
                        <p v-if="$v.form.repeatPassword.$dirty && !$v.form.repeatPassword.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.form.repeatPassword.$dirty && !$v.form.repeatPassword.minLength" class="invalid-feedback">Данное поле должно содержать больше 7 символов</p>
                        <p v-if="$v.form.repeatPassword.$dirty && !$v.form.repeatPassword.sameAsPassword" class="invalid-feedback">Данное поле должно соответствовать предыдущему</p>
                        
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
        form: {
            password: '',
            repeatPassword: ''
        }
    }),
    methods: {
        submitHandler(){
            this.$v.form.$touch()
            if(!this.$v.form.$error){
                this.$router.push('/')
            }
        }
    },
    components:{
        AuthenticationTemplateRoles
    },
    validations: {
        form: {
            password: {required, minLength: minLength(8)},
            repeatPassword: {required, minLength: minLength(8), sameAsPassword: sameAs('form.password')}
        }
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