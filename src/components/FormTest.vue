<template>
  <div>
    <h3>{{ title }}</h3>

    <el-form
      action=""
      ref="form"
      :model="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()">登录</el-button>
      </el-form-item>
    </el-form>

    <h3>{{ description }}</h3>
    <s-form :model="form" :rules="rules" ref="sForm">
      <s-form-item label="用户名" prop="name" for="name">
        <s-input v-model="form.name" id="name"></s-input>
      </s-form-item>
      <s-form-item label="密码" prop="password" for="password">
        <s-input
          v-model="form.password"
          id="password"
          type="password"
        ></s-input>
      </s-form-item>
      <s-form-item>
        <s-button @click="sSubmit"></s-button>
      </s-form-item>
    </s-form>
  </div>
</template>

<script>
import SFormItem from "./FormItem";
import SInput from "./Input";
import SForm from "./Form";
import SButton from "./Button";

export default {
  inject: ["description"],
  props: {
    title: { type: String, required: true },
  },
  components: {
    SFormItem,
    SInput,
    SForm,
    SButton,
  },
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名" },
          { min: 6, max: 10, message: "请输入6～10位用户名" },
        ],
        password: [
          { required: true, message: "请输入密码" },
          { min: 6, max: 10, message: "请输入6～10位密码" },
        ],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("登录成功！");
        } else {
          alert("校验不通过！");
        }
      });
    },
    sSubmit() {
      this.$refs.sForm.validate((valid) => {
        if (valid) {
          alert("登录成功！");
        } else {
          alert("校验不通过！");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
