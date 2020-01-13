import axios from "axios";
import Qs from "qs";
const instance = axios.create();
axios.defaults.withCredentials = true;
//请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//响应拦截器
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        return Promise.reject(error);
    }
);
export default {
    axiosPost(url, param) {
        return new Promise(function(resolve, reject) {
            instance({
                method: "post",
                url: url,
                data: param,
                headers: { "content-type": "application/x-www-form-urlencoded" }
            }).then(res => {
                resolve(res);
            });
        });
    },
    axiosGet(url, param) {
        return new Promise(function(resolve, reject) {
            instance({
                method: "get",
                url: url,
                data: param
                // headers: {'X-Requested-With': 'XMLHttpRequest'},
            }).then(res => {
                resolve(res);
            });
        });
    },
    axiosPostForm(url, param) {
        return new Promise(function(resolve, reject) {
            instance({
                method: "post",
                url: url,
                data: Qs.stringify(param),
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }).then(
                response => {
                    resolve(response);
                },
                error => {
                    reject(error);
                }
            );
        });
    },
    axiosPostJson(url, param) {
        return new Promise(function(resolve, reject) {
            instance({
                method: "post",
                url: url,
                data: param,
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            }).then(
                response => {
                    resolve(response);
                },
                error => {
                    reject(error);
                }
            );
        });
    },
    egPost: (data, params) => {
        return this.axiosPost(_ucPath + "/user/info", data);
    },
    egGet: (data, params) => {
        return this.axiosGet(_skuPath + "/city/list", data);
    },
    cityList: () => {
        return this.axiosPost(_ucPath + "/city/list");
    },
    //投诉建议提交按钮
    complaintSubmit(data) {
        return this.axiosPostForm(_skuPath + "/user/complain/save", data);
    },
    //用户是否购买过课程
    isBuyLesson() {
        return this.axiosPost(_skuPath + "/users/complain/isBuy");
    },
    getSkuVideoList(data) {
        return this.axiosGet(_skuPath + "/wap/moreCourses/" + data);
    },

    //获取咨询按钮是否显示
    postZixunShow(data) {
        return this.axiosPost(_skuPath + "/common/customerService", data);
    },
    //记录学员最后一次点击的sku
    postUpdateUserSku(data) {
        return this.axiosPost(_skuPath + "/userStudySku/updateOrSave", data);
    },
    //sku首页轮播图
    getSowingMap(data) {
        return this.axiosGet(_skuPath + "/wap/carousel/" + data);
    },
    //sku首页配置
    postConfigSku(data) {
        return this.axiosPost(_skuPath + "/index/config/sku", data);
    },
    //sku首页视频列表
    getHomePageVideoList(data) {
        return this.axiosGet(_skuPath + "/wap/courses/" + data);
    },
    //sku首页公开课列表
    getHomePageOpenLives(data) {
        return this.axiosGet(_skuPath + "/wap/openLives/" + data);
    },
    //系统班列表
    postSystemClass(skuId, data) {
        return this.axiosPost(_skuPath + "/feeLive/" + skuId + "?" + data);
    },
    //sku 分类
    getSkuList() {
        return this.axiosGet(_skuPath + "/wap/direction");
    },
    //公众号传参
    gzHOauthHome(data) {
        return this.axiosPost(_wechatPath + "/mq/oauthHome", data);
    },
    //获取小能Key
    postXiaoNengKey(data) {
        return this.axiosPost(_skuPath + "/popup/config/" + data);
    },
    //近期预告
    getPresent(data) {
        return this.axiosGet(_skuPath + "/wap/moreOpenLives/" + data);
    },
    // 获取用户信息
    sso(data) {
        return this.axiosGet(_ssoPath + "/uc/validate-user" + data);
    },
    // 上传图片
    postUploadImg(data) {
        return this.axiosPostForm(_skuPath + "/file/upload", data);
    },

    // 模考排行榜
    mockList(sign, data) {
        return this.axiosPostJson(_ntikuPath + "/cross/rankinglist/rkList" + sign, data);
    },
    // 获取一堆用户信息
    getUsers(data) {
        return this.axiosPostJson(_ntikuPath + "/cross/common/userInfo", data);
    },
    // 模考大数据
    mockData(sign, data) {
        return this.axiosPostJson(_ntikuPath + "/cross/rankinglist/bigData" + sign, data);
    },
    // 商品是否购买
    bookStatus(data) {
        return this.axiosPostForm(_itemPath + "/bookCommodity/status", data);
    },
    // 统计
    subTj(data) {
        return this.axiosPostJson(_aiPath + "/track/v1/cross/consultation", data);
    },
    // 排行榜配置
    accRankConfig(urlParams) {
        return this.axiosGet(_ucapiPath + "/common/getSkuQueryResultsConfig" + urlParams);
    },
    // 排行榜列表
    accRankList(urlParams) {
        return this.axiosGet(_ucapiPath + "/common/getQueryResultsRankingList" + urlParams);
    },
    // 图书商城配置顶部+轮播图
    bookConfig(params) {
        return this.axiosPostForm(_skuPath + "/bookShop/config/" + params);
    },
    // 图书商城楼层
    bookFloor(params, data) {
        return this.axiosPostForm(_skuPath + "/bookShop/floor/" + params, data);
    },
    //图书商城最近购买
    bookBuy(data) {
        return this.axiosPostForm(_commodityPath + "/api/bookShop/recentlyBuyStudents", data);
    },
    // 图书系统班
    bookSystemClass(data) {
        return this.axiosPost(_skuPath + "/commodity/findBySystemClass" + "?" + data);
    },
    // 图书专题课
    bookSpecialClass(data) {
        return this.axiosPost(_skuPath + "/commodity/findBySpecialClass" + "?" + data);
    },
    // 图书教材
    bookTextbookList(skuId, data) {
        return this.axiosPost(_skuPath + "/bookCommodity/" + skuId + "?" + data);
    },
    // 纠错反馈
    feedBack(params) {
        return this.axiosPostJson(_ntkPath + "/feed/back/detail", params);
    },
    // 纠错评价
    errorEvaluation(params) {
        return this.axiosPostJson(_ntkPath + "/feed/back/comment", params);
    },
    // 国考 职位详情
    jobDetails(data) {
        return this.axiosPost(_skuPath + "/api/gwyJob/searchOne" + "?" + data);
    },
    //国考查询列表
    gwyInfo(urlParams) {
        return this.axiosPost(_skuPath + "/api/gwyJob/search", urlParams);
    },
    //教师招聘列表
    teacherRecruit(urlParams) {
        return this.axiosPost(_resourceapiPath + "/teacherRecruit/pageDate" + urlParams);
    },
    // 教师招聘 详情信息
    teacherDetails(data) {
        return this.axiosPost(_resourceapiPath + "/teacherRecruit/findById" + "?" + data);
    }
};
