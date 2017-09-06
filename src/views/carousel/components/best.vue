<template>
    <div class="best">
        <div>
            <app-header title="上周服务最佳展板"></app-header>
        </div>
        <div class="main">
            <ul>
                <li><p>上周服务最佳人员</p> <span>{{best.people}}</span></li>
                <li><p>客户名称</p> <span>{{best.custom}}</span></li>
                <li>
                    <p>服务态度</p>
                    <span>
                        <el-rate
                            v-model="best.manner"
                            disabled
                            disabled-void-color="#d4d6d8"
                            :max="5">
                        </el-rate>
                    </span>
                </li>

                <li><p>解决事件耗时</p> <span>{{best.time}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import appHeader from '@/components/app-header'
    import axios from 'axios'
    import baseUrl from '@/api/api'

    export default {
        name: 'best',
        data () {
            return {
                best: {
                    people: '',
                    custom: '',
                    manner: 0,
                    time: ''
                }
            }
        },
        methods: {
            getData () {
                return axios.get(`${baseUrl}best-server`)
            }
        },
        created () {
            this.getData().then((res) => {
                this.best = res.data
            })
        },
        components: {
            appHeader
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .best {
        width: 100%;
        display: flex;
        flex-direction: column;
        .main {
            display: flex;
            align-items: center;
            width: 1830px/2;
            height: 850px/2;
            border-radius: 8px/2;
            margin: 0 auto;
            margin-top: 10px;
            box-shadow: 0px 2px 10px 0 rgba(24, 41, 84, 0.4);
            background: url("../../../assets/imgs/best-bg.png") no-repeat center right;
            background-color: #f7f9fb;
            background-size: 540px/2 850px/2;
            ul {
                width: 410px;
                height: 220px;
                margin-left: 120px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    p {
                        font-size: 15px;
                        width: 335px/2;
                        height: 75px/2;
                        border-radius: 38px/2;
                        background-color: #3594ff;
                        color: #fff;
                        text-align: center;
                        line-height: 75px/2;
                    }
                    span {
                        margin-top: 10px;
                        font-size: 26px;
                        color: #191919;
                    }
                }
            }
        }
    }
</style>
