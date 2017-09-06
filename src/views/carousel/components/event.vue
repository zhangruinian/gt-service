<template>
    <div class="event">
        <app-header title="昨日客户独立事件展板"></app-header>
        <div class="container">
            <div class="card" v-for="(event, index) in events">
                <ul class="title">
                    <li>{{event.company}}<span>{{event.terminal}}</span></li>
                    <li>解决人: <span>{{event.solver}}</span></li>
                    <li>
                        <template v-if="event.isSolved">
                            <img src="../../../assets/imgs/tick.png" alt=""> <span class="solved">已解决</span>
                        </template>
                        <span v-else class="unSolved">未解决</span>
                    </li>
                </ul>
                <div class="content">
                    <p>{{event.content}}</p>
                </div>
                <div class="time">
                    <div>
                        响应时间: <span>{{event.responseTime}}</span>
                    </div>
                    <div>
                        事件耗时: <span>{{event.consumeTime}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appHeader from '@/components/app-header'
    import axios from 'axios'
    import baseUrl from '@/api/api'

    export default {
        name: 'event',
        data () {
            return {
                events: []
               /* events: [
                    {
                        company: '斗鱼TV',
                        terminal: '移动端',
                        solver: '任华翔, 任华翔',
                        content: '斗鱼TV的二次验证和显示不一致，调不起验证，帮助定位,次验证和显示不一致，调示不一致，调不起验证，帮助定位,次验证和显示不一致，调不起验证，帮助定不起验证，帮助定位定位为用户后端导致，描述基本和旧版本的错误调用情况一致，更新sdk解决',
                        responseTime: '2017-07-22 10:31',
                        consumeTime: '1小时',
                        isSolved: true
                    },
                    {
                        company: '斗鱼TV',
                        terminal: '移动端',
                        solver: '任华翔, 任华翔',
                        content: '斗鱼TV的二次验证和显示不一致，调不起验证，帮助定位,定位为用户后端导致，描述基本和旧版本的错误调用情况一致，更新sdk解决',
                        responseTime: '2017-07-22 10:31',
                        consumeTime: '1小时',
                        isSolved: true
                    },
                    {
                        company: '斗鱼TV',
                        terminal: '移动端',
                        solver: '任华翔, 任华翔',
                        content: '斗鱼TV的二次验证和显示不一致，调不起验证，帮助定位,定位为用户后端导致，描述基本和旧版本的错误调用情况一致，更新sdk解决',
                        responseTime: '2017-07-22 10:31',
                        consumeTime: '1小时',
                        isSolved: true
                    }
                ] */
            }
        },
        methods: {
            getData () {
                return axios.get(`${baseUrl}event-list`)
            }
        },
        created () {
            this.getData().then((res) => {
                this.events = res.data
            })
        },
        components: {
            appHeader
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .event {
        /*width: 100%;*/
        /*height: 100%;*/
        .container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
            .card {
                display: flex;
                flex-direction: column;
                width: 450px;
                height: 200px;
                border-radius: 4px;
                background-color: #f7f9fb;
                box-shadow: 0px 4px 20px 0 rgba(24, 41, 84, 0.4);
                margin-top: 16px;
                ul.title {
                    display: flex;
                    padding: 13px;
                    justify-content: space-between;
                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        &:first-child {
                            color: #fff;
                            font-size: 12px;
                            width: 316px/2;
                            height: 30px;
                            border-radius: 30px/2;
                            background-color: #1482ff;
                            span {
                                margin-left: 6px;
                            }
                        }
                        &:nth-child(2) {
                            color: #fff;
                            font-size: 12px;
                            width: 316px/2;
                            height: 30px;
                            border-radius: 30px/2;
                            background-color: #00c8f3;
                            span {
                                margin-left: 5px;
                            }
                        }
                        &:nth-child(3) {
                            span.solved {
                                color: #6dcb00;
                                margin-left: 5px;
                            }
                            span.unSolved {
                                color: #ff8a00;
                            }
                        }
                        img {
                            width: 17px;
                            height: 17px;
                        }
                    }
                }
                .content {
                    height: 100px;
                    padding: 6px 10px;
                    p {
                        font-size: 14px;
                        line-height: 1.6;
                        text-align: justify;
                        color: #191919;
                    }
                }
                div.time {
                    display: flex;
                    align-self: center;
                    justify-content: space-around;
                    align-items: center;
                    width: 95%;
                    height: 65px/2;
                    border-radius: 32.5px/2;
                    background-color: #e3e5e9;
                    font-size: 13px;
                    span {
                        color: #125beb;
                        margin-left: 4px;
                    }
                }
            }
        }
    }
</style>
