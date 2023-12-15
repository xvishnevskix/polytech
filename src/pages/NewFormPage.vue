<template>
    <div class="newForm">
        <div class="newForm__points">
            <base-logo />
            <base-button  class="form-button" size="clearWithIcon" @click="handleBack">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.91659 5H2.08325" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <span class="slot-item">Назад</span>
            </base-button>
            <ul class="newForm__points-list">
                <li

                    v-for="point in list"
                    :key="point.id"
                    :class="{active: point.id === 3 ? 'active' : ''} "
                    @click="handleClick(point.link)"
                >
                    {{ point.text }}
                </li>
            </ul>
            <base-button size="outline">Скрипт</base-button>
            <base-button>Сохранить</base-button>
        </div>
        <div class="newForm__settings">
            <router-view />
        </div>
        <div class="newForm__display">
            <preview-form />
        </div>
    </div>
</template>

<script setup>
import PreviewForm from '../components/PreviewForm.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useRoutes } from '../hooks/useRoutes.js'

const router = useRouter();

const list = ref(useRoutes())

function handleOption(path) {
    return router.push(`/new-form/${path}`);
}

function handleBack() {
    router.push('/forms');
}

onMounted(() => {
    router.push(`/new-form/fields`);
});

function handleClick(link) {

  router.push(`/${link}`);
}
</script>

<style lang="scss" scoped>
.newForm {
    display: grid;
    grid-template-areas: 'points settings display';
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;

    &__points {
        padding: 80px 0;
        grid-area: points;
        display: grid;
        grid-template-rows: 1fr 1fr 10fr 1fr 1fr;
        justify-content: start;
        gap: 10px;
        justify-content: center;

        &-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-top: 30px;

            li {
                cursor: pointer;
                &:hover {
                    color: var(--primary_color);
                }
            }
            .active {
                color: var(--primary_color);
            }
        }
    }

    &__settings {
        padding: 80px 30px;
        background: var(--bg-color);
        border-radius: 0px 10px 10px 0px;
    }

    &__display {
      display: flex;
      justify-content: center;
      align-items: start;
        padding: 80px;
        background: var(--primary_color);

    }
}

.slot-item {
  transition: transform 0.4s, color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    transition: transform 0.4s, color 0.3s ease;
    transform: translateX(-2px);
    color: var(--primary_color);
    background-color: #fff;
  }

}

.form-button {
  display: flex;
  align-items: center;

  &:hover {

    svg {

      path {
        transition: transform 0.3s, color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, stroke 0.3s ease, fill 0.3s ease;
        fill:  var(--primary_color);
        stroke: var(--primary_color);
      }
    }
  }


}
</style>
