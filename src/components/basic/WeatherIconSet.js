import React from "react";

class WeatherIconSet extends React.Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="icon_umbrella" viewBox="0 0 36 28">
          <path fill="var(--icon-color-primary)"
                d="M27,14 L32,14 C32,12.8954304 30.8807119,12 29.5,12 C28.1192881,12 27,12.8954304 27,14 L27,14 Z M27,14 C27,12.8954304 25.8807119,12 24.5,12 C23.1192881,12 22,12.8954304 22,14 C22,12.8954304 20.8807119,12 19.5,12 C18.1192881,12 17,12.8954304 17,14 L17,14 L17,26.5 L17,28 C17,29.1122704 16.1045695,30 15,30 C13.8877296,30 13,29.1041023 13,27.9989566 L13,27.2476578 L13,26.5046844 C13,26.214035 13.2238576,26 13.5,26 C13.7680664,26 14,26.2259549 14,26.5046844 L14,27.1226578 L14,28.009222 C14,28.5564136 14.4438648,29 15,29 C15.5522847,29 16,28.5490248 16,28.009222 L16,25.120389 L16,14 C16,12.8954304 14.8807119,12 13.5,12 C12.1192881,12 11,12.8954304 11,14 C11,12.8954304 9.88071194,12 8.5,12 C7.11928806,12 6,12.8954304 6,14 C6,12.8954304 4.88071194,12 3.5,12 C2.11928806,12 1,12.8954304 1,14 C1,8.58508704 7.67099129,4.17539629 16,4.00510442 L16,2.49938448 C16,2.21612644 16.2238576,2 16.5,2 C16.7680664,2 17,2.22358205 17,2.49938448 L17,4.00510442 C25.3290087,4.17539629 32,8.58508704 32,14 L27,14 Z">
          </path>
        </symbol>
        <symbol id="icon_wind" viewBox="0 0 36 28">
          <path fill="var(--icon-color-primary)"
                d="M30,14 C30,11.790861 28.2046438,10 26,10 C23.790861,10 22,11.7894101 22,14 L24,14 C24,12.8954305 24.8877296,12 26,12 C27.1045695,12 28,12.8877296 28,14 C28,15.1045695 27.1102368,16 25.9964051,16 L3,16 L3,18 L26.0015293,18 C28.2098237,18 30,16.2046438 30,14 L30,14 Z M21,10 C21,7.790861 19.2046438,6 17,6 C14.790861,6 13,7.78941011 13,9.99710083 L13,10 L15,10 C15,8.8954305 15.8877296,8 17,8 C18.1045695,8 19,8.88772964 19,10 C19,11.1045695 18.1029399,12 16.9941413,12 L5,12 L5,14 L17.0037973,14 C19.2108391,14 21,12.2046438 21,10 L21,10 Z M26,23 C26,24.6568542 24.6534829,26 23,26 L23,26 C21.3431458,26 20,24.6579424 20,23.008606 L20,23 L22,23 C22,23.5522847 22.4438648,24 23,24 L23,24 C23.5522847,24 24,23.5561352 24,23 L24,23 C24,22.4477153 23.5510798,22 22.992516,22 L9,22 L9,20 L22.9998738,20 C24.6567977,20 26,21.3465171 26,23 L26,23 L26,23 Z"/>
        </symbol>
        <symbol id="icon_barometer" viewBox="0 0 36 28">
          <path
            d="M17.8918009,22.422938 C18.5601588,22.8716786 19,23.6344741 19,24.5 C19,24.6712329 18.9827849,24.838445 18.9499909,25 L29.2318244,25 L29.2318244,25 C29.729306,23.5924949 30,22.0778594 30,20.5 C30,13.0441555 23.9558445,7 16.5,7 C9.04415551,7 3,13.0441555 3,20.5 C3,22.0778594 3.27069396,23.5924949 3.76817559,25 L14.0500091,25 L14.0500091,25 C14.0172151,24.838445 14,24.6712329 14,24.5 C14,23.6344741 14.4398412,22.8716786 15.1081991,22.422938 L16.5,15 L17.8918009,22.422938 L17.8918009,22.422938 L17.8918009,22.422938 Z M16.5,26 C17.3284272,26 18,25.3284272 18,24.5 C18,23.6715728 17.3284272,23 16.5,23 C15.6715728,23 15,23.6715728 15,24.5 C15,25.3284272 15.6715728,26 16.5,26 L16.5,26 L16.5,26 Z M16.5,8 C16.2238576,8 16,8.21505737 16,8.49047852 L16,11.5095215 C16,11.7804053 16.2319336,12 16.5,12 C16.7761424,12 17,11.7849426 17,11.5095215 L17,8.49047852 C17,8.21959471 16.7680664,8 16.5,8 L16.5,8 L16.5,8 Z M23.2613959,10.1969107 C23.0379921,10.0345983 22.7304799,10.0770032 22.5685914,10.2998235 L20.7940425,12.7422806 C20.634821,12.9614302 20.6933846,13.2754132 20.9102549,13.4329787 C21.1336588,13.5952911 21.441171,13.5528862 21.6030595,13.3300659 L23.3776084,10.8876088 C23.5368299,10.6684592 23.4782662,10.3544762 23.2613959,10.1969107 L23.2613959,10.1969107 L23.2613959,10.1969107 Z M27.4401684,15.9484976 C27.3548357,15.6858706 27.0811282,15.5394258 26.8191871,15.6245356 L23.9479067,16.5574711 C23.6902808,16.6411788 23.5531053,16.9296193 23.6359424,17.1845656 C23.721275,17.4471926 23.9949826,17.5936375 24.2569236,17.5085277 L27.1282041,16.5755921 C27.3858299,16.4918844 27.5230055,16.2034439 27.4401684,15.9484976 L27.4401684,15.9484976 L27.4401684,15.9484976 Z M27.4401684,23.05785 C27.5255011,22.795223 27.3901452,22.5158654 27.1282041,22.4307556 L24.2569236,21.49782 C23.9992978,21.4141123 23.7187794,21.5668358 23.6359424,21.8217821 C23.5506097,22.0844091 23.6859656,22.3637667 23.9479067,22.4488765 L26.8191871,23.3818121 C27.0768129,23.4655198 27.3573314,23.3127963 27.4401684,23.05785 L27.4401684,23.05785 L27.4401684,23.05785 Z M5.55983157,23.05785 C5.64516426,23.320477 5.91887179,23.4669219 6.18081286,23.3818121 L9.05209335,22.4488765 C9.30971915,22.3651688 9.44689471,22.0767284 9.36405764,21.8217821 C9.27872495,21.559155 9.00501742,21.4127102 8.74307635,21.49782 L5.87179586,22.4307556 C5.61417006,22.5144633 5.4769945,22.8029037 5.55983157,23.05785 L5.55983157,23.05785 L5.55983157,23.05785 Z M5.55983157,15.9484976 C5.47449889,16.2111246 5.60985479,16.4904823 5.87179586,16.5755921 L8.74307635,17.5085277 C9.00070216,17.5922354 9.28122056,17.4395119 9.36405764,17.1845656 C9.44939032,16.9219386 9.31403442,16.642581 9.05209335,16.5574711 L6.18081286,15.6245356 C5.92318705,15.5408279 5.64266865,15.6935513 5.55983157,15.9484976 L5.55983157,15.9484976 L5.55983157,15.9484976 Z M9.73860407,10.1969107 C9.5152002,10.3592231 9.46050312,10.6647884 9.62239161,10.8876088 L11.3969405,13.3300659 C11.556162,13.5492155 11.8728748,13.5905442 12.0897451,13.4329787 C12.313149,13.2706663 12.367846,12.965101 12.2059575,12.7422806 L10.4314086,10.2998235 C10.2721871,10.0806739 9.95547435,10.0393452 9.73860407,10.1969107 L9.73860407,10.1969107 L9.73860407,10.1969107 Z"/>
        </symbol>
        <symbol id="icon_clouds" viewBox="0 0 36 28">
          <path
            d="M15.8374098,23.0232669 C17.0608812,23.1902285 18,24.2354757 18,25.5 C18,26.8903379 16.877788,28 15.4934692,28 L7.50653076,28 C6.11962422,28 5,26.8807119 5,25.5 C5,24.283795 5.85871249,23.282362 7.00041797,23.0505909 L7.00041797,23.0505909 C7.00013969,23.0337606 7,23.0168966 7,23 C7,21.3431457 8.34314567,20 10,20 C10.9268437,20 11.7555192,20.4203078 12.3058217,21.0807187 C12.5286313,21.0279355 12.7610533,21 13,21 C14.3148969,21 15.4322146,21.8459367 15.8374098,23.0232669 L15.8374098,23.0232669 Z M16.5537697,22.1622374 C17.8133041,22.5615948 18.7713123,23.6580102 18.9643479,25 L18.9643479,25 L25.0005601,25 C27.7616745,25 30,22.7558048 30,20 C30,17.9483386 28.7676457,16.1852931 26.9993494,15.4145295 L26.9993494,15.4145295 C26.9536744,12.4163763 24.5090248,10 21.5,10 C20.441357,10 19.4525719,10.299097 18.6135384,10.8173973 C17.3372745,9.10728055 15.2979469,8 13,8 C9.13400656,8 6,11.1340066 6,15 C6,15.1381509 6.00400207,15.275367 6.01189661,15.4115388 L6.01189661,15.4115388 C4.23965876,16.1816085 3,17.9491311 3,20 C3,21.4240417 3.59370353,22.7090387 4.54823845,23.6196934 C4.91252289,23.0491956 5.43754441,22.5908867 6.05940842,22.3093277 L6.05940842,22.3093277 C6.38662961,20.4293433 8.0263942,19 10,19 C11.0220863,19 11.9546373,19.3833459 12.6617178,20.0141026 C12.7732404,20.0047636 12.8860639,20 13,20 C14.5465851,20 15.8881641,20.8777349 16.5537697,22.1622374 L16.5537697,22.1622374 L16.5537697,22.1622374 Z M27.4248783,12.8229499 C28.3479899,12.4564585 29,11.5597662 29,10.5 C29,9.2354757 28.0608812,8.19022851 26.8374098,8.02326686 L26.8374098,8.02326686 C26.4322146,6.84593672 25.3148969,6 24,6 C23.7610533,6 23.5286313,6.02793551 23.3058217,6.08071872 C22.7555192,5.42030784 21.9268437,5 21,5 C19.3431457,5 18,6.34314567 18,8 C18,8.01689661 18.0001397,8.0337606 18.000418,8.05059087 L18.000418,8.05059087 C17.7688618,8.09759778 17.5489463,8.17626423 17.3454746,8.28196094 C17.9030329,8.64335206 18.4127608,9.07226749 18.8630774,9.55712634 C19.6689817,9.19900383 20.5612509,9 21.5,9 C24.1354933,9 26.4046422,10.5685061 27.4248783,12.8229499 L27.4248783,12.8229499 L27.4248783,12.8229499 Z"/>
        </symbol>
        <symbol id="icon_thermometer" viewBox="0 0 36 28">
          <path
            d="M16.9860298,23.165807 C18.1585139,23.573673 19,24.6885666 19,26 C19,27.6568543 17.6568543,29 16,29 C14.3431457,29 13,27.6568543 13,26 C13,24.6887082 13.8413044,23.5739137 15.0135905,23.1659391 C15.0046486,23.1119796 15,23.0565573 15,23.0000398 L15,7.9999602 C15,7.45470893 15.4477153,7 16,7 C16.5561352,7 17,7.44769743 17,7.9999602 L17,23.0000398 C17,23.0563968 16.9952169,23.1117866 16.9860298,23.165807 L16.9860298,23.165807 Z M18,22.5351287 C19.1956028,23.2267475 20,24.5194352 20,26 C20,28.2091391 18.2091391,30 16,30 C13.7908609,30 12,28.2091391 12,26 C12,24.5194352 12.8043972,23.2267475 14,22.5351287 L14,4.00359486 C14,2.88976324 14.8954305,2 16,2 C17.1122704,2 18,2.89703997 18,4.00359486 L18,22.5351287 L18,22.5351287 L18,22.5351287 Z M19.9686149,21.4998925 C21.2143165,22.5993118 22,24.2079027 22,26 C22,29.3137087 19.3137087,32 16,32 C12.6862913,32 10,29.3137087 10,26 C10,24.2079329 10.785657,22.599366 12.0313221,21.4999481 C12.0106518,21.3352618 12,21.1674643 12,20.9971835 L12,4.00281647 C12,1.79793835 13.790861,0 16,0 C18.2046438,0 20,1.79212198 20,4.00281647 L20,20.9971835 C20,21.1673915 19.9893278,21.3351745 19.9686149,21.4998925 L19.9686149,21.4998925 L19.9686149,21.4998925 Z"/>
        </symbol>
      </svg>
    );
  }
}

export default WeatherIconSet
