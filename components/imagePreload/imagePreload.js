Component({
  /**
   * 引用外部样式类
   */
  externalClasses: ['image-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 默认图片
    defaulteImage: {
      type: String,
      value: "../../images/default.png"
    },
    // 实际展示图片
    actualImage: {
      type: String,
      value: ""
    },
    // 图片展示模式
    mode: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoadingFinish: false // 图片是否加载完成
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 图片加载完成时触发
    LoadFinish() {
      this.setData({
        isLoadingFinish: true
      })
    },
    // 图片加载失败时触发
    loadError() {
      this.setData({
        isLoadingFinish: false
      })
    },
  }
})
