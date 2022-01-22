<template>
  <div id="app">

    <div class="ui stackable menu">
      <router-link to="/tasks" exact class="item">
        <i class="tasks icon"></i> โปรไฟล์ทั้งหมด
      </router-link>
      <router-link to="/tasks/new" exact class="item">
        <i class="plus circle icon"></i> เพิ่มโปรไฟล์
      </router-link>
    </div>
    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

  input{
    widows: 300px;
  }

  .label{
    width: 120px;
  }

  .input{
    margin-bottom: 10px;
  }

  button.ui.button{
    margin-top: 15px;
    display: block;
  }

</style>
