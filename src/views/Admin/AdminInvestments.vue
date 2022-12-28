<template>
    <div class="admin-investments">
        <div class="admin-investments__inner">
            <h2>Инвестиции</h2>
            <table class="table">

                    <thead>

                        <tr>

                            <th>Заявки на инвестицию</th>

                            <th>ФИО</th>

                            <th>Сумма заявки</th>

                            <th>Статус</th>

                            <th>Ссылка</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr v-for="investment in investments" :key="investment.id">

                            <td>{{investment.id}}</td>
                            <td>{{investment.user_name}}</td>
                            <td>{{investment.investment_sum}}</td>
                            <td>{{investment.status}}</td>
                            <td>
                                <router-link to="">Перейти</router-link>
                            </td>
                        </tr>

                    </tbody>

            </table>
            {{investments}}
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
</style>