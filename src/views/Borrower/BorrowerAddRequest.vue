<template>
   <div class="questionnaire-template">
        <div class="questionnaire-template__inner">
            <div class="questionnaire-template__content">
                <Questionnaire ref="aaa" class="scroll-anim"/>
                <Scoring ref="scoring" class="scroll-anim"/>
                <AdditionalDocuments ref="additionalDocuments" class="scroll-anim"/>
                <RequestDocument/>
            </div>
            <div class="questionnaire-nav" ><!-- v-on="handleScroll" -->
                <nav>
                    <ul class="questionnaire-nav__menu">
                        <li>
                            <a @click.prevent="scrollTo('aaa'), activeEl = 1" :class="{'active-template': activeEl === 1}" href="#" class="questionnaire-nav__menu-link">1</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollTo('scoring'), activeEl = 2" href="#" :class="{'active-template': activeEl === 2}" class="questionnaire-nav__menu-link">2</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollTo('additionalDocuments'), activeEl = 3" href="#" :class="{'active-template': activeEl === 3}" class="questionnaire-nav__menu-link">3</a>
                        </li>
                        <li>
                            <a @click.prevent="scrollTo('aaa'), activeEl = 4" href="" :class="{'active-template': activeEl === 4}" class="questionnaire-nav__menu-link">4</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
   </div>
</template>

<script>
import VerticalNumberNav from '@/components/app/VerticalNumberNav.vue'
import Questionnaire from '@/components/borrower/Questionnaire.vue'
import Scoring from '@/components/borrower/Scoring.vue'
import RequestDocument from '@/components/borrower/RequestDocument.vue'
import AdditionalDocuments from '@/components/borrower/AdditionalDocuments.vue'
export default {
    data: () => ({
        activeEl: 0,
        scrolled: false
    }),
    components: {
        VerticalNumberNav,
        Questionnaire,
        Scoring,
        RequestDocument,
        AdditionalDocuments
    },
    methods: {
        scrollTo(refName){
            var element = this.$refs[refName]
            var top = element.offsetTop

            window.scrollTo({
                top: 1500,
                behavior: "smooth"
            })
        },
        makeActive: function(item){
            this.active = item;
        },
        handleScroll() {
            let obj = document.querySelector('.scroll-anim');
            let {top,bottom} = obj.getBoundingClientRect();
            let height = document.documentElement.clientHeight;
            this.scrolled = top < height && top >0;
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
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

.active-template{
    color: #0345FF;
}

</style>
