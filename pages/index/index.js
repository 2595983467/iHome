var QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
var qqmapsdk;



Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasuserInfo:false,
    userInfo:'',
    temperature_text:'',
    // now_air:'优',
    province: '', 
    city: '',  
    latitude: '',
    longitude: '',
    weather:"",
    lock:0,
    is_click:false
    
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user=wx.getStorageSync('userInfo')
    if(user){
      // console.log("获取到的缓存",user)
      this.setData({
          userInfo:user,
          hasuserInfo:true
          
      })
    } 
    else{
      this.setData({
        hasuserInfo:false
      })
    }

    qqmapsdk = new QQMapWX({
      //腾讯位置服务：   https://lbs.qq.com/console/mykey.html
      key: 'MKABZ-UALW3-4VA3H-33OMB-G5GSO-CLFGY' 
    });

    var that = this

    wx.getSetting({  //获取用户授权设置
      success: res => {
        
        console.log(JSON.stringify(res))

        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      that.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //调用wx.getLocation的API
          that.getLocation();
        }
        else {
          //调用wx.getLocation的API
          that.getLocation();
        }
      }
    })
    
    
    



    

  },

    // 微信获得经纬度
    getLocation: function () {
      let that = this;
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          console.log("success "+JSON.stringify(res))
          var latitude = res.latitude  //纬度，范围为 -90~90，负数表示南纬
          var longitude = res.longitude  //经度，范围为 -180~180，负数表示西经
          var speed = res.speed
          var accuracy = res.accuracy;
          console.log("latitude " + latitude + " ;longitude " + longitude)//这里获取的是经纬度
          that.getLocal(latitude, longitude) //把经纬度传给getLocal方法
        },
        fail: function (res) {
          console.log('fail ' + JSON.stringify(res))
        }
      })
    },
    // 获取当前地理位置
    getLocal: function (latitude, longitude) { //把经纬度转换成地理位置
      let that = this;
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function (res) {
          console.log(JSON.stringify(res));
          let province = res.result.ad_info.province
          let city = res.result.ad_info.city
          that.setData({ //把地理位置省市赋值给声明在data中的变量
            province: province,
            city: city,
            latitude: latitude,
            longitude: longitude
          })
          
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          // console.log(res);
          that.getWeather()
        }
      });
    },

    getWeather:function() {
      var that=this;
      wx.request({
        url: 'https://free-api.heweather.net/s6/weather/now',
        data: {
          location: this.data.city,
          key: "ec4868488bac47e79e53e6099fb7b380"
        },
        success: function (res) {
          that.setData({
            weather: res.data.HeWeather6[0].now.cond_txt,
            temperature_text: res.data.HeWeather6[0].now.fl
          })
          console.log(res.data)
          
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
    var user=wx.getStorageSync('userInfo')
    if(user){
      // console.log("获取到的缓存",user)
      this.setData({
          userInfo:user,
          hasuserInfo:true
           
      })
      wx.stopPullDownRefresh(); 
    } 
    else{
      this.setData({
        hasuserInfo:false
      })
    wx.stopPullDownRefresh(); 
    }

    this.getWeather()
    // var that = this;
    // // var aa=wx.getStorage('uid')
    // // if(aa){
    // wx.getStorage({
    //   key:'uid',
    //   success:function(res){
    //     that.setData({
    //       hasuserInfo:res.data,
    //     })
    //   }  
    // })

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
    
  },

  touxiang:function(){

    wx.switchTab({
      url: '/pages/my/my',
    })



},


 click(){
  
  this.setData({
    is_click:true
    
  })
 },

 clickagain(){
   this.setData({
     is_click:false
   })
 }
})