<template>
  <main class="layout">
    <nuxt/>
    <div class="credit">
      <a 
        href="https://www.behance.net/gallery/43155769/Le-Cosmos-de-Star-Wars-II" 
        target="_blank"
        rel="nofollow noopener">
        Images source
      </a>
    </div>
  </main>
</template>

<style lang="less" scoped>
.layout {
  background-color: #000000;

  .credit {
    position: fixed;
    bottom: 5px;
    right: 5px;
    a {
      color: #ffffff;

      &:hover {
        color: #332d33;
      }
    }
  }
}
</style>
