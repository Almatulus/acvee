<template v-show="isVisible">
    <div class="filter">
        <div class="filter__inner">
            <div class="filter__row">
                <div class="filter__column">
                    <div class="filter__title">
                        Статус
                    </div>
                    
                    <div class="filter__filters">
                        <input v-model="statusFilter" id="approved" type="radio" name="status" @change="filterByStatus()" value="status=approved" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="approved">Одобренно</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearStatus()" class="close">&#9587;</div>
                        </div>
                        <input v-model="statusFilter" id="denied" name="status" type="radio" @change="filterByStatus()" value="status=denied" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="denied">В ожидании</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearStatus()" class="close">&#9587;</div>
                        </div>
                    </div>
                </div>
                <div class="filter__column">
                    <div class="filter__title">
                        Название
                    </div>
                    <div class="filter__filters">
                        <input v-model="orderFilter" id="project_name" type="radio" name="alphabet" @change="filterByOrder()" value="ordering=project_name" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="project_name">Порядок: А-Я</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearOrder()" class="close">&#9587;</div>
                        </div>
                        <input v-model="orderFilter" id="-project_name" name="alphabet" type="radio" @change="filterByOrder()" value="ordering=-project_name" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="-project_name">Порядок: Я-А</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearOrder()" class="close">&#9587;</div>
                        </div>
                    </div>
                    
                </div>
                <div class="filter__column">
                    <div class="filter__title">
                        Сумма
                    </div>
                    <div class="filter__filters">
                        
                        <input v-model="neededSumFilter" id="neededSum_max" type="radio" name="status" @change="filterBySum()" value="neededSum_max=500000" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="neededSum_max">до 500.000</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearSum()" class="close">&#9587;</div>
                        </div>
                        <input v-model="neededSumFilter" id="neededSum_minneededSum_max" type="radio" name="status" @change="filterBySum()" value="neededSum_min=500000&neededSum_max=1000000" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="neededSum_minneededSum_max">В 500.000 - 1.000.000 тг</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearSum()" class="close">&#9587;</div>
                        </div>
                        <input v-model="neededSumFilter" id="neededSum_min" type="radio" name="status" @change="filterBySum()" value="neededSum_min=1000000" href="#" class="filter__el">
                        <div style="display: flex;" class="">
                            <label class="filter__el" for="neededSum_min">от 1.000.000</label>
                            <div style="margin-left: 15px; margin-top: 22px;" @click="clearSum()" class="close">&#9587;</div>
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
   data:() => ({
    filter: {
        ordering: '',
        status: '',
        neededSum_max: ''
    },
    statusFilter: '',
    orderFilter: '',
    neededSumFilter: ''
   }),
   methods: {
    filterByStatus(){ 
        this.GET_MYPROJECTS_FROM_API(this.statusFilter)
    },
    filterByOrder(){ 
        this.GET_MYPROJECTS_FROM_API(this.orderFilter)
    },
    filterBySum(){ 
        this.GET_MYPROJECTS_FROM_API(this.neededSumFilter)
    },
    clearStatus(){
        this.GET_MYPROJECTS_FROM_API()
    },
    clearOrder(){
        this.GET_MYPROJECTS_FROM_API()
    },
    clearSum(){
        this.GET_MYPROJECTS_FROM_API()
    },
    ...mapActions([
        'GET_MYPROJECTS_FROM_API'
    ]),
    resetFilter(){
        this.filter.ordering = '',
        rangeSum = null
    }
   }
    
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
            cursor: pointer;
            &:first-child{
                margin: 20px 0 0 0;
            }
            &:hover{
                color: #6E64E7;
            }
		}
}
input{
    display: none;
}
.close{
    cursor: pointer;
    &:hover{
        color: #6E64E7;
        transition: .5s;
    }
}
</style>