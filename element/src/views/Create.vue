<template>
<el-form ref="form" :model="fanju" label-width="140px" @submit.native.prevent='addfanju'>
  <el-form-item label="番剧名称">
    <el-input v-model="fanju.name" style="width:50%; float: left"></el-input>
  </el-form-item>
  <el-form-item label="番剧图片">
    <el-input v-model="fanju.imgs" style="width:50%; float: left"></el-input>
  </el-form-item>
  <el-form-item label="追番人数">
    <el-input v-model="fanju.num" style="width:50%; float: left"></el-input>
  </el-form-item>
  <el-form-item label="播放次数">
    <el-input v-model="fanju.plays" style="width:50%; float: left"></el-input>
  </el-form-item>
  <el-form-item label="内部链接">
    <el-input v-model="fanju.link" style="width:50%; float: left"></el-input>
  </el-form-item>
  <el-form-item label="番剧评分">
    <el-select v-model="fanju.score" placeholder="请选择评分" style="float: left">
      <el-option label="0" value="0"></el-option>
      <el-option label="1" value="1"></el-option>
      <el-option label="2" value="2"></el-option>
      <el-option label="3" value="3"></el-option>
      <el-option label="4" value="4"></el-option>
      <el-option label="5" value="5"></el-option>
      <el-option label="6" value="6"></el-option>
      <el-option label="7" value="7"></el-option>
      <el-option label="8" value="8"></el-option>
      <el-option label="9" value="9"></el-option>
      <el-option label="10" value="10"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="番剧权限">
    <el-select v-model="fanju.main" placeholder="请选择权限" style="float: left">
      <el-option label="普通用户" value="普通用户"></el-option>
      <el-option label="会员专享" value="会员专享"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="番剧类别">
    <el-select v-model="fanju.class" placeholder="请选择类别" style="float: left">
      <el-option label="日漫" value="fanju"></el-option>
      <el-option label="国漫" value="china"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item style="float: left">
    <el-button type="primary" native-type="submit">新增番剧</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>

</template>

<script>
import util from '../util/util'
export default {
  data () {
    return {
      fanju: {
        name: '',
        imgs: '',
        num: '',
        plays: '',
        score: '0',
        main: '普通用户',
        link: '',
        class: 'fanju'
      }
    }
  },
  methods: {
    addfanju () {
      this.$http.post('add', this.fanju).then(res => {
        this.$message({
          showClose: true,
          message: res.data,
          type: 'success',
          duration: 1000
        })
      })
      util.Sleep(1500).then(() => {
        this.$router.go(0)
      })
    }
  }
}
</script>

<style>
.fl{
  float: left
}
</style>
