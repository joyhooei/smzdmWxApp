// pages/haowen/haowen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.smzdm.com/v1/wxapp/zdmapp/good_articles_list?f=wxapp&wxapp=zdmapp&offset=0&limit=20',
      header: {
        'Context-Type': 'application/json'

      }
      ,
      data: {
        offset: '0'
      }
      ,
      success: function (res) {
        that.setData({
     list:res.data.data
     
        })

      },
      fail: function (res) {

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
    var that = this
    wx.request({
      url: 'https://api.smzdm.com/v1/wxapp/zdmapp/good_articles_list?f=wxapp&wxapp=zdmapp&offset=0&limit=20',
      header: {
        'Context-Type': 'application/json'

      }
      ,
      data: {
        offset: '0'
      }
      ,
      success: function (res) {
        that.setData({

        })

      },
      fail: function (res) {

      }
    })
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