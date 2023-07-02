<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>
<style scoped>
    dialog{
        position:fixed;
        margin: 0 auto;
        top: 20vh;
        left:0;
        width: 40%;
        background: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.26);
        padding: 1rem;
    }
</style>