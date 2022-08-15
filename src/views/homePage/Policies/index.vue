<template>
  <div class="footer" style="height: 400px;">
    <div style="font-size: 20px;">
      <h2>政策法规</h2>
    </div>
    <div style="width: 100%;height: 400px;">
      <showPolicies title="法律法规" :items=laws style="margin-right: 26px;" link='/#/policiesDetail'></showPolicies>
      <showPolicies title="保护案例" :items=cases link='/#/policiesDetail'></showPolicies>
    </div>
    <!-- <div class="hd2 clearfix">
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
    </div> -->
  </div>
</template>

<script>
import "@/assets/css/base.css"
import "@/assets/css/footer.css"
// import "@/assets/js/footer.js"
import showPolicies from './showPolicies'
export default {
  name: 'index',
  components: {
    showPolicies
  },
  data() {
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
      showPolicList_right: [],
      laws: [
        {
          title: '三一国际诉北方交通重工专利侵权案再度开庭',
          date: '2022-03-12'
        },
        {
          title: 'iPad商标案尘埃落定 知识产权保护任重道远',
          date: '2022-03-10'
        },
        {
          title: '法院：多美滋国际专利益生元名符其实',
          date: '2022-02-14'
        },
        {
          title: '"竹家庄避风塘及图"商标争议行政案',
          date: '2021-12-22'
        },
        {
          title: '四部委清场"人民大会堂"等"特供"标识"',
          date: '2021-11-22'
        },
        {
          title: '世纪专利之战 苹果VS三星',
          date: '2021-11-19'
        }],
      cases: [
        {
          title: '国际贸易中企业知识产权风险防范',
          date: '2022-02-04'
        },
        {
          title: '中共中央、国务院印发《长江三角洲区域一体化发展规划纲要》的知识产权相关事宜',
          date: '2022-01-11'
        },
        {
          title: '价值千万的网络域名遭恶意诉讼，域名投资者该如何回应？',
          date: '2021-12-30'
        },
        {
          title: '提高知识产权意识，主动防范风险，做好功课 企业稳步走出去',
          date: '2021-11-18'
        },
        {
          title: '从"红牛"、"露露"、"王老吉"商标纠纷看商标许可的风险防范',
          date: '2021-11-18'
        },
        {
          title: '国知局：关于"关于加强跨省知识产权维权机制建设提案"的答复',
          date: '2021-10-22'
        }]
    }
  },
  methods: {
    hd2_item_method(index) {
      this.selectIndex = index
      // this.showPolicList =
    }
  }
}
</script>

<style scoped>
</style>
