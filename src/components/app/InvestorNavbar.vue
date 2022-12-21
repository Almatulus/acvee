<template>
    <div class="sidebar">
        <a class="sidebar__logo">
            <img src="" alt="logo">
            <div class="sidebar__text">Logo</div>
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
                <router-link tag="li" active-class="active" to="/investor/my-projects" >
                    <a href="" class="sidebar__link">
                        <span>Мои проекты</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/investor/financial-information" >
                    <a href="" class="sidebar__link">
                        <span>Аналитика</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/investor/agreements" >
                    <a href="" class="sidebar__link">
                        <span>Договора</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/investor/notifications" >
                    <a href="" class="sidebar__link">
                        <span>Уведомления</span>
                    </a>
                </router-link>
                
            </ul>
        </nav>
    </div>
</template>