// pages/userinfo/userinfo.js
var sexItems=['男','女']
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userList: [],
    actionSexHidden: true,
    actionSexItems: sexItems,
    actionSex:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
   //性别 反馈上拉菜单
   actionSexTap: function (e){
     this.setData({
       actionSexHidden:!this.data.actionSexHidden
     })
   },
   actionSexChange: function (e){
     this.setData({
       actionSexHidden:!this.data.actionSexHidden
     })
   },


  onLoad: function (options) {
    var that = this;

    for(var i=0; i<sexItems.length; i++){
      (function(itemSexName){
        Page['bind' + itemSexName] = function (e){
          console.log("点击 " + itemSexName,e);
          that.setData({
            actionSex:itemSexName
          })

        }
      }) (sexItems[i])
    }

    wx.request({
      url:"https://www.easy-mock.com/mock/595f3f139adc231f357b0615/McDonald/list",
      method: 'GET',
      success: function(res) {
        console.log(res);
        that.setData({
          userList: res.data.data,
        })
      }
    });

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
