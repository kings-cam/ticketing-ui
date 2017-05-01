import Vue from 'vue'
import App from '@/App'
describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h3').textContent)
      .to.equal('CS Genetics compute platform')
  })
})
