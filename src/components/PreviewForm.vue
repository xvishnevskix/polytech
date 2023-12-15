<template>
    <form @submit.prevent="submitForm" class="previewForm">

      <div  class="form-button">
        <svg style="margin-right: 8px"  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.91659 5H2.08325" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.99992 7.91732L2.08325 5.00065L4.99992 2.08398" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <base-button class="slot-item" link to="/new-form/fields" size="clearWithIcon">
          Вернуться
        </base-button>
      </div>
      <h2 class="previewForm__title">Форма регистрации</h2>
        <div class="previewForm__inputBlock">
            <input
                v-for="item in fields"
                :key="item.id"
                :type="item.type"
                class="previewForm__input"
                :placeholder="item.placeholder"
                :required="item.required"
            />
        </div>
        <div class="previewForm__check">

            <label>
              <input class="real-checkbox" type="checkbox" />
              <span class="custom-checkbox"></span>

            </label>
          <label>
            Нажимая кнопку «Отправить», я принимаю условия политики
                конфиденциальности
          </label>
        </div>
        <base-button size="max">Отправить</base-button>
    </form>
</template>

<script setup>
import { inject, computed } from 'vue';
import store from '../store/index';

const { state } = inject('store', store);

const fields = computed(() => state.fields);

function submitForm() {
    console.log('Submit');
}
</script>

<style lang="scss" scoped>
.previewForm {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
    border-radius: 20px;
    background: #fff;
    max-width: 370px;
    &__title {
        font-size: 24px;
        font-weight: 500;
    }

    &__inputBlock {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__input {
        padding-left: 30px;
        background: var(--bg-color);
        height: 70px;
        width: 100%;
        border-radius: 10px;
    }

    &__check {
        display: flex;
        gap: 16px;
        label {
            color: var(--text-color);
            font-size: 14px;
            font-weight: 400;
        }
    }
}

.slot-item {
  transition: transform 0.4s, color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  width: 400px;
  background-color: #cc1a1a;

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
    transition: transform 0.4s, fill 0.3s ease;
    svg {
       path {
         fill:  var(--primary_color);
         stroke: var(--primary_color);
       }
    }
  }

  svg {
    &:hover {
      fill:  var(--primary_color);
      color: #146b1d;
    }
  }

}

.real-checkbox {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.custom-checkbox {
  margin-top: 7px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #6c6c6c;
  border-radius: 4px;

  vertical-align: sub;
  position: relative;



  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../assets/icons/check.svg'); ;

    background-size: contain;
    position: absolute;
    left: 20%;
    top: 20%;
    opacity: 0;
    visibility: hidden;

  }
}

.real-checkbox:checked + .custom-checkbox:before {
  opacity: 1;
  visibility: visible;

}

.real-checkbox:checked + .custom-checkbox {

  border: 1px solid var(--primary_color);
}
</style>
