### vue-refstorage
<br>创建响应式对象 与 浏览器Storage关联 
<br>修改响应式对象 时 浏览器Storage中与其对应的键值也会被修改

<br>使用前请确认node_modules中已经安装vue3
<br>基于vue3的ref api

<br>演示地址：[https://aaaaa1414514.github.io/vue-refstorage](https://aaaaa1414514.github.io/vue-refstorage)
## demo
```

import {refLocal,refSession} from 'vue-refstorage'

steup(props){
  const token = refLocal('toekn')    // ''
  
  // 当localStorage中没有toekn键名 时 将在localStorage中创建 toekn:123
  const token2 = refLocal('token2','123)  // 123
  
  const token3 = refLocal('token3,[])   // []

  const token4= refLocal('token4,{})  // {}
  
  token.value = '请点击f12查看Local Storage'
}
```

## refLocal  (Function)
```
  参数 key value
  key: localStorage的键名  默认返回 ''
  value: 当localStorage没有当前key时返回 value 不传返回默认值 ''
```
       
## refSession (Function)
```
  参数 key value
  key: sessionStorage的键名  默认返回 ''
  value: 当sessionStorage没有当前key时返回 value 不传返回默认值 ''
```

