<template>
    <div class="my-requests">
        <div class="my-requests__inner">
            <h2 class="my-requests__title">Мои запросы</h2>
            <RequestSearch/>
            <RequestTable/>
        </div>
    </div>
</template>

<script>
import RequestSearch from '@/components/myrequests/RequestSearch.vue'
import RequestTable from '@/components/myrequests/RequestTable.vue'

export default {
    name: 'myrequest',
    components:{
        RequestSearch, RequestTable
    },
    data () {
        return {
            isVisible: false
        }
    },
    provide() {
        return {
            isVisible: this.isVisible
        }
    },
}
</script>
