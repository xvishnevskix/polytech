<template>
    <div class="baseInput">
        <div class="baseInput__header">
            <span>{{ placeholder }}</span>
            <base-button size="clearInherit" @click="removeField(props.id)"
                >Удалить поле</base-button
            >
        </div>
        <input
            :type="type"
            class="baseInput__input"
            v-model="inputValue"
            :placeholder="placeholder"
        />
        <div class="baseInput__checkbox">

            <label>
              <input style="margin-right: 5px;" class="real-checkbox" type="checkbox" v-model="checkboxValue" />
              <span class="custom-checkbox"></span>
              Сделать поле обязательным
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, watch, inject } from 'vue';
import store from '../../store/index.js';

const { state } = inject('store', store);
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
});
const inputValue = ref(state.fields[props.id].value);
const checkboxValue = ref(state.fields[props.id].required);
const type = ref(state.fields[props.id].type);
const placeholder = ref(state.fields[props.id].placeholder);

function removeField(id) {
    state.fields = state.fields.filter((item) => item.id !== id);
}

watch(inputValue, () => {
    state.fields[props.id].placeholder = inputValue;
});
watch(checkboxValue, () => {
    state.fields[props.id].required = checkboxValue;
});
</script>

<style lang="scss" scoped>
.baseInput {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__header {
        display: flex;
        justify-content: space-between;
        color: var(--text-color);
    }

    &__input {
        padding-left: 30px;
        height: 70px;
        border-radius: 10px;
        background: #fff;
    }

    &__checkbox {
        display: flex;
        gap: 16px;
      font-weight: 500;
      line-height: 17px;
      font-size: 14px;

      label {
        display: flex;
        text-align: center;
        align-items: center;

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
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #f6f6f6;
  border: 1px solid #6c6c6c;
  border-radius: 4px;
  margin-right: 12px;
  vertical-align: sub;
  position: relative;



  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('../../assets/icons/check.svg') ;

    background-size: contain;
    position: absolute;
    left: 17%;
    top: 15%;
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
