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
                <div class="admin-users__row">
                    <div class="admin-users__item admin-users__title">
                        ID
                    </div>
                    <div class="admin-users__item admin-users__title">
                        ФИО
                    </div>
                    <div class="admin-users__item admin-users__title">
                        Телефон
                    </div>
                    <div class="admin-users__item admin-users__title">
                        Почта
                    </div>
                    <div class="admin-users__item admin-users__title">
                        Роль
                    </div>
                    <div class="admin-users__item admin-users__title">
                        Cсылка
                    </div>
                </div>
                <div v-for="user in users" :key="user.id" class="admin-users__row">
                    <div class="admin-users__item">
                        {{user.id}}
                    </div>
                    <div class="admin-users__item">
                        {{user.first_name}} {{user.second_name}}
                    </div>
                    <div class="admin-users__item">
                        {{user.phone_number}}
                    </div>
                    <div class="admin-users__item">
                        {{user.email}}
                    </div>
                    <div class="admin-users__item">
                        <div v-if="user.user_type == 'borrower'" class="">
                            Заемщик
                        </div>
                        <div v-if="user.user_type == 'investor'" class="">
                            Инвестор
                        </div>
                        <div v-if="user.user_type == 'admin'" class="">
                            Админ
                        </div>
                    </div>
                    <div class="admin-users__item">
                        <a href="">Ссылка</a>
                    </div>
                </div>
            </div>
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