<template>
  <div class="todo-nav todo-nav-mobile">
    <!-- pc -->
    <p class="hidden-xs-only">{{ signature }}</p>
    <!-- 设置签名 -->
    <div class="setting el-icon-setting hidden-xs-only" @click="showSignatureDialog = true"></div>
    <el-dialog
      class="hidden-xs-only"
      title="设置你的个性签名"
      :visible="showSignatureDialog"
      :show-close="false"
    >
      <el-input
        v-model="newSignature"
        placeholder="写下你的个性签名, 最多10个字"
        :maxlength='10'
        @keydown.native.enter="setSignature(), showSignatureDialog = false"
      ></el-input>
      <span slot="footer">
        <el-button @click="showSignatureDialog = false">取 消</el-button>
        <el-button type="primary" @click="setSignature(), showSignatureDialog = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 移动端 -->
    <p class="hidden-sm-and-up" @click="showSignatureDialogMobile = true">{{ signature }}</p>
    <!-- 设置签名 -->
    <el-dialog
      title="设置你的个性签名"
      :visible="showSignatureDialogMobile"
      :show-close="false"
      :fullscreen="true"
    >
      <el-input
        v-model="newSignature"
        placeholder="写下你的个性签名, 最多10个字"
        :maxlength='10'
        @keydown.native.enter="setSignature(), showSignatureDialogMobile = false"
      ></el-input>
      <span slot="footer">
        <el-button @click="showSignatureDialogMobile = false">取 消</el-button>
        <el-button type="primary" @click="setSignature(), showSignatureDialogMobile = false">确 定</el-button>
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
      showSignatureDialog: false,
      showSignatureDialogMobile: false
    };
  },
  methods: {
    getSignature() {
      return localStorage.getItem("signature");
    },
    setSignature() {
      localStorage.setItem("signature", this.newSignature);
      this.newSignature = "";
      this.signature = this.getSignature();
    }
  },
  mounted() {
    if (this.getSignature()) {
      this.signature = this.getSignature();
      this.newSignature = "";
    } else {
      this.setSignature();
      this.signature = this.getSignature();
    }
  }
};
</script>
