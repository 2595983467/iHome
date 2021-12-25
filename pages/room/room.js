// pages/room/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  //转到主卧的设备界面
  jumpto:function(){
    wx.navigateTo({
      url: '/pages/devices/devices',
    })
  },

  //转到次卧的设备界面
  jumpto2:function(){
    wx.navigateTo({
      url: '/pages/deciwo/deciwo',
    })
  },

  //转到厨房的设备界面
  jumpto3:function(){
    wx.navigateTo({
      url: '/pages/dechufang/dechufang',
    })
  },

  //转到客厅的设备界面
  jumpto4:function(){
    wx.navigateTo({
      url: '/pages/deketing/deketing',
    })
  },
})