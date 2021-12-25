const db=wx.cloud.database().collection('device')
let _id=""
let Name=""
let source=""
let file_url="" 
let file_path="cloud://env-5goqcysj0108712c.656e-env-5goqcysj0108712c-1308377709/设备图片.jpg" 
Page({
  deviceIdInput:function(event){
      console.log(event)
      _id=event.detail.value
  },
  deviceNameInput:function(event){
    console.log(event)
      Name=event.detail.value
  },
  formSubmit(){
    db.add({
      data:{
        _id:_id,
        Name:Name,
        file_url:file_url,
        file_path:file_path,
      },
      header:{
        "Content-type":"application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log("添加设备成功",res)
      },fail(res){
        console.log("添加设备失败",res)
      }
    })
  },
  submit(){
    db.add({
      data:{
        _id:_id,
        Name:Name,
        file_url:file_url,
      },
      success:function(res){
        console.log("添加设备成功",res)
        wx.navigateTo({
          url: '/pages/jiatingguanli/jiatingguanli'
        })
      },fail(res){
        console.log("添加设备失败",res)
      }
    })
  },
  chooseImg(){
    let that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:function(res){
        that.setData({
          source: res.tempFilePaths
        })
        var tempFilePaths = res.tempFilePaths
         wx.uploadFile({
          url: 'cloud://env-5goqcysj0108712c.656e-env-5goqcysj0108712c-1308377709/设备图片.jpg',
          filePath: tempFilePaths[0],
          name: 'file',
          success:function(res){
            console.log(res.data)
            var data=JSON.parse(res.data);
            that.setData({
              file_url:data.file_url, 
              file_path:data.file_path
            })
          }
        })
      }
    })
  }
})
