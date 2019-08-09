import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
import Contact from './components/Contact.vue';
import CurriculumVitae from './components/CV.vue';
import Skills from './components/Skills.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('<App />', () => {
  let el, propsData, attrs;
  beforeEach(() => {
    const routes = [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HelloWorld },
      { path: '/skills', component: Skills },
      { path: '/cv', component: CurriculumVitae },
      { path: '/contact', component: Contact },
    ];

    const router = new VueRouter({
      routes,
    });

    el = shallowMount(App, {
      localVue,
      router,
    });
  });
  test('expect all required props', () => {});
});
