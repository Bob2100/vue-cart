# vue-cart
vue的基本使用，购物车小案例
# vue官网
http://cn.vuejs.org

http://cli.vuejs.org
# 安装vue-cli
```
npm install -g @vue/cli
npm install -g @vue/cli-service-gloal
``` 
# 查看版本号
```
vue -V
```
# 单文件开发
## 创建单文件
single.vue
```html
<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello World'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
```
## 运行
```
vue serve single.vue
```
## 效果
![logo](./src/assets/single.png)
# 正式项目开发
## 新建项目
```
vue create vue-cart
```
## 运行
```
npm run serve
```
## 效果
![新建项目](./src/assets/new-project.png)
## 配置npm start
![新建项目](./src/assets/npm-start.png)
这样只要通过
```
npm start
```
就可以运行项目了
## 语法
### 条件语句 v-if
```html
<template>
    <div>
        <h1 v-if="isShow">{{message}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello World',
                isShow: false
            }
        },
        created () {
            setTimeout(() => {
                this.isShow = true;
            }, 5000);
        },
    }
</script>

<style lang="scss" scoped>

</style>
```
### 循环语句 v-for
```html
<template>
    <div>
        <table border="1">
            <tr v-for="g in goods" :key="g.id">
                <td>{{g.text}}</td>
                <td>{{g.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods: [
                    {id: 1, text: 'Java架构师', price: 100},
                    {id: 2, text: '前端架构师', price: 200},
                    {id: 3, text: 'PHP架构师', price: 300}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
```
### v-model双向绑定与事件绑定@click
```html
<template>
    <div>
        id <input type="text" v-model="id">
        text <input type="text" v-model="text">
        <input type="button" value="加入购物车" @click="addGood">
        <div>{{text}}</div>
        <table border="1">
            <tr v-for="g in goods" :key="g.id">
                <td>{{g.text}}</td>
                <td>{{g.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: '',
                text: '',
                goods: [
                    {id: 1, text: 'Java架构师', price: 100},
                    {id: 2, text: '前端架构师', price: 200},
                    {id: 3, text: 'PHP架构师', price: 300}
                ]
            }
        },
        methods: {
            addGood() {
                this.goods.push({id: this.id, text: this.text, price: 100});
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
```



















































## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
