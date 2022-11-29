<template>
    <div class="scoring">
        <div class="scoring__inner">
            <h2>Скоринг</h2>
            <div class="scoring__item-wrapper">
                <div class="scoring__content">
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Личные данные
                        </div>
                        <div class="scoring__subtitle">
                            Удостоверение личности
                        </div>
                        <div class="scoring__document">
                            <FilePreview/>
                        </div>
                    </div>
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Личные данные
                        </div>
                        <div class="scoring__subtitle">
                            Удостоверение личности
                        </div>
                        <div class="scoring__document">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere illo tempore omnis libero esse labore voluptatem, sint architecto! Odio rerum, esse nihil sed sunt vero doloribus quaerat tenetur fuga?
                        </div>
                    </div>
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Личные данные
                        </div>
                        <div class="scoring__subtitle">
                            Удостоверение личности
                        </div>
                        <div class="scoring__document">

                        </div>
                    </div>
                </div>
            </div>
            <div class="scoring__item-wrapper">
                <h3>Акты сверок между Поставщиком и Производителем за последние 6 месяцев</h3>
                <div class="scoring__content">
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Первый акт
                        </div>
                        <div class="scoring__subtitle">
                            Минимум по три акта за один месяц
                        </div>
                        <div class="scoring__document">

                        </div>
                    </div>
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Второй акт
                        </div>
                        <div class="scoring__subtitle">
                            Минимум по три акта за один месяц
                        </div>
                        <div class="scoring__document">

                        </div>
                    </div>
                    <div class="scoring__item">
                        <div class="scoring__title">
                            Третий акт
                        </div>
                        <div class="scoring__subtitle">
                            Минимум по три акта за один месяц
                        </div>
                        <div class="scoring__document">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import FilePreview from '@/components/documents/FilePreview.vue'
export default {
    components: {
        FilePreview
    }
}
</script>

<style lang="scss" scoped>
    .scoring {
        margin: 30px 0 0 0;
		&__inner {
            
		}

		&__content {
            margin: 25px 0 0 0;
            text-align: center;
            display: flex;
		}

        &__item-wrapper{
            margin: 25px 0 0 0;
        }

		&__item {
            width: 335px;
            height: 360px;
            padding: 30px;
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
            border-radius: 10px;
            margin: 0 0 0 30px;
            &:first-child{
                margin: 0;
            }
		}

		&__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
		}

		&__subtitle {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 5px 0 0 0;
		}

		&__document {
            margin: 17px 0 0 0;
            
		}
}

</style>