<template>
  <div class="hello">HelloWorld</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  // PropOptions :可以使用以下选项：type，default，required，validator
  @Prop() private msg!: string;
  public clickFunc(): void {}
  /**
   * @Watch(path: string, options: WatchOptions = {})
   * immediate?:boolean 侦听开始之后是否立即调用该回调函数
   * deep?:boolean 被侦听的对象的属性被改变时，是否调用该回调函数
   */
  @Watch("$route", { immediate: true })
  public get allname() {
    return "computed";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
