import "./upload/lrz.all.bundle"
import "./upload/load.min"
import axios from "../../axios/index";
import { Toast } from 'mint-ui'
module.exports = {
    //上传图片
    uploadPic(_this, type, num, imgData) {
        //_this当前元素，type 当前某个, num图片数量,imgData图片数组
        let that = this;
        let fileSize = 0; //图片大小
        let filepath = _this.target.value; //上传图片路径
        let files = _this.target.files;
        let imgName = filepath.substring(filepath.lastIndexOf("\\") + 1); //获取图片名称
        let isIE = /msie/i.test(navigator.userAgent) && !window.opera; //判断浏览器
        if (filepath == "") {
            return;
        }
        if (isIE && !files) {
            //let filePath = obj.value;
            let fileSystem = new ActiveXObject("Scripting.FileSystemObject");
            let file = fileSystem.GetFile(filePath);
            fileSize = file.Size;
        } else {
            fileSize = files[0].size; //图片大小
        }
        fileSize = Math.round((fileSize / 1024) * 100) / 100; //图片大小
        //console.log(fileSize);
        if (fileSize > 5 * 1024) {
            Toast("请上传小于5MB的图片");
            return false;
        }
        //上传图片格式只能为jpg jpeg png
        if(!/\.(jpg|jpeg|png|JPG|PNG)$/.test(filepath)) {
            Toast("上传图片格式不正确");
            return false;
        }

        // alert(files[0].name);
        // alert(lrz(files[0], {width: 650}))
        //以图片宽度为650进行压缩
        lrz(files[0], {
            width: 650
        }).then(function(rst) {
            // alert(22)
            // console.log(rst.base64);
            //上传图片
            let param = {
                imgdata: rst.base64, //压缩后的base值
                imgName: imgName
            };
            axios.postUploadImg(param).then(res => {
                if (res.code == 200 && res.data != "" && res.data != null) {
                    let urlName = {
                        imgurl: _tuPath + res.data, //图片路径
                        imgNo: res.data,
                        data_state: 1 //上传状态
                    };
                    let imgNum = imgData.length; //添加图片数量
                    if (imgData[type].data_state == 1) {
                        //点击框是否已有图片
                        imgData[type].imgurl = _tuPath + res.data;
                        imgData[type].imgNo = res.data;
                    } else {
                        if (num == 1) {
                            //上课凭证
                            imgData.splice(0);
                            imgData.unshift(urlName);
                        } else if (num == 3) {
                            //课程评价
                            if (imgNum == 1) {
                                //上传图片数组
                                imgData.unshift(urlName);
                            } else if (imgNum == 2) {
                                imgData.splice(1, 0, urlName);
                            } else if (imgNum == 3) {
                                imgData.splice(2);
                                imgData.push(urlName);
                            }
                        }
                    }
                } else {
                    Toast.toast("上传失败");
                    return false;
                    ///data.message为上传失败原因
                }
            });
        })
        //     .catch(function (err) {
        //     // 如果出错了，这里可以捕捉到错误信息
        //     // 而且以上的then都不会执行
        //     alert(err);
        // }).always(function () {
        //     alert(0)
        //     // 不管是成功失败，这里都会执行
        // });
    },
    //删除上传图片
    removeUploadPic(allPic, type, num, imgData) {
        //allPic 已上传所有图片 type 第几张图  Num图片数量 imgData图片数组
        //清空input file值,重复上传图片
        for (let i = 0; i < allPic.length; i++) {
            let imgsIndex = type+1;
            let obj = document.getElementById("img"+imgsIndex); //遍历所有input:file
            obj.value = ""; //清空input file图片值
        }
        //删除某个图片
        if (num == 1) {
            //上传凭证只上传一张图
            if (type == 0) {
                imgData.splice(0);
            }
        } else if (num == 3) {
            //课程评价上传三张图
            if (type == 0) {
                imgData.splice(0, 1);
            } else if (type == 1) {
                imgData.splice(1, 1);
            } else if (type == 2) {
                imgData.splice(2, 1);
            }
        }
        let defaultImg = {
            //添加图片默认样式
            imgurl: require("../../page/fankui/img/addPic.png"),
            imgNo: "",
            data_state: 0
        };
        if (num == 1) {
            //上传凭证一张图
            imgData.push(defaultImg);
        } else if (num == 3) {
            //课程评价三张图
            let lastNum = imgData.length - 1; //最后一个数组
            if (imgData[lastNum].data_state != 0 && imgData.length <= 2) {
                imgData.push(defaultImg);
            }
        }
    }
}