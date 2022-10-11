import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requiredComponent= require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)
const app =createApp(App)
requiredComponent.keys().forEach(filename=>{
    const componentConfig=requiredComponent(filename)
    const componentName= upperFirst(
        camelCase(filename.replace(/^\.\/(.*)\.\w+$/, '$1'))
    )
    app.component(componentName,componentConfig.default ||componentConfig)
})

app.use(store).use(router)
app.mount('#app')
