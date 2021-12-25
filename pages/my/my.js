
Page({
    data: {
      userInfo: {},
      hasUserInfo: false,
      canIUseGetUserProfile: false,
      hasStorage:false,
      comfirm:false
    },
    onLoad() {
      console.log("进入小程序")
       var user=wx.getStorageSync('userInfo')
       if(user){
        console.log("获取到的缓存",user)
        this.setData({
            userInfo:user,
            hasUserInfo:true
            
        })
      } 
      else{
        console.log("未获得缓存")
      }

      


      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    },
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log("内部this：", this)
          console.log(res.userInfo)
          let user = res.userInfo
          wx.setStorageSync('userInfo', user)
          this.setData({
              userInfo: user,
              hasUserInfo:true
          })
          // this.setData({
          //   userInfo: res.userInfo,
          //   hasUserInfo: true
            
          // })
          wx.setStorageSync('uid', this.data.hasUserInfo)
          // this.setData({
          //   hasStorage:true
          // })
        },
        
      })

      
      
    },

    loginOut() {
      // var that = this
      // wx.showModal({

      //   title: '提示',
   
      //   content: '确定退出登录？',
   
      //   success: function (res) {
   
      //     if (res.confirm) {//这里是点击了确定以后
   
      //       console.log('用户点击确定')
      //       that.setData({comfirm:true})

   
      //     } else {//这里是点击了取消以后
   
      //       console.log('用户点击取消')
      //       that.setData({comfirm:false})
   
      //     }
   
      //   }
   
      // })

 
      this.setData({
        userInfo: '',
        hasUserInfo:false
    })
    // 清除用户缓存
    wx.setStorageSync('userInfo', null)
    wx.switchTab({
     url: '/pages/my/my',
   })
   wx.showToast({
     title: '成功退出登录！',
     
   })

  },

  
    chengyuanguanli:function(){
      wx.navigateTo({
        url: '/pages/chengyuanguanli/chengyuanguanli',

      })
    },

    jiatingguanli:function(){
      wx.navigateTo({
        url: '/pages/jiatingguanli/jiatingguanli',

      })
    },

    shoucang:function(){
      wx.navigateTo({
        url: '/pages/shoucang/shoucang',

      })
    },

    yijianfankui:function(){
      wx.navigateTo({
        url: '/pages/yijianfankui/yijianfankui',
      })
    },
    shezhi:function(){
      wx.navigateTo({
        url: '/pages/shezhi/shezhi',

      })
    },
    guanyu:function(){
      wx.navigateTo({
        url: '/pages/guanyu/guanyu',
      })
    }
  })
  