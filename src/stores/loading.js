import { defineStore } from 'pinia';

export default defineStore('loading', {
  state: () => ({
    loadingItem: '',
    isProcessing: false,
    isLoading: false,
  }),
});