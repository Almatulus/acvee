<template>
    <div class="admin-projects">
        <div class="admin-projects__inner">
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
            </div>
            <table class="table">

                <thead>

                    <tr>

                        <th>ФИО</th>

                        <th>Телефон</th>

                        <th>Почта</th>

                        <th>Заявки на инвестицию</th>

                        <th>Сумма заявки</th>

                        <th>Статус</th>

                        <th>Управление кабинетом</th>

                    </tr>

                </thead>

                <tbody>

                    <tr v-for="investor in investors" :key="investor.id">

                        <td>{{investor.user_name}}</td>

                        <td>{{investor.phone_number}}</td>

                        <td>{{investor.email}}</td>

                        <td>{{investor.investor_app_form}}</td>

                        <td>{{investor.investment_sum}}</td>

                        <td>{{investor.treaty_status.name}}</td>

                        <td>
                            <router-link :to="{name: 'admin-projects-investor-cabinet', params: {id: investor.id}}"><a href="">Перейти</a></router-link>
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
        investors: []
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/investor/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.investors = response.data
        })
    }
}
</script>

<style lang="scss">
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