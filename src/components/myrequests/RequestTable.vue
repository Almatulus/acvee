<template>
<div class="">
    {{}}
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
                        № договора: {{selectedProject.id}}
                    </div>
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Необходимая сумма: {{selectedProject.needed_sum}} тг
                    </div>
                    <!--<div class="request-description__item-item">
                        Сумма: {{selectedProject.get_amount}}
                    </div>-->
                </div>
                <div class="request-description__item">
                    <div class="request-description__item-item">
                        Дата заявки: {{selectedProject.request_date}}
                    </div>
                    <div class="request-description__item-item">
                        Срок займа: {{selectedProject.amount}} <span v-if="selectedProject.is_week == true">недель</span> <span v-if="selectedProject.is_week == false">месяцев</span>
                    </div>
                </div>
                <div class="request-description__item">
                    <div v-if="selectedProject.status == 'pending'" class="request-description__item-item">
                        Статус: <!--{{selectedProject.status}}--> в ожидании
                    </div>
                    <div v-if="selectedProject.status == 'approved'" class="request-description__item-item">
                        Статус: <!--{{selectedProject.status}}--> Одобрено
                    </div>
                    <div v-if="selectedProject.status == 'denied'" class="request-description__item-item">
                        Статус: <!--{{selectedProject.status}}--> отказано
                    </div>
                </div>
            </div>
            <div class="request-description__buttons">
                
                    <router-link class="request-description__button request-button button" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                        Перейти к документам
                    </router-link>
                
                
                    <router-link class="request-description__button request-button button" :to="{name: 'myrequest-stages', params: {id: selectedProject.id}}" >
                        Просмотреть этапы
                    </router-link>
                
                
                    <router-link class="request-description__button request-button button" v-if="selectedProject.status == 'approved'" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                        Проверить договор
                    </router-link>
                
                <!--<router-link class="request-button button" v-if="selectedProject.status == 'approved'" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                    Проверить договор
                </router-link>-->
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
                        {{myproject.needed_sum}}тг
                    </div>
                    <div v-if="myproject.status == 'pending'" class="request-table__item">
                        <!--{{myproject.status}}-->
                        В ожидании
                    </div>
                    <div v-if="myproject.status == 'denied'" class="request-table__item">
                        <!--{{myproject.status}}-->
                        Отказано
                    </div>
                    <div v-if="myproject.status == 'approved'" class="request-table__item">
                        <!--{{myproject.status}}-->
                        Одобрено
                        
                    </div>
                    <div v-if="myproject.status == 'approved'" class="request-table__item">
                        <!--{{myproject.status}}-->
                        
                        <router-link class="request-table__details-link" :to="{name: 'myrequest-project-details', params: {id: myproject.id}}">Посмотреть детали</router-link>
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
            'GET_MYPROJECTS_FROM_API',
            'GET_PROJECTSTATUS_TO_VUEX',
            'GET_PROJECTSTAGESINFO_FROM_API'
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
            localStorage.setItem('userID', JSON.stringify(selectedProject.id))
            console.log('локалстораге',localStorage.getItem('userID'))
            this.GET_PROJECTSTATUS_TO_VUEX(this.selectedProject.id),
            this.GET_PROJECTSTAGESINFO_FROM_API(this.PROJECTSTATUS)
            
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
            'SEARCH_VALUE',
            'PROJECTSTATUS',
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
            grid-template-columns: repeat(7, 1fr);
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

.request-description{
    margin-top: 25px;
}

.request-description__buttons{
    display: flex;
    margin: 25px 0 0 0;
    justify-content: end;
}

.request-description__button{
    margin-left: 25px;
}

.request-button{
    padding: 17px 15px;
    display: inline-block;
}

.active-el{
    background: #0345FF;
    color: #FFFFFF;
}

.request-table__details-link{
    color: rgba(0, 0, 0, 0.6);
}
</style>