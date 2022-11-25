<template>
    <div class="authentication-template__roles">
        <ul>
            <li 
            v-for="role in roles"
            :key="role.title"
            :class="{'active-role': activeEl === role}"
            @click="activeEl = role"
            >
               <a href="#" class="authentication-template__link"
               >{{ role.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        roles: [
            {
                title: 'Заемщик'
            },
            {
                title: 'Fulfillment'
            },
            {
                title: 'Админ'
            },
            {
                title: 'Инвестор'
            }
        ],
        activeEl: 0
    }),
    methods: {
        makeActive: function(item){
            this.active = item;
        }
    }
}
</script>

<style lang="scss" scoped>
    .active-role{
        a{
            color: #0345FF;
            background: #fff;
            font-weight: 600;
        }
    }
</style>