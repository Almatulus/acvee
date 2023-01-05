<template>
    <div class="admin-loan">
        <div class="admin-loan__inner">
            <h2>Инвестиция</h2>
            <div class="admin-loan__content">
                <!-- <div class="admin-loan__item">
                    ID: <span>{{id}}</span>
                </div>
                <div class="admin-loan__item">
                    ФИО инвестора: <span>{{investor_name}}</span>
                </div>
                <div class="admin-loan__item">
                    Сумма: <span>{{sum}}</span>
                </div> -->
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
                                Подпись(админ)
                            </div>
                            <div class="">
                                Подпись(инвестор)
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
                                <p v-if="statusList.a_notice_to_the_debtor_is_signed == true">Подписан</p>
                                <p v-if="statusList.a_notice_to_the_debtor_is_signed == false">В ожидании</p>
                            </div>
                            
                            <div class="">
                                <p v-if="statusList.i_notice_to_the_debtor_is_signed">Подписан</p>
                                <button @click="signAgreement(notice_to_the_debtor)" class="document-button button" v-if="!statusList.i_notice_to_the_debtor_is_signed">Подписать</button>
                                
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
                                <p v-if="statusList.a_contract_of_pledge_of_movable_property_is_signed == true">Подписан</p>
                                <p v-if="statusList.a_contract_of_pledge_of_movable_property_is_signed == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="statusList.i_contract_of_pledge_of_movable_property_is_signed">Подписан</p>
                                <button @click="signAgreement(contract_of_pledge_of_movable_property)" class="document-button button" v-if="!statusList.i_contract_of_pledge_of_movable_property_is_signed">Подписать</button>
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
                                <p v-if="statusList.a_factoring_agreement_is_signed == true">Подписан</p>
                                <p v-if="statusList.a_factoring_agreement_is_signed == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="statusList.i_factoring_agreement_is_signed == true">Подписан</p>
                                <button @click="signAgreement(factoring_agreement)" class="document-button button" v-if="!statusList.i_factoring_agreement_is_signed">Подписать</button>
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
                                <p v-if="statusList.a_receivables_assignment_agreement == true">Подписан</p>
                                <p v-if="statusList.a_receivables_assignment_agreement == false">В ожидании</p>
                            </div>
                            <div class="">
                                <p v-if="statusList.i_receivables_assignment_agreement == true">Подписан</p>
                                <button @click="signAgreement(receivables_assignment_agreement)" class="document-button button" v-if="!statusList.i_receivables_assignment_agreement">Подписать</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="admin-loan__status">
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
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        statusList: [],
        //Уведомление о передаче прав требования
        notice_to_the_debtor: 'notice_to_the_debtor',
        //Договор залога движимого имущества
        contract_of_pledge_of_movable_property: 'contract_of_pledge_of_movable_property',
        //Договор факторинга 
        factoring_agreement: 'factoring_agreement',
        // Договор цессии дебиторской задолженности 
        receivables_assignment_agreement: 'receivables_assignment_agreement',
    }),
    methods: {
        getStatusData(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/investor/my-agreements/' + localStorage.getItem('userID') + '/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                console.log(response.data)
                this.statusList = response.data
            })
        },
        signAgreement(value){
            axios.post('http://127.0.0.1:8000/api/v1/investor/sign-agreement/' + localStorage.getItem('userID') + '/',
            {
                document: value
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then((response) => {
                this.getStatusData()
            })
        },
    },
    mounted(){
        this.getStatusData()
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