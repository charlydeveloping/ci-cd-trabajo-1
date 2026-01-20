<template>
  <div class="app">
    <h1>Sistema de Ventas</h1>
    <p>Estado del servidor: {{ healthStatus }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { checkHealth } from './services/api';

const healthStatus = ref('Verificando...');

onMounted(async () => {
  try {
    const response = await checkHealth();
    healthStatus.value = response.status === 'ok' ? 'Conectado ✓' : 'Error';
  } catch {
    healthStatus.value = 'Desconectado ✗';
  }
});
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}
</style>
