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
            <div class="text-wrapper">
              <div class="title">
                <h3>{{ item.name }}</h3>
                <i :class="item.version"></i>
              </div>
              <div class="text">
                <p v-if="item.sc" class="score">
                  观众评分
                  <span>{{ item.sc }}</span>
                </p>
                <p v-else class="score">
                  <span>{{ item.wish }}</span>
                  人想看
                </p>
                <p>主演：{{ item.star }}</p>
                <p>{{ item.showInfo }}</p>
              </div>
            </div>
            <div class="btn">
              <span :class="item.globalReleased ? 'buy' : ''">{{ item.globalReleased ? '购票' : '预约' }}</span>
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
            sc: item.sc,
            wish: item.wish
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
          padding: 0.12rem 0;
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
          .text-wrapper {
            width: 2.06rem;
            margin-right: 0.05rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
            .title {
              display: flex;
              width: 100%;
              justify-content: flex-start;
              align-items: center;
              height: 0.24rem;
              line-height: 0.24rem;
              margin-bottom: 0.07rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              h3 {
                color: #333;
                font-size: 0.16rem;
                font-weight: 700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              i {
                margin-left: 0.05rem;
                width: 0.43rem;
                height: 0.14rem;
                background-size: 100% 100%;
                display: block;
                &.v3d {
                  background-image: url('data:image/png;base64,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');
                }
                &.v2d {
                  background-image: url('data:image/png;base64,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')
                }
              }
            }
            p {
              color: #666;
              font-size: 0.12rem;
              margin-top: 0.05rem;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              &.score {
                margin: 0;
                span {
                  color: #faaf00;
                  font-weight: 700;
                  font-size: 0.15rem;
                }
              }
            }
          }
          .btn {
            width: 0.6rem;
            span {
              display: block;
              width: 0.47rem;
              height: 0.27rem;
              line-height: 0.28rem;
              cursor: pointer;
              border-radius: 0.04rem;
              font-size: 0.12rem;
              color: #ffffff;
              text-align: center;
              background: #3c9fe6;
              &.buy {
                background: #f03d37;
              }
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

