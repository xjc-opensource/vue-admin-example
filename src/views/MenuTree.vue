<template>
  <div>
    <template v-for="item in this.nodes">
      <el-submenu :index="item.name" v-if="item.children != null">
        <template slot="title">
          <i :class="item.iconCls"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <MenuTree :nodes = "item.children"></MenuTree>
      </el-submenu>
      <el-menu-item :index="item.path + ''" v-else>
        <i :class="item.iconCls"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'MenuTree',
    props: {
      nodes: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>