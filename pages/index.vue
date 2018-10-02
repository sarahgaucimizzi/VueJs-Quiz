<template>
  <div class="parallax-wrapper">
    <div class="section1">
      <div class="content">
        When the going gets tough
      </div>
    </div>
    <div class="section2">
      <div class="content">
        A rebellion will rise
      </div>
    </div>
    <div class="section3 static">
      <div class="content">
        A battle ensues
      </div>
    </div>
    <div class="section4">
      <div class="content">
        Between the good
      </div>
    </div>
    <div class="section5">
      <div class="content">
        And the evil
      </div>
    </div>
    <div class="section6 static">
      <div class="content">
        Help in the fight by taking a&nbsp;
        <nuxt-link 
          to="quiz" 
          class="go-to-link">
          Quiz
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'frontpage'
}
</script>

<style lang="less" scoped>
.parallax-wrapper {
  > div {
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #ffffff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Comfortaa', cursive;
    font-size: 2em;

    &.static {
      background-color: #1f2223;
    }

    &.section1 {
      background-image: url('~assets/images/BobaFett.jpg');
      color: #000000;
    }

    &.section2 {
      background-image: url('~assets/images/MillenniumFalcon.jpg');
    }

    &.section4 {
      background-image: url('~assets/images/Yoda.jpg');
      background-position: right bottom;
    }

    &.section5 {
      background-image: url('~assets/images/DarthVader.jpg');
    }

    .content {
      text-align: center;
    }
  }
}
</style>
