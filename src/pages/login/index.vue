<template>
    <div class="w100">
        <div class="my-swipe w100">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="w100">
            <van-grid>
                <van-grid-item @click="toModules(1)" icon="orders-o" text="模块1" />
                <van-grid-item @click="toModules(2)" icon="photo-o" text="模块2" />
                <van-grid-item @click="toModules(3)" icon="tv-o" text="模块3" />
                <van-grid-item @click="toModules(4)" icon="envelop-o" text="模块4" />
            </van-grid>
        </div>
        <div class="w100 mt-4">
            <van-button size="large" type="primary" @click="back">返 回</van-button>
        </div>
        <div class="w100 mt-4">
            <van-button size="large" type="primary" @click="changeTitle">修改标题</van-button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Grid, GridItem, Button, Notify } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Notify)
export default {
    name: 'Index',
    data() {
        return {
            images: [
                'https://img01.yzcdn.cn/vant/apple-1.jpg',
                'https://img01.yzcdn.cn/vant/apple-2.jpg'
            ]
        }
    },
    mounted() {
        // this.$nextTick(() => {
        //     document.addEventListener('UniAppJSBridgeReady', function() {
        //         alert(1212)
        //     })
        // })
    },
    methods: {
        toModules(type) {
            Notify({ type: 'primary', message: '暂未开通，请等待！' })
        },
        back() {
            // eslint-disable-next-line no-undef
            uni.navigateBack()
        },
        changeTitle() {
            document.title = '情报内容'
        }
    }
}
</script>
<style lang="scss" scoped>
.my-swipe ::v-deep .van-swipe-item {
    height: 500px;
    text-align: center;
    color: #ffffff;
    img {
        width: 100%;
    }
}

</style>
