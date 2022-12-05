<template>
    <div id='request-search' class="request-search">
        <div class="request-search__inner">
            <form action="" class="request-search__form">
                <input v-model="searchValue" placeholder="Вводите название запроса" type="text" class="request-search__input">
                <a v-on:click.prevent='isVisible = !isVisible' :class="{'filter-active':isVisible}" href="" class="request-search__filter icon-filter"></a>
                <button @click.prevent="search(searchValue)" class="request-search__btn button">
                    <img src="../../assets/img/icons/search.svg" alt="search">
                </button>
            </form>
            <router-link tag="a" @click.prevent="onClick" active-class="active" to="/questionnaire">
                <a href="" class="request-search__add-btn button">+ Добавить заявку</a>
            </router-link>
        </div>
        <RequestFilter v-show="isVisible"/>
    </div>
</template>

<script>
import RequestFilter from '@/components/myrequests/RequestFilter.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    data: () => ({
        isVisible: false,
        searchValue: ''
    }),
    components:{
        RequestFilter
    },
    provide() {
        return {
            isVisible: this.isVisible
        }
    },
    methods:{
        onClick(){
            document.getElementById('sidebar').classList.toggle('hide');
        },
        search(value){
            this.GET_SEARCH_VALUE_TO_VUEX(value)
        },
        ...mapActions([
            'GET_SEARCH_VALUE_TO_VUEX'
        ])
    },
    computed:{
        ...mapGetters([
            'SEARCH_VALUE'
        ])
    }

}
</script>

<style lang="scss">
    .filter-active{
        color: #0345FF;
    }
    .request-search {

		&__inner {
            display: flex;
            justify-content: space-between;
            padding: 20px 0 0 0;
		}

		&__form {
            display: flex;
            align-items: center;
		}

		&__input {
            width: 770px - 80px;
            height: 70px;
            background: #FFFFFF;
            padding: 0 0 0 30px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            font-weight: 500;
            font-size: 23px;
            line-height: 27px;
		}

		&__filter {
            padding: 0 20px;
            font-size: 18px;
            background: #FFFFFF;
		}

		&__btn {
            width: 80px;
            height: 70px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
		}

		&__add-btn {
            display: block;
            width: 261px;
            height: 70px;
            border-radius: 10px;
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;
            padding: 22px 30px;
            color: rgba(255, 255, 255, 1);
            margin: 0 0 0 20px;
		}
}

</style>