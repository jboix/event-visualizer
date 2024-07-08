import {faker} from "@faker-js/faker";

const DATA = [
  {
    id: 'urn:srf:video:55204813',
    duration: 2004,

    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:73176683',
    duration: 5729,

    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:66771439',
    duration: 4799,

    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:80577527',
    duration: 3297,

    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:video:49731861',
    duration: 3583,

    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:24785169',
    duration: 2204,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:22236544',
    duration: 3069,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:audio:70689627',
    duration: 4113,

    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:17816938',
    duration: 1202,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:15880800',
    duration: 5135,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:video:33016917',
    duration: 5480,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:98522372',
    duration: 4301,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:84166684',
    duration: 3107,

    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:98087699',
    duration: 785,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:video:46607572',
    duration: 3968,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:98144387',
    duration: 3559,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:87569900',
    duration: 723,

    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:16786071',
    duration: 774,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:79387676',
    duration: 3522,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:97472431',
    duration: 2508,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:20687743',
    duration: 1872,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:95966995',
    duration: 3124,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:24810144',
    duration: 3129,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:45890458',
    duration: 5684,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:26073975',
    duration: 2744,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:67528774',
    duration: 836,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rts:audio:32229014',
    duration: 3212,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:81019150',
    duration: 4174,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:swi:video:76066766',
    duration: 5443,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rtr:video:94629463',
    duration: 111,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:37184981',
    duration: 784,

    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:67251800',
    duration: 1015,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:32649080',
    duration: 618,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:32477208',
    duration: 135,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:83077140',
    duration: 3845,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:99311873',
    duration: 429,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:45977337',
    duration: 4451,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:20751898',
    duration: 2790,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:video:56862546',
    duration: 4199,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:25185122',
    duration: 574,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:61029242',
    duration: 1873,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:50558381',
    duration: 199,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:41880556',
    duration: 565,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:55134902',
    duration: 1551,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:18672412',
    duration: 5150,

    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:33689764',
    duration: 4076,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:06762690',
    duration: 524,

    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:14208521',
    duration: 1737,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:74863086',
    duration: 513,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:32269889',
    duration: 1291,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:01688720',
    duration: 2876,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:04680191',
    duration: 4966,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:92325922',
    duration: 790,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:35482627',
    duration: 984,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:47912518',
    duration: 849,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:audio:35496125',
    duration: 4769,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:63191266',
    duration: 1256,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:25512043',
    duration: 1753,

    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:audio:34340905',
    duration: 5724,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:32684090',
    duration: 597,

    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:53541396',
    duration: 5471,

    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:13484282',
    duration: 552,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:audio:63850270',
    duration: 4241,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:77802731',
    duration: 886,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:72276639',
    duration: 2909,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:20596698',
    duration: 2967,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:06516521',
    duration: 2762,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:99752035',
    duration: 619,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:21798587',
    duration: 1581,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:srf:video:94084516',
    duration: 159,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:audio:16159218',
    duration: 3599,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:40160902',
    duration: 5229,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:85417176',
    duration: 1711,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:srf:audio:76766495',
    duration: 2311,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:91990654',
    duration: 2083,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:audio:02303379',
    duration: 5035,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:04579545',
    duration: 3162,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:48976300',
    duration: 777,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:56325521',
    duration: 354,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:69101447',
    duration: 2946,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:video:55525790',
    duration: 4996,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:84366480',
    duration: 3658,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:63316381',
    duration: 3364,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:89449409',
    duration: 5826,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:63434204',
    duration: 787,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:54907558',
    duration: 3626,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rtr:video:72134229',
    duration: 4211,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:54638844',
    duration: 3065,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:27766343',
    duration: 1732,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:33956001',
    duration: 4146,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:81010328',
    duration: 3722,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:43660567',
    duration: 790,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:13061902',
    duration: 4929,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:50466507',
    duration: 5067,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:91575245',
    duration: 4102,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:96751793',
    duration: 2435,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:09146914',
    duration: 3808,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:92964306',
    duration: 1422,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:swi:audio:00936801',
    duration: 4012,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:36652346',
    duration: 891,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:22971057',
    duration: 1936,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:37482791',
    duration: 3177,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:13820366',
    duration: 2851,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:45358193',
    duration: 2447,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:srf:video:00648462',
    duration: 59,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:39538865',
    duration: 4874,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:85911544',
    duration: 3897,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:79226843',
    duration: 5200,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:49283774',
    duration: 3778,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:54466317',
    duration: 1581,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:86778859',
    duration: 546,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:19322829',
    duration: 2156,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:19538394',
    duration: 2311,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:94136924',
    duration: 3452,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:91162477',
    duration: 4876,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:07581606',
    duration: 859,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:67311008',
    duration: 4943,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:33923464',
    duration: 3061,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:93468918',
    duration: 2277,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:52239250',
    duration: 5428,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:00931370',
    duration: 5811,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:09714385',
    duration: 83,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:audio:87007113',
    duration: 1647,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:50944989',
    duration: 1946,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:video:38738818',
    duration: 4994,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:89609552',
    duration: 380,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:88362570',
    duration: 253,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:07087450',
    duration: 5202,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:70566853',
    duration: 3776,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:46369492',
    duration: 4263,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:90800756',
    duration: 1457,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:19255297',
    duration: 3592,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:srf:audio:52858328',
    duration: 5491,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:62301849',
    duration: 4067,

    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:53811042',
    duration: 51,

    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:60020163',
    duration: 3856,

    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:46879849',
    duration: 3347,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rts:audio:47680785',
    duration: 503,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:68078198',
    duration: 5405,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:46057730',
    duration: 2927,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:36700588',
    duration: 1507,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:26938019',
    duration: 3485,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:00469328',
    duration: 1633,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:swi:video:23892047',
    duration: 1007,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:audio:00753167',
    duration: 3764,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:16595391',
    duration: 323,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:57103134',
    duration: 5173,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:33521738',
    duration: 2069,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:25614272',
    duration: 1905,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:10938412',
    duration: 1125,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:video:08310815',
    duration: 3217,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:srf:video:85570459',
    duration: 1947,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:video:53634904',
    duration: 733,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rts:audio:47918084',
    duration: 1605,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:82223739',
    duration: 4378,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:44962134',
    duration: 1092,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:02598082',
    duration: 3402,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:video:72007975',
    duration: 909,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:audio:40040782',
    duration: 4393,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:87952506',
    duration: 3912,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:31162823',
    duration: 5980,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:43923843',
    duration: 739,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:55916552',
    duration: 3538,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:98585575',
    duration: 1886,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:91975268',
    duration: 3620,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:10856087',
    duration: 2660,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:88949980',
    duration: 1020,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:video:93293533',
    duration: 5871,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:86493584',
    duration: 4105,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:87689422',
    duration: 2357,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rsi:audio:16962373',
    duration: 1062,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:49742002',
    duration: 4416,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:40777445',
    duration: 1365,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:15216930',
    duration: 4326,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:58016907',
    duration: 1499,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:76416296',
    duration: 126,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:29707233',
    duration: 4944,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:49334630',
    duration: 4239,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:60029896',
    duration: 2908,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:83680599',
    duration: 3589,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:15101241',
    duration: 4966,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:05765736',
    duration: 4864,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rts:video:35041049',
    duration: 4210,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:video:30317357',
    duration: 3542,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:audio:45692586',
    duration: 5936,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:32631655',
    duration: 1626,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:82524939',
    duration: 4006,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:video:69671252',
    duration: 2210,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:30108381',
    duration: 3323,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:23140799',
    duration: 4263,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:43642158',
    duration: 5665,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:49804067',
    duration: 5629,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:54867536',
    duration: 2173,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:84048642',
    duration: 3361,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:55948871',
    duration: 5153,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:54114677',
    duration: 4319,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:04949896',
    duration: 4189,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:28078270',
    duration: 1465,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:78170097',
    duration: 2535,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:21070729',
    duration: 1784,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:25547226',
    duration: 1547,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:51755199',
    duration: 2994,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:audio:43756632',
    duration: 2006,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:31076797',
    duration: 1943,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:47526515',
    duration: 1769,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:63986226',
    duration: 2312,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:15459833',
    duration: 4695,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:77205853',
    duration: 4566,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:62779075',
    duration: 1823,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:54656728',
    duration: 4068,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:audio:27542229',
    duration: 42,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:25218906',
    duration: 1642,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:07168646',
    duration: 574,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:82720329',
    duration: 5644,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:48793468',
    duration: 4934,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:audio:97210527',
    duration: 4569,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:54851898',
    duration: 3512,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:68338483',
    duration: 4902,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:65700276',
    duration: 3991,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:51286387',
    duration: 5024,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:86059412',
    duration: 869,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rtr:video:15136929',
    duration: 5465,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rtr:audio:44418491',
    duration: 3593,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:47425018',
    duration: 4506,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:12341263',
    duration: 1179,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:audio:41234849',
    duration: 1551,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:55402196',
    duration: 1376,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:96511965',
    duration: 2220,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:83200996',
    duration: 661,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:40598563',
    duration: 3255,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:55551404',
    duration: 2685,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:91225741',
    duration: 3546,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:31605813',
    duration: 4260,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:60749237',
    duration: 5051,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:01936370',
    duration: 354,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:00145055',
    duration: 493,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:32620185',
    duration: 3182,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:31876307',
    duration: 5795,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:14213157',
    duration: 4198,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:78617318',
    duration: 5765,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:99414998',
    duration: 5204,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:50791515',
    duration: 448,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:audio:84548181',
    duration: 3879,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:53730350',
    duration: 2260,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:68311232',
    duration: 254,

    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:19454778',
    duration: 2462,

    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:55456647',
    duration: 1657,

    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:98160910',
    duration: 2808,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:80852156',
    duration: 1188,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:25589263',
    duration: 635,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:34580139',
    duration: 4464,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rtr:video:13578261',
    duration: 4097,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rts:audio:42945027',
    duration: 3377,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:24845184',
    duration: 3979,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:video:42324632',
    duration: 4365,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rts:video:92006774',
    duration: 5750,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:53496998',
    duration: 3574,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:99748037',
    duration: 3393,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:13935697',
    duration: 1497,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:89977530',
    duration: 478,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:55896005',
    duration: 4767,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rsi:video:39283412',
    duration: 1522,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:video:34727782',
    duration: 1337,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:85454444',
    duration: 4559,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:48329170',
    duration: 5702,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:69022754',
    duration: 2605,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:74215233',
    duration: 593,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:20032208',
    duration: 195,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:08098498',
    duration: 3315,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:97288448',
    duration: 837,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:54945641',
    duration: 2111,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:88788178',
    duration: 3344,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:25033224',
    duration: 43,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:19694963',
    duration: 3643,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:68459933',
    duration: 804,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:68250902',
    duration: 2383,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:62557679',
    duration: 2406,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:56854812',
    duration: 5057,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:67091742',
    duration: 3045,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:92079482',
    duration: 4141,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:34130286',
    duration: 589,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:15553534',
    duration: 2991,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:77758108',
    duration: 5985,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:audio:41857522',
    duration: 5198,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:41582886',
    duration: 3061,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:72586095',
    duration: 4696,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:21173558',
    duration: 396,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:95539768',
    duration: 4335,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:14846116',
    duration: 3024,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:78958547',
    duration: 2745,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:67049588',
    duration: 5309,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:04982598',
    duration: 3091,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:46280292',
    duration: 437,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:28655460',
    duration: 5121,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:01878175',
    duration: 5543,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:90794554',
    duration: 3734,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:70412993',
    duration: 4175,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:82837112',
    duration: 5452,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:77256788',
    duration: 5494,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:46718946',
    duration: 473,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rtr:video:43541980',
    duration: 498,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:77255190',
    duration: 1842,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:70559255',
    duration: 5713,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:video:02309136',
    duration: 3827,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:video:57031300',
    duration: 4971,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:audio:92496225',
    duration: 454,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:41186681',
    duration: 1446,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rts:video:72043685',
    duration: 1593,

    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:91351645',
    duration: 1727,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:75512108',
    duration: 3189,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:19015045',
    duration: 5337,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:29132892',
    duration: 2456,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:56871332',
    duration: 3529,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:77369666',
    duration: 1989,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:srf:audio:88918313',
    duration: 2734,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:66425335',
    duration: 614,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:96650211',
    duration: 1179,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:audio:82627713',
    duration: 1401,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:42891269',
    duration: 5231,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:22706256',
    duration: 3277,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:video:62115115',
    duration: 4561,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:22083671',
    duration: 2870,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rtr:audio:16799868',
    duration: 5114,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:38887097',
    duration: 4804,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:98385703',
    duration: 3921,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:54781181',
    duration: 5790,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:97219930',
    duration: 3348,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:54675922',
    duration: 912,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:21317355',
    duration: 2101,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:58734405',
    duration: 4792,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:94055975',
    duration: 1419,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:80573432',
    duration: 2323,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:18413148',
    duration: 1879,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:01970872',
    duration: 4218,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:82718720',
    duration: 2779,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:80148039',
    duration: 5737,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:33051206',
    duration: 3845,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:48628731',
    duration: 3507,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:31569152',
    duration: 3613,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:20903471',
    duration: 4684,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rts:video:09343279',
    duration: 1961,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:audio:92402916',
    duration: 4797,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:53929939',
    duration: 5424,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:44911818',
    duration: 3449,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:18210166',
    duration: 1516,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:01518957',
    duration: 5027,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:video:10739395',
    duration: 5419,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:video:60125808',
    duration: 4701,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rtr:video:83844368',
    duration: 5276,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:38260330',
    duration: 4764,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:06487025',
    duration: 5091,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:62728192',
    duration: 4936,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:03150495',
    duration: 2130,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:audio:51790377',
    duration: 2921,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:38314498',
    duration: 5810,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:87205525',
    duration: 3080,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:64182283',
    duration: 202,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:78056891',
    duration: 1677,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:65355384',
    duration: 2965,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:21290564',
    duration: 3258,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:91438020',
    duration: 2525,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:08054215',
    duration: 5451,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:53092867',
    duration: 1574,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:44097993',
    duration: 4745,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:audio:21158353',
    duration: 486,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:00705015',
    duration: 2503,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:audio:73003135',
    duration: 1450,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:41812533',
    duration: 214,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:53912583',
    duration: 3959,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:srf:audio:93826540',
    duration: 583,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:76433248',
    duration: 5917,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:13230219',
    duration: 3552,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:60738664',
    duration: 4919,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:63886778',
    duration: 5676,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:audio:34217678',
    duration: 111,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:45074601',
    duration: 1671,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:49241384',
    duration: 2759,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:video:10614198',
    duration: 5940,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:56980455',
    duration: 268,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rtr:video:55795430',
    duration: 4748,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:38003430',
    duration: 3665,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:88562233',
    duration: 3099,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:37894008',
    duration: 2470,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:15808760',
    duration: 3251,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:15084246',
    duration: 4665,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rts:video:42752221',
    duration: 1554,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:video:30181028',
    duration: 2972,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:06258452',
    duration: 2208,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:42728166',
    duration: 4925,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:swi:video:36701560',
    duration: 3978,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:40154168',
    duration: 5779,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:video:07487358',
    duration: 3592,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:86476191',
    duration: 3469,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:52696675',
    duration: 3118,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:55667042',
    duration: 4539,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:98963002',
    duration: 5229,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:60176101',
    duration: 1390,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:85957722',
    duration: 2585,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:16182416',
    duration: 5767,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:80570338',
    duration: 2634,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:63278334',
    duration: 4520,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:25119181',
    duration: 1674,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:68180425',
    duration: 4752,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:56816877',
    duration: 2123,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:20553612',
    duration: 4663,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:52384354',
    duration: 5328,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rts:video:61019680',
    duration: 2183,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:53563308',
    duration: 348,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:44433454',
    duration: 1807,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:84021971',
    duration: 2202,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:89752693',
    duration: 5800,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:89448054',
    duration: 5097,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:92483794',
    duration: 3571,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:97348622',
    duration: 934,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:02917898',
    duration: 4943,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:36575010',
    duration: 58,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:69693653',
    duration: 5515,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:85986294',
    duration: 3099,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:48340816',
    duration: 5868,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:00181578',
    duration: 4168,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:35411888',
    duration: 5274,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:90672512',
    duration: 4482,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:audio:53580628',
    duration: 5517,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:82338874',
    duration: 2155,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:25072386',
    duration: 2273,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:60804143',
    duration: 563,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:video:07001569',
    duration: 3475,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:srf:video:83726904',
    duration: 4707,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:62593887',
    duration: 1030,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:38715084',
    duration: 4395,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:12496755',
    duration: 316,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:video:43237559',
    duration: 5051,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:swi:video:69472967',
    duration: 5666,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:76920087',
    duration: 3292,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:76136235',
    duration: 2021,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:44363778',
    duration: 2594,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:11324307',
    duration: 4524,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:84612183',
    duration: 3104,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:00728804',
    duration: 3260,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:39204062',
    duration: 2514,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:31313711',
    duration: 2961,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:48354988',
    duration: 5622,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:47233356',
    duration: 4298,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:37832309',
    duration: 144,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:56762742',
    duration: 3384,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:55213680',
    duration: 2399,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:39634154',
    duration: 3017,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:58434293',
    duration: 1866,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:53214372',
    duration: 1824,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:74517667',
    duration: 4061,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:49106375',
    duration: 3216,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:08068321',
    duration: 473,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:audio:50505754',
    duration: 1010,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:58587808',
    duration: 723,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:57683874',
    duration: 5470,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:45644204',
    duration: 4021,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:video:36494085',
    duration: 3352,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:video:49710920',
    duration: 3537,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rts:audio:81008810',
    duration: 1608,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:32848996',
    duration: 3127,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:45816373',
    duration: 3957,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:08265953',
    duration: 190,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:23448907',
    duration: 3680,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:25191508',
    duration: 5844,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:42992095',
    duration: 2584,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:audio:25698655',
    duration: 2980,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:06693328',
    duration: 763,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:89016847',
    duration: 1817,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:71295771',
    duration: 2162,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:05332781',
    duration: 5442,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:20681915',
    duration: 2225,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:84938550',
    duration: 5474,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:swi:audio:50110573',
    duration: 4294,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:28058568',
    duration: 262,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:77344072',
    duration: 5020,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:83343408',
    duration: 707,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:60758051',
    duration: 982,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:61191577',
    duration: 4480,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:83998489',
    duration: 1030,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:audio:47003307',
    duration: 3687,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:45172362',
    duration: 315,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:16121223',
    duration: 4701,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:video:49750115',
    duration: 5195,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:video:46523414',
    duration: 1373,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:77226374',
    duration: 5535,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:audio:12026734',
    duration: 5400,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:51249170',
    duration: 5087,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:15591170',
    duration: 1529,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rtr:video:88144905',
    duration: 5898,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:audio:02062792',
    duration: 5457,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:42154323',
    duration: 5632,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:95832823',
    duration: 288,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:45444203',
    duration: 3616,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:48593349',
    duration: 1317,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:11329434',
    duration: 2655,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:28408352',
    duration: 1757,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:video:74848287',
    duration: 4296,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:95621273',
    duration: 1125,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:16310190',
    duration: 1449,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:56568757',
    duration: 3135,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:05065844',
    duration: 1081,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:67941091',
    duration: 4514,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:38776373',
    duration: 4846,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:03722215',
    duration: 482,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:audio:68734471',
    duration: 559,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:33895711',
    duration: 4736,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:55702917',
    duration: 2612,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:82330589',
    duration: 559,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:24726334',
    duration: 5638,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:00686350',
    duration: 5785,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:59237626',
    duration: 832,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:15204169',
    duration: 1171,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:11701647',
    duration: 249,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:38926306',
    duration: 541,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:video:07040732',
    duration: 1172,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:audio:89827156',
    duration: 5118,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:19132557',
    duration: 1923,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:42401768',
    duration: 3666,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:29279947',
    duration: 3485,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:02036845',
    duration: 4763,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:79835542',
    duration: 1573,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:77905277',
    duration: 3759,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:95977181',
    duration: 4139,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:61736831',
    duration: 621,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:40154545',
    duration: 2559,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:80875151',
    duration: 2535,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:56948772',
    duration: 4128,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:32765209',
    duration: 4074,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:76263682',
    duration: 3213,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rsi:video:86858484',
    duration: 2697,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:99151474',
    duration: 399,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:50398847',
    duration: 1019,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:78897902',
    duration: 2679,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:10513660',
    duration: 2825,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:66028012',
    duration: 5544,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:30600650',
    duration: 3288,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:09221970',
    duration: 4586,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:47070149',
    duration: 1005,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rts:audio:66064507',
    duration: 4693,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:53340754',
    duration: 3258,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:video:51184308',
    duration: 1449,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:75011385',
    duration: 5011,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:80759501',
    duration: 1331,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:34589208',
    duration: 1036,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:44189328',
    duration: 874,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:82626751',
    duration: 3409,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:29972303',
    duration: 4464,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:88622175',
    duration: 4105,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:video:95074872',
    duration: 5478,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:45663085',
    duration: 4407,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:40192294',
    duration: 3968,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:16845593',
    duration: 1786,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:37676280',
    duration: 832,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:32115854',
    duration: 2565,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:55182649',
    duration: 3981,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:10620589',
    duration: 3066,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:32346390',
    duration: 4528,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:26939230',
    duration: 4883,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:75149464',
    duration: 1304,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:25369995',
    duration: 1040,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:srf:video:38355306',
    duration: 2733,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:76103864',
    duration: 2828,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:86890562',
    duration: 1958,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:65460212',
    duration: 2466,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:94143058',
    duration: 2877,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:video:50908759',
    duration: 3824,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:audio:37877197',
    duration: 4144,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:16107078',
    duration: 2907,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:93137664',
    duration: 4296,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:06657118',
    duration: 3791,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:37575869',
    duration: 3223,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:96573211',
    duration: 5547,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:50172333',
    duration: 5038,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rsi:audio:49800198',
    duration: 3200,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:26517694',
    duration: 3548,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:91259050',
    duration: 1174,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:27145386',
    duration: 4991,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:13495379',
    duration: 5279,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:09412564',
    duration: 4299,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:36454049',
    duration: 1114,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:92036291',
    duration: 3738,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:90566230',
    duration: 3201,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:37235216',
    duration: 1092,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:65572377',
    duration: 5069,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:22918765',
    duration: 498,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:73523418',
    duration: 697,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:58162106',
    duration: 971,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:27080445',
    duration: 4021,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:60859961',
    duration: 1284,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:57959391',
    duration: 1841,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:72652655',
    duration: 5566,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:video:48937711',
    duration: 4068,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:47728093',
    duration: 337,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:19406514',
    duration: 2293,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:02025367',
    duration: 613,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:86420284',
    duration: 1099,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:58567201',
    duration: 4257,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:92871106',
    duration: 192,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:70163977',
    duration: 256,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:86353665',
    duration: 5072,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:66579265',
    duration: 2481,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:14620295',
    duration: 5623,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:35268106',
    duration: 4085,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:22332607',
    duration: 1908,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rts:video:56377044',
    duration: 5148,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rtr:video:66262180',
    duration: 3558,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:87570037',
    duration: 4360,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:27546272',
    duration: 5567,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:audio:54229558',
    duration: 5028,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:76155926',
    duration: 5514,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:73316552',
    duration: 3195,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:audio:77906291',
    duration: 748,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:09169464',
    duration: 1181,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:90434026',
    duration: 1176,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:52726539',
    duration: 5151,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:45740736',
    duration: 5834,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:audio:53617645',
    duration: 5182,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:91822278',
    duration: 3269,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:46041880',
    duration: 125,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:24952997',
    duration: 3758,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:88936132',
    duration: 5707,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:97750912',
    duration: 3819,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:77959883',
    duration: 1915,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:89643005',
    duration: 1778,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:video:66414928',
    duration: 4114,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:srf:audio:12653440',
    duration: 768,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:16145093',
    duration: 1825,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:90771642',
    duration: 491,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:56685328',
    duration: 3383,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rtr:video:18616700',
    duration: 2567,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:51510960',
    duration: 4817,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:16203585',
    duration: 2806,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:21461639',
    duration: 1297,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:21932545',
    duration: 5992,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:02168847',
    duration: 3278,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:audio:15110128',
    duration: 384,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:68370197',
    duration: 1214,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:90583558',
    duration: 5168,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:audio:95775631',
    duration: 3388,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:62387747',
    duration: 5926,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:77456556',
    duration: 2826,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:50408551',
    duration: 1630,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:10141898',
    duration: 165,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:53428974',
    duration: 2642,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:23686048',
    duration: 2115,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:46898927',
    duration: 2127,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:58543224',
    duration: 1286,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:45431234',
    duration: 1826,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:27299086',
    duration: 4558,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:79916022',
    duration: 1110,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:video:54187085',
    duration: 4740,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:94359427',
    duration: 3918,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:97153387',
    duration: 861,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:16445816',
    duration: 1353,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:37481186',
    duration: 2371,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:13177512',
    duration: 4272,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:11480585',
    duration: 5685,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:64271046',
    duration: 1918,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:66415819',
    duration: 4898,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:04928759',
    duration: 2215,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:10308757',
    duration: 5258,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:15349200',
    duration: 373,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rtr:video:55414404',
    duration: 1912,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:46248671',
    duration: 3918,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:41085131',
    duration: 1335,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:56278753',
    duration: 4643,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:62264310',
    duration: 3311,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:69490250',
    duration: 3945,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:89536435',
    duration: 167,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:75773653',
    duration: 1913,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:51245876',
    duration: 3004,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:65779556',
    duration: 2992,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:27969957',
    duration: 5396,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:59901433',
    duration: 1212,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:92756913',
    duration: 3867,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:87753924',
    duration: 5634,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:15087334',
    duration: 495,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rtr:video:74348072',
    duration: 660,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:00592095',
    duration: 2864,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rtr:video:96703460',
    duration: 5384,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:21578378',
    duration: 2537,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:78906316',
    duration: 3909,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:37046979',
    duration: 4844,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:25569647',
    duration: 5237,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:91701788',
    duration: 4285,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:18688482',
    duration: 2508,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:69754455',
    duration: 2678,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:27829516',
    duration: 3803,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:90000071',
    duration: 1096,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:97375672',
    duration: 4668,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:10179301',
    duration: 3684,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:78420145',
    duration: 3436,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:video:02080728',
    duration: 3786,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:61405865',
    duration: 2987,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:88741193',
    duration: 1241,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:37248731',
    duration: 2102,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:video:71579613',
    duration: 5723,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:81508608',
    duration: 571,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:42692511',
    duration: 5644,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:02099489',
    duration: 3403,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:79047621',
    duration: 5346,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:01856422',
    duration: 820,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:79695373',
    duration: 219,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:video:24850155',
    duration: 576,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:swi:audio:73429988',
    duration: 5966,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:39579716',
    duration: 3621,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:37749553',
    duration: 288,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:18839173',
    duration: 494,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:video:36241355',
    duration: 3225,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:73240395',
    duration: 4776,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:95538205',
    duration: 3348,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:33520815',
    duration: 543,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:23866114',
    duration: 4041,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:42824815',
    duration: 655,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:77644505',
    duration: 5844,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:39849959',
    duration: 5462,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:60610868',
    duration: 3581,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:16935197',
    duration: 4475,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:39538521',
    duration: 2825,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:34224512',
    duration: 2640,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:19991284',
    duration: 4335,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:54501347',
    duration: 2158,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:86953800',
    duration: 1859,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:01003369',
    duration: 2842,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:24549873',
    duration: 2861,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:97837380',
    duration: 1694,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:51521700',
    duration: 5427,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:97001526',
    duration: 1768,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:54102416',
    duration: 3134,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:29922262',
    duration: 2714,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:83091233',
    duration: 1028,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:srf:video:74995677',
    duration: 4189,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:96549727',
    duration: 3111,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:84006071',
    duration: 1198,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:58821596',
    duration: 3768,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:94084744',
    duration: 4685,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:32843768',
    duration: 3144,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:53232085',
    duration: 4031,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:audio:67994665',
    duration: 5750,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:47766971',
    duration: 1931,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rtr:video:71289394',
    duration: 2321,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:70306204',
    duration: 1710,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:28376568',
    duration: 299,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:08035208',
    duration: 5023,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:67311965',
    duration: 3868,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:video:83195586',
    duration: 1258,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rsi:video:18803819',
    duration: 1837,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:video:55248494',
    duration: 5151,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:swi:video:02552756',
    duration: 3465,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:video:27434558',
    duration: 2407,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:61886945',
    duration: 4021,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:67530753',
    duration: 3908,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:64291514',
    duration: 1413,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:52255657',
    duration: 2723,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:89201159',
    duration: 4051,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:54890066',
    duration: 1360,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:42498483',
    duration: 57,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:87001280',
    duration: 1132,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:79174590',
    duration: 4298,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:11290658',
    duration: 3968,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:82258955',
    duration: 3320,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:83314601',
    duration: 157,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:video:71406537',
    duration: 2319,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:36374074',
    duration: 2123,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:swi:audio:29819877',
    duration: 4125,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:27680463',
    duration: 37,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:58065716',
    duration: 3401,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:video:80617304',
    duration: 1256,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:82960107',
    duration: 5911,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:59911060',
    duration: 5083,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:29735230',
    duration: 428,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:77668364',
    duration: 2855,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:51275005',
    duration: 969,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:75328553',
    duration: 4193,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:swi:audio:79792591',
    duration: 4288,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:30694049',
    duration: 2987,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:swi:video:69280325',
    duration: 2469,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:video:50616833',
    duration: 235,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rts:video:96217818',
    duration: 3302,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rtr:video:28741850',
    duration: 3667,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:52964812',
    duration: 1459,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:srf:audio:26380419',
    duration: 2612,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:92557510',
    duration: 1546,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:02601657',
    duration: 4301,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:03782502',
    duration: 2818,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:34952130',
    duration: 2977,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:47541076',
    duration: 2721,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:40233817',
    duration: 861,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:89944095',
    duration: 2494,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rsi:audio:88548187',
    duration: 561,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:66752590',
    duration: 5817,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:08614541',
    duration: 4561,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:41745843',
    duration: 3121,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:12235082',
    duration: 4688,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:10126038',
    duration: 5207,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:63992719',
    duration: 596,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:37387561',
    duration: 3073,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:47781403',
    duration: 3943,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:45914719',
    duration: 3248,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rtr:video:34939119',
    duration: 1469,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:60662885',
    duration: 2691,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:audio:08724833',
    duration: 5236,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:88403803',
    duration: 4025,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:42070272',
    duration: 2335,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:15880263',
    duration: 1655,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:13647644',
    duration: 1575,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:67902072',
    duration: 5885,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:58633683',
    duration: 3493,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:58857284',
    duration: 3371,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:95956272',
    duration: 3507,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:54090639',
    duration: 1354,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:video:74238841',
    duration: 3356,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rts:video:59584880',
    duration: 2922,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:98412586',
    duration: 1649,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:94661253',
    duration: 374,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:video:95972636',
    duration: 3707,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:audio:66422380',
    duration: 5496,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:89278568',
    duration: 1626,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:01473756',
    duration: 4160,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:48351167',
    duration: 5409,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:audio:76730745',
    duration: 5246,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:02123749',
    duration: 277,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:06545161',
    duration: 769,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:05454310',
    duration: 5405,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:28987089',
    duration: 3220,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:55324661',
    duration: 1162,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:78533706',
    duration: 3141,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:audio:02650437',
    duration: 835,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:60955757',
    duration: 121,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:16928172',
    duration: 797,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:97762242',
    duration: 4218,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:78516337',
    duration: 4471,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:30335424',
    duration: 3335,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:54569312',
    duration: 5561,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:94262085',
    duration: 4200,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rsi:video:16879444',
    duration: 241,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:11919173',
    duration: 207,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:19023945',
    duration: 1746,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:80134065',
    duration: 1282,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:07405904',
    duration: 747,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:59779224',
    duration: 5893,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:86458674',
    duration: 5295,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:20869108',
    duration: 5358,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:34205254',
    duration: 5157,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:60174737',
    duration: 2606,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:audio:57699353',
    duration: 4609,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:08948371',
    duration: 261,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:46934087',
    duration: 3288,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:swi:video:72546650',
    duration: 5627,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:63675866',
    duration: 2124,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:75676216',
    duration: 1977,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:08072539',
    duration: 3578,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:36447503',
    duration: 1134,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:51011260',
    duration: 5463,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:video:76564302',
    duration: 4875,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:42009084',
    duration: 205,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:03670473',
    duration: 3979,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:14880480',
    duration: 1138,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:01801423',
    duration: 3652,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:42910276',
    duration: 4517,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:86692365',
    duration: 3932,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:17934270',
    duration: 2512,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rsi:video:03664405',
    duration: 2810,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:93664119',
    duration: 4142,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:87676784',
    duration: 2222,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:28825100',
    duration: 1710,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:16757273',
    duration: 4542,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:38801657',
    duration: 3042,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:23726508',
    duration: 3541,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:75308169',
    duration: 5541,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:video:36070612',
    duration: 1724,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:31980334',
    duration: 4073,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:18432020',
    duration: 5911,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:13988888',
    duration: 4616,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:20728469',
    duration: 4357,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:85342343',
    duration: 133,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:52180770',
    duration: 1196,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:73414753',
    duration: 1876,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:video:07940063',
    duration: 1134,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:97666352',
    duration: 119,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:43599635',
    duration: 1298,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:92355620',
    duration: 5585,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rtr:video:12498487',
    duration: 4830,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:56906684',
    duration: 3575,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:93266878',
    duration: 1900,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:01456102',
    duration: 4112,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:24473725',
    duration: 2853,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rts:video:54250067',
    duration: 2432,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:audio:33738172',
    duration: 5012,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:19253998',
    duration: 417,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:audio:77409841',
    duration: 4914,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:30847465',
    duration: 2091,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:swi:video:13839265',
    duration: 5182,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:58153924',
    duration: 1883,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:93429662',
    duration: 3052,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:76536497',
    duration: 5938,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:video:34981390',
    duration: 203,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:90614010',
    duration: 49,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:67871365',
    duration: 3594,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:90549418',
    duration: 694,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:99202020',
    duration: 5112,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:77702519',
    duration: 2620,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:33204482',
    duration: 1615,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:26481092',
    duration: 2277,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:71809119',
    duration: 4852,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:93411274',
    duration: 349,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:77410282',
    duration: 4829,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:63338884',
    duration: 3125,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:video:43507358',
    duration: 30,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:audio:36886098',
    duration: 2317,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:86540084',
    duration: 397,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:video:80225161',
    duration: 4442,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:13086047',
    duration: 2610,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:88952127',
    duration: 2048,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:44065306',
    duration: 520,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:33583765',
    duration: 3237,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:87385752',
    duration: 3781,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:36719052',
    duration: 4031,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:43895072',
    duration: 5755,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:14883888',
    duration: 5326,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:75498477',
    duration: 4166,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:59705407',
    duration: 5024,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rsi:audio:41320786',
    duration: 611,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:52692661',
    duration: 5905,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:audio:97866299',
    duration: 5578,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:67643757',
    duration: 2012,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:89855263',
    duration: 5711,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:65155788',
    duration: 5856,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:71427416',
    duration: 3156,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:22816465',
    duration: 5338,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:77998912',
    duration: 2030,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:86731783',
    duration: 2627,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rsi:audio:04050336',
    duration: 5159,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:25815335',
    duration: 5971,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:88359076',
    duration: 2057,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:64469774',
    duration: 2294,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:video:72649183',
    duration: 4034,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:video:32922637',
    duration: 3025,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:91250644',
    duration: 3453,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:31585017',
    duration: 1279,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:41276958',
    duration: 1772,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:video:65228062',
    duration: 4041,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:swi:audio:61935269',
    duration: 534,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:60882388',
    duration: 2675,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:29846584',
    duration: 3921,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:94222746',
    duration: 5144,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:99472935',
    duration: 77,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:srf:video:71816370',
    duration: 4638,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:srf:audio:68762955',
    duration: 5866,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:25810033',
    duration: 1436,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:69557448',
    duration: 2901,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:53503695',
    duration: 2495,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:13025126',
    duration: 4957,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:80450874',
    duration: 1954,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:54190303',
    duration: 1772,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:26686670',
    duration: 3894,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:22890339',
    duration: 3602,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:89082778',
    duration: 3107,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:92508402',
    duration: 2041,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:56210542',
    duration: 822,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:25735248',
    duration: 1462,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:video:28311104',
    duration: 1962,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:12073958',
    duration: 1514,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:56809316',
    duration: 891,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:32764881',
    duration: 5227,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:05106189',
    duration: 853,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:35601206',
    duration: 3759,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:63667467',
    duration: 2739,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:16101530',
    duration: 5730,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:84149746',
    duration: 2504,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:98849596',
    duration: 1405,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:video:33760473',
    duration: 1329,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:31555577',
    duration: 2371,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:srf:video:55599907',
    duration: 1552,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:19479965',
    duration: 1437,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:50722643',
    duration: 4196,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:video:89962376',
    duration: 3153,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rts:audio:45688116',
    duration: 3831,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:33995033',
    duration: 4424,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:54314751',
    duration: 3516,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:89042915',
    duration: 5815,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:38875500',
    duration: 5985,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:81133877',
    duration: 1838,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:58386973',
    duration: 3192,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:video:17902446',
    duration: 978,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:39035966',
    duration: 312,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:67102504',
    duration: 3939,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:39217149',
    duration: 5088,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:28977187',
    duration: 2630,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:srf:video:24046028',
    duration: 1581,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:27099231',
    duration: 3391,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:34171649',
    duration: 5728,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:audio:78218012',
    duration: 3258,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:71419922',
    duration: 909,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:81600000',
    duration: 1385,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:82776618',
    duration: 4899,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:audio:44962512',
    duration: 1476,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:00017559',
    duration: 2925,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:61907615',
    duration: 4558,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:74208722',
    duration: 4158,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:45511777',
    duration: 2285,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:99198041',
    duration: 3588,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:33549758',
    duration: 1829,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:55618728',
    duration: 2946,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:81547847',
    duration: 3757,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:14245855',
    duration: 4560,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:77447886',
    duration: 1907,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:video:82244884',
    duration: 320,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:swi:video:55269341',
    duration: 3080,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:09506477',
    duration: 2695,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:55726717',
    duration: 3814,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:76617197',
    duration: 2152,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:22064037',
    duration: 5076,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:37521438',
    duration: 4091,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:24831315',
    duration: 1901,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:97824216',
    duration: 3098,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:45864881',
    duration: 3825,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:36958087',
    duration: 3469,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:90449628',
    duration: 3072,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:17152318',
    duration: 2551,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:84157829',
    duration: 1170,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:01025522',
    duration: 5775,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:video:58181004',
    duration: 5126,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:44462538',
    duration: 3381,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:37521027',
    duration: 5009,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:10529001',
    duration: 166,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:audio:54390775',
    duration: 2103,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:89356094',
    duration: 3015,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rts:audio:05369901',
    duration: 611,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:82210688',
    duration: 4472,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:26822825',
    duration: 4900,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:56608524',
    duration: 2432,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:81957667',
    duration: 3196,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:66790562',
    duration: 3835,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:41739149',
    duration: 5877,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:15582883',
    duration: 4247,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:22342632',
    duration: 2253,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:42391339',
    duration: 5285,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:43827769',
    duration: 1845,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:64346492',
    duration: 2366,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:86380936',
    duration: 712,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:video:27670914',
    duration: 1827,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:60276529',
    duration: 3024,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rsi:audio:73208257',
    duration: 4808,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:38687549',
    duration: 2028,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:88463162',
    duration: 1111,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:32771006',
    duration: 1939,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:71427474',
    duration: 2457,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:82631660',
    duration: 5081,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:06485228',
    duration: 2698,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:53201768',
    duration: 1317,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:07087174',
    duration: 2047,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:86441567',
    duration: 1164,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:33988909',
    duration: 5972,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:55439417',
    duration: 3939,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rts:audio:03140492',
    duration: 4949,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:24626103',
    duration: 1330,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:97498481',
    duration: 5830,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:22201142',
    duration: 417,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:98293465',
    duration: 189,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:02600606',
    duration: 2546,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:59643787',
    duration: 1068,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rts:audio:02843401',
    duration: 2937,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:73373548',
    duration: 3068,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:65958990',
    duration: 2924,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:video:67345487',
    duration: 1495,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:video:60209921',
    duration: 4890,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:75861844',
    duration: 3099,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:77316986',
    duration: 3029,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:97167481',
    duration: 1392,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:29000590',
    duration: 4669,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:04566842',
    duration: 3169,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:42585950',
    duration: 1719,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:44044618',
    duration: 3097,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:10238297',
    duration: 2611,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:31422336',
    duration: 1702,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:09753197',
    duration: 3756,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:85644838',
    duration: 2977,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:31821600',
    duration: 1990,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:95359428',
    duration: 5185,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:video:86253375',
    duration: 4733,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:80092167',
    duration: 3022,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:video:90111890',
    duration: 5421,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:swi:video:68699867',
    duration: 3394,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rtr:video:86446554',
    duration: 2401,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:88453032',
    duration: 5097,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:25074565',
    duration: 1362,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:46543753',
    duration: 4970,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:35121850',
    duration: 3928,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:53890926',
    duration: 2332,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:53413110',
    duration: 5344,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:66914068',
    duration: 2387,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:video:00644512',
    duration: 246,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:46578470',
    duration: 3494,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:90437979',
    duration: 3122,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:94507971',
    duration: 5107,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:56528046',
    duration: 1415,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:80508061',
    duration: 2974,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:swi:video:10841303',
    duration: 2451,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:62822854',
    duration: 71,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:87871868',
    duration: 2043,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:36735496',
    duration: 1547,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:58784377',
    duration: 1338,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:42720638',
    duration: 1490,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:video:02322248',
    duration: 2029,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:audio:17049429',
    duration: 712,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:76779001',
    duration: 2166,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:67779882',
    duration: 4531,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:11568657',
    duration: 1966,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:71228334',
    duration: 4163,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:08329804',
    duration: 5393,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:90654851',
    duration: 4440,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:22761207',
    duration: 3794,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:video:01342437',
    duration: 3847,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:22002463',
    duration: 792,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:44544682',
    duration: 1719,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:52954836',
    duration: 5158,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:19821230',
    duration: 2145,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:40415313',
    duration: 759,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:10521178',
    duration: 1055,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:40838360',
    duration: 2014,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:98857035',
    duration: 638,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:25191865',
    duration: 4827,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:94155655',
    duration: 2000,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:67913130',
    duration: 835,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:06812645',
    duration: 1583,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:60041360',
    duration: 5160,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:05246462',
    duration: 610,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:22591530',
    duration: 2135,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:41361671',
    duration: 2630,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:86504584',
    duration: 2578,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:41703720',
    duration: 1485,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:91434584',
    duration: 1171,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:swi:video:55310823',
    duration: 5051,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:video:36740588',
    duration: 3896,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:22813680',
    duration: 3756,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:78634682',
    duration: 3511,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:78945920',
    duration: 5728,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:08905932',
    duration: 2605,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:68223327',
    duration: 2700,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:51235192',
    duration: 3173,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:68329099',
    duration: 2407,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:76167028',
    duration: 2251,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:49942122',
    duration: 2379,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:23511266',
    duration: 4151,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:04515744',
    duration: 1029,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:61136545',
    duration: 1943,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:audio:01489382',
    duration: 2940,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:38353348',
    duration: 5756,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:srf:audio:00578868',
    duration: 3997,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:22833595',
    duration: 5921,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:59382425',
    duration: 2607,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:38637510',
    duration: 5441,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:audio:18403033',
    duration: 709,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:69922691',
    duration: 2647,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rsi:video:08065663',
    duration: 3856,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:swi:video:68773592',
    duration: 1550,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:srf:video:13595762',
    duration: 5828,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:01830437',
    duration: 955,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:86657844',
    duration: 5236,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:54022728',
    duration: 852,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:42718900',
    duration: 789,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rts:audio:58505236',
    duration: 4631,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:07651325',
    duration: 417,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:82064645',
    duration: 2105,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:77563524',
    duration: 4690,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:95969023',
    duration: 2587,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:swi:video:96576554',
    duration: 5223,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:49588626',
    duration: 148,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:12616412',
    duration: 2597,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:34434125',
    duration: 5267,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:75249412',
    duration: 1370,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:15658676',
    duration: 3224,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:44426353',
    duration: 1268,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:01243190',
    duration: 4189,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:78211808',
    duration: 997,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:rtr:video:31982483',
    duration: 2545,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:62962982',
    duration: 5297,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:87053877',
    duration: 3650,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:audio:72151667',
    duration: 3950,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:09637415',
    duration: 2956,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:20183874',
    duration: 1697,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:93953500',
    duration: 2382,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:06616559',
    duration: 1294,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:74669423',
    duration: 5852,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:video:60977116',
    duration: 3296,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:16105858',
    duration: 5497,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:audio:70461369',
    duration: 2764,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:50399044',
    duration: 4656,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:52859213',
    duration: 5016,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:12551707',
    duration: 931,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:video:06643704',
    duration: 3309,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:86059933',
    duration: 1791,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:video:71096671',
    duration: 3245,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:video:50047505',
    duration: 5031,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:68406917',
    duration: 2788,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:audio:94427187',
    duration: 1532,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:42522318',
    duration: 778,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:74263805',
    duration: 4693,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rsi:audio:64363791',
    duration: 4365,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:72017845',
    duration: 4057,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rsi:video:76116794',
    duration: 4650,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:16385323',
    duration: 4301,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:59725542',
    duration: 4727,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:92290733',
    duration: 4803,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:01745326',
    duration: 1912,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:68759883',
    duration: 751,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:45094323',
    duration: 5646,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:video:93492623',
    duration: 2000,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:82259005',
    duration: 4650,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:67306057',
    duration: 299,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:85698633',
    duration: 3047,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:audio:64126289',
    duration: 2337,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:08832574',
    duration: 894,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:37716251',
    duration: 1809,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:audio:56801212',
    duration: 405,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:59694425',
    duration: 1113,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:91407902',
    duration: 2356,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:33046055',
    duration: 461,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:66291804',
    duration: 966,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rsi:audio:09391471',
    duration: 3288,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:70367773',
    duration: 3494,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:34588616',
    duration: 4718,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:audio:54207919',
    duration: 2433,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:69100802',
    duration: 5013,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:83948256',
    duration: 4855,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:84613745',
    duration: 2783,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:22574547',
    duration: 5181,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:video:16389077',
    duration: 2510,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rsi:video:86734099',
    duration: 2123,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:31869270',
    duration: 1324,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:11369258',
    duration: 3761,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:74206108',
    duration: 2856,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:75252208',
    duration: 2707,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:18624579',
    duration: 5054,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:16963576',
    duration: 3506,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:16817021',
    duration: 373,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:06303036',
    duration: 4927,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:32742547',
    duration: 5397,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rts:audio:00804873',
    duration: 4365,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:28531716',
    duration: 1428,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:swi:audio:61335535',
    duration: 4450,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:30906529',
    duration: 2936,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:95897357',
    duration: 843,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:54163515',
    duration: 3034,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:02472739',
    duration: 5680,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:48975382',
    duration: 2709,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:21641161',
    duration: 4624,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:12423882',
    duration: 2280,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:74748737',
    duration: 4429,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:67686812',
    duration: 3184,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:92359622',
    duration: 1362,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:86999784',
    duration: 2019,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:31861521',
    duration: 2394,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:68139101',
    duration: 1172,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:19166403',
    duration: 4657,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:83045148',
    duration: 1016,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:19488892',
    duration: 2455,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:70206128',
    duration: 393,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:63769324',
    duration: 1591,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:59936762',
    duration: 3804,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:33626731',
    duration: 371,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:83339834',
    duration: 2389,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:60587298',
    duration: 2577,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:83982083',
    duration: 3959,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:srf:video:37407510',
    duration: 2400,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:video:80287228',
    duration: 2370,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:audio:18202463',
    duration: 2197,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:19643034',
    duration: 3487,
    bitrates: {low: 800, medium: 2500}
  },
  {
    id: 'urn:rts:audio:67253761',
    duration: 2109,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:85691868',
    duration: 2900,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:swi:video:39198834',
    duration: 393,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:video:39935138',
    duration: 3971,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:97893022',
    duration: 671,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:audio:56257890',
    duration: 1061,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:55934435',
    duration: 4670,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:27884355',
    duration: 5968,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:65136298',
    duration: 4103,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:06680047',
    duration: 1773,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:18082708',
    duration: 4697,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:77339394',
    duration: 356,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rts:video:73480256',
    duration: 2076,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:74512916',
    duration: 4444,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:audio:60923393',
    duration: 289,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:21252229',
    duration: 1402,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:29210120',
    duration: 1529,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:55234586',
    duration: 2181,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:62338252',
    duration: 2565,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:audio:80349605',
    duration: 727,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:31374976',
    duration: 5655,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:03707232',
    duration: 2686,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:36016024',
    duration: 4025,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:26846139',
    duration: 3702,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:rtr:video:31489487',
    duration: 833,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:rts:audio:58551168',
    duration: 4929,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:41863370',
    duration: 5066,
    bitrates: {low: 500, medium: 2000}
  },
  {
    id: 'urn:rsi:video:61535773',
    duration: 1634,
    bitrates: {low: 700, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:video:31624938',
    duration: 5468,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rsi:audio:54229098',
    duration: 4897,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:19020305',
    duration: 1834,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:45575349',
    duration: 900,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:86475819',
    duration: 1626,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:swi:video:18867243',
    duration: 1997,
    bitrates: {low: 500, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rsi:video:63138622',
    duration: 4303,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rtr:audio:43665952',
    duration: 3891,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:36624774',
    duration: 637,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:11778935',
    duration: 3441,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:16446560',
    duration: 4435,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:51871126',
    duration: 112,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:84284035',
    duration: 3749,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:13992678',
    duration: 5358,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:83927927',
    duration: 576,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:video:40456825',
    duration: 221,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:14398966',
    duration: 3648,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:71579368',
    duration: 4175,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:89405668',
    duration: 222,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:video:51061094',
    duration: 1852,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rts:audio:22477565',
    duration: 4747,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:82347293',
    duration: 4913,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:audio:78299214',
    duration: 2883,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:84212408',
    duration: 3864,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rsi:audio:94790471',
    duration: 5853,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:video:66134240',
    duration: 602,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:46770937',
    duration: 813,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:81689654',
    duration: 3655,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:23889505',
    duration: 3313,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:30470757',
    duration: 3744,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:84932432',
    duration: 5366,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rsi:audio:95271403',
    duration: 5534,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:video:73704412',
    duration: 105,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:video:32626361',
    duration: 3560,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:58973036',
    duration: 4940,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:91221557',
    duration: 4010,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:50260160',
    duration: 2767,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:video:77296851',
    duration: 5712,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:25555452',
    duration: 1249,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:swi:video:61560061',
    duration: 1203,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:video:43769891',
    duration: 3839,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:79132890',
    duration: 5574,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:43229618',
    duration: 851,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:srf:video:10763562',
    duration: 2855,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:audio:54422915',
    duration: 2380,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:64587859',
    duration: 2016,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:swi:video:61236992',
    duration: 6000,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:73674934',
    duration: 2116,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:86066985',
    duration: 5529,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:65643339',
    duration: 5422,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:swi:audio:51107322',
    duration: 3257,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:video:93782487',
    duration: 5223,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:srf:audio:46811340',
    duration: 4616,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:05517733',
    duration: 2805,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:video:76933865',
    duration: 5299,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rsi:video:24014815',
    duration: 2144,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:rts:audio:90503647',
    duration: 5108,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:63971564',
    duration: 4000,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:06528782',
    duration: 4341,
    bitrates: {low: 800, medium: 1500, high: 4000}
  },
  {
    id: 'urn:srf:audio:06185305',
    duration: 262,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:66515464',
    duration: 3359,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:51413119',
    duration: 4472,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:06869088',
    duration: 1936,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:video:97147341',
    duration: 1494,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rts:video:68538064',
    duration: 2965,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rts:video:43167241',
    duration: 4386,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:10196982',
    duration: 3456,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:57875833',
    duration: 4241,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:72445859',
    duration: 443,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rtr:audio:55713596',
    duration: 3048,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:audio:85278807',
    duration: 2684,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:video:67199231',
    duration: 747,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:19942701',
    duration: 3299,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:37672641',
    duration: 80,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:26429610',
    duration: 3426,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:22330276',
    duration: 2291,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:77173963',
    duration: 1425,
    bitrates: {low: 500, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:54821848',
    duration: 954,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:12799593',
    duration: 2637,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:14862482',
    duration: 3166,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:43534126',
    duration: 3194,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:02926120',
    duration: 5015,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:89936312',
    duration: 5721,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:28029548',
    duration: 3742,
    bitrates: {low: 700, medium: 2500}
  },
  {
    id: 'urn:rts:video:01180537',
    duration: 4216,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:79514106',
    duration: 1821,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:98320332',
    duration: 2937,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:41121748',
    duration: 395,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:87194590',
    duration: 2338,
    bitrates: {low: 700, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:34207770',
    duration: 127,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:73543088',
    duration: 3704,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:29671423',
    duration: 3334,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:57562270',
    duration: 5884,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:75353297',
    duration: 228,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:audio:22559980',
    duration: 2409,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:62911081',
    duration: 2600,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rts:audio:96069963',
    duration: 5724,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:48669114',
    duration: 963,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:15718595',
    duration: 1426,
    bitrates: {low: 800, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:22736731',
    duration: 2940,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:58145438',
    duration: 683,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:11260599',
    duration: 5648,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:96282396',
    duration: 3450,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:05593307',
    duration: 2548,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:71439466',
    duration: 825,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:61158637',
    duration: 1636,
    bitrates: {low: 800, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:16115757',
    duration: 5906,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:96527683',
    duration: 2591,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:video:04971013',
    duration: 2601,
    bitrates: {low: 700, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:audio:82467752',
    duration: 5031,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:audio:49626369',
    duration: 5054,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:swi:video:13244709',
    duration: 3187,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:79227975',
    duration: 598,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:audio:07555121',
    duration: 670,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:20529913',
    duration: 5111,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rts:audio:71748648',
    duration: 3429,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:25790565',
    duration: 5406,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:94786532',
    duration: 3719,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:97798855',
    duration: 3106,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:video:35227765',
    duration: 3955,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:video:48693804',
    duration: 126,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:60934327',
    duration: 1762,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:76398591',
    duration: 3388,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:77276894',
    duration: 3195,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:swi:video:92514946',
    duration: 4153,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:06411782',
    duration: 936,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rtr:audio:47159719',
    duration: 5914,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:29149381',
    duration: 2267,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:05392240',
    duration: 3059,
    bitrates: {low: 800, medium: 2000}
  },
  {
    id: 'urn:swi:video:56216411',
    duration: 5592,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:srf:video:99699265',
    duration: 4979,
    bitrates: {low: 500, medium: 2000, high: 3000}
  },
  {
    id: 'urn:swi:video:02265134',
    duration: 603,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rtr:audio:73801722',
    duration: 111,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:video:44816811',
    duration: 4071,
    bitrates: {low: 700, medium: 2000, high: 3500}
  },
  {
    id: 'urn:rtr:video:47370876',
    duration: 1737,
    bitrates: {low: 500, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:video:58130651',
    duration: 2976,
    bitrates: {low: 500, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:video:98285424',
    duration: 5765,
    bitrates: {low: 800, medium: 1500, high: 3000}
  },
  {
    id: 'urn:srf:video:93000452',
    duration: 2805,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:video:75693017',
    duration: 1394,
    bitrates: {low: 700, medium: 1500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:15690546',
    duration: 4947,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:08864689',
    duration: 3783,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:20016341',
    duration: 3471,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:92585431',
    duration: 1755,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:32146076',
    duration: 778,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rts:audio:57850536',
    duration: 3808,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:90580161',
    duration: 3233,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:audio:84919829',
    duration: 5397,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:swi:video:33567868',
    duration: 2115,
    bitrates: {low: 800, medium: 2000, high: 3000}
  },
  {
    id: 'urn:rts:video:39468684',
    duration: 4248,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:swi:video:47677328',
    duration: 5951,
    bitrates: {low: 800, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rtr:audio:58084768',
    duration: 4289,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rsi:audio:87416047',
    duration: 5154,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:61223476',
    duration: 3510,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:audio:23044850',
    duration: 3461,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:69580454',
    duration: 1803,
    bitrates: {low: 500, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:audio:32537705',
    duration: 5960,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:audio:01588407',
    duration: 469,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:63251188',
    duration: 2584,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rts:video:28565922',
    duration: 3841,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:swi:video:52671125',
    duration: 2593,
    bitrates: {low: 700, medium: 1500, high: 3500}
  },
  {
    id: 'urn:rsi:audio:94045443',
    duration: 4454,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:audio:74364363',
    duration: 5209,
    bitrates: {low: 128, medium: 256, high: 384}
  },
  {
    id: 'urn:srf:audio:31104406',
    duration: 4071,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rtr:audio:58916020',
    duration: 5620,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:14470445',
    duration: 4268,
    bitrates: {low: 500, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rts:video:09340789',
    duration: 3309,
    bitrates: {low: 700, medium: 2000}
  },
  {
    id: 'urn:rsi:video:06748935',
    duration: 389,
    bitrates: {low: 700, medium: 2500, high: 4000}
  },
  {
    id: 'urn:rts:video:58486556',
    duration: 1963,
    bitrates: {low: 700, medium: 2000, high: 4000}
  },
  {
    id: 'urn:srf:video:09456938',
    duration: 5766,
    bitrates: {low: 700, medium: 1500, high: 4000}
  },
  {
    id: 'urn:rsi:audio:19908910',
    duration: 921,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:swi:audio:60307344',
    duration: 3659,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:audio:73866196',
    duration: 426,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:audio:43807677',
    duration: 1818,
    bitrates: {low: 128, medium: 256, high: 320}
  },
  {
    id: 'urn:rts:audio:51943745',
    duration: 3787,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rts:video:79347132',
    duration: 5840,
    bitrates: {low: 500, medium: 2500, high: 3000}
  },
  {
    id: 'urn:rtr:audio:36793685',
    duration: 2232,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:srf:video:96278128',
    duration: 1063,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:rts:audio:97760064',
    duration: 2208,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rtr:audio:05756477',
    duration: 5080,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:srf:video:54348946',
    duration: 90,
    bitrates: {low: 800, medium: 2000, high: 4000}
  },
  {
    id: 'urn:swi:audio:04911304',
    duration: 2739,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:srf:audio:53582341',
    duration: 5921,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:video:02939819',
    duration: 3029,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:59691329',
    duration: 4803,
    bitrates: {low: 800, medium: 2500, high: 3500}
  },
  {
    id: 'urn:swi:video:26362128',
    duration: 2191,
    bitrates: {low: 500, medium: 2500, high: 3500}
  },
  {
    id: 'urn:srf:audio:24676631',
    duration: 3235,
    bitrates: {low: 128, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:audio:57881473',
    duration: 5074,
    bitrates: {low: 96, medium: 256, high: 320}
  },
  {
    id: 'urn:rtr:video:88394434',
    duration: 1072,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:53509497',
    duration: 483,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rsi:audio:14584221',
    duration: 1901,
    bitrates: {low: 96, medium: 192, high: 320}
  },
  {
    id: 'urn:rsi:video:23582603',
    duration: 4445,
    bitrates: {low: 500, medium: 2500}
  },
  {
    id: 'urn:srf:audio:70800834',
    duration: 1963,
    bitrates: {low: 96, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:93650244',
    duration: 959,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:swi:video:99735664',
    duration: 3882,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:srf:audio:06225598',
    duration: 1829,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:swi:audio:73709964',
    duration: 4624,
    bitrates: {low: 128, medium: 192, high: 384}
  },
  {
    id: 'urn:rts:video:01344202',
    duration: 1163,
    bitrates: {low: 700, medium: 1500}
  },
  {
    id: 'urn:rsi:video:57204843',
    duration: 4033,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:swi:audio:30485027',
    duration: 5412,
    bitrates: {low: 96, medium: 256, high: 384}
  },
  {
    id: 'urn:rsi:video:67917431',
    duration: 4999,
    bitrates: {low: 800, medium: 2000, high: 3500}
  },
  {
    id: 'urn:swi:video:61955008',
    duration: 4028,
    bitrates: {low: 500, medium: 1500}
  },
  {
    id: 'urn:rsi:video:19057602',
    duration: 4290,
    bitrates: {low: 800, medium: 1500}
  },
  {
    id: 'urn:srf:video:72864614',
    duration: 5696,
    bitrates: {low: 700, medium: 2000}
  }
];

export default class MediaGenerator {
  constructor(businessUnits = ['srf', 'rts', 'rsi', 'rtr', 'swi']) {
    this.businessUnits = businessUnits;
  }

  media(origin) {
    const type = faker.helpers.weightedArrayElement([
      {value: 'video', weight: 80},
      {value: 'audio', weight: 20}
    ]);
    const bu = this.bu(origin);

    return faker.helpers.arrayElement(
      DATA.filter(media => media.id.includes(type) && media.id.includes(bu))
    ).id;
  }

  bu(origin) {
    return this.businessUnits.find(bu => origin.includes(bu));
  }

  static find(id) {
    return DATA.find(media => media.id === id);
  }
}
