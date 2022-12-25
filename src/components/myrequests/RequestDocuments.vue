<template>
    <div class="request-documents">
        <div class="request-documents__inner">
            <h2>Документы</h2>
            <div class="request-documents__documents">
                <div class="request-documents__item request-documents__title">
                    <div class="">
                        Название документа
                    </div>
                    <!--<div class="">
                        Просмотр документа
                    </div>-->
                    <div class="">
                        Скачивание документа
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Удостоверение личности
                    </div>
                    <!--<div class="">
                        <a target="_blank" href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadIDCard" target="_self" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Справка регистрации ТОО или ИП
                    </div>
                    <!--<div class="">
                        <a target="_blank" href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadRegistrationCertificate" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Договор реализации товара
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadContractSale" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                         Договор закупа с производителем\дистрибьютером 
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadPurchaseAgreement" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Счет на оплату / Invoice 
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="invoice" href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Электронная счет фактура
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadABPConfirm" href="">Скачать документ</a>
                    </div>
                </div>
            </div>
            <h3>Акты сверок между Поставщиком и Производителем</h3>
            <div class="request-documents__documents">
                <div class="request-documents__item request-documents__title">
                    <div class="">
                        Название документа
                    </div>
                    <!--<div class="">
                        Просмотр документа
                    </div>-->
                    <div class="">
                        Скачивание документа
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Акт №1
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadFirstAct" href="">Скачать документ</a>
                    </div>
                </div>
                <div v-if="DownloadSecondAct !== null" class="request-documents__item">
                    <div class="">
                        Акт №2
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadSecondAct" href="">Скачать документ</a>
                    </div>
                </div>
                <div v-if="DownloadThirdAct !== null" class="request-documents__item">
                    <div class="">
                        Акт №3
                    </div>
                    <!--<div class="">
                        <a href="">Посмотреть документ</a>
                    </div>-->
                    <div class="">
                        <a id="DownloadThirdAct" href="">Скачать документ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        DownloadIDCard: '',
        DownloadABPConfirm: '',
        DownloadRegistrationCertificate: '',
        DownloadContractSale: '',
        DownloadPurchaseAgreement: '',
        DownloadFirstAct: '',
        DownloadInvoice: '',
        DownloadSecondAct: '',
        DownloadThirdAct: ''
    }),
    mounted() {
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/borrower/documents/' + localStorage.getItem('userID'),
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                console.log('документы',response)
                //this.ABPConfirm = response.data.ABPConfirm
                //var a = document.getElementById('ABPConfirm')
                //a.href = a.href + String(this.PROJECTSTATUS) + '/'
                //a.href = a.href + response.data.ABPConfirm
                this.DownloadIDCard = response.data.IDCard
                var DownloadIDCard = document.getElementById('DownloadIDCard')
                DownloadIDCard.href = 'http://127.0.0.1:8000' + this.DownloadIDCard

                this.DownloadRegistrationCertificate = response.data.registrationCertificate
                var DownloadRegistrationCertificate = document.getElementById('DownloadRegistrationCertificate')
                DownloadRegistrationCertificate.href = 'http://127.0.0.1:8000' + this.DownloadRegistrationCertificate

                this.DownloadContractSale = response.data.contractSale
                var DownloadContractSale = document.getElementById('DownloadContractSale')
                DownloadContractSale.href = 'http://127.0.0.1:8000' + this.DownloadContractSale

                this.DownloadPurchaseAgreement = response.data.purchaseAgreement
                var DownloadPurchaseAgreement = document.getElementById('DownloadPurchaseAgreement')
                DownloadPurchaseAgreement.href = 'http://127.0.0.1:8000' + this.DownloadPurchaseAgreement

                this.DownloadABPConfirm = response.data.ABPConfirm
                var DownloadABPConfirm = document.getElementById('DownloadABPConfirm')
                DownloadABPConfirm.href = 'http://127.0.0.1:8000' + this.DownloadABPConfirm
                
                this.DownloadInvoice = response.data.invoice
                var DownloadInvoice = document.getElementById('invoice')
                DownloadInvoice.href = 'http://127.0.0.1:8000' + this.DownloadInvoice

                this.DownloadFirstAct = response.data.firstAct
                var DownloadFirstAct = document.getElementById('DownloadFirstAct')
                DownloadFirstAct.href = 'http://127.0.0.1:8000' + this.DownloadFirstAct
                
                this.DownloadSecondAct = response.data.secondAct
                var DownloadSecondAct = document.getElementById('DownloadSecondAct')
                DownloadSecondAct.href = 'http://127.0.0.1:8000' + this.DownloadSecondAct

                this.DownloadThirdAct = response.data.thirdAct
                var DownloadThirdAct = document.getElementById('DownloadThirdAct')
                DownloadThirdAct.href = 'http://127.0.0.1:8000' + this.DownloadThirdAct
            })
    },
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
                flex: 0 0 50%;
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