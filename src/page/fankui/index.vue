<template>
    <div class="wrap">
        <div class="header">意见反馈</div>
        <div class="feedCont">
            <p>您的反馈意见，我们会认真阅读并及时处理。审核通过的优质意见，我们会给予相应的积分奖励。</p>
            <div class="feedTit">反馈内容</div>
            <div class="textareaBox" @click="focusOn()">
                <textarea class="feedback" placeholder="请填写您的反馈..." ref="mytextarea" @input="textareaCount()" @blur="bodyScroll()"></textarea>
                <div class="textareaDiv">
                    <span v-html="feedbackNum" :class="{red:feedbackNum>500}"></span><span>/500</span>
                </div>
            </div>
        </div>
        <!--上传图片-->
        <div class="praiseComplaintsText">上传图片(选填)</div>
        <div class="credentials" id="credentials">
            <dl v-for="(srcName , i) in updataImgSrc" :key="i">
                <dt>
                    <label :for="'img'+(i+1)"></label>
                    <input type="file" style="display:none" class="_chagnge_file" :id="'img'+(i+1)" name="file" accept="image/*" @change="fileChange($event,i)"/>
                    <img class="showImg" :data_state="srcName.data_state" :src="srcName.imgurl" alt="" />
                    <input class="srcImg" :id="'srcImg'+(i+1)" type="hidden" value="">
                </dt>
                <dd :class="{hide:srcName.data_state==0}" @click="removeImg(i)"></dd>
            </dl>
        </div>

    </div>
</template>
<script>
// import uploadPic from "../../common/js/uploadPic"; //压缩图片js
export default {
    data() {
        return {
            feedbackNum: 0, //反馈内容数字
            updataImgSrc: [//上传的图片
                {
                    imgurl: require('./img/addPic.png'),
                    imgNo: '',
                    data_state: 0,
                },
            ],
        }
    },
    methods: {
        focusOn:function () { //点击textarea外层div 获取焦点
            this.$refs.mytextarea.focus();
        },
        textareaCount:function () { //获取textarea字数，超过500字为红色
            this.feedbackNum = this.$refs.mytextarea.value.length;
        },
        //输入框失去焦点后，向下滚动1px
        bodyScroll() {
            var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
            document.body.scrollTop=1;
        },
        //添加上传图片
        fileChange(_this,type){
            console.log(this.updataImgSrc)
            uploadPic.uploadPic(_this,type,3,this.updataImgSrc);//调取上传图片方法 _this当前元素，type 当前某个, num图片数量,imgData图片数组
        },
        //删除上传图片
        removeImg(type){
            let allPic = document.querySelector('#credentials').childNodes;//获取所有dl
            uploadPic.removeUploadPic(allPic,type,3,this.updataImgSrc);//调取删除图片方法 allPic 已上传所有图片 type 第几张图  Num图片数量 imgData图片数组
        },
    }
}
</script>
<style scoped>
.header {
    text-align: center;
}
.wrap {
    text-align: left;
}
.feedTit {
    margin-top: 20px;
}
.feedCont{
    margin:20px;
}
.feedback{
    width: 100%;
    height: 106px;
    background: #F3F3F5;
    border: none;
    color: #666;
    font-size: 16px;
    line-height: 20px;
}
.textareaBox{
    position: relative;
    margin: 40px 0 50px 0;
    padding:13px 38px 52px 20px;
    height: 95px;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    background: #F3F3F5;
    margin: 20px 0
}
.textareaDiv{
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 14px;
    line-height: 14px;
    color: #999;
}
.red{
    color: red;
}
textarea::-webkit-input-placeholder{
    color:#999;
}
textarea::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#999;
}
textarea:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999;
}
textarea:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#999;
}
.praiseComplaintsText {
    margin: 20px;
}
.addPic{
    width: 60px;
    height: 60px;
}
input,textarea{
    appearance:none;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari 和 Chrome */
}

.credentials dl {
    width: 120px;
    height: 120px;
    margin: 0 40px 0 0;
    float: left;
    position: relative;
}
.credentials dl dt {
    height: 100%;
}
.credentials dl label {
    position: absolute;
    margin: 0;
    width: 120px;
    height: 120px;
    border: none;
}
.credentials dl dt img {
    width: 100%;
    height: 100%;
}
.credentials dl dd {
    background: url("./img/delPic.png") no-repeat;
    background-size: 22px;
    width: 22px;
    height: 22px;
    position: absolute;
    right: 5px;
    top: 5px;
}
.hide{
    display: none;
}
</style>