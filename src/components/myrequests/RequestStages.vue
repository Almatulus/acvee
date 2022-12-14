<template>
    <div class="stages">
        <div class="stages__inner">
            <h2>Финансы</h2>
            <p class="">Сумма Финансирования: <span>1000000</span></p>
            <p class="">Срок финансирования: <span>15.02.2023</span></p>
            <div class="stages__documents">

            </div>
            <h2 style="margin: 30px 0 0 0;">Статус проекта</h2>
            <p v-for="stage in PROJECTSTAGES" :key="stage.id">{{stage.step}}. {{stage.stage_name}}</p>
            
        </div>
    </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'PROJECTSTAGES'
        ]),
    },
    mounted(){
        this.GET_PROJECTSTAGES_FROM_API()
    },
    methods:{
        ...mapActions([
            'GET_PROJECTSTAGES_FROM_API'
        ]),
    }
}
</script>

<style lang="scss" scoped>
    p{
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        margin: 20px 0 0 0;
    }
    span{
        color: rgba(3, 69, 255, 1);
    }
</style>

