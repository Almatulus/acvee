<template>
    <div id="sidebar" class="sidebar"  >
        <a class="sidebar__logo">
            <img src="../../assets/acvee-auth-logo.svg" alt="logo">
            <!--<div class="sidebar__text">Acvee</div>-->
        </a>
        <nav class="sidebar__body">
            <ul>
                <router-link tag="li" active-class="active" to="/myrequest" >
                    <a href="" class="sidebar__link icon-my-application">
                        <span>Мои заявки</span>
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
    props: [
        'name',
        'url',
        'menuClass'
    ]
}
</script>

