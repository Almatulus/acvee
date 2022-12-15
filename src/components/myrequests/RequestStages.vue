<template>
    <div class="stages">
        <div class="stages__inner">
            <h2>Финансы</h2>
            <p class="">Сумма Финансирования: <span>{{PROJECTSTAGESINFO.funding_term}}</span></p>
            <p class="">Срок финансирования: <span>{{PROJECTSTAGESINFO.get_needed_sum}}</span></p>
            <div class="stages__documents">
            
            </div>
            <h2 style="margin: 30px 0 0 0;">Статус проекта</h2>
            <template v-for="(stage, index) in PROJECTSTAGES" >
                <p v-if="index < PROJECTSTAGESINFO.stage" class="active-stage" :key="stage.id" >{{stage.step}}. {{stage.stage_name}} V</p> 
                <p v-else :key="stage.id" >{{stage.step}}. {{stage.stage_name}}</p>
            </template>
            
        </div>
    </div>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'PROJECTSTAGES',
            'PROJECTSTAGESINFO',
            'PROJECTSTATUS'
        ]),
    },
    mounted(){
        this.GET_PROJECTSTAGES_FROM_API(),
        this.GET_PROJECTSTAGESINFO_FROM_API(this.PROJECTSTATUS)
    },
    methods:{
        ...mapActions([
            'GET_PROJECTSTAGES_FROM_API',
            'GET_PROJECTSTAGESINFO_FROM_API'
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
    .active-stage{
        color: rgba(3, 69, 255, 1);
    }
</style>

