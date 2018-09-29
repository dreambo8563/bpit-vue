<template>
  <div class="hello">
    <h1 class="myclass">{{ msg }}</h1>

    <FlockBanner>This is a banner!</FlockBanner>
    <FlockButton>Submit</FlockButton>
    <FlockButton :disabled="true">Submit</FlockButton>
    <FlockButton type="secondary">Submit</FlockButton>
    <FlockButton type="destructive">Submit</FlockButton>
    <FlockButton :invert="true">Submit</FlockButton>
    <FlockButton :loading="true">Submit</FlockButton>
    <FlockButton size="half">Submit</FlockButton>
    <FlockButton size="full">Submit</FlockButton>
    <GradientButton :disabled="true">GradientButton</GradientButton>
    <GradientButton @click="log" type="2">GradientButton</GradientButton>
    <FABContainer :expand="expand">
      <FABItem @click="test" href="#" style="background-color:red" tooltip="Google+">A</FABItem>
      <FABItem href="#" tooltip="Google+">B</FABItem>
      <FABItem href="#" tooltip="Google+">C</FABItem>
      <FABItem href="#" tooltip="Google+">D</FABItem>
      <FABTrigger @click="test" class="trigger" tooltip="share"></FABTrigger>
    </FABContainer>
    <br>
    <br>
    <a v-HoverAnimation="{textColor: '#e85a19', backgroundColor: '#f5ce62',foregroundColor:'blue'}"> became hover animate</a>

    <br>
    <br>
    <span v-HoverAnimation="{textColor: 'black', backgroundColor: '#c92918',foregroundColor:'#e74c3c'}">
      span hover animate
    </span>
  </div>
</template>

<script>
import {
  FlockBanner,
  FlockButton,
  GradientButton,
  HoverAnimation,
  FABContainer,
  FABTrigger,
  FABItem
} from "./index.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      expand: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  directives: { ...HoverAnimation },
  components: {
    FlockBanner,
    FlockButton,
    FABContainer,
    FABTrigger,
    FABItem,
    GradientButton
  },
  methods: {
    test() {
      this.expand = !this.expand;
    },
    log() {
      console.log("log here");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.trigger {
  /* -webkit-transition-delay: 25ms;
                                                                                                                                                                                                                                    transition-delay: 25ms; */
  background-image: url("https://cbwconline.com/IMG/Share.svg");
  background-size: contain;
}
</style>
