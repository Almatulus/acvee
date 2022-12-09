<template>
    <div class="authentication-template">
        <div class="authentication-template__inner">
            
            <div class="authentication-template__roles">
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
            </div>
            <div class="authentication-template__content">
                <div class="authentication-template__form-stage">
                    Этап 1 из 2
                </div>
                <h2>{{ title }}</h2>
                <form @submit.prevent="submitHandler" class="authentication-template__form" action="">
                    <div class="authentication-template__form-item">
                        <p>Номер телефона</p>
                        <input
                            type="text"
                            placeholder="+7(921)123-45-67"
                            maxlength="16"
                            :class="$v.phone.$error ? 'invalid' : ''"
                            v-model.trim="phone"
                            v-imask="phoneNumberMask"
                            @accept="onAccept" 
                            @complete="onComplete"
                            @keypress="isNumber"
                        >
                        <p v-if="$v.phone.$dirty && !$v.phone.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.phone.$dirty && !$v.phone.minLength" class="invalid-feedback">Данное поле должно содержать номер телефона</p>
                    </div>
                    <div class="authentication-template__form-item">
                        <p>СМС код подтверждение</p>
                        <input type="password"
                        maxlength="4"
                        v-model.trim="sms"                                                                    
                        >
                        <p v-if="$v.phone.$dirty && !$v.phone.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <div class="authentication-template__sms">
                            Повторно <a href="#">отправить код</a> 
                        </div>
                    </div>
                    <div class="authentication-template__enter">
                        Еще нет аккаунта? <router-link tag="a" :to="url"><a href="#">Войти</a></router-link>
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
import { required, minLength } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
import AuthenticationTemplateRoles from '@/components/authentication/authentication-template-roles.vue'
import AuthenticationTemplateContent from '@/components/authentication/authentication-template-content.vue'

export default {
    data: () => ({
        name: 'registration1',
        title: 'Регистрация',
        url: '/login',
        buttonText: 'Продолжить',
        phone: '',
        userPhone: '',
        sms: '',
        phoneNumberMask: {
            mask: '+{7}(000)000-00-00',
            lazy: true
        },
        user_type: ''
    }),
    methods: {
        submitHandler(){
            //this.$v.$touch()
            if(!this.$v.$error){
                localStorage.setItem('phone', this.phone)
                localStorage.setItem('userType', this.user_type)
                this.$router.push('/register/2')
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
    },
    validations: {      
        phone: {required, minLength: minLength(16)},
        sms: {required}
    },
    directives: {
        imask: IMaskDirective
    },
    components: {
        AuthenticationTemplateRoles,
        AuthenticationTemplateContent,
    }
}
</script>

<style lang="scss" scoped>
    .authentication-template{
        &__sms{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 17px 0 0 0;
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
        .invalid{
            border-bottom: 0.5px solid #ff0000;
        }
        .invalid-feedback{
            color: #ff0000;
        }
    }
</style>