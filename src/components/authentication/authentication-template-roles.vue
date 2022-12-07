<template>
    <div class="authentication-template__roles">
        <form action="">
        <ul>
            <li 
                v-for="role in roles"
                :key="role.title"
                :class="{'active-role': activeEl === role}"
                @click="activeEl = role"
            >
                <input :id="role.id" type="radio" :value="role.value">
                <label :for="role.id" class="authentication-template__link"
    
                >
                    {{ role.title }}
                </label>
            
            </li>
        </ul>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        roles: [
            {
                title: 'Заемщик', value: 2, id: "Borrower"
            },
            {
                title: 'Инвестор', value: 3, id: "Investor"
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