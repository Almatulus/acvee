<template>
    <div class="questionnaire">
        <div class="questionnaire__questions">
            <h2 class="questionnaire__title">
                Анкета
            </h2>
            <form action="" @submit.prevent="submitHandler" class="questionnaire__questions-form">
                <input placeholder="Название ТОО\ИП" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                v-model.trim="form.organizationName"
                :class="$v.form.organizationName.$error ? 'questionnaire-input-invalid' : ''"
                >
                <p v-if="$v.form.organizationName.$dirty && !$v.form.organizationName.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                
                <input 
                placeholder="Юридическая Форма ТОО/ИП/Ltd" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                v-model.trim="form.legalFormOrganization"
                :class="$v.form.legalFormOrganization.$error ? 'questionnaire-input-invalid' : ''"
                >
                <p v-if="$v.form.legalFormOrganization.$dirty && !$v.form.legalFormOrganization.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>

                <select 
                type="choseCountry" 
                class="questionnaire__questions-input questionnaire__input"
                v-model.trim="form.choseCountry"
                :options="choseCountryOptions"
                >
                    
                </select>
                
                <select placeholder="Выберите город" type="text" class="questionnaire__questions-input questionnaire__input">

                </select>
                
                <input placeholder="БИН" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                maxlength="12"
                v-model.trim="form.BIN"
                :class="$v.form.BIN.$error ? 'questionnaire-input-invalid' : ''"
                @keypress="isNumber">
                <p v-if="$v.form.BIN.$dirty && !$v.form.BIN.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                <p v-if="$v.form.BIN.$dirty && !$v.form.BIN.minLength" class="questionnaire-invalid-feedback">Данное поле должно содержать 12 символов</p>

                <input 
                placeholder="ФИО Директора" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                v-model.trim="form.directorName"
                :class="$v.form.directorName.$error ? 'questionnaire-input-invalid' : ''"
                @keypress="isLetter"
                >
                <p v-if="$v.form.directorName.$dirty && !$v.form.directorName.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>

                <input 
                placeholder="ИИН Директора" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                maxlength="12"
                v-model.trim="form.UIN"
                :class="$v.form.UIN.$error ? 'questionnaire-input-invalid' : ''"
                @keypress="isNumber"
                >
                <p v-if="$v.form.UIN.$dirty && !$v.form.UIN.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>

                <input placeholder="Контактный номер" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                maxlength="16"
                v-model.trim="form.phone"
                :class="$v.form.phone.$error ? 'questionnaire-input-invalid' : ''"
                v-imask="phoneNumberMask" 
                @accept="onAccept" 
                @complete="onComplete"
                @keypress="isNumber">
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.minLength" class="questionnaire-invalid-feedback">Данное поле должно содержать номер телефона</p>

                <input 
                placeholder="Электронная почта" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input"
                v-model.trim="form.email"
                :class="$v.form.email.$error ? 'questionnaire-input-invalid' : ''"
                >
                <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="questionnaire-invalid-feedback">Обязательное поле для заполнения</p>

                <input 
                placeholder="Опишите ваш бизнес" 
                type="text" 
                class="questionnaire__questions-input questionnaire__input questionnaire-textarea">
                
                <button type="submit">Проверить</button>
            </form>
        </div>
        <div class="questionnaire__loan">
            <form action="" @submit.prevent="submitHandler" class="questionnaire__loan-form">
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-product-service">
                        <h3>Продукты и услуги</h3>
                        <div class="questionnaire__loan-product-service-content questionnaire__loan-content">
                            <input 
                            placeholder="Название" 
                            class="questionnaire__input" 
                            type="text"
                            >
                            <select placeholder="Цена" class="questionnaire__input" type="text">
                                <option value="">Цена</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-revenue">
                        <h3>Выручка за последние 12 месяцев</h3>
                        <div class="questionnaire__loan-revenue-content questionnaire__loan-content">
                            <input placeholder="Категория продуктов" class="questionnaire__input" type="text">
                            <select placeholder="Выручка" class="questionnaire__input" type="text">
                                <option value="">Выручка</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-profit">
                        <h3>Прибыль за последние 12 месяцев</h3>
                        <div class="questionnaire__loan-profit-content questionnaire__loan-content">
                            <select placeholder="Выручка" class="questionnaire__input" type="text">
                                <option value="">Прибыль</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-credits">
                        <div class="questionnaire__loan-credits-title">
                            <h3>Есть ли у вас кредиты?</h3>
                            <div class="questionnaire__loan-credits-title-radios">
                                <div class="questionnaire__loan-credits-title-item">
                                    <input type="radio" 
                                    name="credit" 
                                    id="creditChoiceYes" 
                                    value="creditChoiceYes" 
                                    v-model="form.credit"
                                    >
                                    <label for="creditChoiceYes">Да</label>
                                </div>
                                <div class="questionnaire__loan-credits-title-item">
                                    <input 
                                    type="radio" 
                                    name="credit" 
                                    id="creditChoiceNo" 
                                    value="creditChoiceNo" 
                                    v-model="form.credit"
                                    >
                                    <label for="creditChoiceNo">Нет</label>
                                </div>
                            </div>
                        </div>
                        <p v-if="$v.form.credit.$dirty && !$v.form.credit.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                        <div class="questionnaire__loan-credits-content questionnaire__loan-content" >
                            
                            <select placeholder="Выручка" class="questionnaire__input" type="text">
                                <option value="">Сумма</option>
                                <option value=""></option>
                            </select>
                            <input placeholder="Проценты" class="questionnaire__input" type="text">
                            <select placeholder="Выручка" class="questionnaire__input" type="text">
                                <option value="">Ежемесячные выплаты</option>
                                <option value=""></option>
                            </select>
                            <input placeholder="Срок погашения" class="questionnaire__input" type="text">
                        </div>
                    </div>
                </div>
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-price">
                        <h3>Необходимая сумма</h3>
                        <div class="questionnaire__loan-price-content questionnaire__loan-content">
                            <select class="questionnaire__input" name="" id="">
                                <option value="">Сумма</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="questionnaire__loan-item">
                    <div class="questionnaire__loan-term">
                        <h3>Срок займа</h3>
                        <div class="questionnaire__loan-term-content questionnaire__loan-content">
                            <div class="questionnaire__loan-term-content-item">
                                <p>Готовы ли предоставить доступ к кредитной истории учредителя?</p>
                                <input type="radio" id="creditHistoryYes" value="creditHistoryYes">
                                <label for="creditHistoryYes" >Да</label>
                                <input type="radio" id="creditHistoryNo" value="creditHistoryNo">
                                <label for="creditHistoryNo">Нет</label>
                            </div>
                            <div class="questionnaire__loan-term-content-item">
                                <p>Готовы ли предоставить доступ к кредитной истории компании?</p>
                                <input type="radio">
                                <label for="">Да</label>
                                <input type="radio">
                                <label for="">Нет</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Проверить</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
export default {
    data: () => ({
        form: {
            organizationName: '',
            legalFormOrganization: '',
            BIN: '',
            directorName: '',
            UIN: '',
            phone: '',
            email: '',
            businessDescription: '',
            choseCountry: '',
            productName: '',
            credit: undefined
        },
        choseCountryOptions: [
            {text: 'Выберите страну', value: '', disabled: true, selected: true},
            {text: 'Казахстан', value: 'Kazakhstan'},
            {text: 'Россия', value: 'Russia'},
            {text: 'Украина', value: 'Ukraine'},
            {text: 'Узбекистан', value: 'Uzbekistan'},
        ],
        phoneNumberMask: {
            mask: '+{7}(000)000-00-00',
            lazy: true
        },
        credit: {
            showBlock: false,
            picked: ''
        }
    }),
    validations: {
        form: {
            organizationName: {required},
            legalFormOrganization: {required},
            BIN: {required, minLength: minLength(12)},
            directorName: {required},
            UIN: {required, minLength: minLength(12)},
            phone: {required},
            email: {required, email},
            businessDescription: {},
            credit: {required},
            productName: {required},
        }
    },
    methods: {
        submitHandler(){
            //this.$v.form.$touch()
            if(!this.$v.form.$error){
                axios.post(
                    'http://localhost:8000/api/v1/borrower/create/',
                    {
                        form: {
                            organizationName: this.form.organizationName
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                }).catch(function(){
                    console.log('FAILURE!!');
                })
            }
        },
        formValidation(){
            this.$v.form.$touch()
        },
        onAccept(e){
            const maskRef = e.detail
            this.form.phone = maskRef.value
        },
        onComplete(e){
            const maskRef = e.detail
            this.form.userPhone = maskRef.unmaskedValue
        },
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

    },
    computed: {
        
    },
    directives: {
      imask: IMaskDirective
    },
    watch: {
        picked(){
            this.credit.showBlock = (this.credit.picked == 'creditChoiceYes')
        }
    }
}
</script>

<style lang="scss" scoped>
    .questionnaire {
        margin: 20px 0 0 0;
        display: flex;
		&__questions {
		}

		&__title {
		}

		&__questions-form {
            display: flex;
            flex-direction: column;
		}

		&__questions-input {
            margin: 20px 0 0 0;
            height: 51px;
            width: 407px;
		}

		&__input {
            padding: 16px 20px;
		}

		&__loan {
            margin: 22px 0 0 50px;
            select{
                margin: 0 0 0 15px;
                &:first-child{
                    margin: 0;
                }
            }
            input{
                margin: 0 0 0 15px;
                &:first-child{
                    margin: 0;
                }
            }
		}

        &__loan-item{
            margin: 20px 0 0 0;
        }

        &__loan-content{
            margin: 15px 0 0 0;
        }

        &__loan-product-service{
            input, select{
                width: 335px;
            }
            
            select{
                margin: 0 0 0 15px;
            }
        }

        &__loan-revenue{
            input{
                width: 222px;
            }

            select{
                width: 448px;
            }
        }
        &__loan-profit{
            select{
                width: 685px;
            }
        }
        &__loan-credits{
            select{
                &:first-child{
                    width: 504px;
                    margin: 0;
                }
                width: 432px;
                margin: 15px 0 0 0;
            }
            input{
                &:last-child{
                    width: 238px;
                }
                width: 166px;
            }
            &-title{
                display: flex;
                align-items: center;
                &-item{
                    display: flex;
                    align-items: center;
                    margin: 0 0 0 25px;
                }
                &-radios{
                    display: flex;
                    align-items: center;
                    margin: 0 0 0 5px;
                    label{
                        font-weight: 500;
                        font-size: 20px;
                        line-height: 24px;
                        color: #333333;
                        margin: 0 0 0 10px;
                    }
                    input{
                        width: 20px;
                        height: 20px;
                        border-radius: 5px;
                    }
                }
            }
        }
        &__loan-price{
            select{
                width: 685px;
            }
        }
        &__loan-term{
            p{
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                color: #333333;
            }
        }
        &__loan-term-content-item{
            margin: 20px 0 0 0;
            display: flex;
            align-items: center;
            label{
                margin: 0 0 0 10px;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                text-align: right;
                color: #333333;
            }
            input{
                width: 20px;
                height: 20px;
            }
        }
}

.questionnaire-textarea{
    height: 120px;
}

.questionnaire-input-invalid{
   border: 1px solid #ff0000;
}

.questionnaire-invalid-feedback{
    color: #ff0000;
    margin: 4px 0 0 0;
}
</style>
