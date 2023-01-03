<template>
    <div id='request-search' class="request-search">
        <div class="request-search__inner">
            <form action="" class="request-search__form">
                <input v-model="searchValue" placeholder="Вводите название запроса" type="text" class="request-search__input">
                <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                <button @click.prevent="search(searchValue)" class="request-search__btn button">
                    <img src="../../assets/img/icons/search.svg" alt="search">
                </button>
            </form>
            <router-link tag="a" @click.prevent="onClick" active-class="active" to="/questionnaire">
                <a href="" class="request-search__add-btn button">+ Добавить заявку</a>
            </router-link>
        </div>
        <!--<RequestFilter v-show="isVisible"/>-->
        <div v-show="isVisible" class="filter">
            <div class="filter__inner">
                <div class="filter__row">
                    <div class="filter__column">
                        <div class="filter__title">
                            Статус
                        </div>
                        <div class="filter__filters">
                            <input v-model="filter.status" type="radio" name="status" @click="filterHandler()" value="approved" href="#" class="filter__el">
                            <label class="filter__el" for="">Одобренно</label>
                            <input v-model="filter.status" name="status" type="radio"  @click="filterHandler()" value="denied" href="#" class="filter__el">
                            <label for="">В ожидании</label>
        
                        </div>
                    </div>
                    <div class="filter__column">
                        <div class="filter__title">
                            Название
                        </div>
                        <div class="filter__filters">
                            <input v-model.trim="filter.ordering" type="radio" name="alphabet" @click="filterHandler()" value="project_name" href="#" class="filter__el">
                            <label class="filter__el" for="">Порядок: А-Я</label>
                            <input v-model.trim="filter.ordering" name="alphabet" type="radio" @click="filterHandler()" value="-project_name" href="#" class="filter__el">
                            <label for="">Порядок: Я-А</label>
                        </div>
                        
                    </div>
                    <div class="filter__column">
                        <div class="filter__title">
                            Сумма
                        </div>
                        <div class="filter__filters">
                            <!--<input v-model="filter.rangeSum" type="radio" @click="filterHandler()" value[0]="0" value[1]="500000" href="#" class="filter__el">
                            <label for="">до 500.000</label>-->
                            <input v-model="filter.neededSum_max" type="radio" name="status" @click="filterHandler()" value="neededSum_max=500000" href="#" class="filter__el">
                            <label class="filter__el" for="">до 500.000</label>
                            <input v-model="filter.status" type="radio" name="status" @click="filterHandler()" value="approved" href="#" class="filter__el">
                            <label class="filter__el" for="">В 500.000 - 1.000.000 тг</label>
                            <input v-model="filter.status" type="radio" name="status" @click="filterHandler()" value="approved" href="#" class="filter__el">
                            <label class="filter__el" for="">от 1.000.000</label>
                            <!--<a href="#" class="filter__el">
                                В 500.000 - 1.000.000 тг
                            </a>
                            <a href="#" class="filter__el">
                                от 1.000.000
                            </a>-->
                        </div>
                    </div>
                    <div class="filter__column">
                        <div class="filter__title">
                            № запроса
                        </div>
                        <div class="filter__filters">
                            <a href="#" class="filter__el">
                                
                            </a>
                            <a href="#" class="filter__el">
                                
                            </a>
                        </div>
                    </div>
                    <div class="filter__column">
                        <div class="filter__title">
                            № договора
                        </div>
                        <div class="filter__filters">
                            <a href="#" class="filter__el">
                                
                            </a>
                            <a href="#" class="filter__el">
                                
                            </a>
                        </div>
                    </div>
                    <div class="filter__column">
                        <div class="filter__title">
                            Дата
                        </div>
                        <div class="filter__filters">
                            <a href="#" class="filter__el">
                                
                            </a>
                            <a href="#" class="filter__el">
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RequestFilter from '@/components/myrequests/RequestFilter.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    data: () => ({
        isVisible: false,
        searchValue: '',
        filter: {
            ordering: '',
            status: '',
            neededSum_max: ''
        },
    }),
    components:{
        RequestFilter
    },
    provide() {
        return {
            isVisible: this.isVisible
        }
    },
    methods:{
        onClick(){
            document.getElementById('sidebar').classList.toggle('hide');
        },
        search(value){
            this.GET_SEARCH_VALUE_TO_VUEX(value)
        },
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX',
            'GET_MYPROJECTS_FROM_API'
        ]),
        filterHandler(){ 
            this.GET_MYPROJECTS_FROM_API(this.filter)
        },
        ...mapActions([
            'GET_MYPROJECTS_FROM_API'
        ]),
    },
    computed:{
        ...mapGetters([
            'SEARCH_VALUE'
        ])
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

.filter {
        background: #FFFFFF;
        box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
        border-radius: 10px;
        margin: 20px 0 0 0;
		&__inner {
            padding: 35px;
		}

		&__row {
            display: flex;
            justify-content: space-around;
		}

		&__column {
		}

		&__title {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            padding: 0 0 27px 0;
            border-bottom: 0.5px solid rgba(51, 51, 51, 0.6);;
		}

		&__filters {
            display: flex;
            flex-direction: column;
		}

		&__el {
            margin: 15px 0 0 0;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            &:first-child{
                margin: 20px 0 0 0;
            }
            &:hover{
                color: #6E64E7;
            }
		}
}

</style>