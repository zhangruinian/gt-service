<template>
    <div class="light">
        <app-header title="亮点展示展板"></app-header>

        <div class="content">
            <img src="../../../assets/imgs/star.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import appHeader from '@/components/app-header'

    export default {
        name: 'light',
        data () {
            return {
                value: 4
            }
        },
        components: {
            appHeader
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .light{
        width: 100%;
        height: 10%;
       .content{
           width: 1831px/2;
           height: 856px/2;
           margin: 10px auto;
           border-radius: 8px;
           background-color: #f7f9fb;
           box-shadow: 0px 4px 20px 0 rgba(24, 41, 84, 0.4);
           display: flex;
           justify-content: center;
           align-items: center;
           img{
               width: 95%;
               height: 95%;
           }
       }
   }
</style>
