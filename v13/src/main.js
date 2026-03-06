import { createApp } from 'vue'
import App from './App.vue'
import GlobalCom from '@/components/GlobalChild.vue'

const app = createApp(App)
app.component("GlobalCom", GlobalCom)
app.mount('#app')
