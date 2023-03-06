<script setup lang="ts">
    import { getProducts, type Product } from '../model/products';
    import { ref } from 'vue';

    const products = ref(getProducts());
    

</script>


<template>
    <div>
        <h1 class="title">
            These will be the products
        </h1>
        <h2 class="subtitle">
            If you got here, then you are logged in
        </h2>

        <div class="product-list">
            <div class="product" v-for="product in products" :key="product.id">
                <div class="product-image">
                    <img :src="product.thumbnail" alt="product.title" />
                    <h3>{{ product.title }}</h3>
                    <p>{{ product.description }}</p>
                    <p>
                        <span>$</span>
                        <i class="price">
                            {{ product.price }}
                        </i>
                    </p>
                    <button class="button is-primary">+</button>
                </div>
                
            </div>
        </div>


    </div>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color:aliceblue;
    }

    .product {
        width: 10rem;
        margin: 1rem;
        padding: 1rem;
        border: 1px solid black;
        border-radius: 5px;
    }

    .price {
        font-size: 1.5rem;
        font-weight: bold;
    }


</style>