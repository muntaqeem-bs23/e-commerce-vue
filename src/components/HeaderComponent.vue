<template>
		<header class="header">
        <div class="container">
            <div class="header-inner">
                <div class="logo">
                    <img src="../assets/images/logo.png" alt="">
                </div>
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
                        <a href="">
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
    name: 'HeaderComponent'
}
</script>

<style>

</style>