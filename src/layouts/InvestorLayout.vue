<template>
    <div class="app__main-layout">
        <InvestorNavbar 
        />
        <div class="app__content">
            <div class="app__page">
                <BorrowerHeader/>
                <div class="app__view">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InvestorNavbar from '@/components/app/InvestorNavbar.vue'
import BorrowerHeader from '@/components/app/BorrowerHeader.vue'

export default {
    data: () => ({
        menu: [
            {name: 'Мои заявки', url: '/myrequest', menuClass: 'icon-my-application'},
            {name: 'Данные заявки', url: '/datarequest', menuClass: 'icon-data-application'},
        ]
    }),
    components:{
        InvestorNavbar, BorrowerHeader
    },
}
</script>