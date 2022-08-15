import '@/assets/css/base.css'

export default {
  // name: 'index',
  data() {
    return {
      input: '',
    }
  },
  props: {
    sign: {
      type: Boolean,
      default: true
    },
    holder: {
      type: String,
      default: ''
    }
  }
}
