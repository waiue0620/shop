<template>
  <div class="">
    <loading :active.sync="isLoading"></loading>
    <Navber></Navber>
    <Alert></Alert>
    <div class="container mt-4 content">
      <div class="row">
        <div class="col-md-7">
          <img class="bg-cover img-fluid" :src="product.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h2>{{ product.title }}</h2>
          <p>{{product.description}}</p>
          <div class="d-flex justify-content-between">
            <span>原價 {{product.origin_price | currency}}</span>
            <h4 class="text-danger">售價 {{product.price | currency}}</h4>
          </div>
          <select name="" class="form-control mt-3" v-model="product.num">
            <option :value="num" v-for="num in 10" :key="num">
              選購 {{num}} {{product.unit}}
            </option>
          </select>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary"
              @click="addtoCart(product.id, product.num)" :disabled="status.loadingItem != ''">
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <CardSwiper class="mt-5" :card="product"></CardSwiper>
    <footer class="footer mt-3">
      <p class="text-center m-0">資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
    </footer>
  </div>
</template>

<script>
import Navber from '@/components/Navber'
import Alert from '@/components/AlertMessage'
import CardSwiper from '@/components/CardSwiper'

export default {
  components: {
    Navber,
    Alert,
    CardSwiper
  },
  data () {
    return {
      productId: '',
      product: {},
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  methods: {
    getProduct (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.productId}`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
        vm.product.num = 1
        console.log(response)
        vm.isLoading = false
      })
    },
    addtoCart (id, qty = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response)
        vm.status.loadingItem = ''
        // vm.getCart()
        // $('#productModal').modal('hide')
        vm.message(response)
      })
    },
    message (response) {
      if (response.data.success) {
        this.$bus.$emit('message:push', response.data.message, 'success')
      } else {
        this.$bus.$emit('message:push', response.data.message, 'danger')
      }
    }
  },
  created () {
    this.productId = this.$route.params.productId
    this.getProduct()
  }
}
</script>
<style lang="scss" scoped>

.bg-cover {
  background-size: cover;
  background-position: center center;
}
.detailedImg {
  max-width: 100%;
}
.footer {
  background-color: #eaf0ed;
  padding: 10px;
  color: #3f5d45;
  font-weight: bold;
  font-family: Noto Sans TC,sans-serif!important;
}
.content {
  padding-top: 56px;
}
</style>
