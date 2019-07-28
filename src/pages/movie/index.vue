<template>
  <div class="movie">
    <Hearder></Hearder>
    <div class="tabs">
      <div class="city">
        <span>{{city}}</span>
        <i class="iconfont icon-f11"></i>
      </div>
      <div class="tab">
        <span class="active">正在热映</span>
        <span>即将上映</span>
      </div>
      <div class="search">
        <i class="iconfont icon-artboard9"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Hearder from '../../components/hearder'
export default {
  components: { Hearder },
  data() {
    return {
      city: '深圳'
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs {
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .city {
      width: 0.6rem;
      height: 100%;
      font-size: 0.15rem;
      color: #666;
      text-align: center;
      i {
        font-size: 0.06rem;
        margin-left: 0.04rem;
        vertical-align: 0.01rem;
      }
    }
    .tab {
      flex: 1;
      text-align: center;
      padding-right: 0.1rem;
      box-sizing: border-box;
      span {
        height: 100%;
        display: inline-block;
        margin: 0 0.05rem;
        padding: 0 0.1rem;
        font-size: 0.15rem;
        color: #666;
        position: relative;
        &.active {
          color: #ef4238;
          &::after{
            background: #ef4238;
          }
        }
        &::after {
          content: '';
          width: 100%;
          height: 2px;
          background: transparent;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
    .search {
      width: 0.5rem;
      height: 100%;
      text-align: center;
      color: #ef4238;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #d8d8d8;
      transform: scaleY(0.5)
    }
  }
</style>

