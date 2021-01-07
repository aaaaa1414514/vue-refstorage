<template>
  <div class="todo-list">
    <a-input-search
      v-model:value="text"
      placeholder="你想要干的事..."
      size="large"
      @search="add"
      maxLength="50"
    >
      <template #enterButton>
        <a-button>
          add
        </a-button>
      </template>
    </a-input-search>

    <a-tabs default-active-key="1" >
      <a-tab-pane key="1" :tab="`待做(${todoList.length})`">
        <List :list="todoList" :type="1" @success="success" @remove="remove" />
      </a-tab-pane>
      <a-tab-pane key="2" :type="2" :tab="`已完成(${doneList.length})`" force-render>
        <List :list="doneList" />
      </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script>

import { reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
import { refLocal } from '../js/refstorage.js'
import List from '../components/list'

export default {
  components: {
    List
  },
  setup (props) {
    const state = reactive({
      text: '',
      todoList: refLocal('todo', [{ id: '983184', text: 'f12 查看LocalStorage', status: 0 }]),
      doneList: refLocal('done', [])
    })

    const { text, todoList, doneList } = toRefs(state)

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

      todoList.value.push(item)

      text.value = ''
    }

    function success (index) {
      const item = spliceItem(index)

      doneList.value.unshift(item[0])

      message.success('恭喜完成任务')
    }

    function remove (index) {
      spliceItem(index)

      message.success('删除成功')
    }

    function spliceItem (index) {
      return todoList.value.splice(index, 1)
    }

    return {
      text,
      add,
      todoList,
      doneList,
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
  }
}
</style>
