// pages/chengyuanguanli/chengyuanguanli.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       userInfo:{},
       list:[],
    },
   
        goDelete(e){
            console.log('跳转',e.currentTarget.dataset.id)
            wx.navigateTo({
              url: '/pages/chengyuanguanli/delete?id=' + e.currentTarget.dataset.id,
            })
        },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            userinfo:wx.getStorageSync('userInfo'),})
            let that=this
            wx.cloud.database().collection('user')
            .get({
                success(res){
                    console.log('请求成功',res.data)
                    that.setData({
                        list:res.data
                    })
                },
                fail(err){
                    console.log('请求失败',err)
                }
            })
     
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