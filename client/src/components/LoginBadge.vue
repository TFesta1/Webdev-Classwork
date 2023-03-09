<script setup lang="ts">
    import { ref } from 'vue'
    import { useSession, login, useLogout } from "@/model/session"

    const user = ref<string | null>(null); //can either hold a string or null



    const session = useSession();

    const logout = useLogout()

    function logout2(){
        logout();
    }

</script>

<template>
    <div class="navbar-item"  v-if="session.user">
        Welcome {{ session.user.name }} 
        (<a @click="logout2()">logout</a>)
    </div>

    <div class="navbar-item" v-else>
        <a class="button is-primary mr-3" @click="login">
            <span>
                <i class="fas fa-user"></i>
            </span>
            <strong>Login</strong>
        </a>
        <a class="button is-light">
            <span>
                <i class="fas fa-user-plus"></i>
            </span>
            <strong>Sign up</strong>
        </a>
    </div>
</template>

<style scoped>

</style>