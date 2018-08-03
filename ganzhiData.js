let express = require('express');
let router = express.Router();
let Mock = require("mockjs");

router.all(['/activity/createOrUpdateShopList', '/activity/create/scrmCustomerGroupTag', '/rule/createOrUpdate', '/activityGroup/create', '/activity/create', '/crowd/createOrUpdate', '/crowd/update', '/activity/update/basicInfo'], function(req, res) {
  let data = {
    status: 200,
    message: '请求成功',
    data: {
      'activityId': 'A0558PtrU'
    }
  }
  res.send(data);
})

router.all('/activityGroup/list', function(req, res) {
  let data = Mock.mock({
    'status': 200,
    'message': '请求成功',
    'data|1-20': [{
      'id|1-20': +1,
      'portalId': null,
      'groupName|1-10': Mock.Random.cname()
    }]
  });
  res.send(data);
});
router.all('/market/shop/list/condation', function(req, res) {
  let data = Mock.mock({
    'status': 200,
    'message': '请求成功',
    'data|1-50': [{
      'id|1-50': +1,
      'name|1-2': Mock.Random.cname()
    }]
  });
  res.send(data);
})
router.all('/activity/floorList', function(req, res) {
  res.send({
    status: 200,
    message: "请求成功.",
    data: [{
      floorId: "F10",
      floorName: "10层",
      floorAlias: "",
      description: "办公室"
    }, {
      floorId: "F11",
      floorName: "11层",
      floorAlias: "",
      description: "办公室"
    }]
  });
});
router.all('/activity/floorShopList', function(req, res) {
  let data = Mock.mock({
    'status': 200,
    'message': '请求成功',
    'data|1-50': [{
      'id|1-50': +1,
      'name|1-2': Mock.Random.cname()
    }]
  });
  res.send(data);
})
router.all('/activity/shopList', function(req, res) {
  let data = Mock.mock({
    'status': 200,
    'message': '请求成功',
    'data|1-50': [{
      'shopId|1-50': +1,
      'shopName|1-2': Mock.Random.cname()
    }]
  });
  res.send(data);
})
router.all('/activity/scrmCustomerGroupList', function(req, res) {
  let data = {
    status: 200,
    message: '',
    data: Mock.mock({
      'pageNum|1-10': 1,
      'pageSize': 20,
      'total|20-100': 1,
      'list|1-20': [{
        'id|1-20': +1,
        'tenantId|1-100000': 1,
        'name': Mock.Random.ctitle()
      }]
    })
  }

  res.send(data);
});
router.all('/crowd/detail', function(req, res) {
  let data = {
    status: 200,
    message: "请求成功.",
    data: {
      activityId: "A05vFutUc",
      geoRailType: 2,
      railScope: 50,
      floor: "F10",
      crmGroupId: "1",
      createTime: "2018-07-13T10:18:02.000+0000"
    }
  };
  res.send(data);
})
router.all('/activity/basicInfo', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "activityId": "A05vFutUc",
      "name": "8月份大促预热4",
      "activityGroupId": 110,
      "activityGroupName": "潘霞活动",
      "activityType": 1,
      "isAllShop": false,
      "activityStatus": 0,
      "activityStartDate": "2018-08-31",
      "activityEndDate": "2018-07-11",
      "portalId": 290,
      "subjectType": 1,
      "appKey": null,
      "appId": 123162,
      "remarks": 'nullffff',
      "isValidate": true,
      "createTime": "2018-07-11T12:33:35.000+0000",
      "updateTime": "2018-07-11T12:33:31.000+0000"
    }
  }
  res.send(data);
})
router.all('/rule/detail', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "activityId": "A05vFutUc",
      "dispatchPedQuantity": 4,
      "dispatchAccumulateQuantity": 10,
      "dispatchAlldayAccumulateQuantity": 100,
      "isValidate": 1,
      "createTime": "2018-07-12T05:48:56.000+0000"
    }
  }
  res.send(data);
});
router.all('/activity/customerGroupTagList', function(req, res) {
  let data = '{"status":200,"message":"请求成功.","data":[{"id":"1","name":"会员属性","seq":1,"del":null,"createTime":null,"updateTime":null,"tagConfigList":[{"id":"25315529078079501","name":"性别","dbTable":"","dbColumn":"mbr_gender","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":1,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079602","tagConfigId":"25315529078079501","name":"男","label":"男","minItemValue":null,"maxItemValue":null,"itemValue":"M","operatortype":0,"input":false,"range":false,"valueType":1,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439782,"updateTime":1529671028000,"ext":"ee1a689fd3c945069b700fb67db68580","selected":null},{"id":"225315529078079601","tagConfigId":"25315529078079501","name":"女","label":"女","minItemValue":null,"maxItemValue":null,"itemValue":"F","operatortype":0,"input":false,"range":false,"valueType":1,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439783,"updateTime":1529671028000,"ext":"745879dae0404391a5921f91d79e8487","selected":null}]},{"id":"25315529078079502","name":"年龄","dbTable":"","dbColumn":"mbr_age","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":2,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079604","tagConfigId":"25315529078079502","name":"<18","label":"<18","minItemValue":"0","maxItemValue":"18","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":1,"unit":null,"del":null,"createTime":1532064439783,"updateTime":1529671028000,"ext":"cfca5936c8884c1bbd6a9fd0c9c06533","selected":null},{"id":"225315529078079605","tagConfigId":"25315529078079502","name":"18~24","label":"18~24","minItemValue":"18","maxItemValue":"24","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":2,"unit":null,"del":null,"createTime":1532064439783,"updateTime":1529671028000,"ext":"3254d439af2646c28a5a8dd5ef6e5f7f","selected":null},{"id":"225315529078079606","tagConfigId":"25315529078079502","name":"25~34","label":"25~34","minItemValue":"25","maxItemValue":"34","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":3,"unit":null,"del":null,"createTime":1532064439783,"updateTime":1529671028000,"ext":"96d89c1cdbee4e7daf407c3551182c98","selected":null},{"id":"225315529078079607","tagConfigId":"25315529078079502","name":"35~44","label":"35~44","minItemValue":"35","maxItemValue":"44","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":4,"unit":null,"del":null,"createTime":1532064439784,"updateTime":1529671028000,"ext":"390d93e3f6304bc181dd5c48cee8a376","selected":null},{"id":"225315529078079608","tagConfigId":"25315529078079502","name":"45~54","label":"45~54","minItemValue":"45","maxItemValue":"54","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":5,"unit":null,"del":null,"createTime":1532064439784,"updateTime":1529671028000,"ext":"63ea08070d8a47f2af564a9259eaab85","selected":null},{"id":"225315529078079609","tagConfigId":"25315529078079502","name":"55~64","label":"55~64","minItemValue":"55","maxItemValue":"65","itemValue":null,"operatortype":4,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":6,"unit":null,"del":null,"createTime":1532064439784,"updateTime":1529671028000,"ext":"c4788678d65f4c9b8700f867796e418e","selected":null},{"id":"225315529078079610","tagConfigId":"25315529078079502","name":">65","label":">65","minItemValue":null,"maxItemValue":"65","itemValue":null,"operatortype":3,"input":false,"range":true,"valueType":2,"valueFormat":"","seq":7,"unit":null,"del":null,"createTime":1532064439784,"updateTime":1529671028000,"ext":"3d3f3223941b46198e5a6a9318dc21ff","selected":null}]},{"id":"25315529078079503","name":"学历","dbTable":"","dbColumn":null,"multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":3,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079611","tagConfigId":"25315529078079503","name":"小学","label":"小学","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":false,"range":false,"valueType":2,"valueFormat":"","seq":1,"unit":null,"del":null,"createTime":1532064439785,"updateTime":1529671028000,"ext":"662ddb867f7047b38c64d38ae109f7e4","selected":null},{"id":"225315529078079612","tagConfigId":"25315529078079503","name":"初中","label":"初中","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":false,"range":false,"valueType":2,"valueFormat":"","seq":2,"unit":null,"del":null,"createTime":1532064439785,"updateTime":1529671028000,"ext":"3b9a0c700e324749b44d5b4e45ae81bb","selected":null},{"id":"225315529078079613","tagConfigId":"25315529078079503","name":"高中","label":"高中","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":false,"range":false,"valueType":2,"valueFormat":"","seq":3,"unit":null,"del":null,"createTime":1532064439785,"updateTime":1529671028000,"ext":"eab57923afe1468abcdabb0d9ae81a0e","selected":null},{"id":"225315529078079614","tagConfigId":"25315529078079503","name":"大专","label":"大专","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":false,"range":false,"valueType":2,"valueFormat":"","seq":4,"unit":null,"del":null,"createTime":1532064439786,"updateTime":1529671028000,"ext":"fe641da2e2a44cc2a0bbd80be35688f7","selected":null},{"id":"225315529078079615","tagConfigId":"25315529078079503","name":"本科及以上","label":"本科及以上","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":false,"range":false,"valueType":2,"valueFormat":"","seq":5,"unit":null,"del":null,"createTime":1532064439786,"updateTime":1529671028000,"ext":"9eb1c592eb8e436ea7c61d651bb23227","selected":null}]},{"id":"25315529078079504","name":"生日","dbTable":"","dbColumn":"mbr_birthday","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":4,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079616","tagConfigId":"25315529078079504","name":"生日","label":"生日","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":2,"input":true,"range":true,"valueType":3,"valueFormat":"MMdd","seq":1,"unit":null,"del":null,"createTime":1532064439786,"updateTime":1529671028000,"ext":"375b7a4ac3bc4b03b3c6de1652e9ce2e","selected":null}]}]},{"id":"2","name":"会员等级","seq":2,"del":null,"createTime":null,"updateTime":null,"tagConfigList":[{"id":"25315529078079505","name":"手机号","dbTable":"","dbColumn":"mbr_mobile_list","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":1,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079617","tagConfigId":"25315529078079505","name":"has_mobile","label":"手机号","minItemValue":null,"maxItemValue":"1","itemValue":null,"operatortype":5,"input":false,"range":true,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439787,"updateTime":1529671028000,"ext":"7f7f668315904337a8adaf2ee474fcc1","selected":null}]},{"id":"25315529078079506","name":"微信号","dbTable":"","dbColumn":"mbr_openid_list","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":2,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079618","tagConfigId":"25315529078079506","name":"has_openid","label":"微信openid","minItemValue":null,"maxItemValue":"1","itemValue":null,"operatortype":5,"input":false,"range":true,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439789,"updateTime":1529671028000,"ext":"63b76c406c8b480fb6d03f8860593365","selected":null}]},{"id":"25315529078079507","name":"支付宝","dbTable":"","dbColumn":"mbr_alipayid_list","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":3,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079619","tagConfigId":"25315529078079507","name":"has_aliid","label":"支付宝userid","minItemValue":null,"maxItemValue":"1","itemValue":null,"operatortype":5,"input":false,"range":true,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439789,"updateTime":1529671028000,"ext":"caa3aec404654203a0126cba5cd18848","selected":null}]},{"id":"25315529078079508","name":"mac","dbTable":"","dbColumn":"mbr_mac_list","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":4,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079620","tagConfigId":"25315529078079508","name":"has_mac","label":"mac地址","minItemValue":null,"maxItemValue":"1","itemValue":null,"operatortype":5,"input":false,"range":true,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439790,"updateTime":1529671028000,"ext":"ffe7cb20ddec4a7281d733d770da0cce","selected":null}]},{"id":"25315529078079509","name":"会员等级","dbTable":"","dbColumn":"mbr_grade_list","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":5,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"25315529078079628","tagConfigId":"25315529078079509","name":"朱德岩","label":"测试数据","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":0,"input":true,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439790,"updateTime":1529671028000,"ext":"b67149d31e654b89b1cb0f83d95d6109","selected":null}]},{"id":"25315529078079510","name":"会员状态","dbTable":"","dbColumn":"mbr_status_list","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":6,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079621","tagConfigId":"25315529078079510","name":"正常","label":"正常","minItemValue":null,"maxItemValue":null,"itemValue":"1","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439790,"updateTime":1529671028000,"ext":"9f1965d568b341489fa9ecadd9e8761c","selected":null},{"id":"225315529078079622","tagConfigId":"25315529078079510","name":"冻结","label":"冻结","minItemValue":null,"maxItemValue":null,"itemValue":"2","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439791,"updateTime":1529671028000,"ext":"885a381b8e2642f4b1fb3025e862c290","selected":null},{"id":"225315529078079623","tagConfigId":"25315529078079510","name":"黑名单","label":"黑名单","minItemValue":null,"maxItemValue":null,"itemValue":"3","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":3,"unit":null,"del":null,"createTime":1532064439791,"updateTime":1529671028000,"ext":"d765aa05156546bd8dc08b7465cfb54e","selected":null},{"id":"225315529078079624","tagConfigId":"25315529078079510","name":"挂失","label":"挂失","minItemValue":null,"maxItemValue":null,"itemValue":"4","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":4,"unit":null,"del":null,"createTime":1532064439791,"updateTime":1529671028000,"ext":"a8a05375773940d28d42efef935936e2","selected":null},{"id":"225315529078079625","tagConfigId":"25315529078079510","name":"过期","label":"过期","minItemValue":null,"maxItemValue":null,"itemValue":"5","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":5,"unit":null,"del":null,"createTime":1532064439791,"updateTime":1529671028000,"ext":"f3134f62a83d4c4da0ba1d4807b9fb83","selected":null},{"id":"225315529078079626","tagConfigId":"25315529078079510","name":"注销","label":"注销","minItemValue":null,"maxItemValue":null,"itemValue":"6","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":6,"unit":null,"del":null,"createTime":1532064439791,"updateTime":1529671028000,"ext":"46eb54c355944f14999b0fe026defb64","selected":null}]},{"id":"25315529078079511","name":"会员年限","dbTable":"","dbColumn":"mbr_age_list","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":7,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079627","tagConfigId":"25315529078079511","name":"会员年限","label":"会员年限","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":2,"input":true,"range":true,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439792,"updateTime":1529671028000,"ext":"ee79f37c932f43d9ba91917bd04d2303","selected":null}]},{"id":"25315529078079512","name":"客户源","dbTable":"","dbColumn":"mbr_src_list","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":8,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079629","tagConfigId":"25315529078079512","name":"服务号","label":"服务号","minItemValue":null,"maxItemValue":null,"itemValue":"2","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439792,"updateTime":1529671028000,"ext":"6d303e6b99a14812898ee7a49f538c04","selected":null},{"id":"225315529078079630","tagConfigId":"25315529078079512","name":"支付宝","label":"支付宝","minItemValue":null,"maxItemValue":null,"itemValue":"1","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439792,"updateTime":1529671028000,"ext":"48c3605d1a1649448e8220c1c8953b01","selected":null},{"id":"225315529078079631","tagConfigId":"25315529078079512","name":"美团","label":"美团","minItemValue":null,"maxItemValue":null,"itemValue":"3","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":3,"unit":null,"del":null,"createTime":1532064439792,"updateTime":1529671028000,"ext":"ee98a1f279c445188975fab6ea96d2e9","selected":null}]}]},{"id":"4","name":"位置标签","seq":4,"del":null,"createTime":null,"updateTime":null,"tagConfigList":[{"id":"25315529078079520","name":"最近到访时间","dbTable":"","dbColumn":"loc_y1_last_rcny","multiple":false,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":2,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079641","tagConfigId":"25315529078079520","name":"最近到访时间","label":"最近到访时间","minItemValue":null,"maxItemValue":null,"itemValue":null,"operatortype":2,"input":true,"range":false,"valueType":2,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439793,"updateTime":1529671028000,"ext":"93f2f8b928bd47b99d66902396c06a2d","selected":null}]}]},{"id":"5","name":"偏好与高级标签","seq":5,"del":null,"createTime":null,"updateTime":null,"tagConfigList":[{"id":"25315529078079524","name":"客户生命周期","dbTable":"","dbColumn":"adv_life_stage","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":1,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079652","tagConfigId":"25315529078079524","name":"潜客","label":"潜客","minItemValue":null,"maxItemValue":null,"itemValue":"PRT","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439793,"updateTime":1529671028000,"ext":"28288927df694893b419d1dc69c20752","selected":null},{"id":"225315529078079653","tagConfigId":"25315529078079524","name":"新客","label":"新客","minItemValue":null,"maxItemValue":null,"itemValue":"NEW","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439793,"updateTime":1529671028000,"ext":"3092c27e180e42768f0f27b16ee76ffc","selected":null},{"id":"225315529078079654","tagConfigId":"25315529078079524","name":"成长","label":"成长","minItemValue":null,"maxItemValue":null,"itemValue":"DEV","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":3,"unit":null,"del":null,"createTime":1532064439794,"updateTime":1529671028000,"ext":"30b0096cc6fb4a9cb05e0a59319ab298","selected":null},{"id":"225315529078079655","tagConfigId":"25315529078079524","name":"活跃客户","label":"活跃客户","minItemValue":null,"maxItemValue":null,"itemValue":"ACT","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":4,"unit":null,"del":null,"createTime":1532064439794,"updateTime":1529671028000,"ext":"ff70a4f9786344b4bfca610b7a6f1db1","selected":null},{"id":"225315529078079656","tagConfigId":"25315529078079524","name":"预流失客户","label":"预流失客户","minItemValue":null,"maxItemValue":null,"itemValue":"HLD","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":5,"unit":null,"del":null,"createTime":1532064439794,"updateTime":1529671028000,"ext":"73321c95d817487fb568b00d6811eb6a","selected":null},{"id":"225315529078079657","tagConfigId":"25315529078079524","name":"流失客户","label":"流失客户","minItemValue":null,"maxItemValue":null,"itemValue":"LST","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":6,"unit":null,"del":null,"createTime":1532064439794,"updateTime":1529671028000,"ext":"53caa4eace784b39ba31d6ce60a2f75a","selected":null}]},{"id":"25315529078079525","name":"忠诚度","dbTable":"","dbColumn":"rnk_loyalty","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":2,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079658","tagConfigId":"25315529078079525","name":"高","label":"高","minItemValue":null,"maxItemValue":null,"itemValue":"1","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439795,"updateTime":1529671028000,"ext":"35a5dabc8c764cfb9d2daaeaec5f0d56","selected":null},{"id":"225315529078079659","tagConfigId":"25315529078079525","name":"中","label":"中","minItemValue":null,"maxItemValue":null,"itemValue":"2","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439795,"updateTime":1529671028000,"ext":"14d8f71b7607417f8449b094156682d5","selected":null},{"id":"225315529078079660","tagConfigId":"25315529078079525","name":"低","label":"低","minItemValue":null,"maxItemValue":null,"itemValue":"3","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":3,"unit":null,"del":null,"createTime":1532064439795,"updateTime":1529671028000,"ext":"3d18091eb7c9472ab379c1aa1bcf4d2b","selected":null}]},{"id":"25315529078079526","name":"活跃度","dbTable":"","dbColumn":"rnk_activity","multiple":true,"visiable":true,"hasFunction":null,"function":null,"tagGroupId":null,"seq":3,"del":null,"createTime":null,"updateTime":null,"items":[{"id":"225315529078079661","tagConfigId":"25315529078079526","name":"高","label":"高","minItemValue":null,"maxItemValue":null,"itemValue":"1","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":1,"unit":null,"del":null,"createTime":1532064439797,"updateTime":1529671028000,"ext":"a9b0771e16ff47f980c29b5447b6d16c","selected":null},{"id":"225315529078079662","tagConfigId":"25315529078079526","name":"中","label":"中","minItemValue":null,"maxItemValue":null,"itemValue":"2","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":2,"unit":null,"del":null,"createTime":1532064439797,"updateTime":1529671028000,"ext":"bdcff6ee96cf41ee9fdab7a2ad05dbc0","selected":null},{"id":"225315529078079663","tagConfigId":"25315529078079526","name":"低","label":"低","minItemValue":null,"maxItemValue":null,"itemValue":"3","operatortype":0,"input":false,"range":false,"valueType":null,"valueFormat":null,"seq":3,"unit":null,"del":null,"createTime":1532064439797,"updateTime":1529671028000,"ext":"07baaee372174f6ea6f75b7ff3cd2e68","selected":null}]}]}]}';
  res.send(JSON.parse(data));
});
router.all('/coupon/list', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": Mock.mock({
      "list|1-10": [{
          "id|1-100": +1,
          "name": null,
          "activityId": null,
          "entId": null,
          "marketId": 290,
          "shopId": null,
          "categoryId": 0,
          "categoryDesc": "折扣券",
          "mainInfo": Mock.Random.cname(),
          "extendInfo": "全场可用",
          "effectiveType": 1,
          "effectiveStartTime": "2018-06-13",
          "effectiveEndTime": "2018-06-13",
          "activedLimitedStartDay": 0,
          "activedLimitedDays": 30,
          "facePrice": null,
          "unitPrice": null,
          "discount": null,
          "quantity": 100000,
          "conditionType": null,
          "conditionPrice": null,
          "isPrecoupon": null,
          "precouponId": null,
          "templateId": null,
          "attach": null,
          "status": 0,
          "descClause": null,
          "statusDesc": "正常",
          "isValidate": null,
          "userId": null,
          "userName": null,
          "imgtxtInfo": null,
          "createTime": "2018-06-23 21:39:27",
          "updateTime": "2018-06-12 12:40:22",
          "ext1": null,
          "ext2": null,
          "couponApplyShopList": null,
          "couponImageList": null,
          "couponTagList": null,
          "getNum": null,
          "writeoffNum": null,
          "predefinedCouponInstanceList": null,
          "pourNum": null,
          "surplusNum": 96986,
          "isAllShop": null,
          "imgLogoUrl": null,
          "rectangle": null,
          "issuerName": "智慧图科技",
          "activityName": null,
          "couponActivityId": null,
          "tel": null,
          "dayLimit": null,
          "cumulativeLimit": null,
          "dayLimitNum": null,
          "cumulativeLimitNum": null,
          "buyValue": null
        },
        {
          "id|1-100": +1,
          "name": null,
          "activityId": null,
          "entId": null,
          "marketId": 290,
          "shopId": null,
          "categoryId": 0,
          "categoryDesc": "折扣券",
          "mainInfo": "88折折扣券",
          "extendInfo": null,
          "effectiveType": 1,
          "effectiveStartTime": "2017-08-10",
          "effectiveEndTime": "2017-08-31",
          "activedLimitedStartDay": 0,
          "activedLimitedDays": 0,
          "facePrice": null,
          "unitPrice": null,
          "discount": null,
          "quantity": 100,
          "conditionType": null,
          "conditionPrice": null,
          "isPrecoupon": null,
          "precouponId": null,
          "templateId": null,
          "attach": null,
          "status": 0,
          "descClause": null,
          "statusDesc": "正常",
          "isValidate": null,
          "userId": null,
          "userName": null,
          "imgtxtInfo": null,
          "createTime": "2017-08-10 11:16:03",
          "updateTime": "2017-11-21 17:39:42",
          "ext1": null,
          "ext2": null,
          "couponApplyShopList": null,
          "couponImageList": null,
          "couponTagList": null,
          "getNum": null,
          "writeoffNum": null,
          "predefinedCouponInstanceList": null,
          "pourNum": null,
          "surplusNum": 100,
          "isAllShop": null,
          "imgLogoUrl": null,
          "rectangle": null,
          "issuerName": "智慧图科技",
          "activityName": null,
          "couponActivityId": null,
          "tel": null,
          "dayLimit": null,
          "cumulativeLimit": null,
          "dayLimitNum": null,
          "cumulativeLimitNum": null,
          "buyValue": null
        }
      ],
      "pageSize": 10,
      "total": 22,
      "pages": 3,
      "page": 1
    })
  }
  res.send(data);
});
router.all('/coupon/detail', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "id": 2739,
      "name": null,
      "activityId": null,
      "entId": null,
      "marketId": 290,
      "shopId": null,
      "categoryId": 2,
      "categoryDesc": "代金券",
      "mainInfo": "210元代金券",
      "extendInfo": '券副标题',
      "effectiveType": 0,
      "effectiveStartTime": "2018-05-08",
      "effectiveEndTime": "2018-06-29",
      "activedLimitedStartDay": 0,
      "activedLimitedDays": 0,
      "facePrice": 21000,
      "unitPrice": 0,
      "discount": 0,
      "quantity": 100,
      "conditionType": 0,
      "conditionPrice": 0,
      "isPrecoupon": false,
      "precouponId": null,
      "templateId": "311",
      "attach": null,
      "status": 0,
      "descClause": "",
      "statusDesc": "正常",
      "isValidate": true,
      "userId": 11,
      "userName": null,
      "imgtxtInfo": "[]",
      "createTime": "2018-05-15 19:50:46",
      "updateTime": "2018-05-15 19:50:45",
      "ext1": null,
      "ext2": null,
      "couponApplyShopList": [],
      "couponImageList": [],
      "couponTagList": [],
      "getNum": 1,
      "writeoffNum": 1,
      "predefinedCouponInstanceList": [],
      "pourNum": 11,
      "surplusNum": 89,
      "isAllShop": 1,
      "imgLogoUrl": null,
      "rectangle": 1,
      "activityName": null,
      "couponActivityId": null,
      "tel": null,
      "dayLimit": null,
      "cumulativeLimit": null,
      "dayLimitNum": 0,
      "cumulativeLimitNum": 0,
      "buyValue": null
    }
  }
  res.send(data);
});
router.all('/coupon/voucher/batch/list', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "list": [{
          "couponActivityId": "BoGQLmsK",
          "activityId": "A05aP8fKM",
          "couponId": 2747,
          "mainInfo": "端午节促销",
          "quantity": 100,
          "validateStatus": 5,
          "validateStatusText": "投放中",
          "dayLimit": 1,
          "cumulativeLimit": 10,
          "alldayIssueLimit": 100
        },
        {
          "couponActivityId": "BoGQLmsK",
          "activityId": "A05aP8fKM",
          "couponId": 2747,
          "mainInfo": "端午节促销",
          "quantity": 100,
          "validateStatus": 1,
          "validateStatusText": "投放中",
          "dayLimit": 1,
          "cumulativeLimit": 10,
          "alldayIssueLimit": 100
        },
        {
          "couponActivityId": "BoGQLmsK",
          "activityId": "A05aP8fKM",
          "couponId": 2747,
          "mainInfo": "端午节促销",
          "quantity": 100,
          "validateStatus": 0,
          "validateStatusText": "投放中",
          "dayLimit": 1,
          "cumulativeLimit": 10,
          "alldayIssueLimit": 100
        },
      ],
      "pageSize": 10,
      "pages": 2,
      "total": 11,
      "page": 2
    }
  }
  res.send(data);
});
router.all('/coupon/to/activity', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "couponActivityId": "BoGQLmsK"
    }
  }
  res.send(data);
});
router.all('/coupon/voucher/batch/detail', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": {
      "couponActivityId": "BoGQLmsK",
      "activityId": "A05aP8fKM",
      "couponId": 2747,
      "mainInfo": "端午节促销",
      "quantity": 100,
      "validateStatus": 1,
      "validateStatusText": null,
      "dayLimit": 1,
      "cumulativeLimit": 10,
      "alldayIssueLimit": 100
    }
  }
  res.send(data);
});
router.all('/coupon/category/list', function(req, res) {
  let data = {
    "status": 200,
    "message": "请求成功.",
    "data": [{
        "id": 4,
        "name": "优惠券",
        "pid": 0,
        "logoUrl": null,
        "comment": null,
        "children": [{
            "id": 9,
            "name": "通用券",
            "pid": 4,
            // "logoUrl": "../../assets/couponChoice/discount_icon.png",
            "comment": "以上优惠券均无法满足，可创建通用券",
            "children": null,
            "leaf": true
          },
          {
            "id": 6,
            "name": "免费试吃试用",
            "pid": 4,
            // "logoUrl": "../../assets/couponChoice/gift_icon.png",
            "comment": "免费试吃试用券, 用户免费享受服务或商品",
            "children": null,
            "leaf": true
          },
          {
            "id": 2,
            "name": "代金券",
            "pid": 4,
            // "logoUrl": "../../assets/couponChoice/taste_icon.png",
            "comment": "商品代金券, 用户在支付时直接抵消相应金额",
            "children": null,
            "leaf": true
          },
          {
            "id": 1,
            "name": "礼品券",
            "pid": 4,
            // "logoUrl": "../../assets/couponChoice/common_icon.png",
            "comment": "商品礼品券, 免费兑换礼品",
            "children": null,
            "leaf": true
          },
          {
            "id": 0,
            "name": "折扣券",
            "pid": 4,
            // "logoUrl": "../../assets/couponChoice/brand_icon.png",
            "comment": "商品折扣券, 用户达到指定消费金额时, 享受折扣优惠",
            "children": null,
            "leaf": true
          }
        ],
        "leaf": false
      },
      {
        "id": 3,
        "name": "促销信息",
        "pid": 0,
        "logoUrl": null,
        "comment": null,
        "children": [{
            "id": 8,
            "name": "品牌活动",
            "pid": 3,
            // "logoUrl": "../../assets/couponChoice/voucher_icon.png",
            "comment": "商品折扣券, 品牌大促, 推广",
            "children": null,
            "leaf": true
          },
          {
            "id": 7,
            "name": "单品优惠",
            "pid": 3,
            // "logoUrl": "../../assets/couponChoice/preference_icon.png",
            "comment": "想要爆款引流, 就选单品优惠",
            "children": null,
            "leaf": true
          }
        ],
        "leaf": false
      }
    ]
  }
  res.send(data);
});





module.exports = router;
