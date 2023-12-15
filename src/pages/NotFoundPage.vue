<template>
    <div class="notFound">
        <span class="notFound__title">

          😕 <br>
Ничего не найдено <br>
К сожалению, данная страница отсутсвует

        </span>
        <base-button link to="/" size="inverted"
            >Вернёмся-ка назад...</base-button
        >
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 100vh;
    background: var(--primary_color);

    &__title {
      align-items: center;
      justify-content: center;
      text-align: center;
        font-size: 34px;
        font-weight: 500;
        color: #fff;
    }
}
</style>
