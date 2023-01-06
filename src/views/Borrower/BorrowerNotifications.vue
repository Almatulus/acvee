<template>
    <div class="investor-notifications">
        <div class="investor-notifications__inner">
            <h2>Уведомления</h2>
            <div class="investor-notifications__content">
                <div class="investor-notifications__item">
                    <div class="investor-notifications__name">
                        <p>Ваши данные на проверке</p>
                    </div>
                    <div class="investor-notifications__time">
                        <p>16.12.2022 11:06</p>
                    </div>
                    
                </div>
                <div class="investor-notifications__item">
                    <div class="investor-notifications__name">
                        <p>Договор на подписаниии</p>
                    </div>
                    <div class="investor-notifications__time">
                        <p>16.12.2022 11:06</p>
                    </div>
                    
                </div>
                <div class="investor-notifications__item">
                    <div class="investor-notifications__name">
                        <p>Договор подписан</p>
                    </div>
                    <div class="investor-notifications__time">
                        <p>16.12.2022 11:06</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.investor-notifications {
        font-size: 20px;
		&__inner {
		}

		&__content {
		}

		&__item {
            padding: 10px;
            margin: 20px 0 0 0;
            border: 2px solid #c9bbbb;
            border-radius: 10px;
		}

		&__name {
            border-bottom: 1px solid #000;
            padding: 10px 0;
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