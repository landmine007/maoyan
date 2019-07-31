<template>
  <div class="movie">
    <Hearder></Hearder>
    <div class="tabs">
      <div class="city">
        <span>{{ city }}</span>
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
    <div ref="wrapper" class="scroll-wrapper">
      <div class="content">
        <div v-for="item in movieOnInfoList" :key="item.id" class="item">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="right">
            <div class="middle">
              <div class="title">
                <h3>{{ item.name }}</h3>
                <i></i>
              </div>
              <div class="text">
                <p class="score">
                  观众评分
                  <span>{{ item.sc }}</span>
                </p>
                <p>主演：{{ item.star }}</p>
                <p>{{ item.showInfo }}</p>
              </div>
            </div>
            <div class="btn">
              <span>{{ item.globalReleased ? '购票' : '预约' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Hearder from '@/components/hearder'
import { getMovieOnInfoList } from '@/api/index'

export default {
  components: { Hearder },
  data() {
    return {
      city: '深圳表单快递费看',
      movieOnInfoList: []
    }
  },
  created() {
    // 请求正在热映数据
    this.getMovieOnInfoList()
  },
  mounted() {
    this.$nextTick(() => {
      // $refs绑定元素
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          // 开启点击事件 默认为false
          click: true
        })
      // console.log(this.scroll)
      } else if (!this.$refs.wrapper) {
        return false
      } else {
        this.scroll.refresh()
      }
    })
  },
  methods: {
    getMovieOnInfoList() {
      const that = this
      getMovieOnInfoList({}).then(res => {
        const data = res.data.movieList.map(item => {
          const img = item.img.replace('w.h', '128.180')
          return {
            id: item.id,
            globalReleased: item.globalReleased,
            name: item.nm,
            img,
            showInfo: item.showInfo,
            star: item.star,
            version: item.version,
            sc: item.sc
          }
        })
        that.movieOnInfoList = data
        console.log(that.movieOnInfoList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .movie {
    position: absolute;
    top: 0;
    bottom: 0.49rem;
    width: 100%;
    .scroll-wrapper {
      position: absolute;
      top: 0.94rem;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0 0.15rem;
      .item {
        padding: 0.12rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.14rem;
        box-sizing: border-box;
        overflow: hidden;
        .img {
          width: 0.64rem;
          height: 0.9rem;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .right {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 0.1rem;
          height: 100%;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: #ddd;
            transform: scaleY(0.5);
          }
          .middle {
            flex: 1;
            margin-right: 0.05rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .btn {
            width: 0.6rem;
            span {
              display: block;
              width: 0.47rem;
              height: 0.27rem;
            }
          }
        }
      }
    }
    .tabs {
      width: 100%;
      height: 0.44rem;
      line-height: 0.44rem;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .city {
        max-width: 0.9rem;
        padding-left: 0.12rem;
        box-sizing: border-box;
        height: 100%;
        font-size: 0.15rem;
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
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
  }
</style>

