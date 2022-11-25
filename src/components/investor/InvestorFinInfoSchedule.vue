<template>
    <div class="fin-info__schedule">
        <div class="fin-info__graph">
            
            <Doughnut :chart-data="chartData"/>
        </div>
        <ul class="fin-info__schedule-menu">
            <li>Общая сумма капитала</li>
            <li class="fin-info__schedule-li2">
                Используемый капитал<br>
                <span>90 000тг</span>
            </li>
            <li class="fin-info__schedule-li3">
                Не используемый капитал<br>
                <span>10 000тг</span>
            </li>
        </ul>
        <div class="">
        <p>Инвестрованно в 3 проекта</p>
            <p>Остаток выплаты <span class="fin-info__schedule-red">1 489тг</span></p>
        </div>
        <a class="fin-info__schedule-link" href="">Подробнее</a>
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
    data: () => ({
        chartData: {
            labels: [
                'Used',
                'Unused'
            ],
            datasets: [{
                backgroundColor: ['#41B883', '#E46651'],
                data: [90000, 10000],
                
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    }),
    components:{
        Doughnut
    },

}
</script>