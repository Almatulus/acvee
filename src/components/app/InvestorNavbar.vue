<template>
    <div class="sidebar">
        <a class="sidebar__logo">
            <img src="../../assets/acvee-auth-logo.svg" alt="logo">
        </a>
        <nav class="sidebar__body">
            <ul>
                <router-link tag="li" active-class="active" to="/investor/questionnaire" >
                    <a href="" class="sidebar__link">
                        <span>Анкета</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/investor/requests" >
                    <a href="" class="sidebar__link">
                        <span>Мои заявки</span>
                    </a>
                </router-link>
                <!--<router-link tag="li" active-class="active" to="/investor/my-projects" >
                    <a href="" class="sidebar__link">
                        <span>Мои проекты</span>
                    </a>
                </router-link>-->
                <router-link tag="li" active-class="active" to="/investor/financial-information" >
                    <a href="" class="sidebar__link">
                        <span>Аналитика</span>
                    </a>
                </router-link>
                <!-- <router-link tag="li" active-class="active" to="/investor/agreements" >
                    <a href="" class="sidebar__link">
                        <span>Договора</span>
                    </a>
                </router-link> -->
                <router-link tag="li" active-class="active" to="/investor/notifications" >
                    <a href="" class="sidebar__link">
                        <span>Уведомления</span>
                        <span class="notification-counter">
                            {{counter}}
                        </span>
                    </a>
                </router-link>
                
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => ({
        counter: ''
    }),
    methods:{
        getNotificationCounter(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/messages-amount/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.counter = response.data.messages_amount
                
                
            }) 
        }
    },
    mounted(){
        this.getNotificationCounter()
    }
}
</script>

<style lang="scss" scoped>
.notification-counter{
    background: #0345FF;
    width: 22px;
    height: 22px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    font-size: 13px;
    // padding-bottom: 2px;
    
}
</style>