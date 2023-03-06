<script setup lang="ts">
    import { useCart } from "@/model/cart";
    import { getProducts } from "@/model/products";


    const cart = useCart();
    const products = getProducts();

    cart.value.push({
        product: products[3],
        productId: 3,
        quantity: 1
    })
    cart.value.push({
        product: products[13],
        productId: 13,
        quantity: 1
    })
    cart.value.push({
        product: products[23],
        productId: 33,
        quantity: 1
    })
</script>

<template>
    <div class="cart">
        <h1 class="title">
            Cart
            <small>
                $Price
                ({{ cart.length }} items)
            </small>
        </h1>
        <p></p>
        <div class="cart-item" v-for="item in cart">
            <img :src="item.product.thumbnail" alt="item.product.title" />
            <p>{{ item.product.title }}</p>
            <p>{{ item.product.price }}</p>
            <p>{{ item.quantity }}</p>


        </div>
    </div>
</template>

<style scoped>
    .cart {
        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cart-item {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }

    .cart-item img {
        width: 5rem;
        height: 5rem;
        margin-right: 1rem;
    }

</style>