<template>
    <div class="container">
    <el-container>
        <!-- 头部 -->
        <el-header style="text-align: center; font-size: 12px; background-color: #FFFFFF;">
            <el-input v-model="input" placeholder="输入番剧名称" type="text" style="width:50%;" clearable></el-input>
            <el-button type="primary" icon="el-icon-search" @click='search'>搜索</el-button>
        </el-header>
        <!-- 列表 -->
        <el-main>
        <el-table :data="fanju">
            <el-table-column prop="title" label="番剧名称" align="center">
            </el-table-column>
            <el-table-column label="番剧图片" align="center">
            <template slot-scope="scope">
                <img v-lazy="scope.row.imgCover" :key="scope.row.imgCover" class="head_pic" width="80" height="80"/>
            </template>
            </el-table-column>
            <el-table-column prop="follow" label="追番人数" align="center">
            </el-table-column>
            <el-table-column prop="play" label="播放次数" align="center">
            </el-table-column>
            <el-table-column prop="score" label="番剧评分" align="center">
            </el-table-column>
            <el-table-column prop="badge" label="番剧权限" align="center">
            </el-table-column>
            <el-table-column prop="badge" label="操作" align="center">
            <template slot-scope="scope">
                <el-button @click="Show(scope.row)" type="text" size="small">编辑</el-button>
                <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-pagination
            background
            layout="prev, pager, next"
            :total='total'
            style='text-align:center;margin-top: 20px'
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            v-show="fanju.length">
        </el-pagination>
        <!-- 弹框 -->
        <el-dialog
        title="修改信息"
        :visible.sync="dialogVisible"
        width="50%"
        center>
        <el-form ref="form" :model="data" label-width="100px" @submit.native.prevent='addfanju'>
          <el-form-item label="番剧名称">
            <el-input v-model="data.name" style="float: left"></el-input>
          </el-form-item>
          <el-form-item label="番剧图片">
            <el-input v-model="data.imgs" style="float: left"></el-input>
          </el-form-item>
          <el-form-item label="追番人数">
            <el-input v-model="data.num" style="float: left"></el-input>
          </el-form-item>
          <el-form-item label="播放次数">
            <el-input v-model="data.plays" style="float: left"></el-input>
          </el-form-item>
          <el-form-item label="内部链接">
            <el-input v-model="data.link" style="float: left"></el-input>
          </el-form-item>
          <el-form-item label="番剧评分">
            <el-select v-model="data.score" placeholder="请选择评分" style="float: left">
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
            <el-select v-model="data.main" placeholder="请选择权限" style="float: left">
              <el-option label="普通用户" value="普通用户"></el-option>
              <el-option label="会员专享" value="会员专享"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="番剧类别">
            <el-select v-model="data.class" placeholder="请选择类别" style="float: left">
              <el-option label="日漫" value="fanju"></el-option>
              <el-option label="国漫" value="china"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="Update()">确 定</el-button>
        </span>
        </el-dialog>
        </el-main>
  </el-container>

    </div>
</template>

<script>
import util from '../util/util'
export default {
  data () {
    return {
      input: '',
      fanju: [],
      total: 1,
      currentPage: 1,
      p: '',
      dialogVisible: false,
      data: {
        name: '',
        imgs: '',
        num: '',
        plays: '',
        score: '0',
        main: '普通用户',
        link: '',
        class: 'fanju',
        index: ''
      }
    }
  },
  methods: {
    search () {
      this.handleCurrentChange(1)
    },
    // 显示弹框
    Show (row) {
      this.data.name = row.title
      this.data.imgs = row.imgCover
      this.data.num = row.follow
      this.data.plays = row.play
      this.data.score = row.score
      this.data.main = row.badge
      this.data.class = 'china'
      this.index = row.id
      this.dialogVisible = true
    },
    Update () {
      this.$http.post('upd', {
        index: this.index,
        listname: 'china',
        data: this.data
      }).then(res => {
        // 提示
        this.$message({
          showClose: true,
          message: res.data,
          type: 'success',
          duration: 1000
        })
        this.dialogVisible = false
      })
      util.Sleep(1500).then(() => {
        this.$router.go(0)
      })
    },
    remove (index) {
      this.$http.post('del', {
        index: index
      }).then(res => {
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
    },
    handleCurrentChange (index) {
      this.currentPage = index
      if (this.input) { this.p = this.input }
      this.$http.post('search', {
        input: this.p,
        currentPage: this.currentPage - 1
      }).then(res => {
        let total = JSON.parse(res.data[1])
        let data = JSON.parse(res.data[0])
        this.fanju = data
        this.total = total[0].total
      })
    }
  }
}
</script>

<style>
.container{
    display: flex;
    justify-content: center;
}
</style>
