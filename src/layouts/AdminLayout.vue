<template>
    <div class="app__main-layout">
        <AdminNavbar 
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
import AdminNavbar from '@/components/app/AdminNavbar.vue'
import Header from '@/components/app/Header.vue'
export default {
    components: {
        AdminNavbar, Header
    }
}
</script>