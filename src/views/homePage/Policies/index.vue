<template>
  <div class="footer" style="height: 400px;">
    <div style="font-size: 20px;">
      <h2>政策法规</h2>
    </div>
    <div style="width: 100%;height: 400px;">
      <showPolicies title="法律法规" :items=laws style="margin-right: 26px;" link='/#/policiesDetail/law' link_type="law">
      </showPolicies>
      <showPolicies title="保护案例" :items=cases link='/#/policiesDetail/case' link_type="case"></showPolicies>
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
import { law, cases } from '@/api/policy'
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
      laws: [],
      cases: []
    }
  },
  methods: {
    hd2_item_method(index) {
      this.selectIndex = index
      // this.showPolicList =
    }
  },
  created() {
    const query = {
      limit: 7,
      page: 1
    }
    law(query).then(res => {
      this.laws = res.results;
    }).catch(err => {
      console.log(err);
    })
    cases(query).then(res => {
      this.cases = res.results;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
</style>
