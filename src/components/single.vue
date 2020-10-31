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