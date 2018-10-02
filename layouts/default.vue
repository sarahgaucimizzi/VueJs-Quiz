<template>
  <div class="layout">
    <div class="stars background"/>
    <div class="stars midground"/>
    <div class="stars foreground"/>
    <main class="content">
      <nuxt/>
    </main>
  </div>
</template>

<style lang="less" scoped>
.layout {
  min-height: 100vh;
  min-width: 100vw;
  background-color: #000000;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .stars {
    background-repeat: repeat;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &.background {
      animation-name: moving-stars;
      background-image: url('~assets/images/background-stars.png');
      background-position: 5% 5%;
      animation-duration: 150s;
      z-index: 100;
    }

    &.midground {
      animation-name: moving-stars;
      background: url('~assets/images/midground-stars.png');
      background-position: 20% 20%;
      animation-duration: 200s;
      z-index: 200;
    }

    &.foreground {
      animation-name: traveling-stars;
      background: url('~assets/images/foreground-stars.png');
      background-position: 35% 35%;
      animation-duration: 250s;
      z-index: 300;
    }
  }

  .content {
    background-color: #0000009c;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 400;
  }
}

@keyframes moving-stars {
  from {
    background-position: 5% 5%;
  }
  to {
    background-position: 1300% 600%;
  }
}

@keyframes traveling-stars {
  from {
    background-position-x: 5%;
  }
  to {
    background-position-x: 1300%;
  }
}
</style>
