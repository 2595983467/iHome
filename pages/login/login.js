const app=getApp();
Page({
//获取登录信息
  login(){
    wx.getUserProfile({
      desc: '登录需要',
      lang:'zh_CN',
        success:res=>{
          console.log(res)
          this.saveUserInfo(res.userInfo)
        }
      
    })
  },


//取消登录
  notlogin(){

    wx.switchTab({
      url: '../../pages/my/my',
    })

  }

 
})
