<template>
    <div class="request-table">
        <div class="request-table__inner">
            <div class="request-table__content">
                <div class="request-table__row request-table__title">
                    <div class="request-table__item request-table__title-ml">
                        № запроса
                    </div>
                    <div class="request-table__item request-table__title-ml">
                        № договора
                    </div>
                    <div class="request-table__item request-table__title-ml">
                        Название продукта
                    </div>
                    <div class="request-table__item request-table__title-ml">
                        Дата
                    </div>
                    <div class="request-table__item request-table__title-ml">
                        Сумма
                    </div>
                    <div class="request-table__item request-table__title-ml">
                        Статус
                    </div>
                </div>
                <div class="request-table__row request-table__data">
                    <div class="request-table__item">
                        1
                    </div>
                    <div class="request-table__item">
                        1
                    </div>
                    <div class="request-table__item">
                        Lorem Ipsum is simple... 
                    </div>
                    <div class="request-table__item">
                        22/02/2022
                    </div>
                    <div class="request-table__item">
                        50.000.000тг
                    </div>
                    <div class="request-table__item">
                        Одобренно
                    </div>
                </div>
                <div class="request-table__row request-table__data">
                    <div class="request-table__item">
                        1
                    </div>
                    <div class="request-table__item">
                        1
                    </div>
                    <div class="request-table__item">
                        Lorem Ipsum is simple... 
                    </div>
                    <div class="request-table__item">
                        22/02/2022
                    </div>
                    <div class="request-table__item">
                        50.000.000тг
                    </div>
                    <div class="request-table__item">
                        Одобренно
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.request-table {
        background: #fff;
        box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
        border-radius: 10px;
        margin: 50px 0 0 0;
		&__inner {
            padding: 35px;
		}

		&__content {
            
		}

		&__row {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
		}

		&__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
		}

        &__title-ml{
            
        }

		&__item {
		}

        &__data{
            background: rgba(3, 69, 255, 0.03);
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
            border-radius: 10px;
            padding: 25px 20px;
            margin: 20px 0 0 0;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            &:first-child{
                margin-top: 27px;
            }
        }
}
</style>