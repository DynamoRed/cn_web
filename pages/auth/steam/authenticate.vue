<template>
    <div></div>
</template>

<script>
    export default {
        middleware({ store, redirect }) {
            try {
                // store.state.steamAuth.authenticate('steam', { failureRedirect: '/auth/steam/redirect' })
                return redirect('/')
            } catch (error) {
                console.error(error);
            }
        }
    }
</script>