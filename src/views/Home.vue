<template>
  <div class="home ">
    <h1 class="tc">NEUMORPHIC DESIGN</h1>
    <h2>FLAT ELEMENT: n-ele-[0-4]</h2>
    <div class="box-cont">
      <div class="n-elm n-ele-0 box"></div>
      <div class="n-elm n-ele-1 box"></div>
      <div class="n-elm n-ele-2 box"></div>
      <div class="n-elm n-ele-3 box"></div>
      <div class="n-elm n-ele-4 box"></div>
    </div>
    <h2>PRESSED ELEMENT: n-ele-in[0-4]</h2>
    <div class="box-cont">
      <div class="n-elm n-ele-in-0 box"></div>
      <div class="n-elm n-ele-in-1 box"></div>
      <div class="n-elm n-ele-in-2 box"></div>
      <div class="n-elm n-ele-in-3 box"></div>
      <div class="n-elm n-ele-in-4 box"></div>
    </div>
    <h2>TEXT: n-text-[0-3]</h2>
    <p class="n-text n-text-0">HELLO WORLD</p>
    <p class="n-text n-text-1">HELLO WORLD</p>
    <p class="n-text n-text-2">HELLO WORLD</p>
    <p class="n-text n-text-3">HELLO WORLD</p>
    <h2>BUTTONS</h2>
    <button class="n-btn mx">click me</button>
    <button class="n-btn n-btn-pill mx">click me</button>
    <button class="n-btn n-btn-in mx">click me</button>
    <button class="n-btn n-btn-in n-btn-pill mx">click me</button>
    <h2>AVATAR</h2>
    <div class="flex">
      <div class="xs">
        <a href="#" class="n-avt mx">SM</a>
      </div>
      <div class="s">
        <a href="#" class="n-avt mx">SM</a>
      </div>
      <div class="m">
        <a href="#" class="n-avt mx">SM</a>
      </div>
      <div class="l">
        <a href="#" class="n-avt mx">SM</a>
      </div>
      <div class="xl">
        <a href="#" class="n-avt mx">SM</a>
      </div>
    </div>
        <div class="flex">
      <div class="xs">
        <a href="#" class="n-avt n-avt-in mx">SM</a>
      </div>
      <div class="s">
        <a href="#" class="n-avt n-avt-in mx">SM</a>
      </div>
      <div class="m">
        <a href="#" class="n-avt n-avt-in mx">SM</a>
      </div>
      <div class="l">
        <a href="#" class="n-avt n-avt-in mx">SM</a>
      </div>
      <div class="xl">
        <a href="#" class="n-avt n-avt-in mx">SM</a>
      </div>
    </div>
    <h2>ALERTS</h2>
    <div class="n-alert n-alert-info mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-danger mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-warning mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-success mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-info n-alert-in mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-danger n-alert-in mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-warning n-alert-in mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <div class="n-alert n-alert-success n-alert-in mx-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin erat arcu, cursus nec massa et, pulvinar fringilla mauris.
    </div>
    <h2>INPUT ELEMENT</h2>
    <div class="v-c mx">
      <b class="ms">TEXT INPUT</b>
      <input type="text" class="n-input" placeholder="input text">
    </div>
    <div class="v-c mx">
      <b class="ms">NUMBER INPUT</b>
      <input type="number" class=" n-input" placeholder="input number">
    </div>
    <div class="v-c mx">
      <b class="ms">NUMBER SELECT</b>
      <select class="n-input">
        <option value="">OPTION 1</option>
        <option value="">OPTION 2</option>
        <option value="">OPTION 3</option>
        <option value="">OPTION 4</option>
        <option value="">OPTION 5</option>
        <option value="">OPTION 6</option>
      </select>
    </div>
    <div class="v-c mx">
      <b class="ms">CHECKBOX INPUT</b>
      <input type="checkbox" class=" n-input" >
    </div>
    <h2>WRAP INPUT ELEMENT</h2>
    <div class="n-wrap-input mx-1">
      <div class="title">Phone NO:</div>
      <input type="text">
    </div>
    <div class="n-wrap-input n-wrap-in mx-1">
      <div class="title">Phone NO:</div>
      <input type="text">
    </div>
    <h2>SWITCH</h2>
    <label style="font-size: 14px" class="n-switch mx">
      <input type="checkbox">
    </label>
    <label style="font-size: 18px" class="n-switch mx">
      <input type="checkbox">
    </label>
    <label style="font-size: 20px" class="n-switch mx">
      <input type="checkbox">
    </label>
    <h2>RANGE</h2>
    <input type="range" class="n-slider mx">
    <input type="range" class="n-slider danger mx">
    <input type="range" class="n-slider warning mx">
    <input type="range" class="n-slider success mx">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss">
.home {
  max-width: 1000px;
  margin: 0px auto;
}
p {
  font-size: 100px;
  margin: 20px;
}
.box-cont {
  display: flex;
  padding: 30px;
  justify-content: space-between;
}
.box {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
