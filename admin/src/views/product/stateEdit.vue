<template>
  <div class="pro">
    <h1>{{ id ? '编辑' : '新建' }}项目状态</h1>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
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
        await this.$http.put(`rest/productStates/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/productStates", this.model);
      }

      this.$router.push("/product/state");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/productStates/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
