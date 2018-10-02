<template>
  <div>
    {{ info.question }}
    <div>
      <button
        v-for="(choice, index) in info.choices"
        :key="index"
        class="choice"
        @click="$emit('answered', index)">
        {{ choice }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.choice {
  background: #3e4c9b;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 3px 10px;
  margin: 5px;
  color: #e7e7e7;
  font-family: 'Comfortaa', cursive;

  &:hover {
    background: #f1c856;
    color: #332d33;
  }
}
</style>
