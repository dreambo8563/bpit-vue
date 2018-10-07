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
    <br><br>
    <TransformContainer defaultClass="transform" openClass="openDialog" :open="expand">
      <div class="button-copy" v-if="!expand" @click="expand = true">
        Add Product
      </div>
      <div v-else class="cancel ">
        <span @click="expand=false">
          Cancel
        </span>
      </div>
    </TransformContainer>
    <br>
    <br>

    <h2>Wow this one is super incredibly cool, and this
      <span v-HoverMagicUnderline="{leftColor: 'black',rightColor: 'blue'}">one is on Multiple Lines!</span>
      I wish I had found this like thirty projects ago when I was representing the lollipop guild.</h2>

    <br>
    <br>
    <BouncingLoader></BouncingLoader>
    <BouncingLoader color="red"></BouncingLoader>
    <br>
    <br>
    <DonutSpinner></DonutSpinner>
    <DonutSpinner style="color:red"></DonutSpinner>
    <DonutSpinner style="color:pink"></DonutSpinner>
    <br>
    <br>
    <BorderInput :effects="1"></BorderInput>
    <BorderInput v-model="msg" :effects="2"></BorderInput>
    <BorderInput :effects="3"></BorderInput>
    <BorderInput :effects="4"></BorderInput>
    <BorderInput :effects="5"></BorderInput>
    <BorderInput :effects="6"></BorderInput>
    <br>
    <br>
    <LabelInput v-model="msg" label="Name" :effects="1"></LabelInput>
    <LabelInput v-model="msg" label="Name" :effects="2"></LabelInput>
    <LabelInput v-model="msg" label="Name" :effects="3"></LabelInput>
    <LabelInput v-model="msg" label="Name" :effects="4"></LabelInput>
    <LabelInput v-model="msg" label="Name" :effects="5"></LabelInput>
    <LabelInput v-model="msg" label="Name" :effects="6"></LabelInput>
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
  FABItem,
  TransformContainer,
  HoverMagicUnderline,
  BouncingLoader,
  DonutSpinner,
  BorderInput,
  LabelInput
} from "./index.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      expand: false,
      msg: "Welcome to Your Vue.js App"
    };
  },
  directives: { ...HoverAnimation, ...HoverMagicUnderline },
  components: {
    FlockBanner,
    FlockButton,
    FABContainer,
    FABTrigger,
    FABItem,
    GradientButton,
    TransformContainer,
    BouncingLoader,
    DonutSpinner,
    BorderInput,
    LabelInput
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
<style lang="scss" scoped>
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
  background-image: url("https://cbwconline.com/IMG/Share.svg");
  background-size: contain;
}

.button-copy {
  text-align: center;
  line-height: 144px;
  text-transform: uppercase;
  font-weight: bold;
  color: #f7f7f7;
}

.transform {
  background-color: #ffc145;
  height: 144px;
  width: 144px;
  border-radius: 72px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
}
.openDialog {
  background-color: #fafafa;
  padding: 18px 32px;
  border-radius: 5px;
  width: 420px;
  height: 398px;
  cursor: default;
}
</style>
