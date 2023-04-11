<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './LoginBadge.vue';
    import FlyoutVue from './Flyout.vue';
    import Cart from './Cart.vue';
    import { quantity } from '@/model/cart';
    import Notifications from './Notifications.vue';
    // Ctrl-Space after the word, import RouterLink Vue

    const isMenuActive = ref(false); //Click ref, the yellow bulb will appear, click it to import ref from vue
    const isCartActive = ref(false)

    const toggleCart = () => {
        isCartActive.value = !isCartActive.value;
    }



    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color: rgba(0, 209, 178, 1);">
        <div class="container">
        
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />

                </a>
        
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isMenuActive }">
                <div class="navbar-start">
                    <a class="navbar-item">
                        Home
                    </a>

                    <RouterLink to="/" class="navbar-item">Home</RouterLink>
                    <RouterLink to="/about" class="navbar-item">About</RouterLink>
                    <RouterLink to="/products" class="navbar-item">Products</RouterLink>
        
                    <a class="navbar-item">
                        Documentation
                    </a>
        
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Admin
                        </a>
        
                        <div class="navbar-dropdown">
                            <RouterLink class="navbar-item" to="/admin/products">
                                Products
                            </RouterLink>
                            <RouterLink class="navbar-item" to="/admin/users">
                                Users
                            </RouterLink>
                            
                        </div>
                    </div>
                </div>
        
                <div class="navbar-end">
                    <div class="navbar-item">
                        <Notifications />
                        <button class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-shopping-cart" @click="toggleCart"></i>
                                <span class="tag is-danger quantity-tag">{{ quantity }}</span>
                            </span>
                        </button>
                    </div>

                    <LoginBadge />
                    

                    <div class="navbar-item">
                        <div class="buttons">
                            <!-- <i class="fa fa-download has-text-white" style="font-size:20px;"  aria-hidden="true">Download</i> -->

                            <a class="button is-primary mr-3" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                                <span class="icon is-hidden-touch is-hidden-desktop-only">
                                    <i class="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                            
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </nav>
    <FlyoutVue :class="{'is-active': isCartActive}">
        <Cart />
    </FlyoutVue>
</template>

<style scoped>

    .quantity-tag {
        position: absolute;
        top: -5px;
        right: -5px;
        border-radius: .5rem;
    }

</style>