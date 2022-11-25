<template>
    <div class="questionnaire-nav">
        <nav>
            <ul class="questionnaire-nav__menu">
                <router-link tag="li" active-class="active" to="/questionnaire/1" exact="">
                    <a href="" class="questionnaire-nav__menu-link">1</a>
                </router-link>
                <router-link tag="li" active-class="active" to="/questionnaire/2" exact="">
                    <a href="" class="questionnaire-nav__menu-link">2</a>
                </router-link>
                <router-link tag="li" active-class="active" to="/questionnaire/3" exact="">
                    <a href="" class="questionnaire-nav__menu-link">3</a>
                </router-link>
                <router-link tag="li" active-class="active" to="/questionnaire/4" exact="">
                    <a href="" class="questionnaire-nav__menu-link">4</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
import RequestDocument from '@/components/myrequests/RequestDocument.vue'
export default {
    components: {
        RequestDocument
    }
}
</script>

<style lang="scss" scoped>
.questionnaire-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
		&__menu {
            position: fixed;
            right: 55px;
            top: 40%;
		}

        li{
            margin: 25px 0 0 0;
        }

		&__menu-link {
            font-weight: 600;
            font-size: 30px;
            line-height: 36px;
            &:hover{
                color: #0345FF;
                //font-size: 36px;
                transition: 1s;
            }
		}
}


</style>