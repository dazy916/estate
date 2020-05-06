<template>
	<div class="login-contaianer">
		<i class="logo"></i>
		<el-card header="欢迎进入隐觉项目管理后台" class="login-card">
			<el-form @submit.native.prevent="login">
				<el-form-item label="用户名"><el-input v-model="model.username"></el-input></el-form-item>
				<el-form-item label="密码"><el-input type="password" v-model="model.password"></el-input></el-form-item>
				<el-form-item><el-button type="primary" round native-type="submit">登录</el-button></el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
export default {
	data() {
		return {
			model: {}
		};
	},
	methods: {
		async login() {
			const res = await this.$http.post('login', this.model);
			localStorage.token = res.data.token
			localStorage.auth = this.model.username
			this.$router.push('/')
			this.$message({
				type:'success',
				message:'登录成功'
			})
		}
	},
	created() {}
};
</script>
<style scoped>
.login-contaianer{
	height: 100vh;
	background-image: linear-gradient(45deg, rgb(4, 48, 97) , rgb(3, 126, 148));
	background-size: cover;
	text-align: center;
}
.logo{
	display: inline-block;	
	width: 189px;
	height: 104px;
	margin-top: 5rem;
	background-image: url('../assets/logo2.png');
}
.login-card {
	width: 30rem;
	margin: 5rem auto;
}
</style>
