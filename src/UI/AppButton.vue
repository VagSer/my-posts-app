<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
      type: String,
      default: 'Click me',
    },
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
    return props.outlined ? `outlined ${props.variant}` : `button ${props.variant}`
})

const clickOnButton = () => emit('click')
</script>

<template>
  <button
   :class="buttonClasses"
   :disabled="props.disabled"
   :type="props.type"
   @click="clickOnButton"
  >
      {{ props.label }}
  </button>
</template>

<style>
button {
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    --lightness: 55%;
    --chroma: 0.2;
    --hue: 280;
    transition: 0.25s;
    --current-color: oklch(var(--lightness) var(--chroma) var(--hue));

    &:disabled {
        --chroma: 0.02;
        color: gray;
        cursor: default;
    }
}
.button {
    color: white;
    border: 1px solid var(--current-color);
    background-color: var(--current-color);

    &:hover:not(:disabled) {
        color: black;
        --lightness: 70%;
    }
}

.outlined {
    color: var(--current-color);
    border: 1px solid var(--current-color);
    background-color: white;

    &:hover:not(:disabled) {
        color: white;
        background-color: var(--current-color);
    }
}


.danger {
    --hue: 20;
}

.warning {
    --hue: 70;
}

.secondary {
    --hue: 315;
}

.success {
    --hue: 170;
}
</style>