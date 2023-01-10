<template>
    <div class="investor-notifications">
        <div class="investor-notifications__inner">
            <h2>Уведомления</h2>
            <div class="investor-notifications__content">
                <div v-for="notification in notifications" :key="notification.id" class="investor-notifications__item">
                    <div class="investor-notifications__name">
                        <p>{{notification.header}}</p> <p @click.prevent="deleteNotification(notification.id)" class="investor-notifications__delete">&#10006;</p>
                    </div>
                    <div class="investor-notifications__body">
                        <p>{{notification.body}}</p>
                    </div>
                    <div class="investor-notifications__time">
                        <p>{{notification.date}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        notifications: []
    }),
    methods: {
        getNotificationList(){
            axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/messages/',
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
            )
            .then((response) => {
                this.notifications = response.data
                
            })
        },
        deleteNotification(value){
            axios.post('http://127.0.0.1:8000/api/v1/messages/delete/'+ value + '/',
            {
                
            },
            {
                headers:{
                    Authorization: 'Token ' + localStorage.getItem('usertoken')
                }
            }).then((response) => {
                this.getNotificationList()
            })
        }
    },
    mounted(){
        this.getNotificationList()
    }
}
</script>

<style lang="scss" scoped>
.investor-notifications {
        font-size: 20px;
        font-weight: 500;
		&__inner {
		}

		&__content {
		}

		&__item {
            padding: 10px;
            margin: 20px 0 0 0;
            border: 2px solid #0345FF;
            border-radius: 10px;
		}

		&__name {
            border-bottom: 1px solid #0345FF;
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
		}

        &__body{
            margin: 10px 0 20px 0;
            color: rgba(51, 51, 51, 0.6);
            p{
                width: 90%;
            }
        }

        &__delete{
            margin-right: 25px;
            cursor: pointer;
            font-size: 22px;
            &:hover{
                color: #0345FF;
                transition: .5s;
            }
        }

		&__time {
            margin: 10px 0 0 0;
            display: flex;
            justify-content: end;
            p{
                margin-right: 15px;
            }
		}
}

</style>