<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}广告位</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>
          添加广告位
        </el-button>
        <el-row style="margin-top: 1rem;">
          <el-col :md="24" v-for="(item, i) in model.items" :key="i">
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="广告名称">
              <el-input v-model="item.title"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 1rem;">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res => {
									res.map(a=>{
										$set(item, 'image', a.url)
									})
								}"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item style="margin: -20px 0 20px 80px;">
              <el-button type="danger" @click="model.items.splice(i, 1)">删除此广告</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        items: []
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/ads", this.model);
      }

      this.$router.push("/ad/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style lang="scss">
.el-form-item {
  .el-form-item {
    margin-bottom: 20px;
  }
}
</style>
