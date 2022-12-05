<template>
    <div class="request-table__row request-table__data" @click="$emit('makeActive'), activeEl = request_data" :class="{'active-el': activeEl === request_data}">
        <div class="request-table__item">
            {{request_data.request_number}}
        </div>
        <div class="request-table__item">
            {{request_data.contract_number}}
        </div>
        <div class="request-table__item">
            {{request_data.project_name}}
        </div>
        <div class="request-table__item">
            {{request_data.request_date}}
        </div>
        <div class="request-table__item">
            {{request_data.get_needed_sum}}тг
        </div>
        <div class="request-table__item">
            {{request_data.get_status_name}}
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        activeEl: 0,
    }),
    props: {
        request_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    created(){
        this.$emit('makeActive')
    }   
}
</script>

<style lang="scss" scoped>
    .active-el{
        background: #0345FF;
        color: #FFFFFF;
    }
</style>