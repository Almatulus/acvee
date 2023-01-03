<template>
    <div class="fin-info">
        <div class="fin-info__inner">
            <h2 class="fin-info__title">Финансовая информация</h2>
            <InvestorFinInfoProjects/>
            <div class="fin-info__details">
                <InvestorFinInfoTable/>
                <!--<InvestorFinInfoSchedule/>-->
            </div>
        </div>
    </div>
</template>

<script>
import InvestorFinInfoProjects from '@/components/investor/InvestorFinInfoProjects.vue'
import InvestorFinInfoTable from '@/components/investor/InvestorFinInfoTable.vue'
import InvestorFinInfoSchedule from '@/components/investor/InvestorFinInfoSchedule.vue'
export default {
    components:{
        InvestorFinInfoProjects,
        InvestorFinInfoTable,
        InvestorFinInfoSchedule
    }
}
</script>

<style lang="scss">
.fin-info {
        margin: 0 0 85px 0;
		&__projects {
            margin: 20px 0 0 0;
            display: flex;
            justify-content: space-between;
		}

		&__projects-item {
            background: #fff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 25px 22px;
            flex: 0 1 23%;
		}

		&__projects-name {
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
		}

		&__projects-sum {
            font-weight: 600;
            font-size: 28px;
            line-height: 33px;
            color: #333333;
            margin: 24px 0 0 0;
		}

		&__projects-stat {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #52D265;
            margin: 10px 0 0 0;
		}

        &__details{
            display: flex;
            justify-content: space-between;
            margin: 18px 0 0 0;
        }

        &__table{
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 30px 30px;
            display: flex;
            justify-content: space-between;
            overflow: auto;
            width: 100%;
            scrollbar-color: #0345FF rgba(3, 69, 255, 0.6);
            scrollbar-width: thin;
            &::-webkit-scrollbar{
                width: 4.5px;
            }
            &::-webkit-scrollbar-track{
                background: rgba(3, 69, 255, 0.6);
                width: 0.5px;
            }
            &::-webkit-scrollbar-thumb{
                background: #0345FF;
                border-radius: 5px;
            }
        }

        &__table-title{
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            color: #000000;
            margin: 0 5px 0 0;
            height: 80px;
        }

        &__table-list{
            margin-left: 25px;
            &:first-child{
                margin: 0;
            }
            li{
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                margin: 20px 0 0 0;
                text-align: center;
            }
            ul{
                flex: 0 0 33.33%;
                padding: 20px;
            }
        }

        &__table-sum-color{
            color: #000000;
        }

        &__table-data-color{
            color: #333333;
        }

        &__table-profit-color{
            color: #52D265;
        }

        &__table-balance-color{
            color: #FF6961;
        }

        &__table-list-last{
            
        }

        &__schedule{
            background: #ffffff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            border-radius: 10px;
            padding: 50px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            flex-direction: column;
            p, a{
                font-weight: 500;
            }
            p{
                margin: 5px 0 0 0;
                &:first-child{
                    margin: 20px 0 0 0;
                }
            }
        }

        &__schedule-menu{
            margin: 30px 0 0 0;
            li{
                margin: 15px 0 0 0;
                position: relative;
            }

            li::before{
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                left: -30px;
                top: 3px;
                background: #333333;
                border-radius: 50%;
            }

            .fin-info__schedule-li2::before{
                background: #0345FF;
            }

            .fin-info__schedule-li3::before{
                background: #FF6961;
            }

            span{
                font-weight: 500;
            }
            
        }

        &__schedule-red{
            color: #FF6961;
        }

        &__schedule-link{
            display: inline-block;
            color: #0345FF;
            margin: auto 0 0 0;
            align-self: flex-end;
        }
}
</style>