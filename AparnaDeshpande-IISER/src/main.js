import { createApp } from 'vue'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/inter'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
