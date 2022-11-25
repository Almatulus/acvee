<template>
    <div class="myprojects">
        <div class="myprojects__inner">
            <h2>Мои проекты</h2>
            <InvestorProjectsSums/>
            <div class="myprojects__projects">
                <InvestorProjectsList/>
                <div class="myprojects__project-details">
                    <InvestorProjectsPortfolio/>
                    <InvestorProjectsIncome/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InvestorProjectsSums from '@/components/investor/InvestorProjectsSums.vue'
import InvestorProjectsList from '@/components/investor/InvestorProjectsList.vue'
import InvestorProjectsPortfolio from '@/components/investor/InvestorProjectsPortfolio.vue'
import InvestorProjectsIncome from '@/components/investor/InvestorProjectsIncome.vue'
export default {
    components: {
        InvestorProjectsSums, 
        InvestorProjectsList,
        InvestorProjectsPortfolio,
        InvestorProjectsIncome
    }
}
</script>

<style lang="scss">
.myprojects {

		&__inner {
		}

		&__sum {
            margin: 20px 0 0 0;
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.03);
            padding: 25px;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
		}

		&__sum-item {
            color: #000000;
            text-align: center;
            padding: 75 - 25px 45px;
            border-right: 0.5px solid rgba(51, 51, 51, 0.6);
            flex: 0 0 25%;
            &:last-child{
                border-right: 0px;
            }
		}

		&__sum-money {
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
		}

        &__sum-money-using{
            color: #0345FF;
        }

        &__sum-money-remainder{
            color: #FF6961;
        }

		&__sum-subtitle {
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            margin: 10px 0 0 0;
		}

        &__projects{
            margin: 20px 0 0 0;
            display: flex;
            justify-content: space-between;
        }

        &__projects-list{
            height: 86 + 86 + 420px;
            width: 275px + 25px;
            overflow: auto;
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

        &__projects-item{
            background: #ffffff;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.01);
            border-radius: 10px;
            margin: 15px 23px 0 0;
            padding: 21px 30px;
            cursor: pointer;
        }

        &__projects-name{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #333333;
        }

        &__projects-subtitle{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: rgba(51, 51, 51, 0.6);
            margin: 4px;
        }

        &__portfolio{
            background: #FFFFFF;
            border: 1px solid #0345FF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.01);
            border-radius: 10px;
            padding: 30px;
            height: 272px;
        }

        &__project-details{
            padding: 22.5px;
        }

        &__portfolio-title{
            
        }

        &__portfolio-name{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #333333;
            margin: 10px 0 0 0;
        }

        &__portfolio-description{
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: rgba(51, 51, 51, 0.6);
            margin: 20px 0 0 0;
        }

        &__portfolio-invest{
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
            margin: 20px 0 0 0;
            &:last-child{
                margin: 10px 0 0 0;
            }
        }

        &__income{
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.01);
            border-radius: 10px;
            margin: 20px 0 0 0;
            padding: 30px;
        }

        &__income-details{
            display: flex;
            justify-content: space-between;
            margin: 10px 0 0 0;
        }

        &__income-item{
            margin: 10px 0 0 0;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #333333;
            span{
                color: #0345FF;
            }
        }

        &__income-sum{
            margin: 60px 0 0 0;
            display: flex;
            justify-content: space-between;
        }

        &__income-sum-total{
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #333333;
        }

        &__income-sum-right{
            display: flex;
        }

        &__income-button{
            display: inline-block;
            padding: 15px 20px;
            margin: 0 0 0 20px;
        }

        &__income-button-lb{
            background: rgba(3, 69, 255, 0.1);
            color: #0345FF;
        }
}

.myprojects-title{
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
}

</style>