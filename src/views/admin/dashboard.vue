<template>
  <div>
    <Navber></Navber>
    <Alert></Alert>
    <div class="container-fluid">
      <Sidebar/>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Navber from '../../components/admin/Navber'
import Sidebar from '../../components/admin/Sidebar'
import Alert from '../../components/AlertMessage'

export default {
  components: {
    Navber,
    Sidebar,
    Alert
  }
}
</script>
