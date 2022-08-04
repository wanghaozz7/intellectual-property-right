<template>
  <div class="main clearfix">
    <div style="margin: 28px auto">
      <div class="hd clearfix">
        <div class="patent_title">
          <ul>
            <li class="hd-item on">
              <i class="fa fa-bookmark-o fa-lg"></i>
              <span>最新专利</span>
            </li>
            <li class="hd-item">
              <i class="fa fa-bookmark-o fa-lg"></i>
              <span>优选专利</span>
            </li>
            <li class="hd-item">
              <i class="fa fa-bookmark-o fa-lg"></i>
              <span>热门专利</span>
            </li>
          </ul>
          <router-link :to="{ name: 'patentList' }">
            <a class="" href="#">更多专利</a>
          </router-link>
        </div>
      </div>
      <div style="display: flex; margin-top:5px;">
        <div class="patent index1">
          <div class="item_wrap clearfix" v-for="item in patentList" :key="item.id">
            <div class="icon">
              <div class="item_img" style="width:234px;height:190px">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <img :src="item.image" alt="">
                </router-link>
              </div>
              <p>{{ item.title }}</p>
              <div class="littleFun ">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <a>查看详情</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="patent index2">
          <div class="item_wrap clearfix" v-for="item in patentList1" :key="item.id">
            <div class="icon">
              <div class="item_img" style="width:200px;height:190px">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <img :src="item.image" alt="">
                </router-link>
              </div>
              <p>{{ item.title }}</p>
              <div class="littleFun ">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <a>查看详情</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="patent index3">
          <div class="item_wrap clearfix" v-for="item in patentList2" :key="item.id">
            <div class="icon">
              <div class="item_img" style="width:200px;height:190px">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <img :src="item.image" alt="">
                </router-link>
              </div>
              <p>{{ item.title }}</p>
              <div class="littleFun ">
                <router-link :to="{ 'name': 'patentDetail', 'query': { 'patent': item.id } }" target="_blank">
                  <a>查看详情</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class="experts">-->
        <!--          <span>Experts</span>-->
        <!--          <h2>专利大数据</h2>-->
        <!--          <p>大数据汇总1200万专利</p>-->
        <!--          <el-button type="primary" size="">更多专家</el-button>-->
        <!--        </div>-->
      </div>
    </div>
    <div>
      <div class="specialist_title">
        <h2>专家介绍</h2>
        <router-link :to="{ name: 'moreExpert' }">
          <a class="" href="#">更多专家</a>
        </router-link>
      </div>
      <div class="specialist clearfix">
        <div style="display: flex;" class="specialist_container">
          <div class="big-img fl clearfix">
            <a href="#" target="_blank">
              <img src="../../../assets/img/yzn.jpg" alt="">
            </a>
          </div>
          <div class="specialist_m fl">
            <ul>
              <li class="clearfix">
                <span class="fl img">
                  <a href="#" target="_blank" title="田禾院士">
                    <img src="../../../assets/img/thys.png" alt="">
                  </a>
                </span>
                <div class="fl">
                  <a href="#" class="title" title="田禾院士" target="_blank">
                    田禾院士
                  </a>
                  <!--                  <h3>行业分类：A:人类生活需要</h3>-->
                  <p>
                    田禾，中科院院士，发展中国家科学院院士、东莞理工学院双聘院士。教授，博士生导师，华东理工大学化学与分子工程学院院长兼精细化工研究所所长，2011年12月当选为中科院院士。1996年被批准获得国家杰出青年基金，1999年被聘为教育部特聘教授。全国优秀留学回国人员成就奖（2003年）；全国优秀教师称号（1998）。曾获得2007年国家自然科学二等奖；2006年上海市自然科学一等奖；2000年度国家科技进步二等奖；2002年度上海市科技进步二等奖（发明类）等。
                  </p>
                  <a href="#" class="check_detail" title="火山碎屑岩网状凝胶泡沫泥浆防灭火剂" target="_blank">
                    查看详情
                  </a>
                </div>
              </li>
              <li class="clearfix">
                <span class="fl img">
                  <a href="#" target="_blank" title="卢秉恒院士">
                    <img src="../../../assets/img/lbh.jpg" alt="">
                  </a>
                </span>
                <div class="fl">
                  <a href="#" class="title" title="卢秉恒院士" target="_blank">
                    卢秉恒院士
                  </a>
                  <!--                  <h3>行业分类：A:人类生活需要</h3>-->
                  <p>
                    卢秉恒，中国工程院院士、东莞理工学院双聘院士。中国机械制造与自动化领域著名科学家，现为西安交通大学教授、博士生导师，东莞理工学院特聘教授，东莞增材制造与智能制造研究院院长。担任国家增材制造创新中心主任、CFDA医疗器械分类技术委员会副主任、增材制造标准国家委员会主任、快速制造国家工程研究中心主任、国务院机械学科评议组召集人、中国机械工程学会副理事长、中国机械制造工艺协会副理事长、全国高校金属切削机床学会理事长。
                  </p>
                  <a href="#" class="check_detail" title="一种临床护理上用于治疗骨病的中药组合物的制备方法" target="_blank">
                    查看详情
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div class="specialist_m fl">
            <ul>
              <li class="clearfix">
                <span class="fl img">
                  <a href="#" target="_blank" title="杨志峰院士">
                    <img src="../../../assets/img/yzf.png" alt="">
                  </a>
                </span>
                <div class="fl">
                  <a href="#" class="title" title="杨志峰院士" target="_blank">
                    杨志峰院士
                  </a>
                  <!--                  <h3>行业分类：A:人类生活需要</h3>-->
                  <p>
                    中国工程院院士，博导，东莞理工学院生态环境工程技术研发中心特聘教授。杨志峰院士现任北京师范大学教授、北京市流域环境生态修复与综合调控工程技术研究中心主任、中国工程院环境与轻纺工程学部院士，兼任民盟中央委员会委员、国际环境生态学会主席、国际环境信息科学学会生态信息分会主席、国际能值学会中国分会主席。曾任北京师范大学环境学院院长、水环境模拟国家重点实验室主任、环球中国环境专家协会会长等职。他长期从事环境生态规划与修复研究，作为教育部特聘教授、国家973计划项目首席科学家、国家杰出青年基金获得者和国家创新研究群体学术带头人，先后主持国家973项目、国家创新研究群体项目等重大项目十余项，在流域生态需水保障、湿地和城市环境生态建设等工程技术方面取得多项技术突破，为提高流域、湿地和城市环境生态保护技术水平做出了突出贡献。出版中英文学术专著和教材20余部，发表论文500余篇，其中SCI论文300余篇，授权国家
                    发明专利20余件。中文论著引用18298次，H指数69；SCI论文引用
                    8585次，H指数47，连续多年（2014-2017）入选Elsevier环境生态领域中国高被引学者榜。已获国家科技进步二等奖3项、国家自然科学二等奖1项、省（部）级一等奖11项。2016年3月授聘为东莞理工学院特聘教授。
                  </p>
                  <a href="#" class="check_detail" title="火山碎屑岩网状凝胶泡沫泥浆防灭火剂" target="_blank">
                    查看详情
                  </a>
                </div>
              </li>
              <li class="clearfix">
                <span class="fl img">
                  <a href="#" target="_blank" title="徐建中院士">
                    <img src="../../../assets/img/xjz.jpg" alt="">
                  </a>
                </span>
                <div class="fl">
                  <a href="#" class="title" title="一种临床护理上用于治疗骨病的中药组合物的制备方法" target="_blank">
                    徐建中院士
                  </a>
                  <!--                  <h3>行业分类：A:人类生活需要</h3>-->
                  <p>
                    中国工程院院士，博导，东莞理工学院生态环境工程技术研发中心特聘教授。杨志峰院士现任北京师范大学教授、北京市流域环境生态修复与综合调控工程技术研究中心主任、中国工程院环境与轻纺工程学部院士，兼任民盟中央委员会委员、国际环境生态学会主席、国际环境信息科学学会生态信息分会主席、国际能值学会中国分会主席。曾任北京师范大学环境学院院长、水环境模拟国家重点实验室主任、环球中国环境专家协会会长等职。他长期从事环境生态规划与修复研究，作为教育部特聘教授、国家973计划项目首席科学家、国家杰出青年基金获得者和国家创新研究群体学术带头人，先后主持国家973项目、国家创新研究群体项目等重大项目十余项，在流域生态需水保障、湿地和城市环境生态建设等工程技术方面取得多项技术突破，为提高流域、湿地和城市环境生态保护技术水平做出了突出贡献。出版中英文学术专著和教材20余部，发表论文500余篇，其中SCI论文300余篇，授权国家
                    发明专利20余件。中文论著引用18298次，H指数69；SCI论文引用
                    8585次，H指数47，连续多年（2014-2017）入选Elsevier环境生态领域中国高被引学者榜。已获国家科技进步二等奖3项、国家自然科学二等奖1项、省（部）级一等奖11项。2016年3月授聘为东莞理工学院特聘教授。
                  </p>
                  <a href="#" class="check_detail" title="一种临床护理上用于治疗骨病的中药组合物的制备方法" target="_blank">
                    查看详情
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style scoped>
/* 取消flex最右侧的元素的右边距达到正常排列的效果 */
.patent :nth-child(5n) {
  margin-right: 0;
}

.specialist_container :nth-child(3) {
  margin-right: 0;
}

.patent_title {
  display: flex;
  position: relative;
}



.patent_title a {
  width: 100px;
  color: #196AA9FF;
  font-size: 20px;
  position: absolute;
  right: 10px;
}

.specialist_m .fl p {
  height: 100px;
  line-height: 20px;
  overflow: hidden;
}

.specialist_m img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.specialist_title {
  display: flex;
  position: relative;
}

.specialist_title a {
  width: 100px;
  color: #196AA9FF;
  font-size: 20px;
  position: absolute;
  right: 10px;
  margin-top: 5px;
}

.img {
  width: 220px;
  height: 220px;
}

.img img {
  width: 100%;
}
</style>
