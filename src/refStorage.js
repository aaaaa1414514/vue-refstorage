/* eslint-disable no-unused-vars */
import { ref, watch } from 'vue'

// localhostStorage
export function refLocal (key, val) {
  return init(key, 'local', val)
}

// sessionStorage
export function refSession (key, val) {
  return init(key, 'session', val)
}

// key 键名  type： local&session  val:默认值
function init (key, type, val) {
  val && setStorageVal(key, val, type)

  const storageVal = ref(getStorageVal(key, type))

  watch(storageVal, (e) => {
    // 给storage赋值
    setStorageVal(key, e, type)
  })

  return storageVal
}

function getStorageVal (key, type) {
  // localStorage 还是 sessionStorage
  const Storage = getStorage(type)
  const val = Storage.getItem(key)

  try {
    return JSON.parse(val)
  } catch (err) {
    console.log(err)
    return val
  }
}

function getStorage (type) {
  return type === 'local' ? localStorage : sessionStorage
}

function setStorageVal (key, val, type) {
  const Storage = getStorage(type)
  Storage.setItem(key, JSON.stringify(val))
}
