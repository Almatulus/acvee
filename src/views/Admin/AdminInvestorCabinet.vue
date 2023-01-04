<template>
    <div class="">
        
        <form @submit="submitHandler()">
            <div class="admin-cabinet__inputs">
                <div class="admin-cabinet__column">
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Дата финансирования</label></div>
                        <div class=""><input v-model.trim="funding_date" type="date"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Сумма использованных среств инвестора</label></div>
                        <div class=""><input v-model.trim="funds_used" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Наименование сделки</label></div>
                        <div class=""><input v-model.trim="transaction_name" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">БИН</label></div>
                        <div class=""><input v-model.trim="BIN" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Сумма фиансирования сделки</label></div>
                        <div class=""><input v-model.trim="funding_sum" type="text"></div>
                    </div>
                </div>
                <div class="admin-cabinet__column">
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Сумма Долга финансируемой сделки</label></div>
                        <div class=""><input v-model.trim="debt_sum" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Доход от финансируемой сделки</label></div>
                        <div class=""><input v-model.trim="income" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Дата возврата денежных средств</label></div>
                        <div class=""><input v-model.trim="return_date" type="date"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Доля полученного дохода инвестора в %</label></div>
                        <div class=""><input v-model.trim="income_percentage" type="text"></div>
                    </div>
                    <div class="admin-cabinet__input">
                        <div class=""><label for="">Доход инвестора</label></div>
                        <div class=""><input v-model.trim="investor_income" type="text"></div>
                    </div>
                </div>
            </div>
            <button type="submit" class="button admin-cabinet__button">Сохранить</button>
        </form>
        <h2 style="margin-top: 20px;">Финансовая информация</h2>
        <div class="fin-info__table">
            <ul class="fin-info__table-list">
                <li class="fin-info__table-title">Дата финансирования</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-sum-color">{{investment.funding_date}}</li>
            </ul>
            <ul class="fin-info__table-list">
                <li class="fin-info__table-title">Сумма использованных среств инвестора</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-data-color">{{investment.funds_used}}</li>
            </ul>
            <ul class="fin-info__table-list">
                <li class="fin-info__table-title">Наименование сделки</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-profit-color">{{investment.transaction_name}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">БИН</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.BIN}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Сумма фиансирования сделки</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.funding_sum}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Сумма Долга финансируемой сделки</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.debt_sum}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Доход от финансируемой сделки</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.income}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Дата возврата денежных средств</li>
                <li v-for="investment in investments" :key="investment.id">{{investment.return_date}}</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Доля полученного дохода инвестора в %</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.income_percentage}} %</li>
                
            </ul>
            <ul class="fin-info__table-list fin-info__table-list-last">
                <li class="fin-info__table-title">Доход инвестора</li>
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.investor_income}}</li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        funding_date: '',
        funds_used: '',
        transaction_name: '',
        BIN: '',
        funding_sum: '',
        debt_sum: '',
        income: '',
        return_date: '',
        income_percentage: '',
        investor_income: '',
        investments: []
    }),
    methods:{
        getInvestmentsList(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/investments/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                console.log(response.data)
                this.investments = response.data
            })
        },
        submitHandler(){
            axios.post('http://127.0.0.1:8000/api/v1/admin/investor/investment-save/',
                    {
                        user: '',
                        treaty: localStorage.getItem('id'),
                        funding_date: this.funding_date,
                        funds_used: this.funds_used,
                        transaction_name: this.transaction_name,
                        BIN: this.BIN,
                        funding_sum: this.funding_sum,
                        debt_sum: this.debt_sum,
                        income: this.income,
                        return_date: this.return_date,
                        income_percentage: this.income_percentage,
                        investor_income: this.investor_income
                    },
                    {
                        headers:{
                            Authorization: 'Token ' + localStorage.getItem('usertoken')
                        }
                    }
                ).then((response) => {
                    this.getInvestmentsList()
                })
        }
    },
    mounted(){
        this.getInvestmentsList()
    }
}
</script>

<style lang="scss" scoped>
    .fin-info {
        margin: 0 0 85px 0;
		&__projects {
            margin: 20px 0 0 0;
            display: flex;
            justify-content: space-between;
		}

		&__projects-item {
            background: #fff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 25px 22px;
            flex: 0 1 23%;
		}

		&__projects-name {
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
		}

		&__projects-sum {
            font-weight: 600;
            font-size: 28px;
            line-height: 33px;
            color: #333333;
            margin: 24px 0 0 0;
		}

		&__projects-stat {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #52D265;
            margin: 10px 0 0 0;
		}

        &__details{
            display: flex;
            justify-content: space-between;
            margin: 18px 0 0 0;
        }

        &__table{
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 30px 30px;
            display: flex;
            justify-content: space-between;
            overflow: auto;
            width: 100%;
            scrollbar-color: #0345FF rgba(3, 69, 255, 0.6);
            scrollbar-width: thin;
            &::-webkit-scrollbar{
                width: 4.5px;
            }
            &::-webkit-scrollbar-track{
                background: rgba(3, 69, 255, 0.6);
                width: 0.5px;
            }
            &::-webkit-scrollbar-thumb{
                background: #0345FF;
                border-radius: 5px;
            }
        }

        &__table-title{
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            margin: 0 5px 0 0;
            height: 80px;
        }

        &__table-list{
            margin-left: 25px;
            &:first-child{
                margin: 0;
            }
            li{
                font-weight: 600;
                font-size: 14px;
                line-height: 19px;
                margin: 20px 0 0 0;
                text-align: center;
            }
            ul{
                flex: 0 0 33.33%;
                padding: 20px;
            }
        }

        &__table-sum-color{
            color: #000000;
        }

        &__table-data-color{
            color: #333333;
        }

        &__table-profit-color{
            color: #52D265;
        }

        &__table-balance-color{
            color: #FF6961;
        }

        &__table-list-last{
            
        }

        &__schedule{
            background: #ffffff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 50px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            flex-direction: column;
            p, a{
                font-weight: 500;
            }
            p{
                margin: 5px 0 0 0;
                &:first-child{
                    margin: 20px 0 0 0;
                }
            }
        }

        &__schedule-menu{
            margin: 30px 0 0 0;
            li{
                margin: 15px 0 0 0;
                position: relative;
            }

            li::before{
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                left: -30px;
                top: 3px;
                background: #333333;
                border-radius: 50%;
            }

            .fin-info__schedule-li2::before{
                background: #0345FF;
            }

            .fin-info__schedule-li3::before{
                background: #FF6961;
            }

            span{
                font-weight: 500;
            }
            
        }

        &__schedule-red{
            color: #FF6961;
        }

        &__schedule-link{
            display: inline-block;
            color: #0345FF;
            margin: auto 0 0 0;
            align-self: flex-end;
        }
}

.admin-cabinet {

		&__inputs {
            display: flex;
            justify-content: space-around;
		}

		&__column {
            flex: 0 1 50%;
		}

		&__input {
            display: flex;
            align-items: center;
            margin: 20px 0 0 0;
            label{
                font-size: 18px;
                font-weight: 500;
            }
            input{
                background: #FFFFFF;
                box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.02);
                border-radius: 10px;
                height: 50px;
                width: 200px;
                margin-left: 15px;
                padding: 10px;
            }
            select{
                width: 100px;
                height: 40px;
                padding: 10px;
                margin-left: 15px;
            }
		}
}

.admin-cabinet__button{
    padding: 10px;
    margin: 10px 0 0 0;
}
</style>