import sweetalert from '@/utils/sweetalert';
import { defineStore } from 'pinia';

export default defineStore('follows', {
  state: () => ({
    followList: [],
    followIds: [],
    products: [],
  }),
  actions: {
    tempProducts(products) {
      this.products = products;
      this.getFollows();
    },
    getFollowIds() {
      this.followIds = JSON.parse(localStorage.getItem('followIds')) || [];
    },
    getFollows() {
      this.getFollowIds();
      this.followList = [];
      this.products.forEach((product) => {
        if (this.followIds.indexOf(product.id) > -1) {
          this.followList.push(product);
        }
      });
    },
    toggleFollow(id) {
      const followId = this.followIds.indexOf(id);
      if (followId === -1) {
        this.followIds.push(id);
        sweetalert.fire({
          title: '已加入收藏',
          icon: 'success',
        });
      } else {
        this.followIds.splice(followId, 1);
        sweetalert.fire({
          title: '已取消收藏',
          icon: 'success',
        });
      }
      localStorage.setItem('followIds', JSON.stringify(this.followIds));
      this.getFollows();
    },
  },
});