<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 获取路由路径参数 -->
    <h3>msg:{{ $route.params.msg }}</h3>
    <h3>id:{{ $route.params.id }}</h3>
  </div>
</template>
