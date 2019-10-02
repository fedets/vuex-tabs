<template>
  <div>
    Hello
    <Tabs>
      <TabsPane title="Pane 1" id="pane-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aut debitis doloremque eius eveniet id impedit, in inventore modi molestias nulla officia quidem quo, rerum saepe velit, voluptates voluptatum.
      </TabsPane>
      <TabsPane title="pane-2" id="pane-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est impedit iure quis unde voluptas! Alias architecto commodi cum illo iure nesciunt omnis pariatur, perferendis perspiciatis quas quis repellendus suscipit voluptas.
      </TabsPane>
      <TabsPane title="pane 3" id="pane-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at ducimus ea eum fugit hic ipsa molestiae, perferendis placeat quo voluptate voluptatem! Aliquid beatae consectetur dolores esse natus quidem velit.
      </TabsPane>
      <TabsPane title="pane 4" id="pane-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur distinctio eveniet excepturi expedita impedit libero modi quaerat quibusdam unde. Blanditiis dolor dolorum excepturi maxime omnis provident qui quis, repellendus!
      </TabsPane>
    </Tabs>
  </div>
</template>

<script>
import Tabs from './Tabs';
import TabsPane from './TabPane';

const MY_OBJ = {
  elem1: `'Elem1 value'`,
  elem2: `'Elem2 value'`
};
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      tabPanes: []
    };
  },
  created() {
    this.$store.dispatch("updateCart", MY_OBJ);
  },
  components: {
    Tabs,
    TabsPane
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
