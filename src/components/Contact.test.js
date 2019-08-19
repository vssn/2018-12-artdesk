import { mount } from '@vue/test-utils';
import Contact from './Contact.vue';

describe('Contact.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Contact);
    expect(wrapper.element).toBeDefined();
  });
});
