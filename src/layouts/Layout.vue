<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
      :breakpoint="767"
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>
        <q-item
          v-for="(nav, index) in navs"
          :key="index"
          class="text-gray-4"
          :to="nav.to"
          clickable
          exact
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
          exact
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
    background-color: $secondary;
  }
}
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>