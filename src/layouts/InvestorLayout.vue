<template>
    <div class="app__main-layout">
        <InvestorNavbar 
        />
        <div class="app__content">
            <div class="app__page">
                <Header/>
                <div class="app__view">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InvestorNavbar from '@/components/app/InvestorNavbar.vue'
import Header from '@/components/app/Header.vue'

export default {
    data: () => ({
        menu: [
            {name: 'Мои заявки', url: '/myrequest', menuClass: 'icon-my-application'},
            {name: 'Данные заявки', url: '/datarequest', menuClass: 'icon-data-application'},
        ]
    }),
    components:{
        InvestorNavbar, Header
    },
}
</script>