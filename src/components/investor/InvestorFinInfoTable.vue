<template>
    <div class="">
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
                <li v-for="investment in investments" :key="investment.id" class="fin-info__table-balance-color">{{investment.return_date}}</li>
                
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
        investments: []
    }),
    methods:{
        getInvestmentsList(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/investor/investments/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                console.log(response.data)
                this.investments = response.data
            })
        }
    },
    mounted(){
        this.getInvestmentsList()
    }
}
</script>