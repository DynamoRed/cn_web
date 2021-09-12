<template>
    <div @contextmenu="openMenu" @click="closeMenu">
        <MainHeader/>
        <Nuxt/>
        <MainFooter/>
        <ContextMenu v-if="viewMenu" :style="{top: menuPos.top,left: menuPos.left}"/>
        <div class="notifications">
            <Notification v-for="notification in notifications" :key="notification.id" :notification="notification"/>
        </div>
    </div>
</template>

<script>
    import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

    export default {
        mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
        data(){
            return {
                viewMenu: false,
                menuPos: {
                    top: '0px',
                    left: '0px',
                },
            }
        },
        computed: {
            notifications(){
                return this.$store.state.notifications.list
            },
        },
        methods: {
            setMenu: function(top, left) {
                let largestWidth = this.$vssWidth - 225;
                if (left > largestWidth) left = largestWidth;

                this.menuPos.top = top + 'px';
                this.menuPos.left = left + 'px';
            },

            closeMenu: function() {
                this.viewMenu = false;
            },

            openMenu: function(e) {
                this.viewMenu = true;
                this.setMenu(e.y, e.x)
                
                if(!this.$store.state.user.isDeveloper) e.preventDefault();
            }
        },
    }
</script>

<style lang="css" scoped>
    div { width: 100% }

    .notifications {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;
        width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;
        margin-bottom: 15px;
        pointer-events: none;
    }
</style>