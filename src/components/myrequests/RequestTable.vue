<template>
<div class="">
    <div v-if="this.showDescription == true" class="request-description">
        <div class="request-description__inner">
            <h2 class="request-description__title">
                {{selectedProject.project_name}}
            </h2>
            <div class="request-description__content">
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        № запроса: {{selectedProject.request_number}}
                    </div>
                    <div class="request-description__item-item">
                        № договора: {{selectedProject.contract_number}}
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Необходимая сумма: {{selectedProject.get_needed_sum}}
                    </div>
                    <div class="request-description__item-item">
                        Сумма: {{selectedProject.get_amount}}
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Дата: {{selectedProject.request_date}}
                    </div>
                    <div class="request-description__item-item">
                        Срок: {{selectedProject.get_is_week}} недель
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Статус: {{selectedProject.get_status_name}}
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
    <!--<RequestDesciption 
        v-show="showDescription"
        v-for="description in MYPROJECTS" :key="description.id"
        
    />-->
    
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
                <div v-for="myproject in filteredProjects" :key="myproject.id" class="request-table__row request-table__data" @click.prevent ="activeEl = myproject, updateDescription(myproject)" :class="{'active-el': activeEl === myproject}">
                    <div class="request-table__item">
                        {{myproject.request_number}}
                    </div>
                    <div class="request-table__item">
                        {{myproject.contract_number}}
                    </div>
                    <div class="request-table__item">
                        {{myproject.project_name}}
                    </div>
                    <div class="request-table__item">
                        {{myproject.request_date}}
                    </div>
                    <div class="request-table__item">
                        {{myproject.get_needed_sum}}тг
                    </div>
                    <div class="request-table__item">
                        {{myproject.get_status_name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<!-- @click.prevent ="activeEl = myproject, showDescription = true" :class="{'active-el': activeEl === myproject}" -->
<script>
import {mapActions, mapGetters} from 'vuex'
import RequestDesciption from '@/components/myrequests/RequestDescription.vue'
import RequestTableElement from '@/components/myrequests/RequestTableElement.vue'
export default {
    data: () => ({
        activeEl: 0,
        showDescription: false,
        myProjectId: '',
        selectedProject: {},
        sortedProjects: []
    }),
    methods: {
        ...mapActions([
            'GET_MYPROJECTS_FROM_API'
        ]),
        makeActive: function(item){
            this.active = item;
        },
        console(){
            console.log(this.MYPROJECTS)
        },
        updateDescription(selectedProject){
            this.selectedProject = selectedProject
            this.showDescription = true
        },
        sortProjectsBySearchValue(value){
            this.sortedProjects = [...this.MYPROJECTS]
            if(value){
                this.sortedProjects = this.sortedProjects.filter(function(item){
                    return item.project_name.toLowerCase().includes(value.toLowerCase())
                }) 
            }   else{
                    this.sortedProjects = this.MYPROJECTS;
                }
            
        }
    },
    watch:{
        SEARCH_VALUE(){
            this.sortProjectsBySearchValue(this.SEARCH_VALUE)
        }
    },
    mounted(){
        this.GET_MYPROJECTS_FROM_API()
    },
    computed: {
        ...mapGetters([
            'MYPROJECTS',
            'SEARCH_VALUE'
        ]),
        filteredProjects(){
            if(this.sortedProjects.length){
                return this.sortedProjects
            }
            else{
                return this.MYPROJECTS
            }
        }
    },
    components: {
        RequestDesciption,
        RequestTableElement
    }
}
</script>

<style lang="scss">
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

.active-el{
    background: #0345FF;
    color: #FFFFFF;
}
</style>