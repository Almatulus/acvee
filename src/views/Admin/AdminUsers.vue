<template>
    <div class="admin-users">
        <div class="admin-users__inner">
            <h2>Все пользователи</h2>
            <div class="admin-users__content">
                <div id='request-search' class="request-search">
                    <div class="request-search__inner">
                        <form action="" class="request-search__form">
                            <input v-if="isName == true" v-model="searchName" placeholder="Введите имя пользователя" type="text" class="request-search__input">
                            <input v-if="isName == false" v-model="searchEmail" placeholder="Вводите почту пользователя" type="text" class="request-search__input">
                            <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                            <button v-if="isName == true" @click="searchUser(searchName, '')" class="request-search__btn button">
                                <img src="../../assets/img/icons/search.svg" alt="search">
                            </button>
                            <button v-if="isName == false" @click="searchUser('', searchEmail)" class="request-search__btn button">
                                <img src="../../assets/img/icons/search.svg" alt="search">
                            </button>
                            <select style="margin-left: 15px; font-size: 15px; border-radius: 0" v-model="isName" name="" id="">
                                <option :value="true">Поиск по имени</option>
                                <option :value="false">Поиск по почте</option>
                            </select>
                        </form>
                    </div>
                    <div v-if="isVisible == true" class="filter">
                        <div class="filter__inner">
                            <div class="filter__row">
                                <div class="filter__column">
                                    <div style="display:flex;" class="filter__title">
                                        Роль
                                        
                                    </div>
                                    <div class="filter__filters">
                                        <input id="borrower"  v-model="ordering" type="radio" name="status" value="borrower" class="filter__el filter__input">
                                        <label class="filter__el" for="borrower">Заемщики</label>
                                        <div style="margin-left: 15px;" @click="clearInvestor()" class="close">&#9587;</div>
                                    </div>
                                    <div class="filter__filters">
                                        <input id="investor"  v-model="ordering" type="radio" name="status" value="investor" class="filter__el filter__input">
                                        <label class="filter__el" for="investor">Инвестора</label>
                                        <div style="margin-left: 15px;" @click="clearInvestor()" class="close">&#9587;</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>ФИО</th>

                        <th>Телефон</th>

                        <th>Почта</th>

                        <th>Роль</th>

                    </tr>

                </thead>

                <tbody>

                    <tr v-for="user in users" :key="user.id">

                        <td>{{user.id}}</td>

                        <td>{{user.first_name}} {{user.second_name}}</td>

                        <td>{{user.phone_number}}</td>

                        <td>{{user.email}}</td>

                        <td>
                            <div v-if="user.user_type == 'investor'" class="">Инвестор</div>
                            <div v-if="user.user_type == 'borrower'" class="">Заемщик</div>
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
        users: [],
        searchName: '',
        sortedProjects: [],
        isVisible: false,
        ordering: '',
        searchEmail: '',
        isName: true
    }),
    mounted(){
        this.getUserList()
    },
    methods: {
        getUserList(value){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/user/user-list/',
                    params: {
                        user: value
                    },
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.users = response.data
            })
        },
        searchUser(searchName, searchEmail){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/admin/user/user-list/',
                    params: {
                        full_name__contains: searchName,
                        email__contains: searchEmail
                    },
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.users = response.data
            })
        },
        clearInvestor(){
            this.ordering = ''
        }
    },
    watch: {
        ordering() {
            this.getUserList(this.ordering)
        }
    },
    computed:{
        
    }
}
</script>

<style lang="scss">
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
            input{
                display: none;
            }
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

.filter__input{
    display: none;
}

.active-el{
    background: #0345FF;
    color: #FFFFFF;
}

.close{
    cursor: pointer;
    margin-top: 13px;
    &:hover{
        color: #0345FF;
    }
}
</style>