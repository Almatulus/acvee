<template>
    <div class="admin-loan">
        <div class="admin-loan__inner">
            <h2>Займ</h2>
            <div class="admin-loan__content">
                <div class="admin-loan__item">
                    ID: <span>{{id}}</span>
                </div>
                <div class="admin-loan__item">
                    ФИО заемщика: <span>{{borrower_name}}</span>
                </div>
                <div class="admin-loan__item">
                    Сумма займа: <span>{{needed_sum}}</span>
                </div>
                <div class="request-documents">
                    <div class="request-documents__inner">
                        <h2>Подписание Договора Факторинга</h2>
                        <div class="request-documents__documents">
                            <div class="request-documents__item request-documents__title">
                                <div class="">
                                    Название документа
                                </div>
                                <div class="">
                                    Просмотр документа
                                </div>
                                <div class="">
                                    Подпись(заемщик)
                                </div>
                                <div class="">
                                    Подпись(админ)
                                </div>
                            </div>
                            <div class="request-documents__item">
                                <div class="">
                                    Факторинга
                                </div>
                                <div class="">
                                    <a id="factoringPDFView" target="_blank" href="http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/">Посмотреть документ</a>
                                </div>
                                <div class="">
                                    <p v-if="statusList.b_factoring_agreement_is_signed == true">Подписан</p>
                                    <p v-if="statusList.b_factoring_agreement_is_signed == false">В ожидании</p>
                                </div>
                                <div class="">
                                    <p v-if="statusList.a_factoring_agreement_is_signed">Подписан</p>
                                    <button @click="signAgreement('factoring_agreement')" class="document-button button" v-if="!statusList.a_factoring_agreement_is_signed">Подписать</button>
                                            
                                </div>
                            </div>
                            <div class="request-documents__item">
                                <div class="">
                                    Залога движимого имущества
                                </div>
                                <div class="">
                                    <a target="_blank" href="">Посмотреть документ</a>
                                </div>
                                <div class="">
                                    <p v-if="statusList.b_contract_of_pledge_of_movable_property_is_signed == true">Подписан</p>
                                    <p v-if="statusList.b_contract_of_pledge_of_movable_property_is_signed == false">В ожидании</p>
                                </div>
                                <div class="">
                                    <p v-if="statusList.a_contract_of_pledge_of_movable_property_is_signed">Подписан</p>
                                    <button @click="signAgreement('contract_of_pledge_of_movable_property')" class="document-button button" v-if="!statusList.a_contract_of_pledge_of_movable_property_is_signed">Подписать</button>
                                            
                                </div>
                            </div>
                            <div class="request-documents__item">
                                <div class="">
                                    Цессии дебиторской задолженности
                                </div>
                                <div class="">
                                    <a target="_blank" href="">Посмотреть документ</a>
                                </div>
                                <div class="">
                                    <p v-if="statusList.b_receivables_assignment_agreement_is_signed == true">Подписан</p>
                                    <p v-if="statusList.b_receivables_assignment_agreement_is_signed == false">В ожидании</p>
                                </div>
                                <div class="">
                                    <p v-if="statusList.a_receivables_assignment_agreement_is_signed">Подписан</p>
                                    <button @click="signAgreement('receivables_assignment_agreement')" class="document-button button" v-if="!statusList.a_receivables_assignment_agreement_is_signed">Подписать</button>
                                            
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="admin-loan__status">
                    <h3>Текущий статус:</h3> <span>{{status}}</span>
                
                    <form @submit.prevent="submitHandler()" action="">
                        <div v-for="(stage_item, index) in stages_list" :key="stage_item.id" class="">
                            <input :id="index" v-model="stage_value" :value="stage_item.step" type="radio"> 
                            <label :for="index">{{stage_item.stage_name}}</label>
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
        borrower_name: '',
        needed_sum: '',
        status: '',
        stages_list: [],
        stage_value: '',
        statusList: []
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/loan/' + localStorage.getItem('id'),
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.id = response.data.id,
            this.borrower_name = response.data.borrower_name,
            this.needed_sum = response.data.needed_sum
        }),
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/borrower/stages-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.stages_list = response.data
        }),
        this.getStatusData(),
        this.setIdToHref()
    },
    methods:{
        submitHandler(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/update-stage/' + localStorage.getItem('id') + '/',
            {
                step: this.stage_value
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            })
        },
        getStatusData(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/borrower/my-agreements/' + localStorage.getItem('id') + '/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.statusList = response.data
                console.log(response.data)
            })
        },
        signAgreement(value){
            axios.post('http://127.0.0.1:8000/api/v1/admin/borrower/sign-agreement/' + localStorage.getItem('id') + '/',
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
        setIdToHref(){
            let factoringPDFView = document.getElementById('factoringPDFView')
            factoringPDFView.href = factoringPDFView.href + localStorage.getItem('id') + '/'
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