<template>
<div>
   <a-list class="list" bordered item-layout="horizontal" :data-source="list">
    <template #renderItem="{ item,index }">
      <a-list-item @mouseenter="count = index" @mouseleave="count = null">
        <a-list-item-meta :description="isTodo ? `${index+1}. ${item.text}` : item.text"   />

        <template v-if="index === count && isTodo" #actions>
          <CheckOutlined @click="success(index)" />
          <CloseOutlined @click="remove(index)" />
        </template>
      </a-list-item>
    </template>
  </a-list>
</div>

</template>

<script>
import { ref, computed } from 'vue'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons-vue'

export default {
  props: {
    type: Number,
    list: Array
  },

  components: {
    CloseOutlined,
    CheckOutlined
  },

  setup (props, { emit }) {
    const count = ref(null)

    function success (index) {
      emit('success', index)
    }

    function remove (index) {
      emit('remove', index)
    }

    const isTodo = computed(() => {
      return props.type === 1
    })

    return {
      count,
      success,
      remove,
      isTodo
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
