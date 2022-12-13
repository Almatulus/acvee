<template>
    <div class="sidebar">
        <a class="sidebar__logo">
            <img src="" alt="logo">
            <div class="sidebar__text">Logo</div>
        </a>
        <nav class="sidebar__body">
            <ul>
                <router-link tag="li" active-class="active" to="/admin/projects" >
                    <a href="" class="sidebar__link">
                        <span>Общие данные</span>
                    </a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>