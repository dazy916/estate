<template>
  <div class="pro">
    <h1 class="fn-l">{{id?'编辑':'新建'}}项目</h1>
    <!-- <el-form ref="form" :rules="rules" label-width="80px" @submit.native.prevent="save"> -->
    <el-form ref="form" :rules="rules" label-width="80px" :model="form">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane label="基本信息" name="first">
          <el-form-item label="项目名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="楼盘状态" prop="proStatus">
                <el-select v-model="form.proStatus" placeholder="请选择状态">
                  <el-option
                    v-for="item in state"
                    :key="item._id"
                    :label="item.name"
                    :value="item.name"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目均价">
                <el-input type="number" v-model="form.price"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="占地面积">
                <el-input type="number" v-model="form.aere"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="主力户型">
                <el-input v-model="form.layout"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="产权年限" prop="years">
                <el-input type="number" v-model="form.years"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="交房时间">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.delivery"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="售楼地址">
                <el-input v-model="form.saleAddress"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="售楼电话">
                <el-input v-model="form.salePhone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="开发商" prop="developers">
                <el-input v-model="form.developers"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="产品类型" prop="proType">
                <el-select v-model="form.proType" placeholder="请选择类型" multiple>
                  <el-option
                    v-for="item in proTypes"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="车位数量">
                <el-input v-model="form.parking"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="车位比">
                <el-input v-model="form.pakingRatio"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="绿化率">
                <el-input v-model="form.greenRatio"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="容积率">
                <el-input v-model="form.plotRatio"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="物业类型">
                <el-select v-model="form.propertyType" placeholder="请选择物业类型" multiple>
                  <el-option
                    v-for="item in propertyTypes"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="物业公司">
                <el-input v-model="form.property"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="物业费用">
                <el-input v-model="form.propertyFee"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--=============== 户型管理 ===================-->
        <el-tab-pane label="户型管理" name="second">
          <el-button size="small" @click="form.house.push({proImg:[],fileLists:[]})">
            <i class="el-icon-plus"></i>
            添加户型
          </el-button>
          <el-row :gutter="20" style="margin-top:20px">
            <el-col :span="12" v-for="(item, i) in form.house" :key="i">
              <el-form-item label="户型">
                <el-input v-model="item.apartment"></el-input>
              </el-form-item>
              <el-form-item label="户型图">
                <el-upload
                  list-type="picture-card"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  multiple
                  :file-list="item.proImg"
                  :on-success="res=>{
                       res.map(val => { 
                         item.fileLists.push({ url: val.url })
                         $set(item,'fileLists',item.fileLists)
                    })
                  }"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
              <el-form-item style="margin-top: 1rem;">
                <el-button type="danger" @click="form.house.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--=============== 周边情况 ===================-->
        <el-tab-pane label="周边情况" name="third"></el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top:20px;text-align:center">
        <el-button type="primary" native-type="submit" @click="save('form')">{{id?'编辑保存':'立即新建'}}</el-button>
        <el-button @click="$router.push('/product/list')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
.el-upload {
  position: relative;
  margin-right: 20px;
  border-radius: 6px;

  &:hover {
    .optionitem {
      display: inline;
    }
  }
  img {
    border-radius: 6px;
  }
  .optionitem {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    i {
      margin: 0 5px;
      color: #fff;
    }
  }
}
</style>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      activeName: "first",
      form: {
        name: "",
        house: []
      },
      dialogImageUrl: "",
      dialogVisible: false,
      state: [],
      proTypes: [],
      propertyTypes: [],
      rules: {
        name: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入项目地址", trigger: "blur" }
        ],
        proStatus: [
          { required: true, message: "请输入项目状态", trigger: "blur" }
        ],
        proType: [
          { required: true, message: "请输入项目类型", trigger: "blur" }
        ],
        developers: [
          { required: true, message: "请输入开发商", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 移除上传文件
    async handleRemove(file) {
      this.form.house.map(i => {
        i.proImg.map((v, index) => {
          if (v.url === file.url) {
            i.proImg.splice(index, 1);
            this.$set(i, "fileLists", i.proImg);
          }
        });
      });
    },
    // 点击查看大图
    async handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    async save(v) {
      let that = this;
      this.$refs[v].validate(async valid => {
        if (valid) {
          if (that.id) {
            //图片数组重新赋值
            await that.form.house.map(v => {
              that.$set(v, "proImg", v.fileLists);
            });
            await that.$http.put(`rest/products/${that.id}`, that.form);
          } else {
            //图片数组重新赋值
            await that.form.house.map(v => {
              that.$set(v, "proImg", v.fileLists);
            });
            await that.$http.post("rest/products", that.form);
          }
          this.$message({
            type: "success",
            message: "创建成功"
          });
          this.$router.push("/product/list");
        } else {
          this.$message({
            type:"error",
            message:"请填写基本信息！"
          })
          this.activeName="first"
          
          return false;
        }
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/products/${this.id}`);
      this.form = res.data;
    },
    async fetchState() {
      const res = await this.$http.get(`rest/productStates`);
      this.state = res.data;
    },
    async fetchType() {
      const res = await this.$http.get(`rest/productTypes`);
      this.proTypes = res.data;
    },
    async fetchpropertyType() {
      const res = await this.$http.get(`rest/propertyTypes`);
      this.propertyTypes = res.data;
    }
  },
  created() {
    this.fetchState();
    this.fetchType();
    this.fetchpropertyType();
    this.id && this.fetch();
  }
};
</script>

