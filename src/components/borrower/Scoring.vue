<template>
    <div class="scoring">
        <div class="scoring__inner">
            <h2>Скоринг</h2>
            <form id="docForm" ref="docForm" action="" @submit.prevent="submitHandler()">
                <div class="scoring__item-wrapper">
                    <div class="scoring__content">
                        <div class="scoring__item">
                            <div class="scoring__title">
                                Личные данные
                            </div>
                            <div class="scoring__subtitle">
                                Удостоверение личности
                            </div>
                            <div class="scoring__document">
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="IDCard" class="document__send" type="file" id="file" ref="IDCard" v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="scoring__item">
                            <div class="scoring__title">
                                Личные данные
                            </div>
                            <div class="scoring__subtitle">
                                Справка регистрации ТОО или ИП
                            </div>
                            <div class="scoring__document">
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="registrationCertificate" class="document__send" type="file" id="file" ref="IDCard" v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
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
                            <div class="scoring__document">
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="contractSale" class="document__send" type="file" id="file" ref="file"  v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
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
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="purchaseAgreement" class="document__send" type="file" id="file" ref="file"  v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
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
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="firstAct" class="document__send" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
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
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="secondAct" class="document__send" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
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
                                <div class="document">
                                    <div class="document__inner">
                                        <label>+ Добавить документ
                                            <input name="thirdAct" class="document__send" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                        </label>
                                            <!--<button class="document__button button" v-on:click="submitFile()">Загрузить файл</button>-->
                                        <div class="document__preview">
                                            <img src="" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>ЭСФ подтверждение текущим АВР</h3>
                    <div class="scoring__add-doc">
                        <input name="ABPConfirm" id="ABPConfirm" type="file">
                        <label for="ABPConfirm">Вложить документ</label>
                    </div>
                    <div class="scoring__agreement">
                        <input name="consentVerification" v-model="scoring.purchaseAgreement" :value="true" id="agreement" type="checkbox"> 
                        <label for="agreement">Нажимая “Оплатить проверку” вы соглашаетесь с получением данных из открытых источников</label>
                    </div>
                    <div class="scoring__examination">
                        <p>Проверка ПКБ и Abis.kz: <span>1000тг</span></p>
                        <button class="button" type="submit">Оплатить провеку</button>
                    </div>
                    <div class="scoring__expectation">
                        <p>Ожидание прохождение скоринга от 1 до 3 дней</p>
                        <p>Мы уведомлим вас в личном кабинете о сборе всех данных</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import FilePreview from '@/components/documents/FilePreview.vue'
import {mapActions, mapGetters} from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
    data: () => ({
        file: '',
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
    }),
    components: {
        FilePreview
    },
    methods:{
        submitHandler(){
            let docForm = document.getElementById('docForm')
            //console.log(this.QUESTIONNAIREFORMSTATE.organizationName, this.QUESTIONNAIREFORMSTATE)
            let formData = new FormData(docForm);
            //formData.append('file', this.scoring.IDCard);
            //let localitems = localStorage.getItem('questionnaire')
            console.log(formData)
            //let questionnaire = JSON.parse(localStorage.getItem('questionnaire'))
            //let questionnaireData = JSON.parse(localStorage.getItem('questionnaire'))

            //console.log(questionnaireData)

            //var obj = Object.assign(formData, questionnaireData)

            //console.log(obj)
            let form = JSON.parse(localStorage.getItem('questionnaire'))
            for(let i in form) {formData.append(i, form[i]);}
            //formData.append('form', localStorage.getItem('questionnaire'))
            //for(var i in questionnaire){formData.append(i, questionnaire[i])};
            //for(var i in localitems){formData.append(i, localitems[i])}
            
            /*const data = JSON.parse(localStorage.getItem('questionnaire'))
            for (let k in data) {
                if(typeof data[k] == 'object'){
                    for(let i in data[k]) formData.append(k+'['+i+']', data[k][i])
                }
                else formData.append(k, data[k]);
            }*/
            //console.log(localStorage.getItem('questionnaire'))
            //console.log(data)
            //formData.append(JSON.parse(localStorage.getItem('questionnaire')))

            //formData.append(this.QUESTIONNAIREFORMSTATE.organizationName)
            //formData.append('form', this.QUESTIONNAIREFORMSTATE);
            //formData.append('', this.scoring.registrationCertificate)
            axios.post( 'http://127.0.0.1:8000/api/v1/borrower/create/', 
                formData,
                //obj,
                {
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                }
                
            ).then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },
        handleFileUpload(){
            this.scoring.IDCard = this.$refs.IDCard.files[0];
            this.scoring.registrationCertificate = this.$refs.registrationCertificate.files[0];
            this.scoring.contractSale = this.$refs.registrationCertificate.files[0];
            console.log(this.scoring.IDCard)
        }
    },
    computed:{
        ...mapGetters([
            'QUESTIONNAIREFORMSTATE'
        ]),
    },
    validations: {

    }
}

//form: this.QUESTIONNAIREFORMSTATE,
                    /*scoring: {
                        IDCard: IDCard,
                    }*/
</script>

<style lang="scss" scoped>
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

        &__agreement{
            display: flex;
            margin: 35px 0 0 0;
            align-items: center;
            input{
                background: #FFFFFF;
                box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
                border-radius: 5px;
                width: 28px;
                height: 28px;
            }
            label{
                margin: 0 0 0 20px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
            }
        }

        &__add-doc{
            margin: 25px 0 0 0;
            input{
                display: none;
            }
            label{
                display: inline-block;
                padding: 17px 20px;
                background: #0345FF;
                box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
                border-radius: 10px;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #FFFFFF;
            }
        }

        &__examination{
            margin: 40px 0 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-weight: 600;
                font-size: 24px;
                line-height: 29px;
            }
            button{
                padding: 17px 20px;
            }
        }
        
        &__expectation{
            margin: 60px 0 0 0;
            p{
                &:first-child{
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                }
                &:last-child{
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: rgba(51, 51, 51, 0.6);
                }
            }
        }
}

</style>

