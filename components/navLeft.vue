<template>
  <div class="navLeft">
    <img class="avatar" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=2755fdfc45c2d562f208d7ebdf2af7d2/f9198618367adab4d48048df81d4b31c8601e4de.jpg" alt="">
    <br>
    <Icon type="logo-github" size='36'/>
    <Icon type="md-mail" size='36'/>
    <span ref="play" class="my-face fz24"><Icon type="ios-musical-notes" /> (●'◡'●)ﾉ <Icon type="ios-musical-notes" /></span>
    <music :play='play'/>
  </div>
</template>

<script>
import music from '~/components/neteaseMusic.vue'

export default {
  data() {
    return {
      play:true
    }
  },
  components: {
    music
  },
  mounted() {
    console.log(this);
    
    this.$refs.play.onclick = ()=> {
      this.play = !this.play
      if (!this.play) {
        this.$refs.play.classList.remove('my-face')
      }else {
        this.$refs.play.classList.add('my-face')
      }
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.navLeft
  width 280px
  position: absolute;
  left: 0;
  top: 0;
  .avatar
    width 266px

@keyframes haha {
  2%, 24%, 80% {
    -webkit-transform: translate(0, 1.5px) rotate(1.5deg);
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4%, 68%, 98% {
    -webkit-transform: translate(0, -1.5px) rotate(-0.5deg);
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  38%, 6% {
    -webkit-transform: translate(0, 1.5px) rotate(-1.5deg);
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8%, 86% {
    -webkit-transform: translate(0, -1.5px) rotate(-1.5deg);
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10%, 72% {
    -webkit-transform: translate(0, 2.5px) rotate(1.5deg);
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12%, 64%, 78%, 96% {
    -webkit-transform: translate(0, -0.5px) rotate(1.5deg);
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14%, 54% {
    -webkit-transform: translate(0, -1.5px) rotate(1.5deg);
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    -webkit-transform: translate(0, -0.5px) rotate(-1.5deg);
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18%, 22% {
    -webkit-transform: translate(0, 0.5px) rotate(-1.5deg);
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20%, 36%, 46% {
    -webkit-transform: translate(0, -1.5px) rotate(2.5deg);
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  26%, 50% {
    -webkit-transform: translate(0, 0.5px) rotate(0.5deg);
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    -webkit-transform: translate(0, 0.5px) rotate(1.5deg);
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30%, 40%, 62%, 76%, 88% {
    -webkit-transform: translate(0, -0.5px) rotate(2.5deg);
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32%, 34%, 66% {
    -webkit-transform: translate(0, 1.5px) rotate(-0.5deg);
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  42% {
    -webkit-transform: translate(0, 2.5px) rotate(-1.5deg);
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44%, 70% {
    -webkit-transform: translate(0, 1.5px) rotate(0.5deg);
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  48%, 74%, 82% {
    -webkit-transform: translate(0, -0.5px) rotate(0.5deg);
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  52%, 56%, 60% {
    -webkit-transform: translate(0, 2.5px) rotate(2.5deg);
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    -webkit-transform: translate(0, 0.5px) rotate(2.5deg);
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  84% {
    -webkit-transform: translate(0, 1.5px) rotate(2.5deg);
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  90% {
    -webkit-transform: translate(0, 2.5px) rotate(-0.5deg);
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    -webkit-transform: translate(0, 0.5px) rotate(-0.5deg);
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    -webkit-transform: translate(0, 2.5px) rotate(0.5deg);
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  0%, 100% {
    -webkit-transform: translate(0, 0) rotate(0);
    transform: translate(0, 0) rotate(0);
  }
}
.my-face {
  -webkit-animation: haha 5s infinite ease-in-out;
  animation: haha 5s infinite ease-in-out;
  display: inline-block;
  margin: 0 5px;
}
.fz24 {
  font-size 24px
  vertical-align middle
  cursor pointer
}
</style>
