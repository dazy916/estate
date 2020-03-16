<template>
  <div class="pro">
    <h1 class="fn-l">{{id?'编辑':'新建'}}项目</h1>
    <el-form ref="form" label-width="80px" @submit.native.prevent="save">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <el-form-item label="项目名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="项目地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="楼盘状态">
                <el-select v-model="form.proStatus" placeholder="请选择状态">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目均价">
                <el-input type="number" v-model="form.price"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
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
          <el-row>
            <el-col :span="12">
              <el-form-item label="产权年限">
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
          <el-row>
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
          <el-row>
            <el-col :span="12">
              <el-form-item label="开发商">
                <el-input v-model="form.developers"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="产品类型">
                <el-select v-model="form.proType" placeholder="请选择类型">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
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
          <el-row>
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
          <el-row>
            <el-col :span="12">
              <el-form-item label="物业类型">
                <el-input v-model="form.propertyType"></el-input>
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
                <el-input type="number" v-model="form.propertyFee"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--=============== 户型管理 ===================-->
        <el-tab-pane label="户型管理" name="second">
          <!-- <el-button size="small" @click="model.second.push({})">
          <i class="el-icon-plus"></i>
          添加技能
          </el-button>-->
          <el-row>
            <el-col>
              <el-form-item label="户型">
                <el-input v-model="form.apartment"></el-input>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="户型图">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--=============== 周边情况 ===================-->
        <el-tab-pane label="周边情况" name="third"></el-tab-pane>
      </el-tabs>

      <el-form-item>
        <el-button type="primary" native-type="submit">{{id?'编辑保存':'立即新建'}}</el-button>
        <el-button @click="$router.push('/product/list')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  props:{
    id:{}
  },
  data() {
    return {
      activeName: "first",
      form: {
        // name: "",
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: ""
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    async save() {
      if(this.id){
        await this.$http.put(`rest/products/${this.id}`, this.form);
      }else{
        await this.$http.post("rest/products", this.form);
      }
      
      this.$message({
        type: "success",
        message: "创建成功"
      });
      this.$router.push("/product/list");
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    async fetch(){
      const res = await this.$http.get(`rest/products/${this.id}`)
      this.form = res.data
    }
  },
  created(){
    this.id && this.fetch()
  }
};
</script>

