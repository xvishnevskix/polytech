<template>
    <div class="forms">
        <div class="forms__info">
            <base-logo />
            <ul class="forms__info-list">
                <li

                    v-for="point in list"
                    :key="point.id"
                    @click="handleClick(point)"
                    :class="{ active: point.id === 2 ? 'active' : '' }"
                >
                    {{ point.text }}
                </li>
            </ul>
            <base-button link to="auth" size="base">Выход</base-button>
        </div>
        <div class="forms__list">
            <div class="forms__list-header">
                <h1 class="forms__list-header-title">Формы</h1>
                <base-button link to="/new-form" size="base"
                    >Создать форму</base-button
                >
            </div>
            <div v-for="page in listFields" :key="page.id" class="forms__list-card">
                <base-card title="Форма регистрации участников" />

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BaseCard from '../components/UI/BaseCard.vue';
import BaseLogo from '../components/UI/BaseLogo.vue';

import { useRoutes } from '../hooks/useRoutes.js'
import { useRouter } from 'vue-router'
const list = ref(useRoutes())

const listFields = [
  {id: 1,},
  {id: 2,},
  {id: 3},
]

const router = useRouter()
const handleClick = (link) => {
  console.log(link.link)
  router.push(`/${link.link}`)
}


</script>

<style lang="scss" scoped>
.forms {
    display: grid;
    grid-template-areas: 'info list';
    grid-template-columns: 1fr 2fr;
    height: 100vh;

    &__info {
        display: grid;
        grid-template-rows: 60px auto 50px;
        grid-area: info;
        padding: 80px 0 72px 179px;

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            li {
                cursor: pointer;
            }
            .active {
                color: var(--primary_color);
            }
        }
    }

    &__list {
        padding: 80px 165px 90px 30px;
        grid-area: list;
        background: var(--bg-color);

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-title {
                font-size: 40px;
                font-weight: 500;
            }
        }
        &-card {
            padding-top: 49px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }
}
</style>
