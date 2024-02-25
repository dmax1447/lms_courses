import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecycle-props
          // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
          token: this.token
        },
      });
    },
    router
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// TODO: преобразовать роуты
export { routes } from './router'

export const appRoutes = {
  "path": "/courses",
  "id": "courses",
  "title": "Курсы",
  "children": [
    {
      "path": "/courses/stat",
      "id": "courses|stat",
      "title": "Статистика",
      "children": [
        {
          "path": "/courses/stat/assignment",
          "id": "assignment",
          "title": "Задания"
        },
        {
          "path": "/courses/stat/quiz",
          "id": "courses|stat|tests",
          "title": "Тесты"
        }
      ]
    }
  ]
}

