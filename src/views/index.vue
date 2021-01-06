<template>
  <div class="todo-list">
    <a-input-search
      v-model:value="text"
      placeholder="你想要干的事..."
      size="large"
      @search="add"
    >
      <template #enterButton>
        <a-button>
          add
        </a-button>
      </template>
    </a-input-search>

    <a-list class="list" bordered item-layout="horizontal" :data-source="list">
      <template #renderItem="{ item,index }">
        <a-list-item @mouseenter="count = index" @mouseleave="count = null">
          <a-list-item-meta :description="item.text"   />

          <template v-if="index === count" #actions>
            <CheckOutlined @click="success(index)" />
            <CloseOutlined @click="remove(index)" />
          </template>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { reactive, toRefs } from 'vue'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
// import { refLocal } from 'vue-refstorage'
import { refLocal } from '../js/refstorage.js'

export default {
  components: {
    CloseOutlined,
    CheckOutlined
  },

  setup (props) {
    const state = reactive({
      text: '',
      count: '',
      list: refLocal('todo', [])
    })

    const { text, count, list } = toRefs(state)

    function add (val) {
      if (!val) {
        message.error('不能为空')
        return
      }
      const item = {
        id: Math.random()
          .toString()
          .slice(-6),
        text: val,
        status: 0
      }

      list.value.push(item)

      text.value = ''
    }

    function success (index) {
      spliceItem(index)

      message.success('恭喜完成任务')
    }

    function remove (index) {
      spliceItem(index)

      message.success('删除成功')
    }

    function spliceItem (index) {
      list.value.splice(index, 1)
    }

    return {
      text,
      count,
      add,
      list,
      success,
      remove
    }
  }
}
</script>

<style lang="less" scoped>
.todo-list {
  margin-top: 200px;
  min-width: 500px;
  max-width: 800px;
  .list {
    margin-top: 24px;
  }
}
</style>
