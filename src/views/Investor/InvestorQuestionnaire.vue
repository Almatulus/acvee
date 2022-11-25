<template>
    <div class="investor-questionnaire">
        <div class="investor-questionnaire__inner">
            <h2 class="investor-questionnaire__title">Индивидуальный предприниматель<span>/Физическое лицо</span></h2>
            <form @submit.prevent="submitHandler" class="investor-questionnaire__form" action="">
                <div class="investor-questionnaire__form-body">
                    <div class="investor-questionnaire__form-column">
                        <p class="investor-questionnaire__form-label">Наименование ИП<span>/Ф.И.О</span></p>
                        <input 
                        placeholder="Нурлан" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.IE"
                        :class="$v.form.IE.$error ? 'invalid' : ''"
                        @keypress="isLetter">
                        <p v-if="$v.form.IE.$dirty && !$v.form.IE.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        
                        <p class="investor-questionnaire__form-label">ИИН/БИН</p>
                        <input 
                        placeholder="871322638500" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        maxlength="12"
                        v-model.trim="form.IID"
                        :class="$v.form.IID.$error ? 'invalid' : ''"
                        @keypress="isNumber">
                        <p v-if="$v.form.IID.$dirty && !$v.form.IID.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.form.IID.$dirty && !$v.form.IID.minLength" class="invalid-feedback">Данное поле должно содержать 12 символов</p>

                        <p class="investor-questionnaire__form-label">Срок инвестирования</p>
                        <input type="range" min="2" max="25">
                        <p class="investor-questionnaire__form-label">Почему вы решили инвестирвать в Acvee</p>
                    </div>
                    <div class="investor-questionnaire__form-column">
                        <p class="investor-questionnaire__form-label">Город регистрации<span>/проживание</span></p>
                        <input 
                        placeholder="Астана" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.registrationCity"
                        :class="$v.form.registrationCity.$error ? 'invalid' : ''"
                        @keypress="isLetter">
                        <p v-if="$v.form.registrationCity.$dirty && !$v.form.registrationCity.required" class="invalid-feedback">Обязательное поле для заполнения</p>

                        <p class="investor-questionnaire__form-label">Электронная почта</p>
                        <input 
                        placeholder="exmample@mail.ru" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.email"
                        :class="$v.form.email.$error ? 'invalid' : ''">
                        <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">Данное поле должно содержать адрес электронной почты</p>

                        <p class="investor-questionnaire__form-label">Сумма инвестирования</p>
                        <select class="investor-questionnaire__form-input" name="" id="">
                            <option value="5000">
                                от 500 000 до 5 000 000 тенге 
                            </option>
                            <option value="">
                                 от 5 000 000 до 10 000 000 тенге 
                            </option>
                            <option value="">
                                от 10 000 000 до 50 000 000 тенге 
                            </option>
                            <option value="">
                                свыше 50 000 000 тенге
                            </option>
                        </select>

                        <br>

                        <input 
                        placeholder="Желаемая сумма" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.desiredAmount"
                        :class="$v.form.desiredAmount.$error ? 'invalid' : ''"
                        @keypress="isNumber"
                        >
                        <p v-if="$v.form.desiredAmount.$dirty && !$v.form.desiredAmount.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                    </div>
                </div>
                <input placeholder="Причина" class="investor-questionnaire__form-input investor-questionnaire__form-textarea" type="text">
                <br>
                <button class="button button-certify">
                    Удостоверение личности
                </button>
                <br>
                <button type="submit" class="button investor-questionnaire__form-button">
                    Сохранить
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
export default {
    data: () => ({
        form:{
            IE: '',
            name: '',
            IID: '',
            registrationCity: '',
            residenceCity: '',
            email: '',
            desiredAmount: ''
        }
    }),
    validations: {
        form:{
            IE: {required},
            IID: {required, minLength: minLength(12)},
            registrationCity: {required},
            email: {required, email},
            desiredAmount: {required}
        }
    },
    methods: {
        isNumber (e) {
        const regex = /[0-9]/
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        },
        isLetter (e) {
        const regex = /^([а-яё\s]+|[a-z\s]+)$/iu
        if (!regex.test(e.key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
            }
        },
        submitHandler(){
            this.$v.form.$touch()
            if(!this.$v.form.$error){
                alert('Валидация прошла успешно')
            }
        },
    },
    directives: {
      imask: IMaskDirective
    }
}
</script>

<style lang="scss" scoped>
.investor-questionnaire {
        span{
            color: rgba(51, 51, 51, 0.3);
        }
		&__inner {
		}

		&__title {
            color: #0345FF;
            
		}

		&__form-body {
            display: flex;
		}

		&__form-column {
            margin: 0 0 0 50px;
            &:first-child{
                margin: 0;
            }
		}

		&__form-label {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #333333;
            margin: 15px 0 0 0;
		}

		&__form-input {
            width: 500px;
            height: 50px;
            background-color: #ffffff;
            padding: 16px 20px;
            margin: 15px 0 0 0;
		}

        &__form-textarea{
            width: 1050px;
            height: 140px;
            padding: 16px 0 0 20px;
        }

        &__form-button{
            display: inline-block;
            padding: 17px 20px;
            float: right;
            margin: 20px 0;
        }
}

    .invalid{
        border: 0.5px solid #ff0000;
    }
    .invalid-feedback{
        color: #ff0000;
        margin: 5px 0 0 0;
    }

.button-certify{
    display: inline-block;
    padding: 16px 36px;
    background: rgba(3, 69, 255, 0.1);
    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #0345FF;
    margin: 20px 0 0 0;
}
</style>