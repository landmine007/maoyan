<template>
  <div class="tab-bar">
    <router-link to="/movie">
      <i class="iconfont icon-dianying"></i>
      <span>电影</span>
    </router-link>
    <router-link to="/cinema">
      <i class="iconfont icon-huaban"></i>
      <span>影院</span>
    </router-link>
    <router-link to="/mine">
      <i class="iconfont icon-wo"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #d8d8d8;
      transform: scaleY(0.5)
    }
    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.1rem;
      color: #696969;
      &.router-link-active {
        color: #f03d37;
      }
      i {
        font-size: 0.24rem;
        margin-bottom: 0.02rem;
      }
    }
  }
</style>

