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
                    <div v-if="isVisible == false" class="filter">
                        <div class="filter__inner">
                            <div class="filter__row">
                                <div class="filter__column">
                                    <div class="filter__title">
                                        Статус
                                    </div>
                                    
                                    <div v-for="stage in status_list" :key="stage.id" class="filter__filters">
                                        <input :id="stage.step_num" @click="sortByRole(ordering)" v-model="ordering" type="radio" name="status" :value="stage.step_num" class="filter__el filter__input">
                                        <label class="filter__el" :for="stage.step_num">{{stage.name}}</label>
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
                            <td>{{investment.treaty_name}}</td>
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
        investments: [],
        isVisible: true,
        searchCompany: '',
        status_list: [],
        ordering: ''
    }),
    mounted(){
        this.getInvestmentsList(),
        this.getStatusList()
    },
    methods: {
        getID(value){
            localStorage.setItem('id', value)
        },
        search(searchCompany){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/investment-list/',
                    params: {
                        treaty_name__contains: searchCompany
                    },
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.loans = response.data
            })
        },
        getInvestmentsList(value){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/investment-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    },
                    params: {
                        step_num: value
                    }
                },
            )
            .then((response) => {
                this.investments = response.data
            })
        },
        getStatusList(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/stages-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.status_list = response.data
            })
        }
    },
    watch: {
        ordering() {
            this.getInvestmentsList(this.ordering)
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
            align-items: center;
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

.close{
    cursor: pointer;
    margin-top: 13px;
    &:hover{
        color: #0345FF;
    }
}

.filter__input{
    display: none;
}
</style>