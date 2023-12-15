<template>
    <div class="preview">
        <preview-form />
    </div>
</template>

<script setup>
import PreviewForm from '../components/PreviewForm.vue';
</script>

<style lang="scss" scoped>
.preview {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: var(--primary_color);
    height: 100vh;
    align-items: center;
    justify-content: center;
}
</style>
