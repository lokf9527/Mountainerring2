import { defineStore } from 'pinia';

export default defineStore('loadingStore', {
  state: () => ({
    loadingStatus: '',
    isProcessing: false,
    isLoading: false,
  }),
});