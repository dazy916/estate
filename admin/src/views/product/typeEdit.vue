<template>
  <div class="pro">
    <h1>{{ id ? '编辑' : '新建' }}项目类型</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/productTypes/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/productTypes", this.model);
      }

      this.$router.push("/product/type");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/productTypes/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
