<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            <!--<div class="authentication-template__roles">
                <ul>
                    <li>
                        <input v-model="user_type" value="borrower" name="role" id="Borrower" class="radio-hide" type="radio">
                        <label for="Borrower">Заемщик</label>
                    </li>
                    <li>
                        <input v-model="user_type" value="investor" name="role" id="Investor" class="radio-hide" type="radio">
                        <label for="Investor">Инвестор</label>
                    </li>
                </ul>
            </div>-->
            <div class="authentication-template__content">
                <h2>{{ title }}</h2>
                <form @submit.prevent="submitHandler" action="" class="authentication-template__form">
                    <div class="authentication-template__form-item">
                        <p>Номер телефона</p>
                        <input
                            type="text"
                            placeholder="+7(921)123-45-67"
                            maxlength="16"
                            :class="$v.phone.$error ? 'invalid' : ''"
                            v-model.trim="phone"
                            
                            @accept="onAccept" 
                            @complete="onComplete"
                            
                        >
                        <p v-if="$v.phone.$dirty && !$v.phone.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.phone.$dirty && !$v.phone.minLength" class="invalid-feedback">Данное поле должно содержать номер телефона</p>
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Пароль</p>
                        <input type="password"
                            :class="$v.password.$error ? 'invalid' : ''"
                            v-model.trim="password"
                        >
                        <p v-if="$v.password.$dirty && !$v.password.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.password.$dirty && !$v.password.minLength" class="invalid-feedback">Пароль должен иметь больше 8 символов</p>
                    </div>
                    <div class="authentication-template__enter">
                        Еще нет аккаунта? <router-link tag="a" :to="url"><a href="#">Зарегистрироваться</a></router-link>
                    </div>
                    <div class="authentication-template__button">
                        <button class="button" type="submit">
                            {{buttonText}}
                        </button>
                    </div>
                </form>
                @keypress="isNumber"
                v-imask="phoneNumberMask" 
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
import AuthenticationTemplateRoles from '@/components/authentication/authentication-template-roles.vue'
import AuthenticationTemplateContent from '@/components/authentication/authentication-template-content.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    data: () => ({
        name: 'login',
        title: 'Войти',
        phone: '',
        userPhone: '',
        password: '',        
        phoneNumberMask: {
            mask: '+{7}(000)000-00-00',
            lazy: true
        },
        isLoginPage: true,
        url: '/register',
        buttonText: 'Войти в кабинет',
        errors: []
    }),
    validations:{
        phone: {required, minLength: minLength(16)},
        password: {required, minLength: minLength(8)}
    },
    components: {
        AuthenticationTemplateRoles,
        AuthenticationTemplateContent
    },
    methods: {
        submitHandler(){
            //this.$v.$touch()
            if(!this.$v.$error){
                this.$router.push('/')
                axios.post('http://127.0.0.1:8000/api/v1/auth/token/login/',
                    {
                        phone_number: this.phone,
                        password: this.password
                    }
                ). 
                then(function (response){
                    //console.log(response)
                    //this.GET_USERTOKEN_TO_VUEX()
                    localStorage.setItem('usertoken', response.data.auth_token)
                    console.log(localStorage.getItem('usertoken'))
                    //console.log(JSON.parse(localStorage.getItem('usertoken')))
                })
            }
            
        },
        onAccept(e){
            const maskRef = e.detail
            this.phone = maskRef.value
        },
        onComplete(e){
            const maskRef = e.detail
            this.userPhone = maskRef.unmaskedValue
        },
        isNumber (e) {
        const regex = /[0-9]/
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        },
        ...mapActions([
            'GET_USERTOKEN_TO_VUEX'
        ])
    },
    directives: {
      imask: IMaskDirective
    },
    computed: {
        ...mapGetters([
            'USERTOKEN'
        ]),
    }
}
</script>

<style lang="scss">
    .authentication-template {
        background: #fff;
        box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
        border-radius: 10px;
		&__inner {
            display: flex;
		}

		&__roles {
            
            background: #FBFBFB;
		}

        &__content{
            margin: 60px 50px;
        }

		&__link {
            justify-content: center;
            align-items: center;
            display: inline-flex;
            //background: #FBFBFB;
            &:hover{
                color: #0345FF;
                transition: 1s;
            }
		}

		&__form {
            margin: 30px 0 0 0;
            
		}

        &__form-item{
            margin: 30px 0 0 0;
            input{
                background: #fff;
                border-radius: 0px;
                width: 450px;
                height: 40px;
                border-bottom: 0.5px solid #0345FF;
            }
            p{
                font-weight: 600;
                font-size: 18px;
                line-height: 21px;
                color: rgba(51, 51, 51, 0.6);
            }
            &:first-child{
                margin: 0;
            }
        }

        &__form-stage{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: rgba(51, 51, 51, 0.6);
        }

        &__sms{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 17px 0 0 0;
            a{
                color: #0345FF;
            }
        }

        &__enter{
            margin: 50px 0 0 0;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #333333;
            a{
                color: #0345FF;
            }
        }

        &__button{
            display: flex;
            justify-content: end;
            button{
                padding: 15px 20px;
                margin: 30px 0 0 0;
            }
        }

        h2{
            margin: 4px 0 0 0;
        }
    .invalid{
        border-bottom: 0.5px solid #ff0000;
    }
    .invalid-feedback{
        color: #ff0000;
    }
}
</style>

<!--<AuthenticationTemplateContent 
            v-bind:title = "title" 
            v-bind:inputList="inputList"
            v-bind:enterText="enterText"
            v-bind:enterLinkText="enterLinkText"
            v-bind:isLoginPage="isLoginPage"
            v-bind:url="url"
            v-bind:buttonText = "buttonText"
            ref="AuthenticationTemplateContent"
            />-->