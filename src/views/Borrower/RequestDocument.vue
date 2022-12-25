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
                        Скачивание документа
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Договор факторинга
                    </div>
                    <div class="">
                        <a id="factoringPDFView" target="_blank" href="http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a id="factoringPDFViewDownload" target="_self" href="http://127.0.0.1:8000/api/v1/borrower/factoring-download/">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Название договора 2
                    </div>
                    <div class="">
                        <a target="_blank" href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a id="DownloadIDCard" target="_self" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Название договора 3
                    </div>
                    <div class="">
                        <a target="_blank" href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a id="DownloadIDCard" target="_self" href="">Скачать документ</a>
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
 components: {
    VueDocPreview
},
mounted() {
    getTagA:{
        var a = document.getElementById('factoringPDFView')
        //a.href = a.href + String(this.PROJECTSTATUS) + '/'
        a.href = a.href + localStorage.getItem('userID')
        var b = document.getElementById('factoringPDFViewDownload')
        b.href = b.href + localStorage.getItem('userID')
        //b.href = b.href + String(this.PROJECTSTATUS) + '/'
    }
},
methods:{
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

</style>