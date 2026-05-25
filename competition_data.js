// ============================================================
// 竞赛数据 - 从Excel提取（严格模式）
// 数据来源: 竞赛信息元数据.xlsx
// 规则: 所有数据均来自Excel原始数据，无任何自动生成或推断内容
// 总计: 148 个竞赛
// ============================================================

const RAW_DATA = [
  {
    "name": "全国大学生数学建模竞赛",
    "org": "中国工业与应用数学学会",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "保研加分",
      "短周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年9月7日20时",
        "deadlineDate": "2026-09-07",
        "period": "2026年9月10日18:00-9月13日20:00",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://www.mcm.edu.cn/"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年9月1日20:00",
        "deadlineDate": "2025-09-01",
        "period": "2025年9月4日18:00-9月7日20:00",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.mcm.edu.cn/html_cn/block/8579f5fce999cdc896f78bca5d4f8237.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年9月2日20:00",
        "deadlineDate": "2024-09-02",
        "period": "2024年9月5日18:00-9月8日20:00",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.mcm.edu.cn/html_cn/block/8579f5fce999cdc896f78bca5d4f8237.html"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛模拟电子系统专题赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年？-8月27日",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "http://nuedc.xjtu.edu.cn/index/index/detail/id/148/catid/6.html"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛嵌入式AI专题赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年1月20日",
        "deadlineDate": "2026-01-20",
        "period": "2026年1月20日-7月25日",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "winter",
          "spring",
          "summer"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/344"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛信息科技前沿专题赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年1月15日17:00",
        "deadlineDate": "2026-01-15",
        "period": "2025年12月15日-2026年7月31日",
        "sem": "寒假（1-2月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "summer",
          "spring"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/342"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月15日17:00",
        "deadlineDate": "2024-03-15",
        "period": "2024年2月26日-7月31日",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "winter",
          "spring",
          "summer"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/318"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年5月31日",
        "deadlineDate": "2025-05-31",
        "period": "2025年7月30日8:00-8月2日20:00",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/330"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛 模拟电子系统专题赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年？-8月30日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/317"
      }
    ]
  },
  {
    "name": "全国大学生电子设计竞赛嵌入式系统专题邀请赛",
    "org": "全国大学生电子设计竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年4月10日",
        "deadlineDate": "2024-04-10",
        "period": "2024年4月10日-7月25日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.nuedc-training.com.cn/index/news/details/new_id/319"
      }
    ]
  },
  {
    "name": "蓝桥杯全国大学生软件和信息技术大赛",
    "org": "蓝桥杯全国大学生软件和信息技术大赛",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "长周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年10月-2026年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://dasai.lanqiao.cn/notices/1829"
      }
    ]
  },
  {
    "name": "蓝桥杯全国大学生软件和信息技术专业人才大赛",
    "org": "蓝桥杯全国大学生软件和信息技术大赛",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "长周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年10月-2025年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://dasai.lanqiao.cn/notices/1666"
      }
    ]
  },
  {
    "name": "全国大学生节能减排社会实践与科技竞赛",
    "org": "全国大学生节能减排社会实践与科技竞赛委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月12日18:00",
        "deadlineDate": "2026-04-12",
        "period": "2026年4月12日-8月2日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=36"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月12日18:00",
        "deadlineDate": "2025-04-12",
        "period": "2025年4月12日-8月11日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=61"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年4月12日18:00",
        "deadlineDate": "2024-04-12",
        "period": "2024年4月12日-8月7日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=89"
      },
      {
        "year": 2026,
        "deadlineStr": "2026年4月12日18:00",
        "deadlineDate": "2026-04-12",
        "period": "2026年4月-8月2日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=36"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月12日18:00",
        "deadlineDate": "2025-04-12",
        "period": "2025年4月-8月11日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=61"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月25日24:00",
        "deadlineDate": "2024-05-25",
        "period": "2024年5月-8月7日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.jienengjianpai.org/nd.jsp?id=84"
      }
    ]
  },
  {
    "name": "全国大学生生命科学竞赛",
    "org": "全国大学生生命科学竞赛委员会",
    "level": "全国性",
    "type": "学科竞赛,创新创业竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "长周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年1月15日",
        "deadlineDate": "2026-01-15",
        "period": "2025年8月1日-2026年7月",
        "sem": "暑假（7-8月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "summer",
          "winter",
          "spring"
        ],
        "link": "https://culsc.cn/#/EdunoticeDetail?id=551&type=4"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年1月15日",
        "deadlineDate": "2025-01-15",
        "period": "2024年7月1日-2025年7月",
        "sem": "暑假（7-8月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "summer",
          "winter",
          "spring"
        ],
        "link": "https://jwc.cugb.edu.cn/upload/resources/file/2024/12/20/256982.pdf"
      },
      {
        "year": 2024,
        "deadlineStr": "2023年7月8日",
        "deadlineDate": "2023-07-08",
        "period": "2023年7月8日-2024年7月",
        "sem": "暑假（7-8月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "summer",
          "winter",
          "spring"
        ],
        "link": "https://bio.ncu.edu.cn/__local/6/E6/37/A3A962E65F2456E01CF11346654_5DB92D1D_8BC5B.pdf?e=.pdf"
      }
    ]
  },
  {
    "name": "CCF大数据学术会议",
    "org": "中国计算机学会",
    "level": "全国性",
    "type": "会议论坛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "不限学历",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月20日23:59",
        "deadlineDate": "2026-04-20",
        "period": "2026年4月20日-8月23日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.ccf.org.cn/Media_list/TC/2026-01-12/861423.shtml"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月1日23:59",
        "deadlineDate": "2025-06-01",
        "period": "2025年6月1日-9月14日",
        "sem": "暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "autumn"
        ],
        "link": "https://www.ccf.org.cn/Media_list/TC/2025-02-20/838203.shtml"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年4月21日23:59",
        "deadlineDate": "2024-04-21",
        "period": "2024年4月21日-8月11日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.ccf.org.cn/Chapters/TC/TC_Listing/TFBD/tzzw/2024-04-14/819622.shtml"
      }
    ]
  },
  {
    "name": "中国计算机应用大会",
    "org": "中国计算机学会",
    "level": "全国性",
    "type": "会议论坛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "不限学历",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2025年4月15日",
        "deadlineDate": "2025-04-15",
        "period": "2025年4月15日-8月10日",
        "sem": "暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "summer",
          "spring"
        ],
        "link": "https://sinoconf.napstic.cn/detail/index/20260310100530"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月15日",
        "deadlineDate": "2025-04-15",
        "period": "2025年4月15日-8月9日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.ccf.org.cn/Chapters/TC/TC_Listing/TCAPP/tzzw/2025-02-16/838205.shtml"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年4月15日",
        "deadlineDate": "2024-04-15",
        "period": "2024年4月15日-7月18日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.computerjournals.org.cn/cn/ch/reader/view_news.aspx?id=20240229091628001"
      }
    ]
  },
  {
    "name": "中国“人工智能+”创新创业挑战赛",
    "org": "中国人工智能学会主办",
    "level": "全国性",
    "type": "会议论坛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "不限学历",
    "tags": [
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月1日",
        "deadlineDate": "2026-05-01",
        "period": "2026年4月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://caiiec.caai.cn/index.html"
      }
    ]
  },
  {
    "name": "全国大学生广告艺术大赛",
    "org": "全国大学生广告艺术大赛组委会",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上",
    "object": "本科生、专科生",
    "tags": [
      "长周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年1月-12月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "https://www.sun-ada.net/home/about_intrs.html"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年1月-13月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "https://www.ccava.cn/newsinfo/8118094.html"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年1月-14月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "https://www.shejijingsai.com/2024/01/1073816.html"
      }
    ]
  },
  {
    "name": "未来设计师・全国高校数字艺术设计大赛",
    "org": "待更新",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "不接受个人报名",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月20日",
        "deadlineDate": "2026-06-20",
        "period": "2025年12月-2026年11月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "summer",
          "spring"
        ],
        "link": "https://www.ncda.org.cn/"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月20日",
        "deadlineDate": "2025-06-20",
        "period": "2024年12月-2025年12月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "summer",
          "spring"
        ],
        "link": "https://www.ncda.org.cn/"
      },
      {
        "year": 2024,
        "deadlineStr": "2026年6月22日",
        "deadlineDate": "2026-06-22",
        "period": "2023年12月-2024年13月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "summer",
          "spring"
        ],
        "link": "https://www.ncda.org.cn/"
      }
    ]
  },
  {
    "name": "中国大学生篮球一级联赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年12月-2026年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=218"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年12月-2025年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=206"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2023年12月-2024年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=172"
      }
    ]
  },
  {
    "name": "中国大学生篮球二级联赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年12月-2026年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=217"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年12月-2025年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=205"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2023年12月-2024年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=173"
      }
    ]
  },
  {
    "name": "中国大学生篮球三级联赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年12月-2026年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=216"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年12月-2025年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=204"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2023年12月-2024年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://cuba.hust.edu.cn/newdetail?id=174"
      }
    ]
  },
  {
    "name": "“挑战杯”全国大学生课外学术科技作品竞赛",
    "org": "共青团中央、中国科协、教育部、中国社会科学院、全国学联和江苏省人民政府",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "团队赛",
      "个人赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年4月-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://2025.tiaozhanbei.net/d49/article/676/"
      }
    ]
  },
  {
    "name": "“挑战杯”中国大学生创业计划竞赛",
    "org": "共青团中央、教育部、人力资源社会保障部、中国科协、中国社会科学院、中国工程院、全国学联、辽宁省人民政府",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "团队赛",
      "个人赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年4月-12月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.jbzy.com.cn/Uploads/keditor/file/20260413/20260413130635_10073.pdf"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-13月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://cxcysj.xzcit.cn/static/upload/file/20250922/1758524868195268.pdf"
      }
    ]
  },
  {
    "name": "ACM-ICPC 国际大学生程序设计竞赛",
    "org": "美国计算机协会（ACM）",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "高获奖率",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年4月-11月",
        "sem": "暑假（7-8月）,春季学期（2-6月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "spring",
          "autumn"
        ],
        "link": "https://icpc.global/"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年4月-11月",
        "sem": "暑假（7-8月）,春季学期（2-6月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "spring",
          "autumn"
        ],
        "link": "https://icpc.global/"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-11月",
        "sem": "暑假（7-8月）,春季学期（2-6月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "spring",
          "autumn"
        ],
        "link": "https://icpc.global/"
      }
    ]
  },
  {
    "name": "中国国际大学生创新大赛",
    "org": "教育部、中央统战部、中央网信办、国家发展改革委、工业和信息化部、人力资源社会保障部、农业农村部、中国科学院、中国工程院、国家知识产权局、共青团中央和河南省人民政府",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年4月-9月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://cy.ncss.cn/"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-9月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://cy.ncss.cn/information/8a80808d8f1481ef018f7158263a0016"
      }
    ]
  },
  {
    "name": "中国大学生医学技术技能大赛",
    "org": "教育部和有关部委、省市",
    "level": "全国性",
    "type": "技能实操竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "毕业（生产）实习阶段",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年3月-5月",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://med.yangtzeu.edu.cn/info/1193/3297.htm"
      }
    ]
  },
  {
    "name": "全国大学生机械创新设计大赛",
    "org": "全国大学生机械创新设计大赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "有奖金",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年3月-2026年7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "https://umic.moocollege.com/home/newsContain/detail?newsId=102880"
      }
    ]
  },
  {
    "name": "全国大学生结构设计竞赛",
    "org": "全国大学生结构设计竞赛秘书处",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年4月-10月18日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://www.structurecontest.com/datacenter/newsdetail?id=9635"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年4月-10月19日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://www.structurecontest.com/datacenter/newsdetail?id=8754"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-10月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://www.structurecontest.com/datacenter/newsdetail?id=6390"
      }
    ]
  },
  {
    "name": "全国大学生智能汽车竞赛",
    "org": "高等学校自动化专业教学指导分委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "http://www.smartcarrace.com/newsdetail?id=322"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "http://smartcarrace.com/newsdetail?id=299"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "http://smartcarrace.com/newsdetail?id=206"
      }
    ]
  },
  {
    "name": "全国大学生电子商务\"创新、创意及创业\"挑战赛",
    "org": "全国电子商\r\n务产教融合创新联盟、西安交通大学",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年10月-2026年8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "https://sanchuang-bodao.oss-cn-hangzhou.aliyuncs.com/system/2025-12-22/2002947154326061056_%E7%AC%AC%E5%8D%81%E5%85%AD%E5%B1%8A%E4%B8%89%E5%88%9B%E8%B5%9B%E6%8A%A5%E5%90%8D%E9%80%9A%E7%9F%A5.pdf"
      }
    ]
  },
  {
    "name": "中国大学生工程实践与创新能力大赛",
    "org": "中国大学生工程实践与创新能力大赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年6月1日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://gcxl.edu.cn/new/match_news.html?_=aWQjPTEzMg=="
      }
    ]
  },
  {
    "name": "两岸新锐设计竞赛·华灿奖",
    "org": "中国高等教育学会、中华中山文化交流协会",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年9月30日17:00",
        "deadlineDate": "2025-09-30",
        "period": "2025年9月30日-2025年12月",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://www.huacanjiang.com/home/newsDetails?newsId=105179"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月30日17:00",
        "deadlineDate": "2024-06-30",
        "period": "2024年4月-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://oss.moocollege.com/23008/edit/jvqr2LUP_1713855775611.pdf"
      }
    ]
  },
  {
    "name": "全国大学生创新年会",
    "org": "“国创计划”秘书处、南京大学",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年11月1日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.gjcxcy.cn/PublicColumn/Notice/e90b0a12-1e31-488b-9102-af068a2f2f0b"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年11月1日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.gjcxcy.cn/PublicColumn/Notice/e80a1111-011d-4ae3-9728-08ac2112ba3a"
      }
    ]
  },
  {
    "name": "全国大学生化工设计竞赛",
    "org": "中国化工学会、中国化工教育协会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月31日",
        "deadlineDate": "2026-03-31",
        "period": "2026年3月-8月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://iche.zju.edu.cn/a/sstz/1656.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月31日",
        "deadlineDate": "2025-03-31",
        "period": "2025年3月-8月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://iche.zju.edu.cn/a/sstz/1544.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月31日",
        "deadlineDate": "2024-03-31",
        "period": "2024年3月-8月15日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://iche.zju.edu.cn/a/sstz/1505.html"
      }
    ]
  },
  {
    "name": "全国大学生机器人大赛",
    "org": "全国大学生机器人大赛组织委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.robomaster.com/zh-CN/resource/pages/announcement/1888"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.robomaster.com/zh-CN/resource/pages/announcement/1783"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.robomaster.com/zh-CN/resource/pages/announcement/1663"
      }
    ]
  },
  {
    "name": "“高教杯”全国大学生先进成图技术与产品信息建模创新大赛",
    "org": "全国大学生先进成图技术与产品信息建模创新大赛组委会 \n中国图学学会制图技术专业委员会 \n中国图学学会产品信息建模专业委员会 \n横店镇（拟定）",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "不限学历",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月25日24:00",
        "deadlineDate": "2026-04-25",
        "period": "2026年4月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.chengtudasai.com/index/news/show/id/314.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月25日",
        "deadlineDate": "2025-04-25",
        "period": "2025年4月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.chengtudasai.com/index/news/show/id/271.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年4月30日",
        "deadlineDate": "2024-04-30",
        "period": "2024年4月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.chengtudasai.com/index/news/show/id/232.html"
      }
    ]
  },
  {
    "name": "全国三维数字化创新设计大赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "不限学历",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月23日",
        "deadlineDate": "2026-08-23",
        "period": "2026年4月-12月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://3dds.3ddl.net/index.php?ctl=Informationlist&met=newsdetails&id=704"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月30日",
        "deadlineDate": "2025-06-30",
        "period": "2025年3月-12月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://3dds.3ddl.net/index.php?ctl=Informationlist&met=newsdetails&id=590"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月30日",
        "deadlineDate": "2024-06-30",
        "period": "2024年3月-12月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://3dds.3ddl.net/index.php?ctl=Informationlist&met=newsdetails&id=501"
      }
    ]
  },
  {
    "name": "CIMC“西门子杯”中国智能制造挑战赛",
    "org": "待更新",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "待更新",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月31日",
        "deadlineDate": "2026-05-31",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.siemenscup-cimc.org.cn/notice/NoticeDetail?id=2431"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月31日",
        "deadlineDate": "2025-05-31",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.siemenscup-cimc.org.cn/notice/NoticeDetail?id=1937"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月31日",
        "deadlineDate": "2024-05-31",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.siemenscup-cimc.org.cn/notice/NoticeDetail?id=1661"
      }
    ]
  },
  {
    "name": "中国大学生计算机设计大赛",
    "org": "中国大学生计算机设计大赛组织委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "https://jsjds.blcu.edu.cn/info/1041/2274.htm"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "https://jsjds.blcu.edu.cn/info/1043/2484.htm"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年7月-8月",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "https://jsjds.blcu.edu.cn/info/1043/2624.htm"
      }
    ]
  },
  {
    "name": "中国高校计算机大赛-AIGC创新赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、博士生、硕士生、专科生",
    "tags": [
      "白名单",
      "团队赛",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月11日8:00",
        "deadlineDate": "2026-05-11",
        "period": "2026年3月-8月23日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://aigc.vivo.com.cn/#/info/CPN20260310-069"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月12日8:00",
        "deadlineDate": "2025-05-12",
        "period": "2025年3月-8月22日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://aigc.vivo.com.cn/#/info/CPN20250307-034"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-9月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://aigc.vivo.com.cn/#/info/CPN20240401-002"
      }
    ]
  },
  {
    "name": "米兰设计周-中国高校设计学科师生优秀作品展",
    "org": "米兰设计周-中国高校设计学科师生优秀作品展组委会",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2025年3月1日",
        "deadlineDate": "2025-03-01",
        "period": "2025年10月-2026年8月",
        "sem": "春季学期（2-6月）,秋季学期（9-1月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "autumn",
          "summer",
          "winter"
        ],
        "link": "https://www.cnyisai.com/144212.html"
      }
    ]
  },
  {
    "name": "“米兰设计周-中国高校设计学科师生优秀作品展”",
    "org": "米兰设计周-中国高校设计学科师生优秀作品展组委会",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年3月2日",
        "deadlineDate": "2026-03-02",
        "period": "2025年10月-2026年9月",
        "sem": "春季学期（2-6月）,秋季学期（9-1月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "autumn",
          "summer",
          "winter"
        ],
        "link": "https://www.shejijingsai.com/2024/10/1198187.html"
      }
    ]
  },
  {
    "name": "米兰设计周--中国高校设计学科师生优秀作品展",
    "org": "米兰设计周-中国高校设计学科师生优秀作品展组委会",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年3月3日",
        "deadlineDate": "2024-03-03",
        "period": "2025年10月-2026年10月",
        "sem": "春季学期（2-6月）,秋季学期（9-1月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "autumn",
          "summer",
          "winter"
        ],
        "link": "https://swjtuhc.cn/html/jsxx/detail/259278"
      }
    ]
  },
  {
    "name": "全国大学生光电设计竞赛",
    "org": "中国光学学会",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://gd.moocollege.com/home/newsDetails?newsId=122770"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://gd.moocollege.com/home/newsDetails?newsId=122747"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://gd.moocollege.com/home/newsDetails?newsId=122729"
      }
    ]
  },
  {
    "name": "全国大学生集成电路创新创业大赛",
    "org": "工业和信息化部人才交流中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月31日",
        "deadlineDate": "2026-03-31",
        "period": "2026年1月-7月",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "winter",
          "spring",
          "summer"
        ],
        "link": "http://univ.ciciec.com/col.jsp?id=123"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月31日",
        "deadlineDate": "2025-03-31",
        "period": "2025年1月-7月",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "winter",
          "spring",
          "summer"
        ],
        "link": "http://univ.ciciec.com/col.jsp?id=192"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月31日",
        "deadlineDate": "2024-03-31",
        "period": "2024年1月-7月",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "winter",
          "spring",
          "summer"
        ],
        "link": "http://univ.ciciec.com/col.jsp?id=192"
      }
    ]
  },
  {
    "name": "全国大学生信息安全竞赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2025年12月21日0:00",
        "deadlineDate": "2025-12-21",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "http://www.ciscn.cn/competition/securityCompetition?compet_id=44"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月25日24:00",
        "deadlineDate": "2025-06-25",
        "period": "2025年5月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.ciscn.cn/competition/securityCompetition?compet_id=43"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年4月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.ciscn.cn/competition/securityCompetition?compet_id=39"
      }
    ]
  },
  {
    "name": "全国周培源大学生力学竞赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "个人赛",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年3月31日",
        "deadlineDate": "2025-03-31",
        "period": "2025年3月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://zpy.cstam.org.cn/NewsDetail.aspx?PartNodeId=15&ArticleID=473"
      }
    ]
  },
  {
    "name": "中国大学生机械工程创新创意大赛",
    "org": "中国机械工程学会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "待更新",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年3月-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://meicc.cmes.org/datacenter/newsdetail?id=9660"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年4月-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://meicc.cmes.org/datacenter/newsdetail?id=8998"
      }
    ]
  },
  {
    "name": "中国机器人大赛暨RoboCup机器人世界杯中国赛",
    "org": "中国自动化学会\n\nRoboCup 中国委员会\n\n北京市怀柔区人民政府",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "待更新",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年5月1日-4日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://rcccaa.drct-caa.org.cn/article_info.php?id=114"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年5月1日-4日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://rcccaa.drct-caa.org.cn/article_info.php?id=36"
      }
    ]
  },
  {
    "name": "“中国软件杯”大学生软件设计大赛",
    "org": "待更新",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月30日",
        "deadlineDate": "2026-06-30",
        "period": "2026年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.cnsoftbei.com/content-1-1250-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年7月23日",
        "deadlineDate": "2025-07-23",
        "period": "2025年4月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.cnsoftbei.com/content-1-1101-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年7月15日",
        "deadlineDate": "2024-07-15",
        "period": "2024年4月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.cnsoftbei.com/content-1-982-1.html"
      }
    ]
  },
  {
    "name": "睿抗机器人开发者大赛(RAICOM)",
    "org": "工业和信息化部人才交流中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月1日",
        "deadlineDate": "2026-07-01",
        "period": "2026年4月-10月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.raicom.com.cn/content.html?cid=1612"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月1日",
        "deadlineDate": "2025-06-01",
        "period": "2025年3月-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.raicom.com.cn/content.html?cid=1200"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月15日",
        "deadlineDate": "2024-06-15",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.raicom.com.cn/content.html?cid=820"
      }
    ]
  },
  {
    "name": "大学生新一代信息通信科技大赛",
    "org": "工业和信息化部人才交流中心、中国通信企业协会、中信科移动通信技术股份有限公司",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单",
      "不接受个人报名"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年2月29日",
        "deadlineDate": "2024-02-29",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://dtcup.dtxiaotangren.com/statics/2025/12/20/%E5%85%B3%E4%BA%8E%E9%82%80%E8%AF%B7%E5%8F%82%E5%8A%A0%E7%AC%AC%E5%8D%81%E4%B8%80%E5%B1%8A%E2%80%9C%E5%A4%A7%E5%94%90%E6%9D%AF%E2%80%9D%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%A1%E6%81%AF%E9%80%9A%E4%BF%A1%E6%8A%80%E6%9C%AF%E5%A4%A7%E8%B5%9B%E7%9A%84%E9%80%9A%E7%9F%A5.pdf"
      }
    ]
  },
  {
    "name": "全国大学生嵌人式芯片与系统设计竞赛芯片应用赛道",
    "org": "中国电子教育学会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月20日",
        "deadlineDate": "2026-04-20",
        "period": "2026年4月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://socoss.socchina.net/file/ueditor/image/20260210/2e475c965f404c55a6435517064a4535.pdf"
      }
    ]
  },
  {
    "name": "全国大学生嵌人式芯片与系统设计竞赛-芯片设计赛道",
    "org": "中国电子教育学会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月31日",
        "deadlineDate": "2026-08-31",
        "period": "2026年7月-11月",
        "sem": "暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "autumn"
        ],
        "link": "http://devise.socchina.net/details?id=a6bb2d24412b4ea480d3521f657986a2"
      }
    ]
  },
  {
    "name": "全国大学生物理实验竞赛",
    "org": "全国高等学校实验物理教学研究会全国大学生物理实验竞赛组织委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月15日",
        "deadlineDate": "2026-05-15",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://wlsycx.moocollege.com/home/newsDetails?newsId=122225"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月15日",
        "deadlineDate": "2025-05-15",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://wlsycx.moocollege.com/home/newsDetails?newsId=103031"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月15日",
        "deadlineDate": "2024-05-15",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://wlsycx.moocollege.com/home/newsDetails?newsId=103030"
      }
    ]
  },
  {
    "name": "国际高校BIM毕业设计创新大赛",
    "org": "中国土木工程学会建筑市场与招标投标研究分会\n\n国家数字建筑行业产教融合共同体\n\n广联达科技股份有限公司",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年11月1日",
        "deadlineDate": "2025-11-01",
        "period": "2025年9月-2026年5月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "https://gxbsxs.glodonedu.com/news/3773847205917329408?type=notice"
      }
    ]
  },
  {
    "name": "“学创杯”全国大学生创业综合模拟大赛",
    "org": "高等学校国家级实验教学示范中心联席会经济与\n管理学科组",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "长周期",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年12月15日-2026年11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "http://www.bster.cn/cyds/article/detail_view?id=2082"
      }
    ]
  },
  {
    "name": "中国高校智能机器人创意大赛",
    "org": "国高校智能机器人创意大赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "待更新",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月8日",
        "deadlineDate": "2026-05-08",
        "period": "2026年3月-7月13日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.robotcontest.cn/home/newsDetails?newsId=119668"
      }
    ]
  },
  {
    "name": "中国好创意暨全国数字艺术设计大赛",
    "org": "待更新",
    "level": "全国性",
    "type": "设计创意竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月30日17:00",
        "deadlineDate": "2026-06-30",
        "period": "2025年10月-2026年8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "https://www.cdec.org.cn/articleDetail/2077"
      }
    ]
  },
  {
    "name": "中国机器人及人工智能大赛",
    "org": "中国机器人及人工智能大赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年3月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.caairobot.com/post/CRAIC2026-NOTIFICATION-NO1/"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.caairobot.com/post/guan-yu-di-er-shi-qi-jie-zhong-guo-ji-qi-ren-ji-ren-gong-zhi-neng-da-sai-quan-guo-zong-jue-sai-de-tong-zhi/"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.caairobot.com/post/guan-yu-di-er-shi-liu-jie-zhong-guo-ji-qi-ren-ji-ren-gong-zhi-neng-da-sai-quan-guo-jue-sai-de-tong-zhi/"
      }
    ]
  },
  {
    "name": "百度之星程序设计大赛",
    "org": "百度公司",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年6月29日-8月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://star.baidu.com/#/news-info?tab=3&id=E7C0AE9DD8CEE7888DE1029F0660AE4A"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://star.baidu.com/#/news-info?tab=3&id=DFB6DFB6D857F4E15BC1326C3E2AE04E"
      }
    ]
  },
  {
    "name": "全国大学生工业设计大赛",
    "org": "全国工业设计一流专业建设协同创新平台、广东省本科高校工业设计专业教学指导委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年7月30日",
        "deadlineDate": "2024-07-30",
        "period": "2024年6月22日-11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.shejijingsai.com/2024/06/1153037.html"
      }
    ]
  },
  {
    "name": "全国大学生水利创新设计大赛",
    "org": "中国水利教育协会",
    "level": "全国性",
    "type": "学科竞赛,设计创意竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年5月20日",
        "deadlineDate": "2025-05-20",
        "period": "2025年5月20日-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://sljzw.hhu.edu.cn/2025/0331/c11808a300361/page.htm"
      }
    ]
  },
  {
    "name": "全国大学生化工实验大赛",
    "org": "中国化工教育协会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "http://edu.cteic.com/match/app/notice/55"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "http://edu.cteic.com/match/app/notice/42"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "http://edu.cteic.com/match/app/notice/22"
      }
    ]
  },
  {
    "name": "全国大学生化学实验创新设计大赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://jwc.jxnu.edu.cn/Portal/ArticlesView.aspx?id=13076"
      }
    ]
  },
  {
    "name": "全国大学生计算机系统统能力大赛",
    "org": "全国高等学校计算机教育研究会 | 系统能力培养研究专家组 | 系统能力培养研究项目发起高校",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "待更新",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月28日",
        "deadlineDate": "2026-05-28",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://os.educg.net/#/"
      }
    ]
  },
  {
    "name": "全国大学生花园设计建造竞赛",
    "org": "北京林业大学、丰台区政府",
    "level": "国际性",
    "type": "设计创意竞赛,学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年2月21日23：59",
        "deadlineDate": "2025-02-21",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "待补充"
      }
    ]
  },
  {
    "name": "全国大学生物联网设计竞赛",
    "org": "全国高等学校计算机教育研究会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年1月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "winter"
        ],
        "link": "https://iot.sjtu.edu.cn/show.aspx?info_lb=36&info_id=6061&flag=2"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年1月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "winter"
        ],
        "link": "https://iot.sjtu.edu.cn/show.aspx?info_lb=36&info_id=4039&flag=2"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年1月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "winter"
        ],
        "link": "https://iot.sjtu.edu.cn/show.aspx?info_lb=36&info_id=3960&flag=2"
      }
    ]
  },
  {
    "name": "全国大学生信息安全与对抗技术竞赛",
    "org": "北京理工大学\n\n中国兵工学会\n\n教育部信息对抗技术专业虚拟教研室",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.isclab.org.cn/2026/03/16/2026%e5%b9%b4%e7%ac%ac23%e5%b1%8a%e4%bf%a1%e6%81%af%e5%ae%89%e5%85%a8%e4%b8%8e%e5%af%b9%e6%8a%97%e6%8a%80%e6%9c%af%e7%ab%9e%e8%b5%9b%e9%80%9a%e7%9f%a5/"
      },
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.isclab.org.cn/2025/03/15/2025%e5%b9%b4%e7%ac%ac22%e5%b1%8a%e4%bf%a1%e6%81%af%e5%ae%89%e5%85%a8%e4%b8%8e%e5%af%b9%e6%8a%97%e6%8a%80%e6%9c%af%e7%ab%9e%e8%b5%9b%e9%80%9a%e7%9f%a5/"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.isclab.org.cn/2024/04/03/2024%e5%b9%b4%e7%ac%ac21%e5%b1%8a%e4%bf%a1%e6%81%af%e5%ae%89%e5%85%a8%e4%b8%8e%e5%af%b9%e6%8a%97%e6%8a%80%e6%9c%af%e7%ab%9e%e8%b5%9b%e9%80%9a%e7%9f%a5/"
      }
    ]
  },
  {
    "name": "全国大学生测绘学科创新创业智能大赛",
    "org": "待更新",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月31日",
        "deadlineDate": "2026-05-31",
        "period": "2026年5月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.csgpc.org/detail/27080.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月31日",
        "deadlineDate": "2025-05-31",
        "period": "2025年5月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.csgpc.org/detail/24835.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月31日",
        "deadlineDate": "2024-05-31",
        "period": "2024年5月-7月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://smt.whu.edu.cn/info/1009/5642.htm"
      }
    ]
  },
  {
    "name": "全国大学生统计建模大赛",
    "org": "中国统计教育学会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://tjjmds.ai-learning.net/dstz/37119.jhtml"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月24日18:00",
        "deadlineDate": "2025-04-24",
        "period": "2025年2月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://tjjmds.ai-learning.net/dstz/37047.jhtml"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月15日20:00",
        "deadlineDate": "2024-03-15",
        "period": "2024年2月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://tjjmds.ai-learning.net/dstz/36972.jhtml"
      }
    ]
  },
  {
    "name": "全国大学生能源经济学术创意大赛",
    "org": "中国优选法统筹法与经济数学研究会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2025年11月16日",
        "deadlineDate": "2025-11-16",
        "period": "2025年8月-2026年5月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "winter",
          "autumn"
        ],
        "link": "https://energy.qibebt.ac.cn/eneco/contribution/index.html#/newsDetail?id=29f53ed0-7e7f-11f0-b106-9994aa9fd9ac&activeTab=1&select=12"
      },
      {
        "year": 2025,
        "deadlineStr": "2024年11月17日",
        "deadlineDate": "2024-11-17",
        "period": "2024年7月-2025年5月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "winter",
          "autumn"
        ],
        "link": "https://energy.qibebt.ac.cn/eneco/contribution/index.html#/newsDetail?id=f7db0d90-40f8-11ef-b522-b5ec059fab92&activeTab=1&select=11"
      },
      {
        "year": 2024,
        "deadlineStr": "2023年11月16日",
        "deadlineDate": "2023-11-16",
        "period": "2023年9月-2024年5月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "winter",
          "autumn"
        ],
        "link": "https://energy.qibebt.ac.cn/eneco/contribution/index.html#/newsDetail?id=9810fe70-4396-11ee-b7d3-c910e9382575&activeTab=1&select=10"
      }
    ]
  },
  {
    "name": "全国大学生基础医学创新研究暨实验设计论坛(大赛)",
    "org": "高等学校大学生医学创新竞赛委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月27日",
        "deadlineDate": "2026-03-27",
        "period": "2026年3月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.jcyxds.com/home/newsDetails?newsId=122227"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年1月31日",
        "deadlineDate": "2025-01-31",
        "period": "2025年1月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "winter"
        ],
        "link": "http://www.jcyxds.com/home/newsDetails?newsId=121016"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "http://www.jcyxds.com/home/newsDetails?newsId=120976"
      }
    ]
  },
  {
    "name": "全国大学生数字媒体科技作品及创意竞赛",
    "org": "中国人工智能学会",
    "level": "国际性",
    "type": "学科竞赛,设计创意竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "白名单",
      "团队赛",
      "短周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年9月21日24:00",
        "deadlineDate": "2025-09-21",
        "period": "2025年9月21日-10月26日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.cmit.cn/html/tongzhigonggao/show-144-45738-1.html"
      }
    ]
  },
  {
    "name": "全国数字建筑创新应用大赛",
    "org": "中国建设教育协会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月31日",
        "deadlineDate": "2026-07-31",
        "period": "2025年4月-10月18日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://bisai.ccen.com.cn/annouce/3811465991275874304?type=notice"
      }
    ]
  },
  {
    "name": "全球校园人工智能算法精英大赛",
    "org": "待更新",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、博士生、专科生",
    "tags": [
      "团队赛",
      "个人赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2026年4月28日-12月31日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.aicomp.cn/notice/notice-1/3618.html"
      }
    ]
  },
  {
    "name": "国际大学生智能农业装备创新大赛",
    "org": "国际农业和生物系统工程委员会\n\n中国农业机械学会\n\n中国农业工程学会\n\n省部共建现代农业装备与技术协同创新中心（江苏大学）\n\n农业工程大学国际联盟",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线上+线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年11月30日",
        "deadlineDate": "2025-11-30",
        "period": "2025年9月10日-2026年6月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://uiaec.ujs.edu.cn/news_show.php?id=224"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年10月20日",
        "deadlineDate": "2024-10-20",
        "period": "2024年7月10日-2025年5月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://uiaec.ujs.edu.cn/news_show.php?id=215"
      }
    ]
  },
  {
    "name": "世界职业院校技能大赛",
    "org": "教育部、国家发展改革委、科技部、工业和信息化部、国家民委、民政部、财政部、人力资源社会保障部、自然资源部、生态环境部、住房城乡建设部、交通运输部、水利部、农业农村部、商务部、国家卫生健康委、应急管理部、国务院国资委、国家粮食和物资储备局、中国民用航空局、国家中医药管理局、中华全国总工会、共青团中央、中华职业教育社、中华全国供销合作总社、中国职业技术教育学会、中国机械工业联合会、中国石油和化学工业联合会、中国物流与采购联合会、中国纺织工业联合会、中国有色金属工业协会、中国煤炭工业协会、天津市人民政府",
    "level": "国际性",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年7月8日24:00",
        "deadlineDate": "2025-07-08",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.vcsc.org.cn/news?id=MTUxMzBkOThjOTFmNDJhYzhkNjM1MjU1YjZjNWYwYzU"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年10月10日24:00",
        "deadlineDate": "2024-10-10",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.vcsc.org.cn/news?id=NDhjZTAyYjhjZTU2NGRlYzhlM2I2MWEzOWI0NGIwNDY"
      }
    ]
  },
  {
    "name": "全国大学生机器人大赛-RoboTac",
    "org": "中华国际科学交流基金会:\n全国大学生机器人大赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "白名单",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年11月1日",
        "deadlineDate": "2025-11-01",
        "period": "2025年11月-2026年8月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "http://robotac.cn/sys-nd/1299.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年10月1日",
        "deadlineDate": "2024-10-01",
        "period": "2024年10月-2025年8月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "http://robotac.cn/sys-nd/1117.html"
      }
    ]
  },
  {
    "name": "一带一路暨金砖国家技能发展与技术创新大赛",
    "org": "金砖国家工商理事会中方理事会\n\n一带一路暨金砖国家技能发展国际联盟\n\n“一带一路”暨金砖国家技能发展与技术创新培训中心",
    "level": "国际性",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "不限学历",
    "tags": [
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年2月7日12:00",
        "deadlineDate": "2026-02-07",
        "period": "2026年1月-11月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "http://inwsa.org/#/view/%E5%A4%A7%E8%B5%9B%E5%85%AC%E5%91%8A/Contests_Notice/3553"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月31日23:59",
        "deadlineDate": "2025-03-31",
        "period": "2025年1月-11月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "http://inwsa.org/#/view/%E5%A4%A7%E8%B5%9B%E5%85%AC%E5%91%8A/Contests_Notice/2927"
      },
      {
        "year": 2024,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2024年1月-11月",
        "sem": "寒假（1-2月）,秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）",
        "sems": [
          "winter",
          "autumn",
          "summer",
          "spring"
        ],
        "link": "http://inwsa.org/#/view/%E5%A4%A7%E8%B5%9B%E5%85%AC%E5%91%8A/Contests_Notice/2367"
      }
    ]
  },
  {
    "name": "全国大学生文化旅游与会展竞赛",
    "org": "中国国际贸易促进委员会商业行业委员会、中国国际商会商业行业商会和中国商业经济学会",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "长周期",
      "保研加分"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月30日；24:00",
        "deadlineDate": "2026-06-30",
        "period": "2026年4月至2026年11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://ccpit.moocollege.com/home/homepage"
      },
      {
        "year": 2025,
        "deadlineStr": "2026年6月30日；24:00",
        "deadlineDate": "2026-06-30",
        "period": "2025年6月22日至2025年11月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/-WKdX8wxOiGkjbnK0JWJOQ"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月10日；24:00",
        "deadlineDate": "2024-05-10",
        "period": "2024年6月至2024年12月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/HCooSXw2NojAd7A_ZZsexA"
      }
    ]
  },
  {
    "name": "全国大学生教育教学能力大赛",
    "org": "中国智慧工程研究会职业教育专业委员会 \n黑龙江省创新教育研究院\n全国大学生教育教学能力大赛组委会",
    "level": "全国性",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "零门槛",
      "个人赛",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年12月4日；24:00",
        "deadlineDate": "2026-12-04",
        "period": "2026年5月1日至2027年1月",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "spring",
          "summer",
          "autumn",
          "winter"
        ],
        "link": "https://www.52jingsai.com/article-23649-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年12月12日；24:00",
        "deadlineDate": "2025-12-12",
        "period": "2025年11月1日至2026年1月",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "https://www.52jingsai.com/article-22464-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年4月24日；24:00",
        "deadlineDate": "2024-04-24",
        "period": "2024年1月16日至2025年5月",
        "sem": "寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "winter",
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-21489-1.html"
      }
    ]
  },
  {
    "name": "“学创杯”全国大学生创业综合模拟演训活动",
    "org": "高等学校国家级实验教学示范中心联席会经济与管理学科组",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "本科生、硕士生、专科生、博士生",
    "tags": [
      "保研加分",
      "团队赛",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无具体时间",
        "deadlineDate": null,
        "period": "2026年1月至11月",
        "sem": "秋季学期（9-1月）,暑假（7-8月）,春季学期（2-6月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "summer",
          "spring",
          "winter"
        ],
        "link": "http://www.xcbds.com/cyds/article/detail_view?id=2082"
      }
    ]
  },
  {
    "name": "iCAN大学生创新创业大赛",
    "org": "中国创造学会",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月31日；24:00",
        "deadlineDate": "2026-08-31",
        "period": "2026年9月至11月中下旬",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-23617-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年7月31日；24：00",
        "deadlineDate": "2025-07-31",
        "period": "2025年5月至11月",
        "sem": "暑假（7-8月）,春季学期（2-6月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "spring",
          "autumn"
        ],
        "link": "http://www.g-ican.com/news/details?id=145"
      },
      {
        "year": 2024,
        "deadlineStr": "2025年7月31日；24：00",
        "deadlineDate": "2025-07-31",
        "period": "2025年4月至11月",
        "sem": "暑假（7-8月）,春季学期（2-6月）,秋季学期（9-1月）",
        "sems": [
          "summer",
          "spring",
          "autumn"
        ],
        "link": "待补充"
      }
    ]
  },
  {
    "name": "全国大学生组织管理能力大赛",
    "org": "中国商业经济学会教育培训分会",
    "level": "全国性",
    "type": "案例分析竞赛,学科竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "短周期",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年6月25日；24:00",
        "deadlineDate": "2025-06-25",
        "period": "2025年6月5日至2025年7月11日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://zznl.52jingsai.com/index/index/news?n=19"
      }
    ]
  },
  {
    "name": "全国大学生文学竞赛",
    "org": "全国大学生文学竞赛组委会、北京中华文化发展协会、黑龙江省创新教育研究院",
    "level": "全国性",
    "type": "学科竞赛,征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "个人赛",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月31日；24:00",
        "deadlineDate": "2026-07-31",
        "period": "2025年12月18日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "autumn",
          "winter",
          "spring",
          "summer"
        ],
        "link": "http://wxjs.52jingsai.com/index/index/news?n=1"
      }
    ]
  },
  {
    "name": "“军垦杯”散文大赛",
    "org": "《中国作家》杂志社、河北省作家协会、兵团作家协会、兵团第二师铁门关市文学艺术界联合会",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "个人赛",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无具体时间",
        "deadlineDate": null,
        "period": "2026年3月23日至2026年7月20日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-23604-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "无具体时间",
        "deadlineDate": null,
        "period": "2025年3月16日至2025年8月20日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/yeMTON9USmG0j5fy9BuPwA"
      }
    ]
  },
  {
    "name": "全国大学生汉字大赛",
    "org": "全国大学生汉字大赛组委会            北京中华文化发展协会\n黑龙江省创新教育研究院",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "零门槛",
      "高获奖率",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月10日；24:00",
        "deadlineDate": "2026-07-10",
        "period": "2026年5月17日至2026年8月中旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://hzds.52jingsai.com/index/index/news?n=3"
      }
    ]
  },
  {
    "name": "中国（海宁）徐志摩微诗歌大赛",
    "org": "中国作协《诗刊》社、中国诗歌学会",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2026年4月1日至2026年6月15日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-23597-1.html"
      }
    ]
  },
  {
    "name": "全国新概念作文大赛",
    "org": "中国福利会",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、博士生、专科生、不限专业",
    "tags": [
      "有奖金",
      "个人赛",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2026年5月1日至2026年11月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-23689-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2025年5月１日至2025年11月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-22294-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2024年5月１日至2024年11月10日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-20822-1.html"
      }
    ]
  },
  {
    "name": "“白马湖散文奖”征稿",
    "org": "浙江省绍兴市上虞区人民政府",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2026年5月7日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-23688-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2024年02月18日至2024年5月18日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://www.chinawriter.com.cn/n1/2024/0218/c403988-40178673.html"
      }
    ]
  },
  {
    "name": "全国大学生“逸仙青年文学奖”征稿",
    "org": "中山大学中国语言文学系",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、博士生、专科生、不限专业",
    "tags": [
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2026年4月2日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-23609-1.html"
      }
    ]
  },
  {
    "name": "全国大学生普通话能力竞赛",
    "org": "华夏文化促进会文化产业工作委员会",
    "level": "全国性",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "高获奖率",
      "零门槛",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月26日；17:00",
        "deadlineDate": "2026-06-26",
        "period": "2026年6月26日至2026年7月下旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://pthnljs.52jingsai.com/index/news/info.html?id=3"
      }
    ]
  },
  {
    "name": "全国大学生普通话大赛",
    "org": "中国语文报刊协会读写教学分会",
    "level": "全国性",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "零门槛",
      "个人赛",
      "短周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年12月30日；17:00",
        "deadlineDate": "2025-12-30",
        "period": "2025年11月07日至2026年1月10日",
        "sem": "寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "winter",
          "autumn"
        ],
        "link": "http://pth.52jingsai.com/news/info.html?id=56"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年10月26日；17：00",
        "deadlineDate": "2024-10-26",
        "period": "2024年9月18日至2024年11月中旬",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s?__biz=MzI0MDEyNTg1OA==&mid=2653303123&idx=1&sn=0e69b1a2d54dbc5b0369c3bb1ecdb4c5&chksm=f3bfd58e4d5c1854af87779594ea258a71478d6ceacd1734f12856f202670557356b65840c36&scene=27"
      }
    ]
  },
  {
    "name": "全国大学生英语阅读竞赛",
    "org": "全国大学生英语阅读竞赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "高获奖率",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年12月20日；24:00",
        "deadlineDate": "2025-12-20",
        "period": "2025年11月23日至2026年1月16日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://read.52jingsai.com/index/Cms/content.html?id=2"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年12月21日；24:00",
        "deadlineDate": "2024-12-21",
        "period": "2024年11月16日至2025年1月4日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "https://www.52jingsai.com/article-21609-1.html"
      }
    ]
  },
  {
    "name": "“译达人杯”全国大学生英语翻译竞赛",
    "org": "中国国际科技促进会综合素质与职业发展教育专业委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "高获奖率",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年12月18日；12：00",
        "deadlineDate": "2025-12-18",
        "period": "2025年10月14日至2026年1月下旬",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://tc.52jingsai.com/index/Cms/content.html?id=57"
      },
      {
        "year": 2024,
        "deadlineStr": "2025年1月4日；12：00",
        "deadlineDate": "2025-01-04",
        "period": "2024/11/5至2025年1月下旬",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://tc.52jingsai.com/index/Cms/content.html?id=49"
      }
    ]
  },
  {
    "name": "“求是杯”国际诗歌创作与翻译大赛",
    "org": "中外语言文化比较学会",
    "level": "国际性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "高获奖率",
      "零门槛",
      "个人赛",
      "长周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年11月30日；24:00",
        "deadlineDate": "2025-11-30",
        "period": "2025年12月至2026年4月下旬",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://qiushipoem.moocollege.com/home/news/competitionInfo?newsType=null&parName=竞赛信息&titleName=大赛简介&titleTem=/info"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月30日；24：00",
        "deadlineDate": "2024-05-30",
        "period": "2024年2月1日起至2024年9月16日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-20512-1.html"
      }
    ]
  },
  {
    "name": "“用英语讲好中国故事”全国大学生英语写作大赛",
    "org": "英语周报社",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "个人赛",
      "零门槛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年1月15日；24:00",
        "deadlineDate": "2026-01-15",
        "period": "2025年10月14日至2026年1月下旬",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://zbbxz.52jingsai.com/index/index/news?n=33"
      }
    ]
  },
  {
    "name": "“用英语讲好中国故事”全国大学生英语词汇大赛",
    "org": "英语周报社",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "个人赛",
      "零门槛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年12月5日；24:00",
        "deadlineDate": "2025-12-05",
        "period": "2025年11月1日至2025年12月11日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://zbbcx.52jingsai.com/index/index/news?n=13"
      }
    ]
  },
  {
    "name": "全国高校创新英语挑战赛NCIECC英语翻译赛",
    "org": "全国高校创新英语挑战赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年1月8日；17：00",
        "deadlineDate": "2026-01-08",
        "period": "2025年10月29日至2026年2月上旬",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://www.nciecc.com/news-43.html"
      }
    ]
  },
  {
    "name": "全国高校创新英语挑战赛NCIECC英语词汇赛",
    "org": "全国高校创新英语挑战赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年1月14日；17:00",
        "deadlineDate": "2026-01-14",
        "period": "2025年7月12日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://www.nciecc.com/news-45.html"
      }
    ]
  },
  {
    "name": "全国高校创新英语挑战赛NCIECC英语阅读赛",
    "org": "全国高校创新英语挑战赛组委会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年1月23日；17:00",
        "deadlineDate": "2026-01-23",
        "period": "2025年12月6日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "http://www.nciecc.com/news-44.html"
      }
    ]
  },
  {
    "name": "全国高校商务英语竞赛",
    "org": "中国对外贸易经济合作企业协会国际商务与语言服务工作委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月28日；24:00",
        "deadlineDate": "2026-05-28",
        "period": "2026年5月30日至2026年6月7日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://www.tbem.org.cn/news-115.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月5日；24:00",
        "deadlineDate": "2025-06-05",
        "period": "2025年6月7日至2025年6月20日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-22054-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月23日；24:00",
        "deadlineDate": "2024-05-23",
        "period": "2024年5月25日至2024年6月2日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-20400-1.html"
      }
    ]
  },
  {
    "name": "普译奖全国大学生翻译比赛",
    "org": "《海外英语》杂志",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "保研加分",
      "高获奖率",
      "零门槛",
      "个人赛",
      "短周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月2日；24:00",
        "deadlineDate": "2026-06-02",
        "period": "2026年5月26日至6月2日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://puyi.52jingsai.com/news-66.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月30日；24:00",
        "deadlineDate": "2025-05-30",
        "period": "2025年5月24日至6月25日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://puyi.52jingsai.com/news-59.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月31日；24:00",
        "deadlineDate": "2024-05-31",
        "period": "2024年5月24日至7月16日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://puyi.52jingsai.com/news-43.html"
      }
    ]
  },
  {
    "name": "高等院校大学生英语能力大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "保研加分",
      "高获奖率",
      "零门槛",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026/5/29；24:00",
        "deadlineDate": null,
        "period": "2026年5月30日至2026年6月14日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://www.52jingsai.com/article-23431-1.html"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月16日；24:00",
        "deadlineDate": "2025-05-16",
        "period": "2025年5月17日至2025年5月24日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://www.eaedu.org.cn/news-130.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月17日；24:00",
        "deadlineDate": "2024-05-17",
        "period": "2024年5月18日至2024年6月14日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://www.eaedu.org.cn/news-90.html"
      }
    ]
  },
  {
    "name": "全国高校英语翻译挑战赛",
    "org": "全国高校英语翻译挑战赛组织委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "不限专业、本科生、硕士生、专科生",
    "tags": [
      "高获奖率",
      "零门槛",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年9月11日；17:00",
        "deadlineDate": "2026-09-11",
        "period": "2026年5月15日至2026年9月15日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "http://fytz.52jingsai.com/index/index/news?n=1"
      }
    ]
  },
  {
    "name": "“外文奖”大学生英语写作大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "有奖金",
      "零门槛",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月7日；24:00",
        "deadlineDate": "2026-08-07",
        "period": "2026年5月13日至2026年9月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.wwj.org.cn/index/index/subject?subject_id=5#details"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年8月14日；24:00",
        "deadlineDate": "2025-08-14",
        "period": "2026年4月22日至2025年9月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-22098-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2025年7月18日；12：00",
        "deadlineDate": "2025-07-18",
        "period": "2026年4月16日至2025年8月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-20389-1.html"
      }
    ]
  },
  {
    "name": "“外文奖”大学生英语词汇大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "有奖金",
      "个人赛",
      "短周期"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年9月18日；24:00",
        "deadlineDate": "2026-09-18",
        "period": "2026年4月25日至2026年9月下旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.wwj.org.cn/index/index/news?n=89"
      },
      {
        "year": 2025,
        "deadlineStr": "2026年7月18日；24:00",
        "deadlineDate": "2026-07-18",
        "period": "2025年4月26日至2025年8月初",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-22058-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月21日；24:00",
        "deadlineDate": "2024-06-21",
        "period": "2024年4月20日至2024年7月初",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-20381-1.html"
      }
    ]
  },
  {
    "name": "“外文奖”大学生英语阅读大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月3日；24:00",
        "deadlineDate": "2026-07-03",
        "period": "2026年4月10日至2026年7月9日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.wwj.org.cn/index/index/news?n=87"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年7月11日；24:00",
        "deadlineDate": "2025-07-11",
        "period": "2025年4月12日至2025年7月12日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-22059-1.html"
      },
      {
        "year": 2024,
        "deadlineStr": "2025年7月12日；24:00",
        "deadlineDate": "2025-07-12",
        "period": "2024年5月12日至2025年7月18日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.52jingsai.com/article-20404-1.html"
      }
    ]
  },
  {
    "name": "“外文奖”大学生英语翻译大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年12月26日；12：00",
        "deadlineDate": "2025-12-26",
        "period": "2025年10月28日至2026年2月初",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "https://www.wwj.org.cn/index/index/news?n=72"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年12月7日；12：00",
        "deadlineDate": "2024-12-07",
        "period": "2024年10月16日至2025年1月中旬",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "https://www.52jingsai.com/article-21545-1.html"
      }
    ]
  },
  {
    "name": "“外文奖”大学生英语语法大赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线下",
    "object": "本科生、硕士生、专科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2026年1月9日；12:00",
        "deadlineDate": "2026-01-09",
        "period": "2025年11月8日至2026年1月底",
        "sem": "寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "winter",
          "autumn"
        ],
        "link": "https://www.wwj.org.cn/index/index/news?n=72"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年12月27日；12:00",
        "deadlineDate": "2024-12-27",
        "period": "1014年10月26日至2025年1月上旬",
        "sem": "寒假（1-2月）,秋季学期（9-1月）",
        "sems": [
          "winter",
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-21529-1.html"
      }
    ]
  },
  {
    "name": "创研杯全国大学生英语词汇竞赛",
    "org": "华夏文化促进会素质教育委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月6日；12:00",
        "deadlineDate": "2026-06-06",
        "period": "2026年4月15日至6月下旬",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://cycupzt.52jingsai.com/index/index/news?n=3"
      }
    ]
  },
  {
    "name": "创研杯全国大学生英语翻译竞赛",
    "org": "华夏文化促进会素质教育委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月6日；12：00",
        "deadlineDate": "2026-06-06",
        "period": "2026年4月15日至七月下旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://cycupzt.52jingsai.com/index/index/news?n=3"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年5月25日；12：00",
        "deadlineDate": "2025-05-25",
        "period": "5月15日至6月下旬",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s?__biz=MzkxNDIxNTA1Ng==&mid=2247544587&idx=1&sn=538bed9a3a2b2ec818213c6d14a620f7&chksm=c00abd175201d8384e538816268c84281f45e11d3f031c3a929d1c11b0f3873687924a85824b&scene=27"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年7月12日；12:00",
        "deadlineDate": "2024-07-12",
        "period": "2024年4月8日至2024年7月14日",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://www.saikr.com/vse/translationCTE2024"
      }
    ]
  },
  {
    "name": "创研杯全国大学生英语写作竞赛",
    "org": "华夏文化促进会素质教育委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "不限学历",
    "tags": [
      "保研加分",
      "高获奖率",
      "短周期",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年7月17日；12：00",
        "deadlineDate": "2026-07-17",
        "period": "2026年7月7日至8月下旬",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "https://cycupzt.52jingsai.com/index/index/news?n=3"
      }
    ]
  },
  {
    "name": "大学生英语翻译能力竞赛",
    "org": "中国外文局亚太传播中心",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "保研加分",
      "个人赛",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月6日；24:00",
        "deadlineDate": "2026-08-06",
        "period": "2026年3月18日至9月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.ncetac.com/index/Cms/content.html?id=62"
      }
    ]
  },
  {
    "name": "全国高等院校数学能力挑战赛",
    "org": "中国国际科技促进会综合素质与职业发展教育专业委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "理工农医类",
    "format": "线下",
    "object": "本科生、硕士生、专科生、不限专业",
    "tags": [
      "保研加分",
      "高获奖率",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月26日；17:00",
        "deadlineDate": "2026-06-26",
        "period": "2026年5月10日至2026年7月中旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.ncmac.cn/index/index/newinfo/id/397"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月13日；17：00",
        "deadlineDate": "2025-06-13",
        "period": "2025年5月3日至2025年7月中旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/wHsO2ZYUdG4lj6NdHLaHBw"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月15日；17：00",
        "deadlineDate": "2024-06-15",
        "period": "2024年4月13日至2024年7月中上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/7sJoMiEuJm8AY8EDWwHKmg"
      }
    ]
  },
  {
    "name": "全国语文规范化知识大赛",
    "org": "中国语文报刊协会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历",
    "tags": [
      "高获奖率",
      "个人赛",
      "保研加分"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2026年1月8日至2026年10月29日",
        "sem": "春季学期（2-6月）,秋季学期（9-1月）,暑假（7-8月）",
        "sems": [
          "spring",
          "autumn",
          "summer"
        ],
        "link": "http://ywgfh.52jingsai.com/index/index/newinfo/id/1"
      }
    ]
  },
  {
    "name": "大学生语言文字能力大赛",
    "org": "中国语文报刊协会读写教学分会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "本科生、硕士生、专科生、不限年级、不限专业",
    "tags": [
      "零门槛",
      "有奖金",
      "个人赛",
      "高获奖率",
      "保研加分"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月5日；17：00",
        "deadlineDate": "2026-06-05",
        "period": "2026年6月6日至2026年8月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://www.yywz.org.cn/index/index/newinfo/id/373"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年6月6日；17:00",
        "deadlineDate": "2025-06-06",
        "period": "2025年6月7日至2025年8月上旬",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "http://2025.yywz.org.cn/index/index/newinfo/id/253"
      }
    ]
  },
  {
    "name": "全国大学生“人工智能+”创新创业大赛",
    "org": "中国技术创业协会校企融合专业委员会",
    "level": "全国性",
    "type": "学科竞赛,案例分析竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限年级、不限专业",
    "tags": [
      "保研加分",
      "有奖金",
      "团队赛",
      "白名单"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年10月28日；24:00",
        "deadlineDate": "2026-10-28",
        "period": "2026年10月28日至2026年12月",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://rgzn.52jingsai.com/index/Cms/content.html?id=7"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年10月21日；24:00",
        "deadlineDate": "2025-10-21",
        "period": "2025/10/21至2025年12月中",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://rgzn.52jingsai.com/index/Cms/content.html?id=3"
      }
    ]
  },
  {
    "name": "全国大学生创新创业能力大赛",
    "org": "中国智慧工程研究会职业教育专业委员会",
    "level": "全国性",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本科生、硕士生、专科生、不限专业、不限年级",
    "tags": [
      "有奖金",
      "零门槛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年11月30日",
        "deadlineDate": "2026-11-30",
        "period": "2026/11/30至12月27日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.52jingsai.com/article-23659-1.html"
      }
    ]
  },
  {
    "name": "中华人民共和国职业技能大赛",
    "org": "人力资源社会保障部",
    "level": "全国性",
    "type": "学科竞赛,技能实操竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "不限学历、不限年级、不限专业",
    "tags": [
      "个人赛",
      "长周期",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "由各省省赛开始",
        "deadlineDate": null,
        "period": "2025年9月19日-23日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/SUeXmV0n4f6VLRmE1mbFOw"
      }
    ]
  },
  {
    "name": "世界技能大赛(WorldSkills Competition)",
    "org": "世界技能组织",
    "level": "国际性",
    "type": "学科竞赛,技能实操竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "不限学历、不限年级、不限专业",
    "tags": [
      "个人赛",
      "长周期",
      "有奖金"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "由中华人民共和国职业技能大赛推荐参赛",
        "deadlineDate": null,
        "period": "2026年9月22日 - 2026年9月27日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://new.saikr.com/vse/58057"
      }
    ]
  },
  {
    "name": "“一带一路”全国大学生知识文化大赛",
    "org": "中国欧洲经济技术合作协会一带一路经济文化工作委员会",
    "level": "全国性",
    "type": "学科竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "不限学历、不限年级、不限专业",
    "tags": [
      "保研加分",
      "高获奖率",
      "零门槛",
      "有奖金",
      "个人赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年8月28日；24:00",
        "deadlineDate": "2026-08-28",
        "period": "2026年5月22日-2026年9月",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://new.saikr.com/vse/2026/YDYL/Culture"
      }
    ]
  },
  {
    "name": "首届全球发展公共政策青年创新大赛",
    "org": "中国人民大学、青年外交高校联盟主办",
    "level": "国际性",
    "type": "案例分析竞赛,征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上+线下",
    "object": "不限学历、不限年级、不限专业",
    "tags": [
      "长周期",
      "团队赛"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年12月15日",
        "deadlineDate": "2024-12-15",
        "period": "2024年12月15日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "autumn",
          "winter",
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/iuGTmqNbMDWmxz4wMOFbtw"
      }
    ]
  },
  {
    "name": "五四杯",
    "org": "中国人民大学",
    "level": "全国性",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本科生、不限年级、不限专业",
    "tags": [
      "保研加分",
      "个人赛",
      "有奖金"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月16日",
        "deadlineDate": "2026-03-16",
        "period": "2026年3月17日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/zUL2lb4ORMfXk6asZiNeBQ"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月16日",
        "deadlineDate": "2025-03-16",
        "period": "2025年3月17日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/1DBlrHmCcWd2SDZIw_SJqg"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月16日",
        "deadlineDate": "2024-03-16",
        "period": "2024年3月17日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/QVPhEJNcIDpA7btqYn2O6w"
      }
    ]
  },
  {
    "name": "“明德立言”第六届高校青年人才国际胜任力大赛",
    "org": "中国人民大学外国语学院",
    "level": "校级",
    "type": "案例分析竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "团队赛",
      "有奖金",
      "不接受个人报名",
      "短周期"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月20日",
        "deadlineDate": "2026-05-20",
        "period": "2026年5月20日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/8a-1S57xNDJBbINvhqvlww"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月8日",
        "deadlineDate": "2024-05-08",
        "period": "2024年5月8日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/Mj3WjS0GmqSr-mm4DGqmhg"
      }
    ]
  },
  {
    "name": "人民大学“明德立言”中国人民大学本科生英语写作大赛",
    "org": "中国人民大学外国语学院",
    "level": "校级",
    "type": "其他",
    "subject": "综合类",
    "format": "线下",
    "object": "本校本科生",
    "tags": [
      "零门槛",
      "短周期",
      "个人赛"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026/5/5；24:00",
        "deadlineDate": null,
        "period": "2026/5/5至2026/5/13",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/wooJ6Y8MC2bBFtZyS1vtSw"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年4月30日",
        "deadlineDate": "2025-04-30",
        "period": "2025年4月30日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/Gp-vIieyjuASki720Z5HRw"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年5月10日",
        "deadlineDate": "2024-05-10",
        "period": "2024年5月10日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/DJvTPxb-n7cAXsmR3a5gdQ"
      }
    ]
  },
  {
    "name": "校园配音大赛",
    "org": "中国人民大学有声配音社",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、本校硕士生、本校博士生、不限年级、不限专业",
    "tags": [
      "零门槛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月8日",
        "deadlineDate": "2026-05-08",
        "period": "暂未通知",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/ZejkuBANVTnV47PbD-emhw"
      }
    ]
  },
  {
    "name": "人大创新杯",
    "org": "中国人民大学",
    "level": "校级",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本校本科生、不限专业、二年级（含）以上",
    "tags": [
      "保研加分",
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月2日",
        "deadlineDate": "2026-03-02",
        "period": "2026年3月2日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "http://youth.ruc.edu.cn/ggl/7fd7d91396ea48a8a433e370f23a58fd.htm"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月5日；24:00",
        "deadlineDate": "2025-03-05",
        "period": "2025年3月5日至2025年4月",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/14Pz2IBTCRGakkQRoLn8vw"
      }
    ]
  },
  {
    "name": "“外教社·词达人杯”全国大学生英语词汇能力大赛（校赛）",
    "org": "中国人民大学",
    "level": "校级",
    "type": "学科竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "零门槛",
      "个人赛"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月30日",
        "deadlineDate": "2026-04-30",
        "period": "2026年5月10日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/5Exq8-VaNF6exKUufYmCyA"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月31日；24:00",
        "deadlineDate": "2025-03-31",
        "period": "2025年4月12日至2025年4月20日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/HtMGMb_aEdIaJPCzunZeMg"
      },
      {
        "year": 2024,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2024年4月至2024年5月",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/YJ9-1JnHVFkJGBsYxQ4L4A"
      }
    ]
  },
  {
    "name": "“嘤鸣”党建知识竞赛",
    "org": "外国语学院党建促进会",
    "level": "院级",
    "type": "学科竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "本校本科生、限外国语学院学生、不限年级",
    "tags": [
      "短周期",
      "团队赛",
      "人大专属"
    ],
    "ruc": false,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月3日",
        "deadlineDate": "2026-05-03",
        "period": "46152",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/XfMdyiD9sn2esaB4Yxc12g"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年11月22日；24:00",
        "deadlineDate": "2025-11-22",
        "period": "2025年11月29日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/8Io7TagdRTG9wOA0PIDvCA"
      },
      {
        "year": 2024,
        "deadlineStr": "2025年4月14日；24:00",
        "deadlineDate": "2025-04-14",
        "period": "2025年4月19日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/HXu32glA_sbsebPpLe6r3g"
      }
    ]
  },
  {
    "name": "校园歌手大赛",
    "org": "中国人民大学",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "人大专属",
      "零门槛"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年3月24日",
        "deadlineDate": "2026-03-24",
        "period": "2026年3月至2026年4月",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/37FiObTEqkBvqZPyiTCN2g"
      },
      {
        "year": 2025,
        "deadlineStr": "2025年3月5日",
        "deadlineDate": "2025-03-05",
        "period": "2025年3月8日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/LdcrodEJYjC7UJFL5EjIpQ"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年3月6日",
        "deadlineDate": "2024-03-06",
        "period": "2024年3月9日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/IQrmrIM4m3wszGna5g6Tgg"
      }
    ]
  },
  {
    "name": "中建智地·中国人民大学2025年职业规划大赛",
    "org": "学生就业创业指导中心主办，青年职业生涯发展协会承办",
    "level": "校级",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、本校硕士生、不限年级、不限专业",
    "tags": [
      "个人赛",
      "有奖金",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年11月23日",
        "deadlineDate": "2025-11-23",
        "period": "2025年11月3日至2025/12/1",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/i1JUVubpM3UrOW3Kfy7q0w"
      }
    ]
  },
  {
    "name": "中建智地·中国人民大学2026年职业规划大赛",
    "org": "学生就业创业指导中心主办，青年职业生涯发展协会承办",
    "level": "校级",
    "type": "创新创业竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、本校硕士生、不限年级、不限专业",
    "tags": [
      "个人赛",
      "有奖金",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2024,
        "deadlineStr": "2024年11月24日；24:00",
        "deadlineDate": "2024-11-24",
        "period": "2024年11月1日至2024/12/7",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/Kc9L1jiXvaoWO091FV6ZPQ"
      }
    ]
  },
  {
    "name": "“经世杯”论文比赛",
    "org": "中国人民大学应用经济学院",
    "level": "院级",
    "type": "征文写作竞赛",
    "subject": "人文社科类",
    "format": "线上",
    "object": "本校本科生、限经济学院学生、不限年级",
    "tags": [
      "保研加分",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月11日；24:00",
        "deadlineDate": "2026-05-11",
        "period": "待更新",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/5MtJDJdswU-gAMUzaSOCSg"
      },
      {
        "year": 2025,
        "deadlineStr": "2025/5/6；24:00",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/qd9Sn-t7W2iWwRCLGSxC0w"
      },
      {
        "year": 2024,
        "deadlineStr": "2024/4/24；24:00",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/mTNM1VpFqy1lUTxqBQS4sw"
      }
    ]
  },
  {
    "name": "中国人民大学电竞比赛",
    "org": "中国人民大学",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线上+线下",
    "object": "本校本科生、不限年级、不限专业、本校硕士生、本校博士生",
    "tags": [
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年5月7日",
        "deadlineDate": "2025-05-07",
        "period": "2025年5月8日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/A5t_ea_R-RGYpJA6dd4Jhw"
      }
    ]
  },
  {
    "name": "健美操大赛",
    "org": "中国人民大学",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本校本科生、本校硕士生、本校博士生、不限年级、不限专业",
    "tags": [
      "保研加分",
      "零门槛",
      "长周期",
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "无（由学院组织）",
        "deadlineDate": null,
        "period": "2025年11月至2026/5/10",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/vfgBvLIfSH1VKTlaWr_H1g"
      },
      {
        "year": 2025,
        "deadlineStr": "无（由学院组织）",
        "deadlineDate": null,
        "period": "2024年11月至2025/4/13",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/17riyLGkRSVn3CwbX5qVGA"
      },
      {
        "year": 2024,
        "deadlineStr": "无（由学院组织）",
        "deadlineDate": null,
        "period": "2023年11月至2024/4/21",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/7B93EkrH2g7TehVc2mUmAA"
      }
    ]
  },
  {
    "name": "王者荣耀高校联赛ruc春季赛",
    "org": "中国人民大学",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本校本科生、本校硕士生、本校博士生、不限年级、不限专业",
    "tags": [
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月7日",
        "deadlineDate": "2026-05-07",
        "period": "2026年5月1日至2026年5月24日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/iyKm9fMQKE33GX6hGDV_QA"
      }
    ]
  },
  {
    "name": "“讲述中国”——“明德立言”英语短视频大赛",
    "org": "中国人民大学外国语学院",
    "level": "校级",
    "type": "文体艺术竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "零门槛",
      "个人赛",
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年6月1日",
        "deadlineDate": "2026-06-01",
        "period": "暂未通知",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/d7kavyD3WTm7PWX90O6qSg"
      },
      {
        "year": 2025,
        "deadlineStr": "无",
        "deadlineDate": null,
        "period": "2025年6月-8月",
        "sem": "春季学期（2-6月）,暑假（7-8月）",
        "sems": [
          "spring",
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/SB44o2buvcsAssHiRph7Eg"
      }
    ]
  },
  {
    "name": "开源中国杯・中国人民大学开源创新大赛",
    "org": "中国人民大学数据与人工智能研发实验中心",
    "level": "校级",
    "type": "技能实操竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、本校硕士生、本校博士生、不限年级、不限专业",
    "tags": [
      "有奖金",
      "人大专属",
      "长周期"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年5月15日",
        "deadlineDate": "2026-05-15",
        "period": "2026-6至2026-10",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://mp.weixin.qq.com/s/0g9_igZm1FXFDDvVORFkcQ"
      }
    ]
  },
  {
    "name": "中国人民大学计算机设计大赛",
    "org": "国家治理大数据和人工智能创新平台、信息技术与管理国家级实验教学示范中心（中国人民大学）、信息学院",
    "level": "校级",
    "type": "设计创意竞赛",
    "subject": "综合类",
    "format": "线上",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "短周期",
      "人大专属",
      "个人赛"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2026,
        "deadlineStr": "2026年4月25日",
        "deadlineDate": "2026-04-25",
        "period": "2026年4月25日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/fu93Bo0EITJ8fVXRVzWBng"
      },
      {
        "year": 2026,
        "deadlineStr": "2025年5月4日；24:00",
        "deadlineDate": "2025-05-04",
        "period": "2025年5月4日至2025年5月6日",
        "sem": "春季学期（2-6月）",
        "sems": [
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/DehPxmbpnurd4UexJKFuZA"
      }
    ]
  },
  {
    "name": "“正大杯”第十六届全国大学生市场调查与分析大赛校内赛",
    "org": "教育部高等学校统计学类专业教学指导委员会与中国商业统计学会、中国人民大学",
    "level": "校级",
    "type": "学科竞赛,技能实操竞赛",
    "subject": "综合类",
    "format": "线上+线下",
    "object": "本校本科生、本校硕士生、不限年级、不限专业",
    "tags": [
      "有奖金",
      "团队赛",
      "长周期"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "本科生：2025-10-31；24:00\n研究生、在华留学生：2025-11-15；24:00",
        "deadlineDate": null,
        "period": "2025年11月1日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）",
        "sems": [
          "autumn",
          "winter"
        ],
        "link": "https://mp.weixin.qq.com/s/jW0eWBfPpIArVrrFaRylWg"
      },
      {
        "year": 2025,
        "deadlineStr": "本科生：2024-10-31；24:00\n研究生、在华留学生：2024-11-15；24:01",
        "deadlineDate": null,
        "period": "2024年11月1日至2025年6月8日",
        "sem": "秋季学期（9-1月）,寒假（1-2月）,春季学期（2-6月）",
        "sems": [
          "autumn",
          "winter",
          "spring"
        ],
        "link": "https://mp.weixin.qq.com/s/NA66ZaWtfQf6JB3XR1uO8A"
      }
    ]
  },
  {
    "name": "薪火杯",
    "org": "中国人民大学信息资源管理学院",
    "level": "院级",
    "type": "征文写作竞赛",
    "subject": "综合类",
    "format": "线下",
    "object": "本校本科生",
    "tags": [
      "保研加分",
      "高获奖率",
      "有奖金",
      "团队赛",
      "人大专属"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年6月25日；12：00",
        "deadlineDate": "2025-06-25",
        "period": "2025年5月30日至2025年9月20日",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://irm.ruc.edu.cn/xydt/tzgg/9f83218a71dc46a8a843e501907f6d21.htm"
      },
      {
        "year": 2024,
        "deadlineStr": "2024年6月15日；12：00",
        "deadlineDate": "2024-06-15",
        "period": "2024年5月20日至2024年9月初",
        "sem": "春季学期（2-6月）,暑假（7-8月）,秋季学期（9-1月）",
        "sems": [
          "spring",
          "summer",
          "autumn"
        ],
        "link": "https://irm.ruc.edu.cn/xydt/tzgg/51ef7a827cd74ac18af0be499ef5b228.htm"
      }
    ]
  },
  {
    "name": "中国人民大学计算机综合能力竞赛",
    "org": "中国人民大学信息学院",
    "level": "校级",
    "type": "技能实操竞赛",
    "subject": "理工农医类",
    "format": "线上",
    "object": "本校本科生、不限年级、不限专业",
    "tags": [
      "人大专属",
      "个人赛",
      "短周期",
      "有奖金"
    ],
    "ruc": true,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年7月24日；23:59:59",
        "deadlineDate": "2025-07-24",
        "period": "2025年8月1日-2025年8月14日",
        "sem": "暑假（7-8月）",
        "sems": [
          "summer"
        ],
        "link": "https://mp.weixin.qq.com/s/Ab-PsjTKFLXiCITRqpOkQA"
      }
    ]
  },
  {
    "name": "中国大学生游泳锦标赛（南方赛区）",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年11月8日-12日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://www.sports.edu.cn/web/notice/images/202510211761034312128_0_680.pdf"
      }
    ]
  },
  {
    "name": "中国大学生游泳锦标赛（北方赛区）",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年12月6日-10日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "https://iot.singolym.com/report/gamerules/4096a2e9-2dd2-4988-b265-17a6b1d8e47f.pdf"
      }
    ]
  },
  {
    "name": "中国大学生武术套路锦标赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.sports.edu.cn/web/notice/images/2025721751440225193_0_123.pdf"
      }
    ]
  },
  {
    "name": "中国大学生健身健美锦标赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://www.sports.edu.cn/web/notice/images/20259161758011331908_0_96.pdf"
      }
    ]
  },
  {
    "name": "中国大学生武术套路锦标赛选拔赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "2025年4月10日前",
        "deadlineDate": "2025-04-10",
        "period": "待更新",
        "sem": "",
        "sems": [],
        "link": "https://ty.fjtcm.edu.cn/2025/0402/c868a103555/page.htm"
      }
    ]
  },
  {
    "name": "中国大学生网球锦标赛总决赛",
    "org": "中国学生体育联合会",
    "level": "全国性",
    "type": "文体艺术竞赛",
    "subject": "艺术体育类",
    "format": "线下",
    "object": "本科生、专科生、硕士生、博士生",
    "tags": [],
    "ruc": false,
    "years": [
      {
        "year": 2025,
        "deadlineStr": "待更新",
        "deadlineDate": null,
        "period": "2025年8月1日",
        "sem": "秋季学期（9-1月）",
        "sems": [
          "autumn"
        ],
        "link": "http://www.pe123.com/weixin/saishitongzhi/saishitongzhi_zhuye_chakan.jsp?ts_ssgl_id=157&ts_ssgl_tongzhi_id=316"
      }
    ]
  }
];
