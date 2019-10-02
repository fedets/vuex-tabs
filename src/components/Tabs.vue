<template>
  <div>
    <ul class="tab-list">
      <li
        class="tab-list__item"
        v-for="tabPane in tabPanes"
        :class="tabPane.id === getActiveTabId && 'active'"
        v-bind:key="tabPane.id"
        @click="setActiveTab(tabPane.id)"
      >
        {{ getActiveTabId }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPanes: []
    };
  },
  mounted() {
    this.tabPanes = this.$children;
    this.setActiveTab(this.tabPanes[0].id);
  },
  computed: {
    getActiveTabId() {
      return this.$store.getters["getActiveTabId"];
    }
  },
  methods: {
    setActiveTab(id) {
      this.$store.dispatch("setActiveTab", id);
    }
  }
};
</script>
<style scoped>
.tab-list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.tab-list__item {
  flex-grow: 1;
  background: #ccc;
}
.tab-list__item.active {
  background: blue;
  color: #fff;
}
</style>
