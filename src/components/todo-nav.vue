<template>
  <div class="todo-nav">
    <p>{{ signature }}</p>
    <!-- 设置签名 -->
    <div class="setting el-icon-setting" @click="showSignatureDialog = true"></div>
    <el-dialog title="设置你的个性签名" :visible="showSignatureDialog" :show-close="false">
      <el-input v-model="newSignature" placeholder="写下你的个性签名" @keydown.native.enter='setSignature(), showSignatureDialog = false'></el-input>
      <span slot="footer">
        <el-button @click="showSignatureDialog = false">取 消</el-button>
        <el-button type="primary" @click="setSignature(), showSignatureDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "todoNav",
  data() {
    return {
      signature: "",
      newSignature: "今日事，今日毕",
      showSignatureDialog: false
    };
  },
  methods: {
    getSignature() {
      return localStorage.getItem("signature");
    },
    setSignature() {
      localStorage.setItem("signature", this.newSignature);
      this.newSignature = ''
      this.signature = this.getSignature();
    }
  },
  mounted() {
    if(this.getSignature()){
      this.signature = this.getSignature()
      this.newSignature = ''
    } else {
      this.setSignature()
      this.signature = this.getSignature()
    }
  }
};
</script>
