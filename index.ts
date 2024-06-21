import * as reactivity from './packages/reactivity/src'
debugger
const { reactive } = reactivity

const data = reactive({
    name: "张三"
})
data.name = "李四"