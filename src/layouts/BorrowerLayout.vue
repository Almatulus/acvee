<template>
    <div class="app__main-layout">
        <BorrowerNavbar 
        :name='menu.name'
        :url='menu.url'
        :menuClass='menu.menuClass'/>
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
import BorrowerNavbar from '@/components/app/BorrowerNavbar.vue'
import Header from '@/components/app/BorrowerHeader.vue'

export default {
    name: 'main-layout',
    components:{
        BorrowerNavbar, Header
    },
    data: () => ({
        menu: [
            {name: 'Мои заявки', url: '/myrequest', menuClass: 'icon-my-application'},
            {name: 'Данные заявки', url: '/datarequest', menuClass: 'icon-data-application'},
        ]
    })
}
</script>

<style lang="scss">
.app {

		&__main-layout {
            display: flex;
		}

		&__content {
            width: 100%;
            margin: 0 0 0 240px;
		}

		&__page {
            padding: 0 50px;
		}
        
        &__view{
            margin: 100px 0 0 0;
        }
}

</style>
