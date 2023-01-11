<template>
    <div id="sidebar" class="sidebar"  >
        <a class="sidebar__logo">
            <img src="../../assets/acvee-auth-logo.svg" alt="logo">
            <!--<div class="sidebar__text">Acvee</div>-->
        </a>
        <nav class="sidebar__body">
            <ul>
                <router-link tag="li" active-class="active" to="/questionnaire" >
                    <a href="" class="sidebar__link icon-my-application">
                        <span>Анкета</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/myrequest" >
                    <a href="" class="sidebar__link icon-my-application">
                        <span>Мои заявки</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/notifications" >
                    <a href="" class="sidebar__link icon-my-application">
                        <span>Уведомления</span>
                        <span class="notification-counter">
                            {{counter}}
                        </span>
                    </a>
                </router-link>
                
                <!--<router-link tag="li" active-class="active" to="/datarequest" >
                    <a href="" class="sidebar__link icon-data-application">
                        <span>Данные заявки</span>
                    </a>
                </router-link>-->
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

