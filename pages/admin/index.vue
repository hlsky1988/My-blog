<template>
  <Card class="login" :bordered="false">
    <p class="title" slot="title">{{ title }} - 后台登录</p>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem class="user" prop="user">
        <Input type="text" v-model="formInline.user" placeholder="用户名">
          <Icon type="md-person" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="verCode">
        <Input type="text" v-model="formInline.verCode" :maxlength="verCodeMax" placeholder="请先获取验证码" >
          <Icon type="md-lock" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button :disabled="getVered" @click="getVer">{{ verBT }}</Button>
      </FormItem>
      <FormItem>
        <Button class="loginButton" :disabled="getVerLen == 0" type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script>


export default {
  layout: 'admin',
  async asyncData({ params, store }) {
    return {}
  },
  data() {
    return {
      formInline: {
        user: '',
        verCode: ''
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: '老哥,用户名忘记了嘛？',
            trigger: 'blur'
          }
        ],
        verCode: [
          {
            required: true,
            message: '就这一个登录判断了你还不填？',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 8,
            message: '验证码长度8位哦',
            trigger: 'blur'
          }
        ]
      },
      verBT: '点击获取验证码',
      verCodeMax: 8
    }
  },
  computed: {
    title: function() {
      return this.$store.state.title
    },
    getVered: function() {
      if (this.verBT == '点击获取验证码') {
        return false
      }
      return true
    },
    getVerLen:function() {
      return this.formInline.verCode.length
    }
  },
  methods: {
    handleSubmit(name) { 
      // if (this.verBT == '点击获取验证码') {
      //   this.$Message.warning({
      //     content: '要先获取验证码哦~',
      //     duration: 5
      //   })
      //   return
      // }
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$axios.post('/api/login',this.formInline).then((res)=>{
            this.$Message.success('登陆成功，正在跳转……')
            this.$store.commit('login','666666')
          })
        } else {
          this.$Message.error('请完善登陆信息!')
        }
      })
    },
    async getVer() {
      if (this.formInline.user.trim() == '') {
        this.$Message.warning({
          content:'用户名不能为空',
          duretion:5
        });
        return
      }
      let sec = 300
      let result = await this.$axios.post('/api/verCode',{name:this.formInline.user})
      if (result.data.code == 200) {
        let IntervalID = setInterval(() => {
          this.verBT = `验证码已发送 ${sec--}s`
          if (sec<0) {
            clearInterval(IntervalID)
            this.verBT = '点击获取验证码'
          }
        }, 1000);
      }else if (result.data.code == 401) {
        this.$Message.warning({
          content:result.data.message,
          duretion:5
        });
      }
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body {
  width: 100vw;
  height: 100vh;
  // background-image: -webkit-radial-gradient(-20% 140%, ellipse, rgba(235, 167, 171, 0.6) 30%, rgba(255, 255, 227, 0) 50%), -webkit-radial-gradient(60% 40%, ellipse, #d9e3e5 10%, rgba(44, 70, 76, 0) 60%), -webkit-linear-gradient(-45deg, rgba(62, 70, 92, 0.8) -10%, rgba(220, 230, 200, 0.8) 80%);
  // background-color #303641 !important
}

.login {
  width: 381px;
  height: 300px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  .title {
    font-size: 16px;
  }

  form {
    text-align: left;
    margin-top: 35px;
    margin-left: 18px;
  }

  .user {
    input {
      width: 269px;
    }
  }

  .verCode {
    text-align: center;
    outline: none;
  }

  .loginButton {
    width: 300px;
    margin-top: 10px;
  }
}
</style>
