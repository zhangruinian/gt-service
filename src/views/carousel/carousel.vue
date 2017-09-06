<template>
    <div class="content">
        <el-carousel  :interval='5000' arrow="always" class="carousel" height="100%">
            <el-carousel-item class="item">
                <event></event>
            </el-carousel-item>
            <el-carousel-item class="item">
                <light></light>
            </el-carousel-item>
            <el-carousel-item class="item">
                <best></best>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import event from '@/views/carousel/components/event'
    import light from '@/views/carousel/components/light'
    import best from '@/views/carousel/components/best'

    export default {
        name: 'carousel',
        data () {
            return {}
        },
        components: {
            event, light, best
        },
        created () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        width: 100%;
        height: 100%;
        padding: 15px 20px;
        background-image: linear-gradient(to top, #1493ff, #1461ff);
        .carousel {
            height: 100%;
            .item {
                /*height: 100%;
                width: 100%;*/
            }
        }
    }
</style>
