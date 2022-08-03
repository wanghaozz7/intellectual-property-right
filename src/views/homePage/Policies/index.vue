<template>
  <div class="footer">
    <div class="title">
      <h2>政策法规</h2>
    </div>
    <div class="hd2 clearfix">
      <ul>
        <li v-for="(item,index) in hd2_item" :class="selectIndex === index ? 'hd2-item active':'hd2-item'" @mouseenter="hd2_item_method(index)">
          <i class="fa fa-bookmark-o fa-lg"></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="policy clearfix">
      <div class="fl img">
        <img src="../../../assets/img/政策.jpg" alt="">
      </div>
      <div class="content1 fl item">
        <ul class="fl">
          <li v-for="item in hd2_item[this.selectIndex].policiesList">
            <a href="#">{{item}}</a>
          </li>
        </ul>
        <div class="fl line"></div>
        <ul class="fl">
          <li v-for="item in hd2_item[this.selectIndex].policiesList_right">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/base.css"
import "@/assets/css/footer.css"
// import "@/assets/js/footer.js"
export default {
  name: 'index',
  data () {
    return {
      hd2_item: [
        {
          name: '法律法规',
          policiesList: ['中华人民共和国商标法(2013年修正)', '中华人民共和国民事诉讼法（2012年修正）',
            '中华人民共和国著作权法（2010年修正）1', '中华人民共和国著作权法（2010年修正）2',
            '中华人民共和国著作权法（2010年修正）3', '中华人民共和国著作权法（2010年修正）4',
            '中华人民共和国著作权法（2010年修正）5', '中华人民共和国著作权法（2010年修正）6',
            '中华人民共和国著作权法（2010年修正）7'],
          policiesList_right: ['中华人民共和国商标法(2013年修正)', '中华人民共和国民事诉讼法（2012年修正）',
            '中华人民共和国著作权法（2010年修正）1', '中华人民共和国著作权法（2010年修正）2',
            '中华人民共和国著作权法（2010年修正）3', '中华人民共和国著作权法（2010年修正）4',
            '中华人民共和国著作权法（2010年修正）5', '中华人民共和国著作权法（2010年修正）6',
            '中华人民共和国著作权法（2010年修正）7'],
        },
        {
          name: '国际条约',
          policiesList: ['中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)',
            '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)',
            '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)'],
          policiesList_right: ['中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)',
            '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)',
            '中华人民共和国商标法(2013年修正)', '中华人民共和国商标法(2013年修正)'],
        },
        {
          name: '案例分析',
          policiesList: ['中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法',
            '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法'],
          policiesList_right: ['中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法',
            '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法', '中华人民共和国劳动法'],
        }],
      selectIndex: 0,
      showPolicList: [],
      showPolicList_right: []
    }
  },
  methods: {
    hd2_item_method (index) {
      this.selectIndex = index
      // this.showPolicList =
    }
  }
}
</script>

<style scoped>

</style>
