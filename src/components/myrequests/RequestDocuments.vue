<template>
    <div class="request-documents">
        <div class="request-documents__inner">
            <h2>Документы</h2>
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
                        Удостоверение личности
                    </div>
                    <div class="">
                        <a @click="getIDCardAPI()" target="_blank" href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Поставщик – Конечный клиент 
                    </div>
                    <div class="">
                        <a href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                         Договор закупа с производителем\дистрибьютером 
                    </div>
                    <div class="">
                        <a href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a href="">Скачать документ</a>
                    </div>
                </div>
                <div class="request-documents__item">
                    <div class="">
                        Счет на оплату / Invoice 
                    </div>
                    <div class="">
                        <a href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a href="">Скачать документ</a>
                    </div>
                </div>
            </div>
            <h3>Акты сверок между Поставщиком и Производителем</h3>
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
                        Акт №1
                    </div>
                    <div class="">
                        <a href="">Посмотреть документ</a>
                    </div>
                    <div class="">
                        <a href="">Скачать документ</a>
                    </div>
                </div>
                {{IDCard}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        IDCard: '',
        ABPConfirm: ''
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
                this.IDCard = response.data.IDCard
                console.log(response.data.IDCard)
            })
    },
    methods:{
        getIDCardAPI(){
            var IDCard = document.getElementById('IDCard')
            IDCard.href = IDCard.href +  this.IDCard
        }
    }
}
</script>

<style lang="scss" scoped>
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