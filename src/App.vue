<template>
  <div id="app">
    <component :is="layout">
        <router-view/>
    </component>
  </div>
</template>

<script>
import AuthLayout from '@/layouts/AuthLayout.vue'
import BorrowerLayout from '@/layouts/BorrowerLayout.vue'
import InvestorLayout from '@/layouts/InvestorLayout.vue'

export default {
    computed: {
        layout(){
            return (this.$route.meta.layout || 'auth') + '-layout'
        }
    },
    components: {
        AuthLayout, 
        BorrowerLayout,
        InvestorLayout
    }
}
</script>

<style lang="scss">
    @import 'assets/css/style.scss';
    @import 'assets/css/nullstyle.scss';
    @import 'assets/css/iconsfont.css';
    @import 'assets/css/fonts.scss';
</style>
