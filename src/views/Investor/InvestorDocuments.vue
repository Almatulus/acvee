<template>
    <div class="investor-documents">
        <div class="investor-documents__inner">
            <h2>
                Мои договора
            </h2>
            <div class="investor-documents__table">
                <div class="investor-documents__row">
                    <div class="investor-documents__item investor-documents__title">
                        Тип документа
                    </div>
                    <div class="investor-documents__item investor-documents__title">
                        Ссылка на документ 
                    </div>
                    <div class="investor-documents__item investor-documents__title">
                        Дата создания 
                    </div>
                    <div class="investor-documents__item investor-documents__title">
                        Статус
                    </div>
                     
                </div>
                <div class="investor-documents__row">
                    <div class="investor-documents__item">
                        Договор с инвестором 
                    </div>
                    <div class="investor-documents__item">
                        <a href="">Просмотр PDF</a>
                    </div>
                    <div class="investor-documents__item">
                        <a href="">2022-12-13 16:48:06 </a>
                    </div>
                    <div class="investor-documents__item investor-documents__status">
                        Подписан
                    </div>

                </div>
                <div class="investor-documents__row">
                    <div class="investor-documents__item">
                        Договор соглашения к консорциуму
                    </div>
                    <div class="investor-documents__item">
                        <a href="">Просмотр PDF</a>
                    </div>
                    <div class="investor-documents__item">
                        <a href="">2022-12-13 16:48:06 </a>
                    </div>
                    <div class="investor-documents__item investor-documents__status">
                        Подписан
                    </div>

                </div>
                <div class="investor-documents__row">
                    <div class="investor-documents__item">
                        Декларация осведомленности Инвестора о рисках
                    </div>
                    <div class="investor-documents__item">
                        <a href="">Просмотр PDF</a>
                    </div>
                    <div class="investor-documents__item">
                        <a href="">2022-12-13 16:48:06 </a>
                    </div>
                    <div class="investor-documents__item investor-documents__status">
                        Подписан
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.investor-documents {

		&__inner {
		}

		&__table {
            margin: 30px 0 0 0;
		}

		&__row {
            display: flex;
            justify-content: space-around;
            margin: 10px 0 0 0;
		}

		&__item {
            flex: 0 0 25%;
            font-size: 16px;
		}
}

.investor-documents__title{
    font-size: 20px;
    font-weight: 600;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
    border-radius: 10px;
    padding: 20px 0;
}

.investor-documents__status{
    
}
</style>