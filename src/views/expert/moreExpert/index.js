import Top from '@/components/Top/index.vue'
export default {
  name: 'MoreExpert',
  components:{
    Top
  },
  data () {
    return {
      city_data: {
        广东省: ['广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市',
          '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'],
        香港: ['香港特别行政区'],
        澳门: ['澳门特别行政区']
      }
    }
  },
  methods: {
  }
}
