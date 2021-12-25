// app.js

App({
  onLaunch:function() {
    //云开发环境初始化
    wx.cloud.init({
      env:"env-5goqcysj0108712c"
    })

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo:null,
  }
})
