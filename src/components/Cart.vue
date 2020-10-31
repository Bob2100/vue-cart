<template>
  <div>
    <p>{{ name }}</p>
    <table border="1px solid black" cellspacing="0">
      <tr>
        <th>
          <input
            class="item-check-all"
            type="checkbox"
            :checked="cart.allChecked"
            :indeterminate.prop="cart.indeterminate"
            @click="checkAll($event)"
          />
        </th>
        <th>项目</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="c in cart.items" :key="c.good.id">
        <td>
          <input
            type="checkbox"
            class="item-checkbox"
            :checked="c.active"
            @click="check($event, c)"
          />
        </td>
        <td>{{ c.good.text }}</td>
        <td>¥{{ c.good.price }}</td>
        <td>{{ c.count }}</td>
        <td>¥{{ c.good.price * c.count }}</td>
      </tr>
    </table>

    <p class="cart-footer">
      <span class="cart-footer_item">{{ activeItems }}/{{ totalItems }}</span>
      <span class="cart-footer_item">¥{{ totalPrice }}</span>
      <button class="cart-footer_item">结算</button>
      <button class="cart-footer_item" @click="deleteChecked">删除</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    let cart = window.localStorage.getItem("cart");
    cart = cart
      ? JSON.parse(cart)
      : { items: [], allChecked: false, indeterminate: false };
    return {
      cart
    };
  },
  watch: {
    cart: {
      handler(val) {
        //   数据持久化
        window.localStorage.setItem("cart", JSON.stringify(val));
      },
      deep: true
    }
  },
  created() {
    this.$bus.$on("addToCart", good => {
      const c = this.cart.items.find(v => v.good.id === good.id);
      c ? c.count++ : this.cart.items.push({ good, count: 1, active: false });
      this.updateCheckAllBoxStatus();
    });
  },
  computed: {
    activeItems() {
      return this.cart.items.filter(item => item.active).length;
    },
    totalItems() {
      return this.cart.items.length;
    },
    totalPrice() {
      let totalPrice = 0;
      this.cart.items.forEach(item => {
        item.active ? (totalPrice += item.good.price * item.count) : null;
      });
      return totalPrice;
    }
  },
  methods: {
    deleteChecked() {
      if (window.confirm("确认删除？")) {
        for (let i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].active) {
            this.cart.items.splice(i, 1);
            //   每次删除后，需要使i减一，否则下一个元素会漏判
            i--;
          }
        }
        this.updateCheckAllBoxStatus();
      }
    },
    checkAll(event) {
      this.cart.allChecked = event.currentTarget.checked;
      this.cart.items.forEach(item => {
        this.cart.allChecked ? (item.active = true) : (item.active = false);
      });
    },
    updateCheckAllBoxStatus() {
      let checkedItemCount = 0;
      this.cart.items.forEach(item => {
        if (item.active) {
          checkedItemCount++;
        }
      });
      if (checkedItemCount == 0) {
        this.cart.allChecked = false;
        this.cart.indeterminate = false;
      } else if (checkedItemCount == this.cart.items.length) {
        this.cart.allChecked = true;
        this.cart.indeterminate = false;
      } else {
        this.cart.allChecked = false;
        this.cart.indeterminate = true;
      }
    },
    check(event, item) {
      item.active = event.currentTarget.checked;
      this.updateCheckAllBoxStatus();
    }
  }
};
</script>

<style lang="less" scoped>
.cart-footer {
  width: 500px;
  text-align: right;
  margin: 0 auto;
  padding: 10px;
}
.cart-footer_item {
  margin-left: 10px;
}
</style>
