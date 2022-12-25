<template>
    <div class="admin-projects">
        <div class="admin-projects__inner">
            <div id='request-search' class="request-search">
                <div class="request-search__inner">
                    <form action="" class="request-search__form">
                        <input v-model="searchValue" placeholder="Вводите название запроса" type="text" class="request-search__input">
                        <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                        <button @click.prevent="search(searchValue)" class="request-search__btn button">
                            <img src="../../assets/img/icons/search.svg" alt="search">
                        </button>
                    </form>
                </div>
                
            </div>
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
                        <div v-for="adminproject in ADMINPROJECTS" :key="adminproject.id" class="request-table__row request-table__data" @click.prevent ="activeEl = myproject, updateDescription(myproject)" :class="{'active-el': activeEl === myproject}">
                            <div class="request-table__item">
                                {{adminproject.request_number}}
                            </div>
                            <div class="request-table__item">
                                {{adminproject.contract_number}}
                            </div>
                            <div class="request-table__item">
                                {{adminproject.project_name}}
                            </div>
                            <div class="request-table__item">
                                {{adminproject.request_date}}
                            </div>
                            <div class="request-table__item">
                                {{adminproject.get_needed_sum}}тг
                            </div>
                            <div class="request-table__item">
                                {{adminproject.status}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'ADMINPROJECTS'
        ])
    },
    methods:{
        ...mapActions([
            'GET_ADMINPROJECTS_FROM_API'
        ])
    },
    mounted(){
        this.GET_ADMINPROJECTS_FROM_API()
        console.log(this.ADMINPROJECTS)
    }
}
</script>

<style lang="scss">
    .filter-active{
        color: #0345FF;
    }
    .request-search {

		&__inner {
            display: flex;
            justify-content: space-between;
            padding: 20px 0 0 0;
		}

		&__form {
            display: flex;
            align-items: center;
		}

		&__input {
            width: 770px - 80px;
            height: 70px;
            background: #FFFFFF;
            padding: 0 0 0 30px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-weight: 500;
            font-size: 23px;
            line-height: 27px;
		}

		&__filter {
            padding: 0 20px;
            font-size: 18px;
            background: #FFFFFF;
		}

		&__btn {
            width: 80px;
            height: 70px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
		}

		&__add-btn {
            display: block;
            width: 261px;
            height: 70px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;
            padding: 22px 30px;
            color: rgba(255, 255, 255, 1);
            margin: 0 0 0 20px;
		}
}

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
            cursor: pointer;
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