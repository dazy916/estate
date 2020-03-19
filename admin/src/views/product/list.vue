<template>
  <div class="pro">
    <h1 class="fn-l">项目管理</h1>
    <el-row type="flex" justify="space-between">
      <el-col :span="6"></el-col>
      <el-col :span="3">
        <el-button type="primary" round @click="$router.push('/product/create')">新建项目</el-button>
        <!-- <router-link :to="{name:'ProEdit'}" class="el-button el-button--primary is-round">新建项目</router-link> -->
      </el-col>
    </el-row>
    <el-table :data="tableData" style="margin-top:10px;">
      <el-table-column prop="name" label="项目名称" width="200"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="proType" label="项目类型"></el-table-column>
      <el-table-column prop="proStatus" label="项目状态"></el-table-column>
      <el-table-column prop="developers" label="开发商"></el-table-column>
      <el-table-column prop="proImg" label="封图">
        <template slot-scope="scope">
					<img :src="scope.row.avatar" style="height: 3rem;" />
				</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/product/edit/${scope.row._id}`)">编辑</el-button>
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
      const res = await this.$http.get("rest/products");
      this.tableData = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除"${row.name}"?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/products/${row._id}`);
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
