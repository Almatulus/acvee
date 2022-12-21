<template>
    <div class="investor-requests">
        <div class="investor-requests__inner">
            <h2>Мои заявки</h2>
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
                <!--<RequestFilter v-show="isVisible"/>-->
            </div>
            <div v-if="this.showDescription == true" class="request-description">
                <div class="request-description__inner">
                    <h2 class="request-description__title">
                        {{selectedProject.name}}
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
                        
                        <div style="margin: 0 0 0 50px" class="request-description__item">
                            <div class="request-description__item-item">
                                Дата заявки: {{selectedProject.create_date}}
                            </div>
                            <div class="request-description__item-item">
                                Статус: {{selectedProject.status}}
                            </div>
                        </div>
                    </div>
                    <div class="request-description__buttons">
                        
                            <!--<router-link class="request-description__button request-button button" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                                Перейти к документам
                            </router-link>-->
                        
                        
                            <router-link class="request-description__button request-button button" :to="{name: 'investor-requests-stages', params: {id: selectedProject.id}}" >
                                Просмотреть статус
                            </router-link>
                        
                        
                            <router-link class="request-description__button request-button button" v-if="selectedProject.get_status == 'approved'" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                                Проверить договор
                            </router-link>
                        
                        <!--<router-link class="request-button button" v-if="selectedProject.status == 'approved'" :to="{name: 'myrequest-request-document', params: {id: selectedProject.id}}" >
                            Проверить договор
                        </router-link>-->
                    </div>
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
                                Название Компании
                            </div>
                            <div class="request-table__item request-table__title-ml">
                                Дата
                            </div>
                            <div class="request-table__item request-table__title-ml">
                                Статус
                            </div>
                        </div>
                        <div v-for="myproject in MYPROJECTS" :key="myproject.id" class="request-table__row request-table__data" @click.prevent ="activeEl = myproject, updateDescription(myproject)" :class="{'active-el': activeEl === myproject}">
                            <div class="request-table__item">
                                {{myproject.request_number}}
                            </div>
                            <div class="request-table__item">
                                {{myproject.id}}
                            </div>
                            <div class="request-table__item">
                                {{myproject.name}}
                            </div>
                            <div class="request-table__item">
                                {{myproject.create_date}}
                            </div>
                            <div class="request-table__item">
                                {{myproject.status}}
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
    data: () => ({
        activeEl: 0,
        showDescription: false,
    }),
    computed: {
        ...mapGetters([
            'MYPROJECTS',
        ]),
    },
    mounted(){
        this.GET_MYPROJECTS_INVESTOR_FROM_API()
    },
    methods:{
         ...mapActions([
            'GET_MYPROJECTS_INVESTOR_FROM_API'
        ]),
        makeActive: function(item){
            this.active = item;
        },
        updateDescription(selectedProject){
            this.selectedProject = selectedProject
            this.showDescription = true
            //this.GET_PROJECTSTATUS_TO_VUEX(this.selectedProject.id),
            //this.GET_PROJECTSTAGESINFO_FROM_API(this.selectedProject.id)
        },
    }
}
</script>


<style lang="scss" scoped>
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
            
            margin: 25px 0 0 0;
		}

		&__item {
		}

		&__item-item {
            margin: 20px 0 0 0;
		}
}


.request-description__content{
    justify-content: stretch;
}
</style>