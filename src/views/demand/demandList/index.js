const date = new Date();
const form = {
  title: "",
  unit: "",
  publish_date: date.toLocaleDateString(),
  demand_content: "",
  type_name: "",
  keywords: "",
  client_type: "normal",
  end_date: "",
  best_budget: "",
  max_budget: "",
  technical_index: "",
  uninterested_technolo: "",
  file: "",
};
const elForm = [
  {
    label: "需求标题",
    fieldName: "title",
    type: "input",
    placeholder: "请输入需求标题",
  },
  {
    label: "请选择需求领域",
    fieldName: "type_name",
    type: "radio",
    msg: [
      "节能环保",
      "生物医药",
      "机械制造",
      "电子信息",
      "化学化工",
      "新能源",
      "材料科学",
      "公共管理",
      "其他",
    ],
  },
  {
    label: "关键词",
    fieldName: "keywords",
    type: "input",
    placeholder: "3个左右，逗号’，‘分隔开",
  },
  {
    label: "请详细描述需求",
    fieldName: "demand_content",
    type: "inputArea",
    placeholder:
      "友情提示：可填写目前技术工艺的参数，性能等，目前场景等信息，注意保护机密信息哦",
  },
  // {
  //   label: '上传图片或其他资料',
  //   fieldName: 'file',
  //   type: 'upload',
  // },
  // {
  //   label: '请输入企业名',
  //   fieldName: 'companyName',
  //   type: 'input',
  //   placeholder: '',
  // },
  // {
  //   label: '请填写联系电话',
  //   fieldName: 'phone',
  //   type: 'input',
  //   placeholder: '仅限’-‘和数字',
  // }
];
const field = [
  "节能环保",
  "生物医药",
  "机械制造",
  "电子信息",
  "化工化学",
  "新能源",
  "材料科学",
  "其他",
];
const demand = [];
import top from "@/components/Top/index.vue";
import { demandList, myDemand } from "@/api/demand";
import store from "@/store/index";
import { getToken } from "@/utils/auth";
import Pagination from "@/components/Pagination/index.vue";
export default {
  name: "index",
  data() {
    return {
      form,
      elForm,
      field,
      demand,
      selected_idx: 0,
      dialogVisible: false,
      pickerOptions: {
        disabledDate(time) {
          return false;
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一个月后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            },
          },
          {
            text: "两个月后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 2);
              picker.$emit("pick", date);
            },
          },
          {
            text: "三个月后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 3);
              picker.$emit("pick", date);
            },
          },
          {
            text: "半年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 6);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 12);
              picker.$emit("pick", date);
            },
          },
          {
            text: "两年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 12 * 2);
              picker.$emit("pick", date);
            },
          },
          {
            text: "三年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30 * 12 * 3);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      total: 1,
      page: 1,
      limit: 10,
      sizes: [5, 10, 15, 20, 25],
    };
  },
  methods: {
    Submit() {
      let year = this.form.end_date.getFullYear();
      let month = this.form.end_date.getMonth() + 1;
      let day = this.form.end_date.getDate();

      let fDate = year + "-";
      if (month < 10) fDate += "0";
      fDate += month;
      fDate += "-";
      if (day < 10) fDate += "0";
      fDate += day;

      this.form.end_date = fDate;

      myDemand(this.form)
        .then((res) => {
          console.log(res);
          this.$message({
            message: "提交成功！",
            type: "success",
          });
          this.dialogVisible = false;
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("提交失败！");
        });
    },
    idx_change(key) {
      //更换分区
      this.selected_idx = key;
      // 重置分区属性
      this.page = 1;
      this.limit = 10;
      // 重置列表内容
      this.getList();
    },
    getList() {
      //重新获取列表内容
      const type_name = this.field[this.selected_idx];
      const qlimit = this.limit;
      const qpage = this.page;
      const query = {
        type_name,
        qlimit,
        qpage,
      };
      console.log(query);
      demandList(query)
        .then((res) => {
          console.log(type_name, res);
          // 重置列表
          this.demand = res;
          this.total = res.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    top,
    Pagination,
  },
  created() {
    store.commit("SET_TOKEN", getToken());
    for (let type of this.field) {
      //过滤请求
      const query = {
        type_name: type,
      };
      demandList(query)
        .then((res) => {
          if (type === this.field[this.selected_idx]) {
            console.log(type, res);
            this.total = res.length;
            this.demand = res;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(this.demand);
  },
};
