<template>
  <div>
    <Top :sign="true"></Top>
    <div class="content">
      <!-- 专家信息-->
      <div class="person-detail white-box-big back-white flex">
        <div class="personDetail-left">
          <div class="nameBg">
            <p class="surname-big-text" v-if="talent.name"> {{ talent.name[0] }}</p>
          </div>
          <!-- <div class="authentication">
            我要认证
          </div> -->
        </div>
        <div class="personDetail-right">
          <span class="person-detail-right-name"> {{ talent.name }} </span>
          <span class="person-detail-right-school"> {{ talent.org }} </span>
          <div class="person-detail-right-catalog-box">
            <p class="person-detail-right-catalog"> {{ talent.domains }} </p>
          </div>
          <div class="person-detail-right-datainfo">
            <div class="datainfo-up flex">
              <div class="datainfo-box">
                <span class="datainfo-title">学术年龄: </span>
                <span class="datainfo-data"> {{ talent.firstPaperYear }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">级别评估: </span>
                <span class="datainfo-data"> {{ talent.hIndexLevel }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">学术水平位置: </span>
                <span class="datainfo-data"> {{ talent.scholarLevel }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">自然基金排名: </span>
                <span class="datainfo-data"> {{ talent.nsfcLevel }} </span>
              </div>
            </div>
            <div class="datainfo-down flex">
              <div class="datainfo-box">
                <span class="datainfo-title">H因子: </span>
                <span class="datainfo-data"> {{ talent.hIndex }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">论文数: </span>
                <span class="datainfo-data"> {{ talent.paperCounts }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">被引用数: </span>
                <span class="datainfo-data"> {{ talent.cited }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">专利数: </span>
                <span class="datainfo-data"> {{ talent.patentCounts }} </span>
              </div>
              <div class="datainfo-box">
                <span class="datainfo-title">项目数:</span>
                <span class="datainfo-data"> {{ talent.projectCounts }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tab页 -->
      <el-tabs v-model="selected_tab">
        <el-tab-pane label="产出和成果" name="产出和成果">
          <!-- 产出和成果-->
          <div class="achievements">
            <div class="achievements-tag">
              <div class="achievements-title back-white">
                <span>产出和成果</span>
              </div>
              <div class="back-white" style="padding-bottom: 10px">
                <el-tabs type="card" style="margin-left: 10px" v-model="tag_active"
                  @tab-click="achievements_tag_handle">
                  <el-tab-pane label="论文" name="paper">
                    <div v-if="paperList.length == 0"> 暂无数据 </div>
                    <div v-else class="paper">
                      <div class="paper-item" v-for="(data, i) in paperList" :key="i">
                        <div class="paper-item-left">
                          <span>{{ data.title[0] }}</span>
                        </div>
                        <div class="paper-item-right">
                          <p class="paper-item-title"> {{ data.title }} </p>
                          <div class="tag">
                            <el-tag :type="index % 3 == 0 ? 'warning' : index % 3 == 1 ? 'success' : 'primary'"
                              v-for="(k, index) in data.kws" :key="index">{{ k }} </el-tag>
                          </div>
                          <div class="detail">
                            <p>
                              摘要： {{ data.abs }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="专利" name="patent">
                    <div v-if="patentList.length == 0"> 暂无数据 </div>
                    <div v-else class="paper">
                      <div class="paper-item" v-for="(data, i) in patentList" :key="i">
                        <div class="paper-item-left">
                          <span>{{ data.title[0] }}</span>
                        </div>
                        <div class="paper-item-right">
                          <p class="paper-item-title"> {{ data.title }} </p>
                          <div class="tag">
                            <el-tag :type="index % 3 == 0 ? 'warning' : index % 3 == 1 ? 'success' : 'primary'"
                              v-for="(k, index) in data.kws" :key="index">{{ k }} </el-tag>
                          </div>
                          <div class="detail">
                            <p>
                              摘要： {{ data.abs }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目和课题" name="项目和课题">
          <!-- 项目和课题-->
          <div class="achievements">
            <div class="achievements-tag">
              <div class="achievements-title back-white">
                <span>项目和课题</span>
              </div>
              <div class="back-white project" v-if="projectList.nps">
                <div class="item-left">
                  <span class="name-display">{{ projectList.nps[0] }}</span>
                </div>
                <div class="project-info">
                  {{ projectList.nps }}
                </div>
              </div>
              <div class="back-white project" style="padding-left: 10px" v-else>
                暂无数据
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="同领域专家" name="同领域专家">
          <!-- 同领域专家     -->
          <div class="Experts-same">
            <div class="Experts-same-title back-white">
              <span>同领域专家</span>
            </div>
            <div class="Experts-same-expertInfo flex">
              <div class="Experts-same-expertInfo-item back-white flex" v-for="(data, i) in sameDomains" :key="i">
                <div class="item-left">
                  <span class="name-display">{{ data.name[0] }}</span>
                </div>
                <div class="item-right">
                  <p class="name" style="margin-bottom: 3px">{{ data.name }}</p>
                  <el-tag type="warning" style="max-width: 200px;overflow: hidden;text-overflow: ellipsis;">{{ data.org
                  }}
                  </el-tag>
                  <div class="Experts-tag"> {{ data.domain }} </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="同机构专家" name="同机构专家">
          <!-- 同机构专家     -->
          <div class="Experts-same">
            <div class="Experts-same-title back-white">
              <span>同机构专家</span>
            </div>
            <div class="Experts-same-expertInfo flex">
              <div class="Experts-same-expertInfo-item back-white flex" v-for="(data, i) in sameOrgs" :key="i">
                <div class="item-left" style="background-color:#45bcc0;">
                  <span class="name-display">{{ data.name[0] }}</span>
                </div>
                <div class="item-right">
                  <p class="name" style="margin-bottom: 3px">{{ data.name }}</p>
                  <el-tag type="warning" style="max-width: 200px;overflow: hidden;text-overflow: ellipsis;">{{ data.org
                  }}
                  </el-tag>
                  <div class="Experts-tag"> {{ data.domain }} </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="合作伙伴" name="合作伙伴">
          <!-- 合作伙伴     -->
          <div class="cooperative-partner">
            <div class="cooperative-partner-title back-white">
              <span>合作伙伴</span>
            </div>
            <div class="cooperative-partner-expertInfo flex">
              <div class="cooperative-partner-expertInfo-item back-white flex" v-for="(data, i) in coAuthor" :key=i>
                <div class="item-left" style="background-color:#2489f2;">
                  <span class="name-display"> {{ data.name[0] }} </span>
                </div>
                <div class="item-right">
                  <p class="name" style="margin-bottom: 3px"> {{ data.name }} </p>
                  <el-tag style="max-width: 200px;overflow: hidden;text-overflow: ellipsis;"> {{ data.org }} </el-tag>
                  <div class="Experts-tag">
                    合作：论文{{ data.paperCoTimes }}次，专利{{ data.patentCoTimes }}次，科研项目{{ data.projectCoTimes }}次
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>





    </div>
  </div>

</template>

<script src="./index.js"></script>

<style scoped>
.Experts-same-expertInfo :nth-child(4n) {
  margin-right: 0;
}
.cooperative-partner-expertInfo :nth-child(4n){
  margin-right: 0;
}
</style>
