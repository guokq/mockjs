let express = require('express') ;
let router = express.Router() ;
let Mock = require("mockjs") ;


// Mock 数据模拟参考地址： http://mockjs.com/examples.html

router.all('/lottery.do' , function(req , res , next){
	let data = {
        data: {
            dayLotteryTimesLimit: 10,
            description: "抽奖活动",
            endDate: 1518848777000,
            id: 5,
            name: "3月抽奖",
            prizeList: Mock.mock({
            	'list|1-10': [{
				  'id|+1': 1 , 			//生成序号  以1开始，每次 +1
				  'name|2-5' : 'Carson' , 	//重复 carson 3到5次
				  'name1|3' : 'ca' ,		//重复 cs 三次
				  'name2|1-10.2-5': 110.24,	 //生成浮点数 整数 1 - 10 , 小数位数 2-5
				  'name3|1-2' : true		//生成随机bool值
				  , 'cname': Mock.Random.cname() 	//姓名
				  , 'datetime' : Mock.Random.datetime() 	//生成随机时间
				  , 'url' : Mock.Random.url() 	//随时 url
				  , 'email' : Mock.Random.email()	//随机邮件
				  , 'images': Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')	//随机图片
				  , 'region' : Mock.Random.region()			//随机地区
				  , 'province' : Mock.Random.province()   //随机省份
				  , 'city' : Mock.Random.city(true)	//随机市
				  , 'distinct': Mock.Random.county(true) //随机区
				  , 'zip' : Mock.Random.zip()   //随机邮政编码
				  , 'guid' : Mock.Random.guid()   //随机 uuid
				  , 'address': Mock.Random.paragraph(1, 10)


            	}]
            }),
		  startDate: 1492241168000
        },
        status: 200,
        msg: ""
    }
    res.json(data);
//     next() ;
});

router.all("/get" , function(req , res){
	res.json({"name":"fasdfasdfs"});
});

router.all("/content" , function(req , res){
	res.json({
		activityTemplateSceneId: "MS4CZgy9z",
		content: `"{↵  "document": {↵    "width": 750,↵    "height": "auto"↵  },↵  "scene": [↵    {↵      "name": "券列表模板A",↵      "shapes": [↵        {↵          "width": "100%",↵          "value": "@banner"↵        },↵        {↵          "padding": "18px",↵          "background": "#f5f5f5",↵          "border": "#e4e4e4 solid 1px",↵          "font-size": "24px",↵          "display": "block",↵          "children": [↵            {↵              "marginBottom": 15,↵              "padding": 		"15px",↵              "background": "#fff",↵              "border": "#e4e4e4 solid 1px",↵              "display": "block",↵              "value": "@list",↵              "children": [↵                {↵                  "position": "relative",↵                  "children": [↵                    {↵                      "hook": "viewDetail",↵                      "children": [↵                        {↵                          "width": 170,↵                          "backgroundSize": 		"90%",↵                          "border": "#e4e4e4 solid 1px",↵                          "borderRadius": 7,↵                          "display": "inline-block",↵                          "value": "@logo"↵                        },↵                        {↵                          "x": 30,↵                          "width": 460,↵                          "minHeight": 180,↵                          "display": "inline-block",↵                          "position": 		"relative",↵                          "children": [↵                            {↵                              "marginTop": 20,↵                              "display": "block",↵                              "value": "@shopName"↵                            },↵                            {↵                              "width": 320,↵                              "position": "absolute",↵                              "bottom": 0,↵                              "children": 		[↵                                {↵                                  "type": "h2",↵                                  "fontSize": 35,↵                                  "lineHeight": 50,↵                                  "color": "#ff4c6a",↵                                  "value": "@mainInfo"↵                                },↵                                {↵                                  "fontSize": 20,↵                                  "borderRadius": 		7,↵                                  "display": "inline-block",↵                                  "value": "@type"↵                                }↵                              ]↵                            }↵                          ]↵                        }↵                      ]↵                    },↵                    {↵                      "width": 160,↵                      "lineHeight": 60,↵                      "color": "#fff",↵                      "background": 		"#ff4c6a",↵                      "borderRadius": 15,↵                      "textAlign": "center",↵                      "position": "absolute",↵                      "right": 0,↵                      "bottom": 0,↵                      "hook": "viewDetail",↵                      "html": "立即领取"↵                    }↵                  ]↵                }↵              ]↵            }↵          ]↵        }↵      ]↵    }↵  ],↵  "manifest": [↵    {↵      "value": "<img 		src='http://ma.rtmap.com/static/tpl_banner.jpg' width='100%'>",↵      "id": "banner"↵    },↵    {↵      "value": [↵        {↵          "logo": "http://ma.rtmap.com/static/tpl_logo.jpg",↵          "shopName": "西单大悦城1F",↵          "mainInfo": "30元",↵          "type": "满198元可用"↵        },↵        {↵          "logo": "http://ma.rtmap.com/static/tpl_logo.jpg",↵          "shopName": "这里是测试店铺名称",↵          "mainInfo": "30元",↵          "type": "全场折扣"↵        },↵        		{↵          "logo": "http://ma.rtmap.com/static/tpl_logo.jpg",↵          "shopName": "西单大悦城1F",↵          "mainInfo": "30元",↵          "type": "满100元可用"↵        }↵      ],↵      "id": "list"↵    }↵  ],↵  "share": {↵    "title": "分享标题",↵    "desc": "分享描述",↵    "link": "分享链接",↵    "imgUrl": "分享图标"↵  }↵}"
		`,createTime: "2018-07-25 13:56:55",
		sceneName: "券列表竖版场景A",
	});
});

module.exports = router;
