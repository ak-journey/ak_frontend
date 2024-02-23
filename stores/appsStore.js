import { defineStore } from "pinia";

export const useAppsStore = defineStore('appsStore', {
  state: () => ({
    activeAppId: null,
  }),

  getters: {
    getActiveAppId(){
      return this.activeAppId;
    },
  },

  actions: {
    initStore(){
      if(localStorage.getItem('activeAppId')){
        this.activeAppId = parseInt(localStorage.getItem('activeAppId'));
      }
    },
    setActiveAppId(id){
      this.activeAppId = id;
      localStorage.setItem('activeAppId', id);
    },
  }
})