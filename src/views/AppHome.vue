<template>
  <div>
    <PatentInput @check-infringement="runAnalysis" />
    <div v-if="waitting">wait a second...</div>
    <AnalysisResult :result="analysisResult" v-if="analysisResult" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PatentInput from '@/components/PatentInput.vue';
import AnalysisResult from '@/components/AnalysisResult.vue';
import { checkInfringement } from '@/services/api';

const analysisResult = ref();
const waitting = ref(false);

 const runAnalysis = async ({ patentId, companyName }) => {
  try {

    analysisResult.value = null;
    waitting.value = true;
    const result = await checkInfringement(patentId, companyName);
    waitting.value = false;
    analysisResult.value = result;
  } catch (error) {
    waitting.value = false;
    alert('Patent ID or company name could be wrong.');
  }
}
</script>
