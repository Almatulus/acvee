<template>
    <div class="sidebar">
        <a class="sidebar__logo">
            <img src="../../assets/acvee-auth-logo.svg" alt="logo">
        </a>
        <nav class="sidebar__body">
            <ul>
                <router-link tag="li" active-class="active" to="/admin/users" >
                    <a href="" class="sidebar__link">
                        <span>Пользователи</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/projects/borrower" >
                    <a style="display: none" href="" class="sidebar__link">
                        <span >Заемщики</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/loans" >
                    <a href="" class="sidebar__link">
                        <span>Займы</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/projects/investor" >
                    <a style="display: none" href="" class="sidebar__link">
                        <span>Инвестора</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/investments" >
                    <a href="" class="sidebar__link">
                        <span>Инвестиции</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/notifications" >
                    <a href="" class="sidebar__link">
                        <span>Уведомления</span>
                    </a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>