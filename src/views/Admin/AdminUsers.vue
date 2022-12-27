<template>
    <div class="admin-users">
        <div class="admin-users__inner">
            <h2>Все пользователи</h2>
            <div class="admin-users__content">
                <!--<div id='request-search' class="request-search">
                    <div class="request-search__inner">
                        <form action="" class="request-search__form">
                            <input v-model="searchValue" placeholder="Вводите название запроса" type="text" class="request-search__input">
                            <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                            <button @click.prevent="search(searchValue)" class="request-search__btn button">
                                <img src="../../assets/img/icons/search.svg" alt="search">
                            </button>
                        </form>
                    </div>
                </div>-->
            </div>
            <table class="table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>ФИО</th>

                        <th>Телефон</th>

                        <th>Почта</th>

                        <th>Роль</th>

                        <th>Cсылка</th>

                    </tr>

                </thead>

                <tbody>

                    <tr v-for="user in users" :key="user.id">

                        <td>{{user.id}}</td>

                        <td>{{user.first_name}} {{user.second_name}}</td>

                        <td>{{user.phone_number}}</td>

                        <td>{{user.email}}</td>

                        <td>4</td>

                        <td>0.1</td>

                    </tr>

                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        users: []
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/user/user-list/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            this.users = response.data
        })
    }
}
</script>

<style lang="scss" scoped>
.admin-users {

		&__inner {
		}

		&__content {
            margin: 20px 0 0 0;
		}

		&__row {
            display: flex;
            justify-content: space-between;
            margin: 20px 0 0 0;
            text-align: center;
		}

		&__title {
            border: 2px solid #0345FF;
            background: #0345FF;
            color: #fff;
            
		}

		&__item {
            flex: 0 0 15%;
            font-size: 18px;
            padding: 15px;
		}
}

</style>