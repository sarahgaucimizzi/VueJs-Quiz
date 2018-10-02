<template>
  <main class="layout">
    <p>
      Seems like you got lost in the Unknown Regions.
      R2-D2 suggests going&nbsp;
      <nuxt-link
        to="/"
        class="go-to-link">
        back
      </nuxt-link>
    </p>
  </main>
</template>

<style lang="less" scoped>
.layout {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
</style>
