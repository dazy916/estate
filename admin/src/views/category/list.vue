<template>
  <div class="pro">
    <h1 class="fn-l">分类管理</h1>
    <el-row type="flex" justify="space-between">
      <el-col :span="6"></el-col>
      <el-col :span="3">
        <el-button type="primary" round @click="$router.push('/category/create')">新建分类</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="margin-top:10px;">
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column prop="parent" label="上级分类"></el-table-column>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/category/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/categories");
      this.tableData = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除分类?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/categories/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
