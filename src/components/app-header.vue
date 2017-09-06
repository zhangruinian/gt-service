<template>
    <div class="header">
        <img src="../assets/imgs/logo.png" alt="">
        <span class="title">{{title}}</span>
        <div class="time" @click=navigate>
            <span>{{date}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                date: null
            }
        },
        props: {
            title: {
                type: String
            }
        },
        methods: {
            navigate () {
                this.$prompt('请输入管理员密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({value}) => {
                    if (value === 'service') {
                        this.$router.push({path: 'admin'})
                    } else {
                        this.$message.error('密码错误,请勿非法进入')
                    }
                })
            }
        },
        created () {
            let tempDate = new Date()
            this.date = tempDate.toLocaleDateString()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        width: 100%;
        height: 208px/4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 513px/2;
            height: 105px/2;
        }
        span.title {
            font-size: 46px/2;
            color: #fff;
            margin-left: 295px/4;
        }
        .time {
            width: 356px/2;
            height: 35px;
            background: url("../assets/imgs/time.png") no-repeat;
            background-size: contain;
            text-align: center;
            line-height: 35px;
            span {
                font-size: 15px;
                color: #fff;
            }
        }
    }
</style>
