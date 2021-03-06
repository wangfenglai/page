var nameMap = {
                'Afghanistan':'阿富汗',
                'Angola':'安哥拉',
                'Albania':'阿尔巴尼亚',
                'United Arab Emirates':'阿联酋',
                'Argentina':'阿根廷',
                'Armenia':'亚美尼亚',
                'French Southern and Antarctic Lands':'法属南半球和南极领地',
                'Australia':'澳大利亚',
                'Austria':'奥地利',
                'Azerbaijan':'阿塞拜疆',
                'Burundi':'布隆迪',
                'Belgium':'比利时',
                'Benin':'贝宁',
                'Burkina Faso':'布基纳法索',
                'Bangladesh':'孟加拉国',
                'Bulgaria':'保加利亚',
                'The Bahamas':'巴哈马',
                'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
                'Belarus':'白俄罗斯',
                'Belize':'伯利兹',
                'Bermuda':'百慕大',
                'Bolivia':'玻利维亚',
                'Brazil':'巴西',
                'Brunei':'文莱',
                'Bhutan':'不丹',
                'Botswana':'博茨瓦纳',
                'Central African Republic':'中非共和国',
                'Canada':'加拿大',
                'Switzerland':'瑞士',
                'Chile':'智利',
                'China':'中国',
                'Ivory Coast':'象牙海岸',
                'Cameroon':'喀麦隆',
                'Democratic Republic of the Congo':'刚果民主共和国',
                'Republic of the Congo':'刚果共和国',
                'Colombia':'哥伦比亚',
                'Costa Rica':'哥斯达黎加',
                'Cuba':'古巴',
                'Northern Cyprus':'北塞浦路斯',
                'Cyprus':'塞浦路斯',
                'Czech Republic':'捷克共和国',
                'Germany':'德国',
                'Djibouti':'吉布提',
                'Denmark':'丹麦',
                'Dominican Republic':'多明尼加共和国',
                'Algeria':'阿尔及利亚',
                'Ecuador':'厄瓜多尔',
                'Egypt':'埃及',
                'Eritrea':'厄立特里亚',
                'Spain':'西班牙',
                'Estonia':'爱沙尼亚',
                'Ethiopia':'埃塞俄比亚',
                'Finland':'芬兰',
                'Fiji':'斐',
                'Falkland Islands':'福克兰群岛',
                'France':'法国',
                'Gabon':'加蓬',
                'United Kingdom':'英国',
                'Georgia':'格鲁吉亚',
                'Ghana':'加纳',
                'Guinea':'几内亚',
                'Gambia':'冈比亚',
                'Guinea Bissau':'几内亚比绍',
                'Equatorial Guinea':'赤道几内亚',
                'Greece':'希腊',
                'Greenland':'格陵兰',
                'Guatemala':'危地马拉',
                'French Guiana':'法属圭亚那',
                'Guyana':'圭亚那',
                'Honduras':'洪都拉斯',
                'Croatia':'克罗地亚',
                'Haiti':'海地',
                'Hungary':'匈牙利',
                'Indonesia':'印尼',
                'India':'印度',
                'Ireland':'爱尔兰',
                'Iran':'伊朗',
                'Iraq':'伊拉克',
                'Iceland':'冰岛',
                'Israel':'以色列',
                'Italy':'意大利',
                'Jamaica':'牙买加',
                'Jordan':'约旦',
                'Japan':'日本',
                'Kazakhstan':'哈萨克斯坦',
                'Kenya':'肯尼亚',
                'Kyrgyzstan':'吉尔吉斯斯坦',
                'Cambodia':'柬埔寨',
                'South Korea':'韩国',
                'Kosovo':'科索沃',
                'Kuwait':'科威特',
                'Laos':'老挝',
                'Lebanon':'黎巴嫩',
                'Liberia':'利比里亚',
                'Libya':'利比亚',
                'Sri Lanka':'斯里兰卡',
                'Lesotho':'莱索托',
                'Lithuania':'立陶宛',
                'Luxembourg':'卢森堡',
                'Latvia':'拉脱维亚',
                'Morocco':'摩洛哥',
                'Moldova':'摩尔多瓦',
                'Madagascar':'马达加斯加',
                'Mexico':'墨西哥',
                'Macedonia':'马其顿',
                'Mali':'马里',
                'Myanmar':'缅甸',
                'Montenegro':'黑山',
                'Mongolia':'蒙古',
                'Mozambique':'莫桑比克',
                'Mauritania':'毛里塔尼亚',
                'Malawi':'马拉维',
                'Malaysia':'马来西亚',
                'Namibia':'纳米比亚',
                'New Caledonia':'新喀里多尼亚',
                'Niger':'尼日尔',
                'Nigeria':'尼日利亚',
                'Nicaragua':'尼加拉瓜',
                'Netherlands':'荷兰',
                'Norway':'挪威',
                'Nepal':'尼泊尔',
                'New Zealand':'新西兰',
                'Oman':'阿曼',
                'Pakistan':'巴基斯坦',
                'Panama':'巴拿马',
                'Peru':'秘鲁',
                'Philippines':'菲律宾',
                'Papua New Guinea':'巴布亚新几内亚',
                'Poland':'波兰',
                'Puerto Rico':'波多黎各',
                'North Korea':'北朝鲜',
                'Portugal':'葡萄牙',
                'Paraguay':'巴拉圭',
                'Qatar':'卡塔尔',
                'Romania':'罗马尼亚',
                'Russia':'俄罗斯',
                'Rwanda':'卢旺达',
                'Western Sahara':'西撒哈拉',
                'Saudi Arabia':'沙特阿拉伯',
                'Sudan':'苏丹',
                'South Sudan':'南苏丹',
                'Senegal':'塞内加尔',
                'Solomon Islands':'所罗门群岛',
                'Sierra Leone':'塞拉利昂',
                'El Salvador':'萨尔瓦多',
                'Somaliland':'索马里兰',
                'Somalia':'索马里',
                'Republic of Serbia':'塞尔维亚共和国',
                'Suriname':'苏里南',
                'Slovakia':'斯洛伐克',
                'Slovenia':'斯洛文尼亚',
                'Sweden':'瑞典',
                'Swaziland':'斯威士兰',
                'Syria':'叙利亚',
                'Chad':'乍得',
                'Togo':'多哥',
                'Thailand':'泰国',
                'Tajikistan':'塔吉克斯坦',
                'Turkmenistan':'土库曼斯坦',
                'East Timor':'东帝汶',
                'Trinidad and Tobago':'特里尼达和多巴哥',
                'Tunisia':'突尼斯',
                'Turkey':'土耳其',
                'United Republic of Tanzania':'坦桑尼亚联合共和国',
                'Uganda':'乌干达',
                'Ukraine':'乌克兰',
                'Uruguay':'乌拉圭',
                'United States of America':'美国',
                'Uzbekistan':'乌兹别克斯坦',
                'Venezuela':'委内瑞拉',
                'Vietnam':'越南',
                'Vanuatu':'瓦努阿图',
                'West Bank':'西岸',
                'Yemen':'也门',
                'South Africa':'南非',
                'Zambia':'赞比亚',
                'Zimbabwe':'津巴布韦'
            };
var datas = [//森林覆盖面积及覆盖率数据（折线图，柱状图）
{"name":    "中国",   value: 208321, "percent":  22.1},
{"name":    "蒙古国",  value: 12553,  "percent":  8.1},
{"name":    "新加坡",  value: 16, "percent":  23.4},
{"name":    "马来西亚", value: 22195,  "percent":  67.6},
{"name":    "印度尼西亚",    value: 91010,  "percent":  53.0},
{"name":    "缅甸",   value: 29041,  "percent":  44.2},
{"name":    "泰国",   value: 16399,  "percent":  32.1},
{"name":    "老挝",   value: 18761,  "percent":  81.3},
{"name":    "柬埔寨",  value: 9457,   "percent":  53.6},
{"name":    "越南",   value: 14773,  "percent":  47.6},
{"name":    "文莱",   value: 380,    "percent":  72.1},
{"name":    "菲律宾",  value: 8040,   "percent":  27.0},
{"name":    "伊朗",   value: 10692,  "percent":  5.8},
{"name":    "伊拉克",  value: 825,    "percent":  1.9},
{"name":    "土耳其",  value: 11715,  "percent":  15.2},
{"name":    "叙利亚",  value: 491,    "percent":  2.7},
{"name":    "约旦",   value: 98, "percent":  1.1},
{"name":    "黎巴嫩",  value: 137,    "percent":  13.4},
{"name":    "以色列",  value: 165,    "percent":  7.6},
{"name":    "巴勒斯坦(被占领土)",   value: 9,  "percent":  1.5},
{"name":    "沙特阿拉伯",    value: 977,    "percent":  0.5},
{"name":    "也门",   value: 549,    "percent":  1.0},
{"name":    "阿曼",   value: 2,  "percent":  0.0},
{"name":    "阿联酋",  value: 323,    "percent":  3.9},
{"name":    "卡塔尔",  value: 0,  "percent":  0.0},
{"name":    "科威特",  value: 6,  "percent":  0.4},
{"name":    "巴林",   value: 1,  "percent":  0.8},
{"name":    "希腊",   value: 4054,   "percent":  31.5},
{"name":    "塞浦路斯", value: 173,    "percent":  18.7},
{"name":    "埃及",   value: 73, "percent":  0.1},
{"name":    "印度",   value: 70682,  "percent":  23.8},
{"name":    "巴基斯坦", value: 1472,   "percent":  1.9},
{"name":    "孟加拉",  value: 1429,   "percent":  11.0},
{"name":    "阿富汗",  value: 1350,   "percent":  2.1},
{"name":    "斯里兰卡", value: 2070,   "percent":  33.0},
{"name":    "马尔代夫", value: 1,  "percent":  3.3},
{"name":    "不丹",   value: 2755,   "percent":  72.3},
{"name":    " 哈萨克斯坦",   value: 3309,   "percent":  1.2},
{"name":    "乌兹别克斯坦",   value: 3220,   "percent":  7.3},
{"name":    "土库曼斯坦",    value: 4127,   "percent":  8.8},
{"name":    "塔吉克斯坦",    value: 412,    "percent":  3.0},
{"name":    "吉尔吉斯斯坦",   value: 637,    "percent":  3.3},
{"name":    "俄罗斯",  value: 8634,   "percent":  41.6},
{"name":    "乌克兰",  value: 9657,   "percent":  16.7},
{"name":    "白俄罗斯", value: 8634,   "percent":  41.6},
{"name":    "格鲁吉亚", value: 2822,   "percent":  40.6},
{"name":    "阿塞拜疆", value: 1139,   "percent":  13.8},
{"name":    "亚美尼亚", value: 332,    "percent":  11.8},
{"name":    "摩尔多瓦", value: 409,    "percent":  12.4},
{"name":    "波兰",   value: 9435,   "percent":  30.8},
{"name":    "立陶宛",  value: 2180,   "percent":  34.8},
{"name":    "爱沙尼亚", value: 2232,   "percent":  52.7},
{"name":    "拉脱维亚", value: 3356,   "percent":  54.0},
{"name":    "捷克",   value: 2667,   "percent":  34.5},
{"name":    "斯洛伐克", value: 1940,   "percent":  40.3},
{"name":    "匈牙利",  value: 2069,   "percent":  22.7},
{"name":    "斯洛文尼亚",    value: 1248,   "percent":  62.0},
{"name":    "克罗地亚", value: 1922,   "percent":  34.3},
{"name":    "波黑",   value: 2185,   "percent":  42.8},
{"name":    "黑山",   value: 827,    "percent":  61.5},
{"name":    "塞尔维亚", value: 2720,   "percent":  31.1},
{"name":    "阿尔巴尼亚",    value: 772,    "percent":  28.2},
{"name":    "罗马尼亚", value: 6861,   "percent":  29.8},
{"name":    "保加利亚", value: 3823,   "percent":  35.2},
{"name":    "马其顿",  value: 998,    "percent":  39.6}
];
var map_Data = [
                {name : 'Afghanistan', value : 21.1350},//阿富汗
                {name : 'Albania', value : 282.772},//阿尔巴尼亚
                {name : 'United Arab Emirates', value : 39.323},//阿联酋
                {name : 'Armenia', value : 118.332},//亚美尼亚
                {name : 'Azerbaijan', value : 138.1139},//阿塞拜疆
                {name : 'Bangladesh', value : 110.1429},//孟加拉国
                {name : 'Bulgaria', value : 352.3823},//保加利亚
                {name : 'Belarus', value : 416.8634},//白俄罗斯
                {name : 'Brunei', value : 721.380},//文莱
                {name : 'Bhutan', value : 723.2755},//不丹
                {name : 'China', value : 221.208321},//中国
                {name : 'Cyprus', value : 187.173},//塞浦路斯
                {name : 'Czech Republic', value : 345.2667},//捷克共和国
                {name : 'Egypt', value : 1.73},//埃及
                {name : 'Estonia', value : 527.2232},//爱沙尼亚
                {name : 'Georgia', value : 406.2822},//格鲁吉亚
                {name : 'Greece', value : 315.4054},//希腊
                {name : 'Croatia', value : 343.1922},//克罗地亚
                {name : 'Hungary', value : 227.2069},//匈牙利
                {name : 'Indonesia', value : 530.91010},//印尼
                {name : 'India', value : 238.70682},//印度
                {name : 'Iran', value : 58.10692},//伊朗
                {name : 'Iraq', value : 19.825},//伊拉克                
                {name : 'Israel', value : 76.165},//以色列
                {name : 'Jordan', value : 11.98},//约旦
                {name : 'Kazakhstan', value : 12.3309},//哈萨克斯坦                
                {name : 'Kyrgyzstan', value : 33.637},//吉尔吉斯斯坦
                {name : 'Cambodia', value : 536.9457},//柬埔寨
                {name : 'Kuwait', value : 4.6},//科威特
                {name : 'Laos', value : 813.18761},//老挝
                {name : 'Lebanon', value : 134.137},//黎巴嫩
                {name : 'Sri Lanka', value : 330.2070},//斯里兰卡                
                {name : 'Lithuania', value : 348.2180},//立陶宛
                {name : 'Latvia', value : 540.3356},//拉脱维亚
                {name : 'Moldova', value : 124.409},//摩尔多瓦
                {name : 'Macedonia', value : 396.998},//马其顿
                {name : 'Myanmar', value : 442.29041},//缅甸
                {name : 'Montenegro', value : 615.827},//黑山
                {name : 'Mongolia', value : 81.12553},//蒙古
                {name : 'Malaysia', value : 676.22195},//马来西亚
                {name : 'Oman', value : 0.2},//阿曼
                {name : 'Pakistan', value : 19.1472},//巴基斯坦
                {name : 'Philippines', value : 270.8040},//菲律宾
                {name : 'Poland', value : 308.9435},//波兰
                {name : 'Qatar', value : 0.00},//卡特尔
                {name : 'Romania', value : 298.6861},//罗马尼亚
                {name : 'Russia', value : 498.814931},//俄罗斯
                {name : 'Saudi Arabia', value : 5.977},//沙特阿拉伯
                {name : 'Republic of Serbia', value : 311.2720},//塞尔维亚
                {name : 'Slovakia', value : 403.1940},//斯洛伐克
                {name : 'Slovenia', value : 620.1248},//斯洛文尼亚
                {name : 'Syria', value : 27.491},//叙利亚
                {name : 'Thailand', value : 321.16399},//泰国
                {name : 'Tajikistan', value : 30.412},//塔吉克斯坦
                {name : 'Turkmenistan', value : 88.4127},//土库曼斯坦
                {name : 'Turkey', value : 152.11715},//土耳其
                {name : 'Ukraine', value : 167.9657},//乌克兰
                {name : 'Uzbekistan', value : 73.3220},//乌兹别克
                {name : 'Vietnam', value : 476.14773},//越南
                {name : 'Yemen', value : 10.549},//也门
                {name : 'Israel'}	//以色列
            ];
var map_Data_1990 = [
	{name:"China",value:16.7},
{name:"Mongolia",value:8.1},
{name:"Malaysia",value:68.2},
{name:"Indonesia",value:69.0},
{name:"Myanmar",value:59.7},
{name:"Thailand",value:27.4},
{name:"Laos",value:76.5},
{name:"Cambodia",value:73.4},
{name:"Vietnam",value:30.2},
{name:"Brunei",value:78.4},
{name:"Philippines",value:22.0},
{name:"Iran",value:4.9},
{name:"Iraq",value:1.9},
{name:"Turkey",value:12.5},
{name:"Syria",value:2.0},
{name:"Jordan",value:1.1},
{name:"Lebanon",value:12.8},
{name:"Israel",value:6.1},
{name:"Saudi Arabia",value:0.5},
{name:"Yemen",value:1.0},
{name:"Oman",value:0.0},
{name:"United Arab Emirates",value:3.0},
{name:"Qatar",value:0.0},
{name:"Kuwait",value:0.2},
{name:"Greece",value:25.6},
{name:"Cyprus",value:17.4},
{name:"Egypt",value:0.1},
{name:"India",value:21.5},
{name:"Pakistan",value:3.3},
{name:"Bangladesh",value:11.5},
{name:"Afghanistan",value:2.1},
{name:"Sri Lanka",value:36.4},
{name:"Bhutan",value:65.8},
{name:"Kazakhstan",value:1.2},
{name:"Uzbekistan",value:6.9},
{name:"Turkmenistan",value:8.8},
{name:"Tajikistan",value:3.0},
{name:"Kyrgyzstan",value:4.3},
{name:"Russia",value:49.4},
{name:"Ukraine",value:16.0},
{name:"Belarus",value:37.5},
{name:"Georgia",value:39.6},
{name:"Azerbaijan",value:10.3},
{name:"Armenia",value:11.9},
{name:"Moldova",value:9.7},
{name:"Poland",value:29.0},
{name:"Lithuania",value:31.0},
{name:"Estonia",value:52.1},
{name:"Latvia",value:51.1},
{name:"Czech Republic",value:34.0},
{name:"Slovakia",value:39.9},
{name:"Hungary",value:19.8},
{name:"Slovenia",value:59.0},
{name:"Croatia",value:33.0},
{name:"Montenegro",value:46.6},
{name:"Republic of Serbia",value:26.4},
{name:"Albania",value:28.8},
{name:"Romania",value:27.7},
{name:"Bulgaria",value:30.6},
{name:"Macedonia",value:36.2}
];
var map_Data_2000 = [
{name:"China",value:18.8},
{name:"Mongolia",value:7.6},
{name:"Malaysia",value:65.8},
{name:"Indonesia",value:57.9},
{name:"Myanmar",value:53.1},
{name:"Thailand",value:33.3},
{name:"Laos",value:71.6},
{name:"Cambodia",value:65.4},
{name:"Vietnam",value:37.8},
{name:"Brunei",value:75.3},
{name:"Philippines",value:23.6},
{name:"Iran",value:5.1},
{name:"Iraq",value:1.9},
{name:"Turkey",value:13.2},
{name:"Syria",value:2.4},
{name:"Jordan",value:1.1},
{name:"Lebanon",value:12.8},
{name:"Israel",value:7.0},
{name:"Saudi Arabia",value:0.5},
{name:"Yemen",value:1.0},
{name:"Oman",value:0.0},
{name:"United Arab Emirates",value:3.7},
{name:"Qatar",value:0.0},
{name:"Kuwait",value:0.3},
{name:"Greece",value:28.0},
{name:"Cyprus",value:18.6},
{name:"Egypt",value:0.1},
{name:"India",value:22.0},
{name:"Pakistan",value:2.7},
{name:"Bangladesh",value:11.3},
{name:"Afghanistan",value:2.1},
{name:"Sri Lanka",value:34.9},
{name:"Bhutan",value:68.4},
{name:"Kazakhstan",value:1.2},
{name:"Uzbekistan",value:7.3},
{name:"Turkmenistan",value:8.8},
{name:"Tajikistan",value:3.0},
{name:"Kyrgyzstan",value:4.4},
{name:"Russia",value:49.5},
{name:"Ukraine",value:16.4},
{name:"Belarus",value:39.9},
{name:"Georgia",value:39.7},
{name:"Azerbaijan",value:10.6},
{name:"Armenia",value:11.8},
{name:"Moldova",value:9.8},
{name:"Poland",value:29.6},
{name:"Lithuania",value:32.2},
{name:"Estonia",value:53.0},
{name:"Latvia",value:52.1},
{name:"Czech Republic",value:34.1},
{name:"Slovakia",value:39.9},
{name:"Hungary",value:21.0},
{name:"Slovenia",value:61.3},
{name:"Croatia",value:33.6},
{name:"Montenegro",value:46.6},
{name:"Republic of Serbia",value:28.1},
{name:"Albania",value:28.1},
{name:"Romania",value:27.7},
{name:"Bulgaria",value:31.1},
{name:"Macedonia",value:38.0}
];
var map_Data_2005 = [
{name:"China",value:20.5},
{name:"Mongolia",value:7.3},
{name:"Malaysia",value:63.6},
{name:"Indonesia",value:57.0},
{name:"Myanmar",value:50.7},
{name:"Thailand",value:31.5},
{name:"Laos",value:73.1},
{name:"Cambodia",value:60.8},
{name:"Vietnam",value:42.1},
{name:"Brunei",value:73.8},
{name:"Philippines",value:23.8},
{name:"Iran",value:5.8},
{name:"Iraq",value:1.9},
{name:"Turkey",value:13.8},
{name:"Syria",value:2.5},
{name:"Jordan",value:1.1},
{name:"Lebanon",value:13.4},
{name:"Israel",value:7.1},
{name:"Saudi Arabia",value:0.5},
{name:"Yemen",value:1.0},
{name:"Oman",value:0.0},
{name:"United Arab Emirates",value:3.8},
{name:"Qatar",value:0.0},
{name:"Kuwait",value:0.4},
{name:"Greece",value:29.2},
{name:"Cyprus",value:18.7},
{name:"Egypt",value:0.1},
{name:"India",value:22.8},
{name:"Pakistan",value:2.5},
{name:"Bangladesh",value:11.2},
{name:"Afghanistan",value:2.1},
{name:"Sri Lanka",value:33.8},
{name:"Bhutan",value:69.7},
{name:"Kazakhstan",value:1.2},
{name:"Uzbekistan",value:7.5},
{name:"Turkmenistan",value:8.8},
{name:"Tajikistan",value:3.0},
{name:"Kyrgyzstan",value:4.5},
{name:"Russia",value:49.4},
{name:"Ukraine",value:16.6},
{name:"Belarus",value:40.6},
{name:"Georgia",value:39.9},
{name:"Azerbaijan",value:10.6},
{name:"Armenia",value:11.8},
{name:"Moldova",value:11.0},
{name:"Poland",value:30.0},
{name:"Lithuania",value:33.9},
{name:"Estonia",value:53.2},
{name:"Latvia",value:53.1},
{name:"Czech Republic",value:34.2},
{name:"Slovakia",value:40.1},
{name:"Hungary",value:21.8},
{name:"Slovenia",value:61.8},
{name:"Croatia",value:34.0},
{name:"Montenegro",value:46.6},
{name:"Republic of Serbia",value:28.3},
{name:"Albania",value:28.6},
{name:"Romania",value:27.8},
{name:"Bulgaria",value:33.6},
{name:"Macedonia",value:38.7}
];
var map_Data_2010 = [
{name:"China",value:21.3},
{name:"Mongolia",value:8.4},
{name:"Malaysia",value:67.4},
{name:"Indonesia",value:55.0},
{name:"Myanmar",value:48.4},
{name:"Thailand",value:31.8},
{name:"Laos",value:77.2},
{name:"Cambodia",value:57.2},
{name:"Vietnam",value:45.5},
{name:"Brunei",value:72.1},
{name:"Philippines",value:23.0},
{name:"Iran",value:5.8},
{name:"Iraq",value:1.9},
{name:"Turkey",value:14.5},
{name:"Syria",value:2.7},
{name:"Jordan",value:1.1},
{name:"Lebanon",value:13.4},
{name:"Israel",value:7.1},
{name:"Saudi Arabia",value:0.5},
{name:"Yemen",value:1.0},
{name:"Oman",value:0.0},
{name:"United Arab Emirates",value:3.8},
{name:"Qatar",value:0.0},
{name:"Kuwait",value:0.4},
{name:"Greece",value:30.3},
{name:"Cyprus",value:18.7},
{name:"Egypt",value:0.1},
{name:"India",value:23.5},
{name:"Pakistan",value:2.2},
{name:"Bangladesh",value:11.1},
{name:"Afghanistan",value:2.1},
{name:"Sri Lanka",value:33.5},
{name:"Bhutan",value:71.0},
{name:"Kazakhstan",value:1.2},
{name:"Uzbekistan",value:7.4},
{name:"Turkmenistan",value:8.8},
{name:"Tajikistan",value:3.0},
{name:"Kyrgyzstan",value:3.5},
{name:"Russia",value:49.8},
{name:"Ukraine",value:16.5},
{name:"Belarus",value:41.1},
{name:"Georgia",value:40.6},
{name:"Azerbaijan",value:12.2},
{name:"Armenia",value:11.8},
{name:"Moldova",value:11.7},
{name:"Poland",value:30.5},
{name:"Lithuania",value:34.6},
{name:"Estonia",value:52.7},
{name:"Latvia",value:54.0},
{name:"Czech Republic",value:34.4},
{name:"Slovakia",value:40.3},
{name:"Hungary",value:22.4},
{name:"Slovenia",value:62.0},
{name:"Croatia",value:34.3},
{name:"Montenegro",value:61.5},
{name:"Republic of Serbia",value:31.0},
{name:"Albania",value:28.3},
{name:"Romania",value:28.3},
{name:"Bulgaria",value:34.4},
{name:"Macedonia",value:39.6}
];
var map_Data_2015 = [
{name:"China",value:22.1},
{name:"Mongolia",value:8.1},
{name:"Malaysia",value:67.6},
{name:"Indonesia",value:53.0},
{name:"Myanmar",value:44.2},
{name:"Thailand",value:32.1},
{name:"Laos",value:81.3},
{name:"Cambodia",value:53.6},
{name:"Vietnam",value:47.6},
{name:"Brunei",value:72.1},
{name:"Philippines",value:27.0},
{name:"Iran",value:5.8},
{name:"Iraq",value:1.9},
{name:"Turkey",value:15.2},
{name:"Syria",value:2.7},
{name:"Jordan",value:1.1},
{name:"Lebanon",value:13.4},
{name:"Israel",value:7.6},
{name:"Saudi Arabia",value:0.5},
{name:"Yemen",value:1.0},
{name:"Oman",value:0.0},
{name:"United Arab Emirates",value:3.9},
{name:"Qatar",value:0.0},
{name:"Kuwait",value:0.4},
{name:"Greece",value:31.5},
{name:"Cyprus",value:18.7},
{name:"Egypt",value:0.1},
{name:"India",value:23.8},
{name:"Pakistan",value:1.9},
{name:"Bangladesh",value:11.0},
{name:"Afghanistan",value:2.1},
{name:"Sri Lanka",value:33.0},
{name:"Bhutan",value:72.3},
{name:"Kazakhstan",value:1.2},
{name:"Uzbekistan",value:7.3},
{name:"Turkmenistan",value:8.8},
{name:"Tajikistan",value:3.0},
{name:"Kyrgyzstan",value:3.3},
{name:"Russia",value:49.8},
{name:"Ukraine",value:16.7},
{name:"Belarus",value:41.6},
{name:"Georgia",value:40.6},
{name:"Azerbaijan",value:13.8},
{name:"Armenia",value:11.8},
{name:"Moldova",value:12.4},
{name:"Poland",value:30.8},
{name:"Lithuania",value:34.8},
{name:"Estonia",value:52.7},
{name:"Latvia",value:54.0},
{name:"Czech Republic",value:34.5},
{name:"Slovakia",value:40.3},
{name:"Hungary",value:22.7},
{name:"Slovenia",value:62.0},
{name:"Croatia",value:34.3},
{name:"Montenegro",value:61.5},
{name:"Republic of Serbia",value:31.1},
{name:"Albania",value:28.2},
{name:"Romania",value:29.8},
{name:"Bulgaria",value:35.2},
{name:"Macedonia",value:39.6}
];
var map_Data1 = [//1990-2000
    {name:"China",value:1.2},
    {name:"Mongolia",value:-0.7},
    {name:"Malaysia",value:-0.4},
    {name:"Indonesia",value:-17},
    {name:"Myanmar",value:-1.2},
    {name:"Thailand",value:2},
    {name:"Laos",value:1.9},
    {name:"Cambodia",value:-1.1},
    {name:"Vietnam",value:-0.1},
    {name:"Brunei",value:-0.4},
    {name:"Philippines",value:0.7},
    {name:"Iran",value:0.3},
    {name:"Iraq",value:0.2},
    {name:"Turkey",value:0.6},
    {name:"Syria",value:1.5},
    {name:"Jordan",value:0},
    {name:"Lebanon",value:0},
    {name:"Israel",value:1.5},
    {name:"Saudi Arabia",value:0},
    {name:"Yemen",value:0},
    {name:"Oman",value:0},
    {name:"United Arab Emirates",value:2.4},
    {name:"Qatar",value:0},
    {name:"Kuwait",value:3.5},
    {name:"Greece",value:0.9},
    {name:"Cyprus",value:0.6},
    {name:"Egypt",value:3},
    {name:"India",value:0.2},
    {name:"Pakistan",value:-1.8},
    {name:"Bangladesh",value:-0.2},
    {name:"Afghanistan",value:0},
    {name:"Sri Lanka",value:-0.4},
    {name:"Bhutan",value:0.4},
    {name:"Kazakhstan",value:-0.2},
    {name:"Uzbekistan",value:0.5},
    {name:"Turkmenistan",value:0},
    {name:"Tajikistan",value:0},
    {name:"Kyrgyzstan",value:0.3},
    {name:"Russia",value:0},
    {name:"Ukraine",value:0.3},
    {name:"Belarus",value:0.6},
    {name:"Georgia",value:0},
    {name:"Azerbaijan",value:0.2},
    {name:"Armenia",value:-0.1},
    {name:"Moldova",value:0.2},
    {name:"Poland",value:0.2},
    {name:"Lithuania",value:0.4},
    {name:"Estonia",value:0.2},
    {name:"Latvia",value:0.2},
    {name:"Czech Republic",value:0},
    {name:"Slovakia",value:0},
    {name:"Hungary",value:0.6},
    {name:"Slovenia",value:0.4},
    {name:"Croatia",value:0.2},
    {name:"Montenegro",value:0},
    {name:"Republic of Serbia",value:0.6},
    {name:"Albania",value:-0.3},
    {name:"Romania",value:0},
    {name:"Bulgaria",value:-2.1},
    {name:"Macedonia",value:0.5}
];
var map_Data2 = [//2000-2010
    {name:"China",value:1.3},
    {name:"Mongolia",value:1.1},
    {name:"Malaysia",value:0.2},
    {name:"Indonesia",value:-0.5},
    {name:"Myanmar",value:-0.9},
    {name:"Thailand",value:-0.5},
    {name:"Laos",value:-1.6},
    {name:"Cambodia",value:-7.8},
    {name:"Vietnam",value:-4.7},
    {name:"Brunei",value:-0.4},
    {name:"Philippines",value:-0.3},
    {name:"Iran",value:1.4},
    {name:"Iraq",value:0.1},
    {name:"Turkey",value:1},
    {name:"Syria",value:1.3},
    {name:"Jordan",value:0},
    {name:"Lebanon",value:0.4},
    {name:"Israel",value:0.1},
    {name:"Saudi Arabia",value:0},
    {name:"Yemen",value:0},
    {name:"Oman",value:0},
    {name:"United Arab Emirates",value:0.2},
    {name:"Qatar",value:0},
    {name:"Kuwait",value:2.6},
    {name:"Greece",value:0.8},
    {name:"Cyprus",value:0.1},
    {name:"Egypt",value:1.7},
    {name:"India",value:0.7},
    {name:"Pakistan",value:-2.2},
    {name:"Bangladesh",value:-0.2},
    {name:"Afghanistan",value:0},
    {name:"Sri Lanka",value:-0.4},
    {name:"Bhutan",value:0.4},
    {name:"Kazakhstan",value:-0.2},
    {name:"Uzbekistan",value:0.2},
    {name:"Turkmenistan",value:0},
    {name:"Tajikistan",value:0},
    {name:"Kyrgyzstan",value:-2.3},
    {name:"Russia",value:0.1},
    {name:"Ukraine",value:0},
    {name:"Belarus",value:0.3},
    {name:"Georgia",value:0.2},
    {name:"Azerbaijan",value:1.5},
    {name:"Armenia",value:-0.1},
    {name:"Moldova",value:1.8},
    {name:"Poland",value:0.3},
    {name:"Lithuania",value:0.7},
    {name:"Estonia",value:0},
    {name:"Latvia",value:0.3},
    {name:"Czech Republic",value:0.1},
    {name:"Slovakia",value:0.1},
    {name:"Hungary",value:0.7},
    {name:"Slovenia",value:0.1},
    {name:"Croatia",value:0.2},
    {name:"Montenegro",value:2.8},
    {name:"Republic of Serbia",value:1},
    {name:"Albania",value:0.1},
    {name:"Romania",value:0.2},
    {name:"Bulgaria",value:-13.7},
    {name:"Macedonia",value:0.4}
];
var map_Data3 = [//2010-2015
    {name:"China",value:0.8},
    {name:"Mongolia",value:-0.8},
    {name:"Malaysia",value:0.1},
    {name:"Indonesia",value:-0.7},
    {name:"Myanmar",value:-1.8},
    {name:"Thailand",value:0.2},
    {name:"Laos",value:-2.8},
    {name:"Cambodia",value:0},
    {name:"Vietnam",value:-16.5},
    {name:"Brunei",value:0},
    {name:"Philippines",value:3.3},
    {name:"Iran",value:0},
    {name:"Iraq",value:0},
    {name:"Turkey",value:0.9},
    {name:"Syria",value:0},
    {name:"Jordan",value:0},
    {name:"Lebanon",value:0.1},
    {name:"Israel",value:1.4},
    {name:"Saudi Arabia",value:0},
    {name:"Yemen",value:0},
    {name:"Oman",value:0},
    {name:"United Arab Emirates",value:0.3},
    {name:"Qatar",value:0},
    {name:"Kuwait",value:0},
    {name:"Greece",value:0.8},
    {name:"Cyprus",value:0},
    {name:"Egypt",value:0.8},
    {name:"India",value:0.3},
    {name:"Pakistan",value:-2.7},
    {name:"Bangladesh",value:-0.2},
    {name:"Afghanistan",value:0},
    {name:"Sri Lanka",value:-0.3},
    {name:"Bhutan",value:0.4},
    {name:"Kazakhstan",value:0},
    {name:"Uzbekistan",value:-0.3},
    {name:"Turkmenistan",value:0},
    {name:"Tajikistan",value:0.1},
    {name:"Kyrgyzstan",value:-1.2},
    {name:"Russia",value:0},
    {name:"Ukraine",value:0.2},
    {name:"Belarus",value:0.2},
    {name:"Georgia",value:0},
    {name:"Azerbaijan",value:2.5},
    {name:"Armenia",value:0.1},
    {name:"Moldova",value:1.2},
    {name:"Poland",value:0.2},
    {name:"Lithuania",value:0.1},
    {name:"Estonia",value:0},
    {name:"Latvia",value:0},
    {name:"Czech Republic",value:0.1},
    {name:"Slovakia",value:0},
    {name:"Hungary",value:0.2},
    {name:"Slovenia",value:0},
    {name:"Croatia",value:0},
    {name:"Montenegro",value:0},
    {name:"Republic of Serbia",value:0.1},
    {name:"Albania",value:-0.1},
    {name:"Romania",value:1},
    {name:"Bulgaria",value:-1.7},
    {name:"Macedonia",value:0}
];
var map_Data4 = [//1990-2015
    {name:"China",value:1.1},
    {name:"Mongolia",value:0},
    {name:"Malaysia",value:0},
    {name:"Indonesia",value:-1.1},
    {name:"Myanmar",value:-1.2},
    {name:"Thailand",value:0.6},
    {name:"Laos",value:-0.5},
    {name:"Cambodia",value:-3.6},
    {name:"Vietnam",value:-5.4},
    {name:"Brunei",value:-0.3},
    {name:"Philippines",value:0.8},
    {name:"Iran",value:0.7},
    {name:"Iraq",value:0.1},
    {name:"Turkey",value:0.8},
    {name:"Syria",value:1.1},
    {name:"Jordan",value:0},
    {name:"Lebanon",value:0.2},
    {name:"Israel",value:0.9},
    {name:"Saudi Arabia",value:0},
    {name:"Yemen",value:0},
    {name:"Oman",value:0},
    {name:"United Arab Emirates",value:1.1},
    {name:"Qatar",value:0},
    {name:"Kuwait",value:2.4},
    {name:"Greece",value:0.8},
    {name:"Cyprus",value:0.3},
    {name:"Egypt",value:2},
    {name:"India",value:0.4},
    {name:"Pakistan",value:-2.1},
    {name:"Bangladesh",value:-0.2},
    {name:"Afghanistan",value:0},
    {name:"Sri Lanka",value:-0.4},
    {name:"Bhutan",value:0.4},
    {name:"Kazakhstan",value:-0.1},
    {name:"Uzbekistan",value:0.2},
    {name:"Turkmenistan",value:0},
    {name:"Tajikistan",value:0},
    {name:"Kyrgyzstan",value:-1.1},
    {name:"Russia",value:0},
    {name:"Ukraine",value:0.2},
    {name:"Belarus",value:0.4},
    {name:"Georgia",value:0.1},
    {name:"Azerbaijan",value:1},
    {name:"Armenia",value:0},
    {name:"Moldova",value:1},
    {name:"Poland",value:0.2},
    {name:"Lithuania",value:0.5},
    {name:"Estonia",value:0},
    {name:"Latvia",value:0.2},
    {name:"Czech Republic",value:0.1},
    {name:"Slovakia",value:0},
    {name:"Hungary",value:0.6},
    {name:"Slovenia",value:0.2},
    {name:"Croatia",value:0.2},
    {name:"Montenegro",value:1.1},
    {name:"Republic of Serbia",value:0.7},
    {name:"Albania",value:-0.1},
    {name:"Romania",value:0.3},
    {name:"Bulgaria",value:-6.9},
    {name:"Macedonia",value:0.4}
];
var tooltip = {
        show: true,
        trigger: 'item',
        formatter : function (params) {
        	// console.log(params);
            // console.log(params);
            if(typeof(params.value)!='number'){
                // option.tooltip.show = false;
                return '';
            }else{
                // var value = (params.value + '').split('.');
                /*value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                        + '（' + value[1].slice(0,-1)+'.'+ value[1].slice(-1)+'%）';*/
                // var value1 = value[1].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                // var value2 =  value[0].length>1?value[0].slice(0,-1)+'.'+ value[0].slice(-1)+'%':'0.'+ value[0].slice(-1)+'%';
                // console.log(params.name + '<br/>森林覆盖面积:&nbsp;' + value1 +'<br/>森林覆盖率：'+value2);
                return params.name + '<br/>森林覆盖率：'+params.value+'%';
            }
            
        }
    };
var toolBox = {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    };
var dataRange = {
    // show: false,
        min: 0,
        max: 50,
        text:['高','低'],
        realtime: false,
        calculable : true,
        // color: ['violet','blue','cyan','green','yellow','orange','red']
        // color:['green','yellow','red']
        // color:['orangered','yellow','lightskyblue']
        color:['green','yellow','lightskyblue']
};
var dataRange2 = {
    min: -1,
    max: 3,
    text:['高','低'],
    realtime: false,
    calculable : true,
    // color: ['violet','blue','cyan','green','yellow','orange','red']
    // color:['green','yellow','red']
    // color:['orangered','yellow','lightskyblue']
    color:['green','yellow','lightskyblue']
};