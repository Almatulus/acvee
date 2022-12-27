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
                    <a href="" class="sidebar__link">
                        <span>Заемщики</span>
                    </a>
                </router-link>
                <router-link tag="li" active-class="active" to="/admin/projects/investor" >
                    <a href="" class="sidebar__link">
                        <span>Инвестора</span>
                    </a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>