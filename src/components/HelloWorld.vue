<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FlockBanner>This is a banner!</FlockBanner>
    <FlockButton>Submit</FlockButton>
    <FABContainer :expand="expand">
      <FABItem @click="test" href="#" style="background-color:red" tooltip="Google+">A</FABItem>
      <FABItem href="#" tooltip="Google+">B</FABItem>
      <FABItem href="#" tooltip="Google+">C</FABItem>
      <FABItem href="#" tooltip="Google+">D</FABItem>
      <FABTrigger @click="test" class="trigger" tooltip="share"></FABTrigger>
    </FABContainer>
  </div>
</template>

<script>
import { FlockBanner, FlockButton } from "@/components";
import { FABContainer, FABItem, FABTrigger } from "@/components/FAB";

export default {
  name: "HelloWorld",
  data() {
    return {
      expand: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    FlockBanner,
    FlockButton,
    FABContainer,
    FABTrigger,
    FABItem
  },
  methods: {
    test() {
      this.expand = !this.expand;
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
