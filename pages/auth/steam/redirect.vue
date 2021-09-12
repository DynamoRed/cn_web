<template>
    <div></div>
</template>

<script>
    export default {
        middleware({ store, redirect }) {
            if(!store.state.user.authenticated) {
                store.state.steamAuth.authenticate('steam')
            }
            return redirect('/')
        }
    }
</script>