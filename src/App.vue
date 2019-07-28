<template>
  <div id="app">
    <center>
      <img alt="Vue logo" src="./assets/logo.png" />
    </center>
    <!-- <div id="nav">
      <router-link to="/signup">新規登録はこちらから</router-link>|
      <router-link to="/">ログインはこちらから</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
#app {
  max-width: 980px;
  margin: 0 auto;
  width: calc(100% - 40px);
}
#app h1,
#app h2 {
  text-align: center;
}
</style>
