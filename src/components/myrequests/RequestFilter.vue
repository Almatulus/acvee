<template v-show="isVisible">
    <div class="filter">
        <div class="filter__inner">
            <div class="filter__row">
                <div class="filter__column">
                    <div class="filter__title">
                        Статус
                    </div>
                    
                    <div class="filter__filters">
                        <input v-model="status" type="radio" name="status" @click="filterByStatus()" value="status=approved" href="#" class="filter__el">
                        <label class="filter__el" for="">Одобренно</label>
                        <input v-model="status" name="status" type="radio"  @click="filterByStatus()" value="status=denied" href="#" class="filter__el">
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
                        <input v-model="filter.status" type="radio" name="status" @click="filterHandler()" value="neededSum_min=500000&neededSum_max=1000000" href="#" class="filter__el">
                        <label class="filter__el" for="">В 500.000 - 1.000.000 тг</label>
                        <input v-model="filter.status" type="radio" name="status" @click="filterHandler()" value="neededSum_min=1000000" href="#" class="filter__el">
                        <label class="filter__el" for="">от 1.000.000</label>
                        <!--<a href="#" class="filter__el">
                            В 500.000 - 1.000.000 тг
                        </a>
                        <a href="#" class="filter__el">
                            от 1.000.000
                        </a>-->
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
   data:() => ({
    filter: {
        ordering: '',
        status: '',
        neededSum_max: ''
    },
    status: ''
   }),
   methods: {
    filterByStatus(){ 
        this.GET_MYPROJECTS_FROM_API(this.status)
    },
    ...mapActions([
        'GET_MYPROJECTS_FROM_API'
    ]),
    resetFilter(){
        this.filter.ordering = '',
        rangeSum = null
    }
   },
   computed: {
        
        
    },
    mounted(){
        
    },
}
</script>

<style lang="scss" scoped>
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