<template>
    <div class="admin-loans">
        <div class="admin-loans__inner">
            <h2>Займы</h2>
            <div class="admin-loans__content">
                <table class="table">

                    <thead>

                        <tr>

                            <th>№ заявки</th>

                            <th>Дата заявки</th>

                            <th>ФИО</th>

                            <th>Компания</th>

                            <th>Статус</th>

                            <th>Сумма финансирования</th>

                            <th>Ссылка</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr v-for="loan in loans" :key="loan.id">

                            <td>{{loan.request_number}}</td>

                            <td>{{loan.request_date}}</td>
                            <td>{{loan.user_name}}</td>
                            <td>{{loan.project_name}}</td>
                            <td>
                                {{loan.stage}}
                            </td>
                            <td>{{loan.amount_received}}</td>
                            <td>
                                <router-link :to="{name: 'admin-loan', params: {id: loan.id}}"><a @click="getID(loan.id)" href="">Перейти</a></router-link>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
            {{loans}}
        </div>
    </div>
</template>


<script>
export default {
    data: () => ({
        loans: []
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/loan-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.loans = response.data
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