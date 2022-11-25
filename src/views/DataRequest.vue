<template>
    <div class="my-requests">
        <div class="my-requests__inner">
            <h2 class="my-requests__title">Данные заявки</h2>
            <RequestSearch/>
            
            <RequestTable/>
        </div>
    </div>
</template>

<script>
import RequestSearch from '@/components/myrequests/RequestSearch.vue'
import RequestFilter from '@/components/myrequests/RequestFilter.vue'
import RequestTable from '@/components/myrequests/RequestTable.vue'

export default {
    name: 'myrequest',
    components:{
        RequestSearch, RequestFilter, RequestTable
    }
}
</script>