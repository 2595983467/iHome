// pages/editor/dianhua.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo:wx.getStorageSync('userInfo'),
        infoArray:{
            name:'昵称',
            phone:'手机号',
            sex:'性别',
            email:'邮箱',
            date:'出生日期',
        },
        tell:'',
    },
    changeTell:function(e){
        this.setData({
          tell:e.detail.value
        })
        console.log('tell',this.data.tell)
        wx.setStorageSync('tell', this.data.tell)
        },
        backEditor:function(){
            wx.navigateTo({
 
                url: '/pages/editor/editor',
                 
                })
        },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})