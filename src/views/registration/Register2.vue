<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            <div class="authentication-template__content">
                <div class="authentication-template__form-stage">
                    Этап 2 из 3
                </div>
                <h2>{{ title }}</h2>
                <form @submit.prevent="submitHandler" class="authentication-template__form" action="">
                    <p>Выберите тип пользователя</p>
                    <div style="margin: 15px 0 0 0; display: flex;" class="">
                        <div class="authentication-template__form-item-item">
                            <input v-model="user_type" value="borrower" name="role" id="Borrower" class="radio-hide" type="radio">
                            <label for="Borrower">Заемщик</label>
                        </div>
                        <div class="authentication-template__form-item-item">
                            <input v-model="user_type" value="investor" name="role" id="Investor" class="radio-hide" type="radio">
                            <label for="Investor">Инвестор</label>
                        </div>
                        
                    </div>
                    <p style="margin: 15px 0 0 0;" v-if="$v.user_type.$dirty && !$v.user_type.required" class="invalid-feedback">Обязательно для выбора</p>
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
        buttonText: 'Далее',
        password: '',
        repeatPassword: '',
        user_type: ''
    }),
    methods: {
        submitHandler(){
            this.$v.$touch()
            if(!this.$v.$invalid){
                
                axios.post('http://127.0.0.1:8000/api/v1/registr/',
                    {
                        phone_number: localStorage.getItem('phone'),
                        user_type: this.user_type,
                        password: this.password,
                        password2: this.repeatPassword,
                        
                    }
                ). 
                then((response) => {
                    localStorage.removeItem('phone')
                    localStorage.setItem('user_id', response.data)
                    console.log(localStorage.getItem('userType'))
                    this.$router.push('/register/3')
                })
            }
        }
    },
    components:{
        AuthenticationTemplateRoles
    },
    validations: {
        password: {required, minLength: minLength(8)},
        repeatPassword: {required, minLength: minLength(8), sameAsPassword: sameAs('password')},
        user_type: {required}
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

    .radio-hide{
        width: 20px;
        height: 20px;
    }
    .authentication-template__form-item-item{
        align-items: center;
        display: flex;
        &:last-child{
            margin-left: 30px;
        }
        label{
            font-size: 18px;
            margin-left: 10px;
        }
    }
    p{
        font-size: 16px;
    }
</style>