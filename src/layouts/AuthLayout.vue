<template>
    <div class="empty-layout">
        <div class="empty-layout__inner">
            <div class="empty-layout__logo">
                <img src="../assets/acvee-auth-logo.svg" alt="logo">
            </div>
            <div class="empty-layout__content">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.empty-layout {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url('/src/assets/img/background/horizontal-shot-abstract-buildings-with-white-metallic-ribs-glass-windows 2.png');
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__inner{
        display: flex;
        align-items: center;
    }

    &__content{
        margin: 0 0 0 100px;
    }
}
</style>