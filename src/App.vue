<template>
  <div id="app">
    <div class="content">
      <button @click="add">增删元素</button>
      <div class="list-content">
        <transition-group name="changeShow" tag="div">
          <p v-for="(item, index) in list" :key="index">{{ item }}</p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      list: ['99999999999999999', '999999999999999999', 'ppppppppppppppppppp'],
    }
  },

  mounted() {},
  methods: {
    add() {
      setTimeout(() => {
        this.list = [
          ...this.list,
          '99999999999999999',
          '999999999999999999',
          'ppppppppppppppppppp',
          '99999999999999999',
          '999999999999999999',
          'ppppppppppppppppppp',
        ]
      }, 1000)
    },
  },
}
</script>

<style lang="less">
.list-content {
  border: 1px solid red;
  height: 400px;
  width: 90%;
  overflow-y: scroll;
  margin: auto;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  p {
    color: #fff;
    background-color: pink;
  }
}

.changeShow-enter,
.changeShow-leave-to {
  transform: translateX(-100%);
}

.changeShow-enter-active,
.changeShow-leave-active {
  transition: 0.5s linear;
}

.changeShow-enter-to,
.changeShow-leave {
  transform: translateX(0);
}
</style>
