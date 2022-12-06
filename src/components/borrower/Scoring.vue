<template>
    <div class="scoring">
        <div class="scoring__inner">
            <h2>Скоринг</h2>
            <form action="" @submit.prevent="submitHandler()">
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                                            <input class="document__send" type="file" id="file" ref="file" :value="value" v-on:change="handleFileUpload()"/>
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
                        <input type="file">
                        <label for="">Вложить документ</label>
                    </div>
                    <div class="scoring__agreement">
                        <input type="checkbox"> 
                        <label for="">Нажимая “Оплатить проверку” вы соглашаетесь с получением данных из открытых источников</label>
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
export default {
    data: () => ({
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
            
        }
    },
    computed:{
        ...mapGetters([
            'QUESTIONNAIREFORMSTATE'
        ]),
    }
}
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