let _id=""
Page({
  deviceIdDelete:function(event){
      console.log(event)
      _id=event.detail.value
  },
  DelFormSubmit(){
    wx.cloud.database().collection('device')
    .doc(_id)
    .remove()
    .then(res=>{
      console.log('删除设备成功',res)
      })
  .catch(res=>{
    console.log('删除设备失败',res)
  })
  },
  DelSubmit(){
    wx.showModal({
      title:"提示",
      content:'是否真的要删除该设备',
      success(res){
      console.log("res.confirm",res.confirm)
      console.log("res.cancel",res.cancel)
        if(res.confirm==true){
          console.log('用户点击确认')
          wx.cloud.database().collection('device')
          .doc(_id)
          .remove()
          .then(res=>{
            console.log('删除成功',res)
            wx.navigateTo({
              url: '/pages/jiatingguanli/jiatingguanli',
            })
          })
          .catch(res=>{
            console.log('删除失败',res)
          })
        }else if(res.cancel==true){
          console.log('用户点击取消')
        }
      }
    })
}
})