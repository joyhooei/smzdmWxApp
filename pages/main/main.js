// main.js
Page({

  /**
   * 页面的初始数据
   */


  data: {
    article: '好文',
    condition: false,
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.request({

    //   url: 'https://api.smzdm.com/v2/util/banner/?type=haojia_jingxuan&f=android&v=8.7',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'GET',
    //   success: function (res) {
    //     console.log(res.data.data.rows)

    //     that.setData({
    //       banner: res.data.data.rows
    //     })
    //   },
    //   fail: function (res) {
    //     console.log(res.data)
    //   }
    // })

    var that = this
    wx.request({
      url: 'https://api.smzdm.com/v1/home/articles?f=wxapp&wxapp=zdmapp&limit=20',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        offset: '0'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data.data.rows
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
    console.log("onPullDownRefresh")
    wx.stopPullDownRefresh();

    wx.request({
      url: 'https://api.smzdm.com/v1/home/articles?f=wxapp&wxapp=zdmapp&limit=20',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        offset: '0'
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data.data.rows
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
    console.log("onReachBottom")



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})