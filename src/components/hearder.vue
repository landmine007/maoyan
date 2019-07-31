<template>
  <div class="hearder">
    <i v-if="back" class="iconfont icon-fanhui"></i>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hearder',
  props: {
    title: {
      type: String,
      default: '猫眼电影'
    },
    back: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .hearder {
    height: 0.5rem;
    background: #e54847;
    position: relative;
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.3rem;
      height: 0.5rem;
      line-height: 0.5rem;
      padding-left: 0.1rem;
      font-size: 0.24rem;
      color: #fff;
    }
    h1 {
      width: 100%;
      height: 100%;
      font-size: 0.18rem;
      font-weight: 400;
      text-align: center;
      color: #fff;
      line-height: 0.5rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
