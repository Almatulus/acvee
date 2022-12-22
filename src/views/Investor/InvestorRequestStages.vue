<template>
    <div class="stages">
        <div class="stages__inner">
            <h2>Финансы</h2>
            <p class="">Сумма Финансирования: <span>{{investment_sum}}</span></p>
            <p class="">Срок финансирования: <span>{{funding_term}}</span></p>
            <div class="stages__documents">
                
            </div>
            <h2 style="margin: 30px 0 0 0;">Статус проекта</h2>
            <template v-for="(stage, index) in PROJECTSTAGES" >
                <p v-if="index < project_stage" class="active-stage" :key="stage.id" >{{stage.step_num}}. {{stage.name}} &#10003;</p> 
                <p v-else :key="stage.id" >{{stage.step_num}}. {{stage.name}}</p>
            </template>
            
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data: () => ({
        investment_sum: '',
        funding_term: '',
        needed_sum: '',
        project_stage: ''
    }),
    computed: {
        ...mapGetters([
            'PROJECTSTAGES',
            'PROJECTSTAGESINFO',
            'PROJECTSTATUS'
        ]),
    },
    mounted(){
        this.GET_INVESTOR_PROJECTSTAGES_FROM_API(),
        axios(
                {
                    method: 'GET',
                    url: 'http://127.0.0.1:8000/api/v1/investor/detail/' + localStorage.getItem('userID'),
                    headers:{
                        Authorization: 'Token ' + localStorage.getItem('usertoken')
                    }
                },
        )
        .then((response) => {
            console.log(response)
            this.investment_sum = response.data.investment_sum
            this.funding_term = response.data.funding_term
            this.project_stage = response.data.treaty_status.step_num
        }) 
    },
    methods:{
        ...mapActions([
            'GET_INVESTOR_PROJECTSTAGES_FROM_API',
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