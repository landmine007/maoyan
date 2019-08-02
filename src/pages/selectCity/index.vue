<template>
  <div class="select-city">
    <div ref="wrapper" class="scroll-wrapper">
      <div class="content">
        <div class="local list-item">
          <p id="local">
            定位城市
          </p>
          <ul>
            <li v-if="local !== ''">
              {{ local }}
            </li>
            <li v-else>
              定位失败，请点击重试
            </li>
          </ul>
        </div>
        <div v-show="historyCity.length > 0" class="histor list-item">
          <p id="historCity">
            最近访问城市
          </p>
          <ul class="city-list">
            <li v-for="item in historyCity" :key="item.id">
              {{ item.nm }}
            </li>
          </ul>
        </div>
        <div class="hot list-item">
          <p id="hotCity">
            热门城市
          </p>
          <ul class="city-list">
            <li v-for="item in hotCitys" :key="item.id">
              {{ item.nm }}
            </li>
          </ul>
        </div>
        <div class="city-all list-item">
          <div v-for="item in cityList" :key="item.letter">
            <p :id="item.letter">
              {{ item.letter }}
            </p>
            <ul class="city-list">
              <li v-for="(el, index) in item.list" :key="el.id" :class="{ 'first': index === 0 }">
                {{ el.nm }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div v-for="item in navList" :key="item.id" @click="goIndex(item.id)">
        <span :data-id="item.id">
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { getCitys } from '@/api/index'

export default {
  data() {
    return {
      local: '深圳',
      historyCity: [],
      hotCitys: [
        {
          id: 1,
          nm: '北京',
          py: 'beijing'
        },
        {
          id: 10,
          nm: '上海',
          py: 'shanghai'
        },
        {
          id: 20,
          nm: '广州',
          py: 'guangzhou'
        },
        {
          id: 30,
          nm: '深圳',
          py: 'shenzhen'
        },
        {
          id: 42,
          nm: '西安',
          py: 'xian'
        },
        {
          id: 40,
          nm: '天津',
          py: 'tianjin'
        },
        {
          id: 45,
          nm: '重庆',
          py: 'chongqing'
        },
        {
          id: 50,
          nm: '杭州',
          py: 'hangzhou'
        },
        {
          id: 55,
          nm: '南京',
          py: 'nanjing'
        },
        {
          id: 59,
          nm: '成都',
          py: 'chengdu'
        },
        {
          id: 57,
          nm: '武汉',
          py: 'wuhan'
        }
      ],
      cityList: [],
      navList: [
        {
          id: 'local',
          title: '定位'
        },
        {
          id: 'historCity',
          title: '最近'
        },
        {
          id: 'hotCity',
          title: '热门'
        },
        {
          id: 'A',
          title: 'A'
        },
        {
          id: 'B',
          title: 'B'
        },
        {
          id: 'C',
          title: 'C'
        },
        {
          id: 'D',
          title: 'D'
        },
        {
          id: 'E',
          title: 'E'
        },
        {
          id: 'F',
          title: 'F'
        },
        {
          id: 'G',
          title: 'G'
        },
        {
          id: 'H',
          title: 'H'
        },
        {
          id: 'I',
          title: 'I'
        },
        {
          id: 'J',
          title: 'J'
        },
        {
          id: 'K',
          title: 'K'
        },
        {
          id: 'L',
          title: 'L'
        },
        {
          id: 'M',
          title: 'M'
        },
        {
          id: 'N',
          title: 'N'
        },
        {
          id: 'O',
          title: 'O'
        },
        {
          id: 'P',
          title: 'P'
        },
        {
          id: 'Q',
          title: 'Q'
        },
        {
          id: 'R',
          title: 'R'
        },
        {
          id: 'S',
          title: 'S'
        },
        {
          id: 'T',
          title: 'T'
        },
        {
          id: 'U',
          title: 'U'
        },
        {
          id: 'V',
          title: 'V'
        },
        {
          id: 'W',
          title: 'W'
        },
        {
          id: 'X',
          title: 'X'
        },
        {
          id: 'Y',
          title: 'Y'
        },
        {
          id: 'Z',
          title: 'Z'
        }
      ]
    }
  },
  created() {
    // 获取城市数据
    this.getListData()
  },
  mounted() {
    // 初始化better-scroll
    this.$nextTick(() => {
      // $refs绑定元素
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          // 开启点击事件 默认为false
          click: true,
          bounce: false
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
    // 获取数据
    getListData() {
      const that = this
      const citys = localStorage.getItem('cityList')
      if (citys) {
        const result = this.first_letter_group(JSON.parse(citys), 'py')
        that.cityList = [...result]
      } else {
        // 请求数据
        getCitys({}).then(res => {
          const list = res.data.data
          const result = this.first_letter_group(list, 'py')
          that.cityList = [...result]
          localStorage.setItem('cityList', JSON.stringify(list))
        }).catch()
      }
    },
    // 按拼音首字母分组
    first_letter_group(arr, str) {
      if (arr.length < 0) {
        return []
      }
      const list = {}
      for (var i = 0; i < arr.length; i++) {
        // 首字母转大写
        const letter = (arr[i][str]).substr(0, 1).toUpperCase()
        // 创建字母分组
        if (!(letter in list)) {
          list[letter] = []
        }
        // 分组添加数据
        list[letter].push(arr[i])
      }
      const result = []
      for (var key in list) {
        result.push({
          letter: key,
          list: list[key]
        })
      }
      result.sort(function(x, y) {
        return x.letter.charCodeAt(0) - y.letter.charCodeAt(0)
      })
      return result
    },
    // 点击索引
    goIndex(id) {
      const el = document.querySelector('#' + id)
      this.scroll.scrollToElement(el)
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-city {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    z-index: 2;
    font-size: 0.14rem;
    color: #333;
    .nav {
      position: absolute;
      top: 0.6rem;
      right: 0;
      width: 0.35rem;
      z-index: 10;
      text-align: center;
      font-size: 0.12rem;
      div {
        height: 0.18rem;
        line-height: 0.18rem;
        text-align: center;
        font-size: 0.12rem;
      }
    }
    .scroll-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding-right: 0.2rem;
      box-sizing: border-box;
      background-color: #ebebeb;
      .list-item {
        P {
          height: 0.3rem;
          line-height: 0.3rem;
          padding-left: 0.15rem;
        }
        ul {
          background-color: #f5f5f5;
          padding: 0 0.3rem 0.08rem 0;
          overflow: hidden;
        }
        &.local {
          li {
            display: inline-block;
            background: #fff;
            width: auto;
            min-width: 30%;
            padding: 0 0.2rem;
            height: 0.33rem;
            margin-top: 0.15rem;
            margin-left: 4%;
            border: 1px solid #e6e6e6;
            border-radius: 0.033rem;
            line-height: 0.33rem;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        &.hot, &.histor {
          li {
            float: left;
            background: #fff;
            width: 29%;
            height: 0.33rem;
            margin-top: 0.15rem;
            margin-left: 4%;
            padding: 0 0.04rem;
            border: 1px solid #e6e6e6;
            border-radius: 0.03rem;
            line-height: 0.33rem;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        &.city-all {
          p {
            padding-left: 0.25rem;
          }
          ul {
            padding-bottom: 0;
            li {
              height: 0.44rem;
              line-height: 0.44rem;
              margin-left: 0.15rem;
              border-top: 1px solid #c8c7cc;
              &.first {
                border: 0;
              }
            }
          }
        }
      }
    }
  }
</style>

