<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="patentId">Patent ID: </label>
      <input type="text" v-model="patentId" required />
      <br /><br />
      <label for="companyName">Company Name: </label>
      <input type="text" v-model="companyName" required />
      <br /><br />
      <button type="submit">Check Infringement</button>
    </form>
  </div>
  <br/>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const patentId = ref('');
const companyName = ref('');

const emit = defineEmits(['check-infringement']);

const handleSubmit = () => {
  emit('check-infringement', { patentId: patentId.value, companyName: companyName.value });
};
</script>
