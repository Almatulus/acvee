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
                                <div style="color: green;" v-if="loan.status == 'approved'" class="">Одобрено</div>
                                <div style="color: green;" v-if="loan.status == ''" class="">Отказано</div>
                            </td>
                            <td>{{loan.amount_received}}</td>
                            <td>
                                <router-link to="">Перейти</router-link>
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
    }
}
</script>