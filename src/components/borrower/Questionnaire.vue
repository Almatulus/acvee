<template>
    <div class="questionnaire__wrapper">
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
                        v-model="form.countryID"
                    >
                        <option value="">Выберите страну</option>
                        <option v-for="country in COUNTRIES" :key="country.id" :value="country.id">{{country.name}}</option>
                    </select>
                    
                    <select 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        v-model="form.cityID">
                        <option value="">Выберите город</option>
                        <option v-for="city in cities" :key="city.id" :value="form.cityID">{{city.name}}</option>
                        
                    </select>
                    
                    
                    <input placeholder="БИН" 
                        type="text" 
                        class="questionnaire__questions-input questionnaire__input"
                        maxlength="12"
                        v-model.trim="form.BIN"
                        :class="$v.form.BIN.$error ? 'questionnaire-input-invalid' : ''"
                        @keypress="isNumber"
                    >
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
                        @keypress="isNumber"
                    >
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
                                    v-model.trim="form.productName"
                                >
                                <input 
                                    placeholder="Цена" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.productPrice"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-revenue">
                            <h3>Выручка за последние 12 месяцев</h3>
                            <div class="questionnaire__loan-revenue-content questionnaire__loan-content">
                                <select v-model="form.productCategory" class="questionnaire__input" type="text">
                                    <option value="">Категория продуктов</option>
                                    <option v-for="category in PRODUCTCATEGORIES" :key="category.id" :value="category.id">{{category.name}}</option>
                                </select>
                                <input 
                                    placeholder="Выручка" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.revenue"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-profit">
                            <h3>Прибыль за последние 12 месяцев</h3>
                            <div class="questionnaire__loan-profit-content questionnaire__loan-content">
                                <input 
                                    placeholder="Прибыль" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.profit"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-credits">
                            <div class="questionnaire__loan-credits-title">
                                <h3>Есть ли у вас кредиты?</h3>
                                <div class="questionnaire__loan-credits-title-radios">
                                    <div class="questionnaire__loan-credits-title-item">
                                        <input 
                                            type="radio" 
                                            name="credit" 
                                            id="creditChoiceYes" 
                                            :value="true" 
                                            v-model.trim="form.hasCredit"
                                        >
                                        <label for="creditChoiceYes">Да</label>
                                    </div>
                                    <div class="questionnaire__loan-credits-title-item">
                                        <input 
                                            type="radio" 
                                            name="credit" 
                                            id="creditChoiceNo" 
                                            :value="false" 
                                            v-model.trim="form.hasCredit"
                                        >
                                        <label for="creditChoiceNo">Нет</label>
                                    </div>
                                </div>
                            </div>
                            <p v-if="$v.form.credit.$dirty && !$v.form.credit.required" class="questionnaire-invalid-feedback">Обязательно для выбора</p>
                            <div class="questionnaire__loan-credits-content questionnaire__loan-content" >
                                
                                <input 
                                    placeholder="Сумма" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.credit.sum"
                                >                               
                                <input 
                                    placeholder="Проценты" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.credit.percent"
                                >
                                <input 
                                    placeholder="Ежемесячные выплаты" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.credit.monthlyPayment"
                                >
                                <input 
                                    placeholder="Срок погашения" 
                                    class="questionnaire__input" 
                                    type="text"
                                    v-model.trim="form.credit.maturity"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-price">
                            <h3>Необходимая сумма</h3>
                            <div class="questionnaire__loan-price-content questionnaire__loan-content">
                                <input 
                                    placeholder="Сумма" 
                                    class="questionnaire__input" 
                                    name=""
                                    v-model.trim="form.neededSum"
                                >
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire__loan-item">
                        <div class="questionnaire__loan-term">
                            <h3>Срок займа</h3>
                            <select v-model="form.isWeek" name="" id="">
                                <option :value="true">Неделя</option>
                                <option :value="false">Месяц</option>
                            </select>
                            
                            <div class="questionnaire__loan-term-content questionnaire__loan-content">
                                <div>
                                    Current value: <span id="value"></span>
                                </div>
                                <div>
                                    Current step: <span id="step"></span>
                                </div>
                                <div v-show="form.isWeek">
                                    <input v-model="form.amount" id="weeks" type="range" value="0" min="0" max="48" />
                                </div>
                                <!--<fieldset class="formSlider">
                                    <legend class="applicationForm__text">Выберите количество серебра (млн)</legend>
                                    <div class="__range __range-step">
                                        <input v-model="form.amount" id="weeks" value="0" type="range" max="48" min="0" >
                                        <datalist id="ticks1">
                                            <option value="1">1 млн</option>
                                            <option value="2">2 млн</option>
                                            <option value="3">3 млн</option>
                                            <option value="4">4 млн</option>
                                            <option value="5">5 млн</option>
                                        </datalist>
                                        
                                    </div>
                                </fieldset>-->
                                <p>{{form.amount}}</p>
                                <div class="questionnaire__loan-term-content-item">
                                    <p>Готовы ли предоставить доступ к кредитной истории учредителя?</p>
                                    <input type="radio" name="accessFounderHistory" id="accessFounderHistory1" v-model="form.accessFounderHistory" :value="true">
                                    <label for="accessFounderHistory1" name="accessFounderHistory1">Да</label>
                                    <input type="radio" name="accessFounderHistory" id="accessFounderHistory2" v-model="form.accessFounderHistory" :value="false">
                                    <label for="accessFounderHistory2" name="accessFounderHistory2">Нет</label>
                                </div>
                                <div class="questionnaire__loan-term-content-item">
                                    <p>Готовы ли предоставить доступ к кредитной истории компании?</p>
                                    <input type="radio" name="accessCompanyHistory" id="accessCompanyHistory1" v-model="form.accessCompanyHistory" :value="true">
                                    <label for="accessCompanyHistory1">Да</label>
                                    <input type="radio" name="accessCompanyHistory" id="accessCompanyHistory2" v-model="form.accessCompanyHistory" :value="false">
                                    <label for="accessCompanyHistory2">Нет</label>
                                </div>
                                <button type="submit">111</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
        <div class="scoring">
            <div class="scoring__inner">
                <form action="" @submit.prevent="submitHandler">
                    <h2>Скоринг</h2>
                    <div class="scoring__item-wrapper">
                        <div class="scoring__content">
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Личные данные
                                </div>
                                <div class="scoring__subtitle">
                                    Удостоверение личности
                                </div>
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input class="document__send" type="file" id="file" ref="IDCard" v-on:change="uploadFile()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Договор реализации товара
                                </div>
                                <div class="scoring__subtitle">
                                    Поставщик – Конечный клиент
                                </div>
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input class="document__send" type="file" id="file" ref="registrationCertificate" v-on:change="uploadFile()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Договор закупа
                                </div>
                                <div class="scoring__subtitle">
                                    с производителем\дистрибьютером
                                </div>
                                <div class="scoring__document">
                                    <FilePreview :value="form.purchaseAgreement"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="scoring__item-wrapper">
                        <h3>Акты сверок между Поставщиком и Производителем за последние 6 месяцев</h3>
                        <div class="scoring__content">
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Первый акт
                                </div>
                                <div class="scoring__subtitle">
                                    Минимум по три акта за один месяц
                                </div>
                                <div class="scoring__document">
                                    <FilePreview :value="form.firstAct"/>
                                </div>
                            </div>
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Второй акт
                                </div>
                                <div class="scoring__subtitle">
                                    Минимум по три акта за один месяц
                                </div>
                                <div class="scoring__document">
                                    <FilePreview :value="form.secondAct"/>
                                </div>
                            </div>
                            <div class="scoring__item">
                                <div class="scoring__title">
                                    Третий акт
                                </div>
                                <div class="scoring__subtitle">
                                    Минимум по три акта за один месяц
                                </div>
                                <div class="scoring__document">
                                    <FilePreview :value="form.ABPConfirm"/>
                                </div>
                            </div>
                        </div>
                        <h3>ЭСФ подтверждение текущим АВР</h3>
                        <a class="button esf__button">Вложить документ</a>
                        <p class="esf__text">Нажимая “Оплатить проверку” вы соглашаетесь с получением данных из открытых источников</p>
                        <div class="esf__examination">
                            <div class="esf__examination-text">
                                Проверка ПКБ и Abis.kz: <span>1000тг</span>
                            </div>
                            <button type="submit" @click.prevent="submitHandler()" class="esf__examination-button button">Оплатить провеку</button>
                        </div>
                        <div class="scoring__expectation">
                            <p class="scoring__expectation-title">Ожидание прохождение скоринга от 1 до 3 дней</p>
                            <p class="scoring__expectation-text">Мы уведомлим вас в личном кабинете о сборе всех данных</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>    
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { IMaskDirective } from 'vue-imask'
import {mapActions, mapGetters} from 'vuex'
import FilePreview from '@/components/documents/FilePreview.vue'
import PreviewFile from '@/components/documents/PreviewFile.vue'
export default {
    props: [

    ],
    data: () => ({
        country: '',
        cities: '',
        form: {
            organizationName: '',
            legalFormOrganization: '',
            BIN: '',
            directorName: '',
            UIN: '',
            phoneNumber: '',
            email: '',
            businessDescription: '',
            countryID: '',
            cityID: '',

            productName: '',
            productPrice: '',

            categoryID: '',
            revenue: '',
            profit: '',
            hasCredit: '',
            credit: {
                sum: '',
                percent: '',
                monthlyPayment: '',
                maturity: ''
            },
            isWeek: true,
            amount: 0,
            neededSum: '',
            accessFounderHistory: '',
            accessCompanyHistory: '',
        },
        scoring: {
            IDCard: '',
            registrationCertificate: '',
            contractSale: '',
            purchaseAgreement: '',
            firstAct: '',
            secondAct: '',
            thirdAct: '',
            ABPConfirm: '',
            consentVerification: ''
        },
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
        ...mapActions([
            'GET_COUNTRIES_FROM_API',
            'GET_PRODUCTCATEGORIES_FROM_API'
        ]),
        /*submitHandler(){
            //this.$v.form.$touch()
            let formData = new FormData();
            formData.append('file', this.scoring.IDCard);
            const headers = { 'Content-Type': 'multipart/form-data' };
            if(!this.$v.form.$error){
                axios.post(
                    'http://localhost:8000/api/v1/borrower/create/',
                    {
                        form: this.form,
                        scoring: {
                            IDCard: formData
                        },
                    })
                .then(function(){
                    console.log('SUCCESS!!');})
                .catch(function(){
                    console.log('FAILURE!!');})
                
            }
        },*/
        submitHandler(){
            const IDCard = new FormData();
            IDCard.append('file', this.scoring.IDCard);
            const registrationCertificate = new FormData();
            IDCard.append('file', this.scoring.registrationCertificate);
            const headers = { 'Content-Type': 'multipart/form-data' };
            axios.post('http://localhost:8000/api/v1/borrower/create/', 
                
                //{data:[IDCard]}
                {
                    IDCard,
                    registrationCertificate
                }
            )
            .then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            })
            console.log(IDCard)
        },
        uploadFile() {
            this.scoring.IDCard = this.$refs.IDCard.files[0];
            this.scoring.registrationCertificate = this.$refs.registrationCertificate.files[0]
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
        inputRangeSteps(){
            
        }
    },
    computed: {
        ...mapGetters([
            'COUNTRIES',
            'PRODUCTCATEGORIES'
        ]),
    },
    mounted() {
        this.GET_COUNTRIES_FROM_API(),
        this.GET_PRODUCTCATEGORIES_FROM_API(),
        $(function() {

	$('#weeks').on("input change", function() {

		var
			element = $('#weeks'),
			value = element.val(),
			step;
			
		/* 
			Map your rules 
		*/
		if (value < 10) {

			step = 10;
		}
        else if (value => 11){
    	    step = 5
        }
		
    else if(value > 30){
				
			step = 18;

		}
    
    if(value == 5){
    	value = 10
    }
    
   if(value > 30){
    	value = 48
    }

		element.attr('step', step);

		$('#value').text(value);
		$('#step').text(step);
	});
});
    },
    directives: {
      imask: IMaskDirective
    },
    watch: {
        picked(){
            this.credit.showBlock = (this.credit.picked == 'creditChoiceYes')
        },
        'form.countryID': function(){
            this.cities = this.COUNTRIES.filter(item => {
                return item.id == this.form.countryID;
            })[0].cities;
        
        }
    },
    components: {
        FilePreview,
        PreviewFile
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
            input{
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
            input{
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
        &__loan-term-range{
            width: 200px;
        }
}

.scoring {
        margin: 30px 0 0 0;
		&__inner {
            
		}

		&__content {
            margin: 25px 0 0 0;
            text-align: center;
            display: flex;
		}

        &__item-wrapper{
            margin: 25px 0 0 0;
        }

		&__item {
            width: 335px;
            height: 360px;
            padding: 30px;
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
            border-radius: 10px;
            margin: 0 0 0 30px;
            &:first-child{
                margin: 0;
            }
		}

		&__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
		}

		&__subtitle {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 5px 0 0 0;
		}

		&__document {
            margin: 17px 0 0 0;
            
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
.esf__button{
    display: inline-block;
    padding: 17px 25px;
    cursor: pointer;
    margin: 20px 0 0 0;
}

.esf__text{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin: 35px 0 0 0;
}

.esf__examination{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0 0 0;
}

.esf__examination-text{
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
}

.esf__examination-button{
    padding: 17px 20px;
}

.scoring__expectation{
    margin: 70px 0 0 0;
}

.scoring__expectation-title{
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
}

.scoring__expectation-text{
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: rgba(51, 51, 51, 0.6);
}


//Input range

</style>
