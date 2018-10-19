<template>
  <div>
    <!-- <iframe ref="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=280 height=52 src="//music.163.com/outchain/player?type=2&id=458240559&auto=1&height=32"></iframe> -->
    <video ref="play" src="https://m10.music.126.net/20181017190434/cb0c3a27ebaea16d5004ebaca51d165d/ymusic/1853/a37f/a15f/11ba934960de6c1a2dd37d16ac7ca1c7.mp3" controls autoplay loop style="display:none;"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:{
    play:Boolean,
  },
  components: {

  },
  mounted() {
    console.log(this.play);
  },
  watch:{
    play:function(val,oldVal) {
      if (this.play) {
        this.$refs.play.play();
      }else {
        this.$refs.play.pause();
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
