<template>
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
                        Подпись(админ)
                    </div>
                    <div class="">
                        Подпись(заемщик)
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
                        <p v-if="statusList.a_factoring_agreement_is_signed == true">Подписан</p>
                        <p v-if="statusList.a_factoring_agreement_is_signed == false">В ожидании</p>
                    </div>
                    <div class="">
                        <p v-if="statusList.b_factoring_agreement_is_signed">Подписан</p>
                        <button @click="signAgreement('factoring_acgreement')" class="document-button button" v-if="!statusList.b_factoring_agreement_is_signed">Подписать</button>
                                
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
                        <p v-if="statusList.a_contract_of_pledge_of_movable_property_is_signed == true">Подписан</p>
                        <p v-if="statusList.a_contract_of_pledge_of_movable_property_is_signed == false">В ожидании</p>
                    </div>
                    <div class="">
                        <p v-if="statusList.b_contract_of_pledge_of_movable_property_is_signed">Подписан</p>
                        <button @click="signAgreement('contract_of_pledge_of_movable_property')" class="document-button button" v-if="!statusList.b_contract_of_pledge_of_movable_property_is_signed">Подписать</button>
                                
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
                        <p v-if="statusList.a_receivables_assignment_agreement_is_signed == true">Подписан</p>
                        <p v-if="statusList.a_receivables_assignment_agreement_is_signed == false">В ожидании</p>
                    </div>
                    <div class="">
                        <p v-if="statusList.b_receivables_assignment_agreement_is_signed">Подписан</p>
                        <button @click="signAgreement('receivables_assignment_agreement')" class="document-button button" v-if="!statusList.b_receivables_assignment_agreement_is_signed">Подписать</button>
                                
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import VueDocPreview from 'vue-doc-preview'
import {mapActions, mapGetters} from 'vuex'
export default {
data:() => ({
    statusList: []
}),
components: {
    VueDocPreview
},
mounted() {
    // getTagA:{
    //     var a = document.getElementById('factoringPDFView')
    //     //a.href = a.href + String(this.PROJECTSTATUS) + '/'
    //     a.href = a.href + localStorage.getItem('userID')
    //     var b = document.getElementById('factoringPDFViewDownload')
    //     b.href = b.href + localStorage.getItem('userID')
    //     //b.href = b.href + String(this.PROJECTSTATUS) + '/'
    // }
    this.getStatusData()
},
methods:{
    getStatusData(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/borrower/my-agreements/' + localStorage.getItem('userID') + '/',
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
            axios.post('http://127.0.0.1:8000/api/v1/borrower/sign-agreement/' + localStorage.getItem('userID') + '/',
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
    singingTheAgreement(){
        axios.post( 'http://127.0.0.1:8000/api/v1/borrower/signing/' + localStorage.getItem('userID'), 
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
    }
},
computed:{
    ...mapGetters([
            'PROJECTSTATUS'
        ]),
    docHref() {
        'http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/' + this.PROJECTSTATUS
    }
}
}
</script>

<style lang="scss">
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

.document-button{
    padding: 10px;
}

</style>