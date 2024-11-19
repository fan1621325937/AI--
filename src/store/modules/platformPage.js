//图表说明
//普通图表
//charts1:视频页
//charts2:入井人数统计
//charts3:入井车辆统计
//charts4:货运车辆出矿统计
//charts5:运输设备状态实时监测
//charts6:人员行为管理
//charts7:传感器异物
//charts8:电子封条摄像头
//charts9:调度室空岗统计
//charts10:调度室睡岗统计
//charts11:最近报警抓拍
//charts12:长时间停车监控
//charts13:密闭墙启封
//charts14:报警类型分布
//charts15:摄像头控制
//charts16:摄像头信息
//charts17:皮带报警系统
//charts18:摄像头类型统计
//charts19:煤流分析

//charts20:皮带状态监控
//charts21:煤流量趋势监测
//charts22:煤流分析管控摄像头
//charts23:皮带宽度变化趋势
//charts24:皮带速度变化趋势

//charts25:人员防冲摄像头
//charts26:日超限报警统计
//charts27:工作面日实时人员保有量
//charts28:工作面限员监测
//charts29:工作面人员信息
//charts30:拦截门监控

//采煤工作面图表
//charts31:工作面摄像头
//charts32:异常报警
//charts33:工作面环境参数
//charts34:液压支架状态
//charts35:工作面大型设备状态
//charts36:工作面限员监测

//charts37:报警处置
//charts38:异常报警

const platformPage = defineStore("platformPage", {
  state: () => {
    return {
      //根据平台字典platformDictValue显示对应的首页
      homepage: {
        0: "defaultHomepage", //根据平台字典platformDictValue显示对应的首页,有值显示对应的首页,没有值显示默认首页
      },
      //主页布局
      layout: {},
    };
  },
  actions: {},
});

export default platformPage;
