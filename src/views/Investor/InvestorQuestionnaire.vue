<template>
    <div class="investor-questionnaire">
        <div class="investor-questionnaire__inner">
            <form id="docForm" @submit.prevent="submitHandler" class="investor-questionnaire__form" action="">
                    <input style="width: 20px; height: 20px;" id="invesor-type1" name="invesor-type" value="2" v-model="form.investor_type" type="radio">
                    <label style="margin-left: 10px; font-size: 20px; font-weight: 600;" for="invesor-type1">Индивидуальный предприниматель</label>
                    <input style="margin-left: 20px; width: 20px; height: 20px;" id="invesor-type2" name="invesor-type" value="1" v-model="form.investor_type" type="radio">
                    <label style="margin-left: 10px; font-size: 20px; font-weight: 600;" for="invesor-type2">Физическое лицо</label>
                <div class="investor-questionnaire__form-body">
                    <div class="investor-questionnaire__form-column">
                        <p class="investor-questionnaire__form-label">Наименование ИП<span>/Ф.И.О</span></p>
                        <input 
                        placeholder="Нурлан" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.name"
                        :class="$v.form.name.$error ? 'invalid' : ''"
                        @keypress="isLetter">
                        <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        
                        <p class="investor-questionnaire__form-label">ИИН/БИН</p>
                        <input 
                        placeholder="871322638500" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        maxlength="12"
                        v-model.trim="form.UID_BIN"
                        :class="$v.form.UID_BIN.$error ? 'invalid' : ''"
                        @keypress="isNumber">
                        <p v-if="$v.form.UID_BIN.$dirty && !$v.form.UID_BIN.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                        <p v-if="$v.form.UID_BIN.$dirty && !$v.form.UID_BIN.minLength" class="invalid-feedback">Данное поле должно содержать 12 символов</p>

                        <p class="investor-questionnaire__form-label">Срок инвестирования</p>
                        <!--<input v-model="form.investment_term" type="range" value="0" min="2" max="25">-->
                        <div style="margin-top: 10px;" class="">
                            <input style="width: 17px; height: 17px;" v-model="form.investment_term" type="radio" name="investment" id="investment1">
                            <label style="margin-left: 10px; font-size: 17px;" for="investment1">6 месяцев</label>
                            <input style="margin-left: 30px; width: 17px; height: 17px;" v-model="form.investment_term" type="radio" name="investment" id="investment2">
                            <label style="margin-left: 10px; font-size: 17px;" for="investment2">12 месяцев</label>
                        </div>
                        <p class="investor-questionnaire__form-label">Номер счета</p>
                        <input 
                            placeholder="IBAN" 
                            class="investor-questionnaire__form-input" 
                            type="text"
                            maxlength="12"
                            v-model.trim="form.IBAN"
                            
                            @keypress="isNumber">
                        <p class="investor-questionnaire__form-label">Название банка</p>
                        <input 
                            placeholder="Название банка" 
                            class="investor-questionnaire__form-input" 
                            type="text"
                            maxlength="12"
                            v-model.trim="form.bank_name"
                            
                            @keypress="isNumber">
                    </div>
                    <div class="investor-questionnaire__form-column">
                        <p class="investor-questionnaire__form-label">Город регистрации<span>/проживание</span></p>
                        <input 
                        placeholder="Астана" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.city"
                        :class="$v.form.city.$error ? 'invalid' : ''"
                        @keypress="isLetter">
                        <p v-if="$v.form.city.$dirty && !$v.form.city.required" class="invalid-feedback">Обязательное поле для заполнения</p>

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
                        <!--<select class="investor-questionnaire__form-input" name="" id="">
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
                        </select>-->
                        <div style="margin: 10px 0 0 0; font-weight: 600;" class="">От 500000 до 1000000</div>
                        <br>
                        <input v-model="form.investment_sum" type="text"
                        class="investor-questionnaire__form-input"
                        placeholder="Сумма инвестирования">

                        <br>

                        <input 
                        placeholder="Желаемая сумма" 
                        class="investor-questionnaire__form-input" 
                        type="text"
                        v-model.trim="form.desired_sum"
                        :class="$v.form.desired_sum.$error ? 'invalid' : ''"
                        @keypress="isNumber"
                        >
                        <p v-if="$v.form.desired_sum.$dirty && !$v.form.desired_sum.required" class="invalid-feedback">Обязательное поле для заполнения</p>
                    </div>
                </div>
                <p class="investor-questionnaire__form-label">Почему вы решили инвестирвать в Acvee</p>
                <input v-model="form.description" placeholder="Причина" class="investor-questionnaire__form-input investor-questionnaire__form-textarea" type="text">
                <br>
                <!--<input name="ID_card_img" id="ID_card_img" style="display: none;" type="file" v-on:change="handleFileUpload()">
                <label class="button-certify btn" for="ID_card_img" id="ID_card_img" ref="ID_card_img">Удостоверение личности</label>-->
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 29px; height: 25px;" type="checkbox" id="confirmation1">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation1">Настоящим даю согласие на сбор, обработку и использование моих персональных данных в соответствие с законом Республики Казахстана "О персональных данных и их защите",в том числе на получение информации обо мне и из любых возможных публичных источников.</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation2">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation2">Я подтверждаю, что деньги, которые я предполагаю инвестировать являются легальными и не получены в результате незаконной деятельности</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation3">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation3">Я подтверждаю, что не являюсь политически значимой личностью (PEP)</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation4">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation4">Я подтверждаю, что предоставленная мною информация является точной и не вводит в заблуждение;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation5">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation5">Я подтверждаю, что никто не будет иметь доступа к предоставленным мне данным о Компании;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation6">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation6">Я подтверждаю, что я дееспособен и могу вступать в юридически обязывающие меня отношения с Компанией;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation7">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation7">Я подтверждаю, что действую от своего лица и не представляю ничьи интересы;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation8">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation8">Я подтверждаю, что лично принимаю решение по предоставлению финансирования Компании;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 21px; height: 25px;" type="checkbox" id="confirmation9">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation9">Я подтверждаю, что понимаю, что, подписывая Договор Инвестиции или Займа через краудфандинговую платформу Acvee Crowdfinding, я предоставляю финансирование Компании напрямую;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 34px; height: 25px;" type="checkbox" id="confirmation10">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation10">Я подтверждаю, что Компании, представленные на краудфандинговой платформе Acvee Crowdfinding, могут понести убытки либо обанкротиться, и, соответственно, Инвестиция или Заем такой Компании является рискованной, включая риск потери части либо всех моих денег, задержки платежей или получения прочих выгод от Компании;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation11">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation11">Я подтверждаю, что если не диверсифицировать портфолио инвестиций и займов это может привести к большим потерям в случае дефолта одной конкретной Компании;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 18px; height: 25px;" type="checkbox" id="confirmation12">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation12">Я подтверждаю, что Я могу не иметь возможности уступить выданный заём или продать инвестиции третьим лицам в момент, когда я этого захочу;</label>
                </div>
                <div style="display: flex; align-items: center; margin-top: 10px" class="">
                    <input style="width: 28px; height: 25px;" type="checkbox" id="confirmation13">
                    <label style="font-weight: 600; font-size: 16px; margin-left: 10px" for="confirmation13">Я подтверждаю, что если по любой причине краудфандинговая платформа Acvee Crowdfinding не сможет продолжать свою деятельность, я могу потерять свои деньги, понести дополнительные затраты либо испытать задержки в получении выплат;</label>
                </div>
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
            investor_type: '',
            name: '',
            UID_BIN: '',
            investment_term: '',
            city: '',
            investment_sum: '',
            desired_sum: '',
            email: '',
            description: '',
            ID_card_img: '',
            IBAN: '',
            bank_name: ''
            
        }
    }),
    validations: {
        form:{
            investor_type: {required},
            name: {required},
            UID_BIN: {required, minLength: minLength(12)},
            city: {required},
            investment_sum: {required},
            email: {required, email},
            desired_sum: {required},
            ID_card_img: {required}
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
            //this.$v.form.$touch()
            /*let docForm = document.getElementById('docForm')
            let formData = new FormData(docForm)
            for(let i in this.form) {formData.append(i, this.form[i])}*/
            
            if(!this.$v.form.$error){
                axios.post( 'http://127.0.0.1:8000/api/v1/investor/save-form/', 
                //formData,
                this.form,
                //obj,
                {
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken'),
                        //'Content-Type': 'multipart/form-data'
                    }
                }
                
                ).then(function(){
                console.log('SUCCESS!!');
                })
                .catch(function(){
                console.log('FAILURE!!');
                });
            }
        },
        handleFileUpload(){
            this.form.ID_card_img = this.$refs.ID_card_img.files[0];
        }
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
            margin: 10px 0 0 0;
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