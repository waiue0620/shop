<template>
  <div class="home">
    <loading :active.sync="isLoading"></loading>
    <Navber></Navber>
    <Alert></Alert>
    <div class="container content mt-4">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="text-center">購物車內容</h2>
          <ul class="cartList mt-4"  v-for="item in cart.carts" :key="item.id">
            <li>
              <img class="cartList-img img-fluid" :src="item.product.imageUrl" alt="">
              <router-link :to="'/detailed/${item.id}'">{{item.product.title}}</router-link>
              <p class="m-0">{{ item.qty }} {{item.product.unit}} {{item.final_total | currency }}</p>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)"><i class="far fa-trash-alt"></i></button>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <div class="my-5 row justify-content-center">
            <form class="px-4 w-100" @submit.prevent="createOrder">
              <div class="form-group">
                <label for="useremail">Email</label>
                <input type="email" class="form-control" name="email" id="useremail"
                  v-model="form.user.email" placeholder="請輸入 Email"
                  v-validate="'required|email'"
                  :class="{'is-invalid': errors.has('email')}">
                <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
            
              <div class="form-group">
                <label for="username">收件人姓名</label>
                <input type="text" class="form-control" name="name" id="username"
                  :class="{'is-invalid': errors.has('name')}"
                  v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
                <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
              </div>
            
              <div class="form-group">
                <label for="usertel">收件人電話</label>
                <input type="tel" class="form-control" name="tel" id="usertel" v-model="form.user.tel" placeholder="請輸入電話"
                :class="{'is-invalid': errors.has('tel')}" v-validate="'required'">
                <span class="text-danger" v-if="errors.has('tel')">電話欄位不得留空</span>
              </div>
            
              <div class="form-group">
                <label for="useraddress">收件人地址</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                  :class="{'is-invalid': errors.has('address')}" v-validate="'required'"
                  placeholder="請輸入地址">
                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
              </div>
            
              <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message" style="height:67px"></textarea>
              </div>
              <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                    套用優惠碼
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-between border mb-3 p-2">
                <p class="m-0">小計</p>
                <p class="m-0">{{ cart.total | currency }}</p>
              </div>
              <div class="d-flex justify-content-between border border-success mb-3 p-2 text-success" v-if="cart.final_total !== cart.total">
                <p class="m-0">折扣價</p>
                <p class="m-0">{{ cart.final_total | currency }}</p>
              </div>
              <div class="text-right">
                <button class="btn btn-danger">送出訂單</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p class="text-center m-0">資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </footer>
  </div>
</template>

<script>
import Navber from '@/components/Navber'
import Alert from '@/components/AlertMessage'

export default {
  name: 'home',
  components: {
    Navber,
    Alert
  },
  data() {
    return {
      cart: {},
      coupon_code: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      }
    }
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.cart = response.data.data;
        console.log(response.data.data);
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      vm.isLoading = true
      const order = vm.form
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$http.post(url, { data: order }).then((response) => {
            // vm.getCart()
            if (response.data.success) {
              vm.$router.push(`/check_order/${response.data.orderId}`)
            } else {
              this.$bus.$emit('message:push', response.data.message, 'danger')
            }
            console.log(response)
            vm.isLoading = false
          })
        } else {
          vm.isLoading = false
          this.$bus.$emit('message:push', '欄位不完整', 'danger')
        }
      })
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      vm.isLoading = true
      const coupon = {
        code: vm.coupon_code,
      }
      this.$http.post(url, { data: coupon }).then((response) => {
        vm.getCart()
        vm.message(response)
        console.log(response)
        vm.isLoading = false
        vm.coupon_code = ''
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true
      this.$http.delete(url).then((response) => {
        vm.getCart()
        console.log(response)
        vm.isLoading = false
        vm.message(response)
      });
    },
    message(response) {
      if (response.data.success) {
        this.$bus.$emit('message:push', response.data.message, 'success')
      } else {
        this.$bus.$emit('message:push', response.data.message, 'danger')
      }
    }
  },
  created() {
    this.getCart()
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #eaf0ed;
  padding: 10px;
  color: #3f5d45;
  font-weight: bold;
  font-family: Noto Sans TC,sans-serif!important;
}
.content {
  padding-top: 56px;
  min-height: calc(100vh - 70px);
}
.cartList {
  font-size: 18px;
  font-weight: bolder;
  color: #3f5d45;
  li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #eaf0ed;
  }
  a {
    color: #3f5d45;
    &:hover {
      color: #547b5c;
      text-decoration:none;
    }
  }
}
.cartList-img {
  max-width: 150px;
}
</style>
