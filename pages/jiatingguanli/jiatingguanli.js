
Page({
  data: {
    list:[],
    file_url:'',
    _id:'',
    Name:''

  },
onLoad(){
  wx.cloud.database().collection("device")
  .get()
  .then(res=>{
    console.log("设备列表请求成功",res)
    this.setData({
      list:res.data
    })
  })
  .catch(res=>{
    console.log("设备列表请求失败",res)
  })
},
add_device:function(){
  wx.navigateTo({
    url: '/pages/add/add'
  })
},
delete_device:function(){
  wx.navigateTo({
    url: '/pages/delete/delete'
  })
},
getList(){
  wx.cloud.database().collection("device")
  .get()
  .then(res=>{
    console.log("设备列表请求成功",res)
    this.setData({
      list:res.data
    })
  })
  .catch(res=>{
    console.log("设备列表请求失败",res)
  })
},
delData(){
  wx.cloud.database().collection("device")
  .doc(_id).remove({
    success:function(res){
      console.log("删除成功",res)
    },fail(res){
      console.log("删除失败",res)
    }
  })
},
click(){
  wx.navigateTo({
    url: '/pages/test/test',
    success: (result) => {},
    fail: (res) => {},
    complete: (res) => {},
  })
}
})
