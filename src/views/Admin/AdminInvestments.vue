<template>
    <div class="admin-investments">
        <div class="admin-investments__inner">
            <h2>Инвестиции</h2>
            <div id='request-search' class="request-search">
                    <div class="request-search__inner">
                        <form action="" class="request-search__form">
                            <input v-model="searchCompany" placeholder="Вводите название запроса" type="text" class="request-search__input">
                            <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                            <button @click.prevent="search(searchCompany)" class="request-search__btn button">
                                <img src="../../assets/img/icons/search.svg" alt="search">
                            </button>
                        </form>
                        
                    </div>
                    <div v-if="isVisible == true" class="filter">
                        <div class="filter__inner">
                            <div class="filter__row">
                                <div class="filter__column">
                                    <div class="filter__title">
                                        Статус
                                    </div>
                                    
                                    <div v-for="stage in status_list" :key="stage.id" class="filter__filters">
                                        <input :id="stage.step" @click="sortByRole(ordering)" v-model="ordering" type="radio" name="status" :value="stage.step" class="filter__el filter__input">
                                        <label class="filter__el" :for="stage.step">{{stage.stage_name}}</label>
                                        <div @click="clearInvestor()" style="margin-left: 15px;" class="close">&#9587;</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <table class="table">

                    <thead>

                        <tr>

                            <th>Заявки на инвестицию</th>

                            <th>ФИО</th>

                            <th>Сумма заявки</th>

                            <th>Статус</th>

                            <th>Управление статусом</th>

                            <th>Управление кабинетом</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr v-for="investment in investments" :key="investment.id">

                            <td style="width: 100px;">{{investment.id}}</td>
                            <td>{{investment.user_name}}</td>
                            <td>{{investment.investment_sum}}</td>
                            <td>{{investment.treaty_status.name}}</td>
                            <td>
                                <router-link :to="{name: 'admin-investment', params: {id: investment.id}}">
                                    <a  @click="getID(investment.id)" href="">Перейти</a>
                                </router-link>
                            </td>
                            <td>
                                <router-link :to="{name: 'admin-projects-investor-cabinet', params: {id: investment.id}}">
                                    <a  @click="getID(investment.id)" href="">Перейти</a>
                                </router-link>
                            </td>
                        </tr>

                    </tbody>

            </table>
            
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        investments: []
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/investment-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.investments = response.data
        })
    },
    methods: {
        getID(value){
            localStorage.setItem('id', value)
        }
    }
}
</script>


<style lang="scss" scoped>
.table {

	width: 100%;

	margin-bottom: 20px;

	border: 1px solid #0345FF;

	border-collapse: collapse; 
    margin: 20px 0 0 0;
}

.table th {

	font-weight: bold;

	padding: 5px;

	background: #0345FF;
    color: #fff;
    padding: 15px;
	border: 1px solid #0345FF;
    font-size: 18px;
}

.table td {

	padding: 15px;
    text-align: center;
    font-size: 16px
}
a{
    color: #0345FF;
}
</style>