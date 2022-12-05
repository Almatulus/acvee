<template>
    <div class="request-description">
        <div class="request-description__inner">
            <h2 class="request-description__title">
                Lorem ipsum
            </h2>
            <slot></slot>
            <div class="request-description__content">
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        № запроса: {{request_id}}
                    </div>
                    <div class="request-description__item-item">
                        № договора: 1
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Необходимая сумма: 5.000.000тг
                    </div>
                    <div class="request-description__item-item">
                        Сумма: 5.000.000тг
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Дата: 22/02/2022
                    </div>
                    <div class="request-description__item-item">
                        Срок: 30 недель
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Статус: Одобренно
                    </div>
                </div>
            </div>
            <div class="request-description__buttons">
                <div class="request-description__button">

                </div>
                <div class="request-description__button button">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        request_id: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="scss">
.request-description {
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
        border-radius: 10px;
        padding: 30px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        margin: 0 0 20px 0;
		&__inner {
		}

		&__title {
		}

		&__content {
            display: flex;
            justify-content: space-between;
            margin: 25px 0 0 0;
		}

		&__item {
		}

		&__item-item {
            margin: 20px 0 0 0;
		}
}


</style>