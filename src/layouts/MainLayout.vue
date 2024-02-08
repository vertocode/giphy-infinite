<template>
  <q-layout class="bg-slate-50">
    <MainHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from 'components/MainHeader.vue'

</script>
