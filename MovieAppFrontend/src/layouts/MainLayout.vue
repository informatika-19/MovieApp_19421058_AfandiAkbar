<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey">
      <q-toolbar>
       <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
       <q-space></q-space>
       <q-btn flat round>
         <q-avatar>
           <img src="https://i.mydramalist.com/2PrzW_5f.jpg">
      </q-avatar>
      <q-menu>
          <q-list style="min-width: 100px">
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout()">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
       </q-btn>
    </q-toolbar>
  </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="text-white bg-primary"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mb-md q-mt-md">
            <div>
              <q-avatar size="120px">
                <img src="https://i.mydramalist.com/2PrzW_5f.jpg">
              </q-avatar>
              <div class="text-weight-bold q-mt-md">{{ $q.localStorage.getItem('dataUser').username }}</div>
              <div>Aplikasi Penjualan DVD Film</div>
            </div>
        </q-item>

        <q-item clickable active-class="active" v-ripple exact :to="{ name :'dashboardAdmin'}">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" v-ripple exact :to="{ name :'DataDVD'}">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Data DVD</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'InputBarang' }" v-ripple>
          <q-item-section avatar>
            <q-icon name="input"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Input DVD</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" :to="{ name: 'dataUser' }" exact>
          <q-item-section avatar>
            <q-icon name="supervisor_account"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Data User</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.clear()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
<style scoped>
.active {
  color: #000000;
  background: #dad8d8;
  padding-right: 10px;
}
</style>
