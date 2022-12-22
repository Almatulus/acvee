<template>
    <div class="request-document">
        <div class="request-document__inner">
            <h2>Подписание Договора Факторинга</h2>
            <div class="request-document__content">
                <div class="request-document__document">
                    <a id="pdf" href="http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/" target="_blank" class="request-document__btn button">
                        Посмотреть документ
                    </a>
                    <a id="pdfdownload" href="http://127.0.0.1:8000/api/v1/borrower/factoring-download/"  class="request-document__btn button">
                            Скачать PDF
                    </a>
                    <!--<a href="#" class="request-document__btn button">
                            Скачать Word
                    </a>-->
                    <a @click.prevent="singingTheAgreement()" href="" class="request-document__btn button request-document__btn-key">Подпись Договора через ЭЦП онлайн</a>
                </div>
                <!--<div class="request-document__buttons">
                    <div class="request-document__buttons-top">
                        <a id="pdfdownload" href="http://127.0.0.1:8000/api/v1/borrower/factoring-download/"  class="request-document__btn button">
                            Скачать PDF
                        </a>
                        <a href="#" class="request-document__btn button">
                            Скачать Word
                        </a>
                    </div>
                    <a href="#" class="request-document__btn request-document__btn-share">
                        Поделится
                    </a>
                </div>-->
            </div>
            <a @click.prevent="singingTheAgreement()" href="" class="request-document__btn button request-document__btn-key">Подпись Договора через ЭЦП онлайн</a>
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
data: () => ({
    
}),
mounted() {
    getTagA:{
        var a = document.getElementById('pdf')
        a.href = a.href + JSON.stringify(localStorage.getItem('userID')) + '/'
        var b = document.getElementById('pdfdownload')
        b.href = b.href + localStorage.getItem('userID') + '/'
    }
},
methods:{
    openFilePDF(){
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/v1/borrower/agreement-factoring-pdf/'
        }).then(function(response){
            //console.log(response)
            window.open(response)
        })
    },
    singingTheAgreement(){
        axios.post( 'http://127.0.0.1:8000/api/v1/borrower/signing/', 
                {
                    id: localStorage.getItem('userID')
                },
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

<style lang="scss" scoped>
    .request-document {
        margin: 30px 0 0 0;
		&__inner {
		}

		&__content {
            display: flex;
            margin: 35px;
            background: #ffffff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
            border-radius: 10px;
            padding: 25px 0 25px 40px;
            width: 790px;
            height: 200px;
		}

		&__document {
            flex: 1 1 400px;
            overflow: auto;
            padding: 0 20px 0 0;
            font-size: 16px;
            scrollbar-color: #0345FF rgba(3, 69, 255, 0.6);
            scrollbar-width: thin;
            padding: 50px 0 0 0;
            a{
                margin-left: 10px;
            }
            &::-webkit-scrollbar{
                width: 4.5px;
            }
            &::-webkit-scrollbar-track{
                background: rgba(3, 69, 255, 0.6);
                width: 0.5px;
            }
            &::-webkit-scrollbar-thumb{
                background: #0345FF;
                border-radius: 5px;
            }
		}

		&__buttons {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 0 0 20px;
		}

        &__buttons-top{
            display: flex;
            flex-direction: column;
        }

		&__btn {
            
            color: #fff;
            padding: 20px;
            background: #0345FF;
            border-radius: 10px;
            text-align: center;
		}

		&__btn-share {
            background: rgba(3, 69, 255, 0.1);
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);    
            color: #0345FF;
            flex: 0 0 auto;
		}

        &__btn-key{
            display: inline-block;
            margin: 25px 0 0 82px;
        }
}
.button {
}

</style>