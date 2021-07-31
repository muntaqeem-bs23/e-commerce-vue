<template>
		<header class="header">
        <div class="container">
            <div class="header-inner">
                <a href="/" class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </a>
                <div class="header-icon">
                    <span class="d-inline-block mr-3">
                        <a href="">
                            <i class="far fa-heart"></i>
                        </a>
                    </span>
                    <span class="d-inline-block mr-3">
                        <a href="">
                            <i class="far fa-user"></i>
                        </a>
                    </span>
                    <span class="d-inline-block cart-icon">
                        <a href="/cart">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                        <span class="cart-number">
                            5
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data: function() {
        return {
            msg: "This is my page"
        }
    },
    methods: {
        goToCart: function() {
            console.log('I am in the cart');
        }
    }
}
</script>

<style>

</style>