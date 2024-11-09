<template>
  <div v-if="result" class="analysis-result">
    <div class="summary">
      <p><strong>Patent ID:</strong> {{ result.patent_id }}</p>
      <p><strong>Company Name:</strong> {{ result.company_name }}</p>
    </div>
    <h1>Top Two Infringing Products</h1>
    <table class="infringing-products">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Likelihood</th>
          <th>Relevant Claims</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in result.top_infringing_products" :key="product.product_name">
          <td>{{ product.product_name }}</td>
          <td>{{ product.infringement_likelihood }}</td>
          <td>{{ product.relevant_claims.join(', ') }}</td>
          <td>{{ product.explanation }}</td>
        </tr>
      </tbody>
    </table>
    <h4 class="risk-assessment"># {{ result.overall_risk_assessment }}</h4>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  result: Object
});
</script>

<style scoped>
.analysis-result {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.summary {
  margin-bottom: 20px;
}

.risk-assessment {
  font-weight: bold;
  padding: 10px;
  color: #333;
  background-color: #f0ad4e;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 20px;
}

.infringing-products {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.infringing-products th,
.infringing-products td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.infringing-products th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.infringing-products tr:nth-child(even) {
  background-color: #f9f9f9;
}

.infringing-products tr:hover {
  background-color: #f1f1f1;
}
</style>