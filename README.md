### refStorage
<br>创建响应式对象 与 浏览器Storage关联 
<br>修改响应式对象 时 浏览器Storage中与其对应的键值也会被修改

<br>使用前请确认node_modules中已经安装vue3
<br>基于vue3的ref api


## demo
```

import {refLocal,refSession} from 'vue-refStorage'

steup(props){
  const token = refLocal('toekn')
  
  // 设置默认值
  const token2 = refLocal('toekn','xxxxxxx')
  
  
  token.value = '请点击f12查看Local Storage'
}
```

## refLocal  (Function)
```
  参数 key value
  key: localStorage的键名  默认返回 ''
  value: 设置localStorage key的值  不传为localStorage中key的默认值
```
       
## refSession (Function)
```
  参数 key value
  key: sessionStorage的键名  默认返回 ''
  value: 指定sessionStorage key的值  不传为sessionStorage中key的默认值
```

