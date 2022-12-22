<template>
    <div class="header">
        <div class="header__inner">
            <div class="header__user">
                <img src="../../assets/img/icons/413-4139803_unknown-profile-profile-picture-unknown.jpg" alt="avatar" class="header__avatar">
                <div class="header__data">
                    <div class="header__name">
                        {{userName}}
                    </div>
                    <div v-if="userType == 'investor'" class="header__role">
                        Инвестор
                    </div>
                    <div v-if="userType == 'borrower'" class="header__role">
                        Заемщик
                    </div>
                </div>
            </div>
            <a href="" class="header__notification">
                <img src="../../assets/img/icons/notification.svg" alt="bell">
                <span>3</span>
            </a>
            <div class="header__lang">
                <a href="" class="header__lang-item">ҚАЗ</a>
                <a href="" class="header__lang-item">РУС</a>
                <a href="" class="header__lang-item">ENG</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        userName: '',
        userType: ''
    }),
    mounted(){
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/current-user/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            console.log(response)
            this.userName = response.data.full_name
            this.userType = response.data.user_type
        }) 

        
    }
}
</script>
