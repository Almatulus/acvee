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
                        :class="$v.firstName.$error ? 'invalid' : ''"
                        @keypress="isLetter"
                        >
                        <p v-if="$v.firstName.$dirty && !$v.firstName.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        
                        
                    </div>
                    <div class="authentication-template__form-item">
                        <p>Фамилия</p>
                        <input 
                        type="text"
                        v-model.trim="secondName"
                        :class="$v.secondName.$error ? 'invalid' : ''"
                        @keypress="isLetter"
                        >
                       <p v-if="$v.secondName.$dirty && !$v.secondName.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        
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
import { required} from 'vuelidate/lib/validators'

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
                if(!this.$v.$error){
                    axios.post('http://127.0.0.1:8000/api/v1/registr-profile/',
                    {
                        first_name: this.firstName,
                        second_name: this.secondName,
                        user: localStorage.getItem('user_id')
                    }
                    ). 
                    then((response) => {
                        this.$router.push('/register/4')
                    })
                }
                
           
        },

        isLetter (e) {
        const regex = /^([а-яё\s]+|[a-z\s]+)$/iu
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        }
        
    },
    validations: {
        firstName: {required},
        secondName: {required}
    },
}
</script>

<style lang="scss" scoped>
    .authentication-template__button{
        display: flex;
        justify-content: end;
        button{
        padding: 15px 20px;
            margin: 30px 0 0 0;
        }
    }
</style>