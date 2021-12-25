// pages/chengyuanguanli/delete.js
var id = ''
Page({

    /**
     * 页面的初始数据
     */
    data: {
good:{}
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('值',options)
        id=options.id
wx.cloud.database().collection('user')
.doc(id)
.get()
.then(res => {
    console.log('成功',res)
    this.setData({
        use:res.data
    })
})
.catch(res => {
    console.log('失败',res)
})
    },
    remove:function(){
        console.log('点击了删除',id)
        wx.showModal({
          title:"是否确定删除",
          content:'删除后不可找回',
          success(res){
              console.log("res.confirm",res.confirm)
              console.log("res.cancel",res.cancel)
             if(res.confirm == true){
                 console.log('用户点击确定')
                wx.cloud.database().collection('user')
                .doc(id)
                .remove()
                .then(res => {
                    console.log('删除成功',res)
                    wx.navigateBack({
                        url: '/pages/chengyuanguanli/chengyuanguanli',
                      })
                })
                .catch(res =>{
                    console.log('删除失败',res)
                })
                }
                 else if(res.cancel == true){
                    console.log('用户点击取消')
                 }
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