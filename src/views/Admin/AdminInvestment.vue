<template>
    <div class="admin-loan">
        <div class="admin-loan__inner">
            <h2>Инвестиция</h2>
            <div class="admin-loan__content">
                <div class="admin-loan__item">
                    ID: <span>{{id}}</span>
                </div>
                <div class="admin-loan__item">
                    ФИО инвестора: <span>{{investor_name}}</span>
                </div>
                <div class="admin-loan__item">
                    Сумма: <span>{{sum}}</span>
                </div>
                <div class="admin-loan__item admin-loan__documents">
                    <div class="request-documents__documents">
                        <div class="request-documents__item request-documents__title">
                            <div class="">
                                Название документа
                            </div>
                            <div class="">
                                Просмотр документа
                            </div>
                            <div class="">
                                Подпись(инвестор)
                            </div>
                            <div class="">
                                Подпись(админ)
                            </div>
                        </div>
                        <div class="request-documents__item">
                            <div class="">
                                Уведомление о передаче прав требования
                            </div>
                            <div class="">
                                <a id="factoringPDFView" target="_blank" href="http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/">Посмотреть документ</a>
                            </div>
                            
                            <div class="">
                                <p v-if="i_notice_to_the_debtor_is_signed == true">Подписан</p>
                                <p v-if="i_notice_to_the_debtor_is_signed == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="a_notice_to_the_debtor_is_signed">Подписан</p>
                                <button @click="signAgreement(notice_to_the_debtor)" class="document-button button" v-if="!a_notice_to_the_debtor_is_signed">Подписать</button>
                                
                            </div>
                        </div>
                        <div class="request-documents__item">
                            <div class="">
                                Договор залога движимого имущества
                            </div>
                            <div class="">
                                <a target="_blank" href="">Посмотреть документ</a>
                            </div>
                            <div class="">
                                <p v-if="i_contract_of_pledge_of_movable_property_is_signed == true">Подписан</p>
                                <p v-if="i_contract_of_pledge_of_movable_property_is_signed == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="a_contract_of_pledge_of_movable_property_is_signed">Подписан</p>
                                <button @click="signAgreement(contract_of_pledge_of_movable_property)" class="document-button button" v-if="!a_contract_of_pledge_of_movable_property_is_signed">Подписать</button>
                            </div>
                        </div>
                        <div class="request-documents__item">
                            <div class="">
                                Договор факторинга
                            </div>
                            <div class="">
                                <a target="_blank" href="">Посмотреть документ</a>
                            </div>
                            <div class="">
                                <p v-if="i_factoring_agreement_is_signed == true">Подписан</p>
                                <p v-if="i_factoring_agreement_is_signed == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="a_factoring_agreement_is_signed == true">Подписан</p>
                                <button @click="signAgreement(factoring_agreement)" class="document-button button" v-if="!a_factoring_agreement_is_signed">Подписать</button>
                            </div>
                        </div>
                        <div class="request-documents__item">
                            <div class="">
                                Договор цессии дебиторской задолженности
                            </div>
                            <div class="">
                                <a target="_blank" href="">Посмотреть документ</a>
                            </div>
                            <div class="">
                                <p v-if="i_receivables_assignment_agreement == true">Подписан</p>
                                <p v-if="i_receivables_assignment_agreement == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="a_receivables_assignment_agreement == true">Подписан</p>
                                <button @click="signAgreement(receivables_assignment_agreement)" class="document-button button" v-if="!a_receivables_assignment_agreement">Подписать</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="admin-loan__status">
                    <div style="display: flex; align-items: center;" class=""><h2>Текущий статус:</h2> <span>{{status_name}}</span></div>
                
                    <form @submit.prevent="submitHandler()" action="">
                        <div v-for="(stage_item, index) in stages_list" :key="stage_item.id" class="">
                            <input :id="index" v-model="stage_value" :value="stage_item.step_num" type="radio"> 
                            <label :for="index">{{stage_item.name}}</label>
                        </div>
                        
                        <div class="">
                            <button type="submit" class="admin-loan__status-button button">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        id: '',
        investor_name: '',
        sum: '',
        status: '',
        stages_list: [],
        status_name: '',
        stage_value: '',

        //Уведомление о передаче прав требования 
        a_notice_to_the_debtor_is_signed: '',
        // Договор залога движимого имущества 
        a_contract_of_pledge_of_movable_property_is_signed: '',
        //Договор факторинга 
        a_factoring_agreement_is_signed: '',
        // Договор цессии дебиторской задолженности 
        a_receivables_assignment_agreement: '',
        
        //Уведомление о передаче прав требования 
        i_notice_to_the_debtor_is_signed: '',
        // Договор залога движимого имущества 
        i_contract_of_pledge_of_movable_property_is_signed: '',
        //Договор факторинга 
        i_factoring_agreement_is_signed: '',
        // Договор цессии дебиторской задолженности 
        i_receivables_assignment_agreement: '',

        //Кнопка Уведомление о передаче прав требования 
        button_notice_to_the_debtor_is_signed: true,
        //Кнопка Договор залога движимого имущества 
        button_contract_of_pledge_of_movable_property_is_signed: true,
        //Кнопка Договор факторинга 
        button_factoring_agreement_is_signed: '',
        //Кнопка Договор цессии дебиторской задолженности 
        button_receivables_assignment_agreement: '',

        //Уведомление о передаче прав требования
        notice_to_the_debtor: 'notice_to_the_debtor',
        //Договор залога движимого имущества
        contract_of_pledge_of_movable_property: 'contract_of_pledge_of_movable_property',
        //Договор факторинга 
        factoring_agreement: 'factoring_agreement',
        // Договор цессии дебиторской задолженности 
        receivables_assignment_agreement: 'receivables_assignment_agreement',

        //Уведомление о передаче прав требования 
        i_notice_to_the_debtor_is_signed: '',
        // Договор залога движимого имущества 
        i_contract_of_pledge_of_movable_property_is_signed: '',
        //Договор факторинга 
        i_factoring_agreement_is_signed: '',
        // Договор цессии дебиторской задолженности 
        i_receivables_assignment_agreement: '',
    }),
    mounted(){
        this.getInvestmentData(),
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/stages-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.stages_list = response.data
        })
    },
    methods:{
        submitHandler(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/investor/update-stage/' + localStorage.getItem('id') + '/',
            {
                step: this.stage_value
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            })
        },
        signAgreement(value){
            axios.post('http://127.0.0.1:8000/api/v1/admin/investor/sign-agreement/' + localStorage.getItem('id') + '/',
            {
                document: value
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then((response) => {
                this.getInvestmentData()
            })
        },
        getInvestmentData(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/investment/' + localStorage.getItem('id') + '/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.id = response.data.id,
                this.investor_name = response.data.user_name,
                this.sum = response.data.investment_sum,
                this.status_name = response.data.stage_name
                console.log(response.data.a_notice_to_the_debtor_is_signed),
                //Уведомление о передаче прав требования 
                this.a_notice_to_the_debtor_is_signed = response.data.a_notice_to_the_debtor_is_signed,
                // Договор залога движимого имущества 
                this.a_contract_of_pledge_of_movable_property_is_signed = response.data.a_contract_of_pledge_of_movable_property_is_signed,
                //Договор факторинга 
                this.a_factoring_agreement_is_signed = response.data.a_factoring_agreement_is_signed,
                // Договор цессии дебиторской задолженности 
                this.a_receivables_assignment_agreement = response.data.a_receivables_assignment_agreement

                //Уведомление о передаче прав требования 
                this.i_notice_to_the_debtor_is_signed = response.data.i_notice_to_the_debtor_is_signed,
                // Договор залога движимого имущества 
                this.i_contract_of_pledge_of_movable_property_is_signed = response.data.i_contract_of_pledge_of_movable_property_is_signed,
                //Договор факторинга 
                this.i_factoring_agreement_is_signed = response.data.i_factoring_agreement_is_signed,
                // Договор цессии дебиторской задолженности 
                this.i_receivables_assignment_agreement = response.data.i_receivables_assignment_agreement
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.admin-loan {

		&__inner {
		}

		&__content {
		}

		&__item {
            font-weight: 700;
            font-size: 22px;
            margin: 20px 0 0 0;
		}

		&__documents {
            margin: 20px 0 0 0;
		}
}


.request-documents {
        background: #fff;
        box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
        border-radius: 10px;
        padding: 30px;
		&__inner {
		}

		&__documents {
		}

		&__item {
            display: flex;
            justify-content: space-between;
            div{
                flex: 0 0 25%;
            }
            margin: 20px 0 0 0;
            font-size: 18px;
            a{
                color: #0345FF;
            }
		}
        h3{
            margin: 40px 0 0 0;
        }
        
}

.request-documents__title{
    font-size: 22px;
    font-weight: 500;
    background: #0345FF;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
}

span{
    color:#0345FF;
}

form{
    margin: 20px 0 0 0;
    div{
        display: flex;
        align-items: center;
        margin: 15px 0 0 0;
    }
}

.admin-loan__status{
    margin: 20px 0 0 0;
    span{
        font-size: 25px;
        font-weight: 500;
        margin-left: 15px;
    }
}

input{
    width: 20px;
    height: 20px;
}

label{
    font-size: 18px;
    margin: 0 0 0 15px;
    font-weight: 500;
}

.admin-loan__status-button{
    padding: 15px;
    font-size: 18px;
}

.document-button{
    padding: 10px;
}
</style>