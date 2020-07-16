const NEZUKO_VERSION = '1.0.0';

const RAND_MAX = 100;
const BOSS_GAME_RAND_MAX = 100;
const ANI_PAGE_RAND_MAX = 16;
const ANI_RECOMMEND_RAND_MAX = 1000;
const ONE_HOUR_SEC = 3600;
const TEN_MIN_SEC = 600;

/* 기본 응답어 */
var hello_msg = ['안녕', '안뇽', '안냥', '하이', 'ㅎㅇ'];
var hello_reply = ['웅웅! (안녕안녕!)', '우우~~ (안녕~~)', '우우~! (안녕하세요~!)'];
var nezuko_msg = ['네즈코'];
var nezuko_reply = ['우우우우우우', '우우우웅? (왜부르냥?)', '...', '그우우우우!!', 
					'우웅.... (우울한듯하다)', '웅!웅!웅!', '우우우!', '우.....우웅..!', 
					'....우웅?', '후으으웅', '우......................'];
var nezuko_what_msg = ['뭐해', '뭐하', '뭐행'];
var nezuko_what_reply = ['우~~~~~ 우우우~~ 웅웅~~!! 우우웅!!! (대략 신이났다는 뜻)', 
						'무으으으으 (만화에 집중하고 있는 듯 하다)', '부!! (무언가를 먹다 뱉은 것 같다)',
						'뭉..... (멍때리고 있는 듯 하다)', '으으으 (째려보고 있다)',
						'으으우우 (졸린 것 같다)', '므므므므 (대략 말걸지 말라는 뜻)',
						'우우?? (뭐하냐고 묻는 듯 하다)', '흐흐흐.. (건들면 안될 것 같다)',
						'우우!!! (이제 일어났다!!!)', '믐뉴믐뉴 (대략 밥먹는 소리)'];		
var kkk_msg = ['ㅋㅋㅋㅋ'];
var kkk_reply = ['웃우? (웃어?)', 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ', 'ㅋ'];
var hinokami_msg = ['히노카미 카구라!'];

/* 시간대별 응답어 */
var morning_reply = ['우우! (좋은 아침!)', '우~우우~ (굿~모닝~~)', 
					'으우으 우으우!! (오늘도 화이팅!!)'];
var lunch_reply = ['우우? (다들 뭐해?)'];
var evening_reply = ['우~우우~~ 우우~~~~~~~ ♪ 우우우~~우우~~~ ♬'];
var etc_reply = ['웃우우마우마~', '우앙', '우잉', '후에', '그오오~!', '우갹', '그그그...',
				'우힛', '우호~!', '우헤헿', '으그그', '갹', '구엑', '그익', '히익'];

/* 네즈코 명령어 */
var help_msg = ['도움말', '--help', '-h'];
var nalssi_msg = ['날씨', '지금날씨', '현재날씨'];
var silsigan_msg = ['실시간 검색어', '인기 검색어', '검색어'];
var meet_msg = ['환영하기'];
var coin_msg = ['비트코인', '이더리움', '리플', '에이다', '모네로', '트론'];
var cal_msg = ['칼로리'];
var chik_msg = ['치킨추천', '치킨 추천'];
var chik_reply = ['우우우! (BBQ!)', '우우우우! (맘스터치!)', '우우우! (BHC!)', '우우우우! (페리카나!)',
					'우우우우! (굽네치킨!)', '우우우우! (네네치킨!)', '우우우우! (노랑통닭!)', '우우우! (교촌치킨!)',
					'우우우우! (멕시카나!)', '우우우우! (부어치킨!)', '우우우우! (순수치킨!)', '우우우 우우우 우우! (호식이 두마리 치킨!)',
					'우우우! (처갓집!)', '우우우우! (바른치킨!)', '우우우! (멕시칸!)', '우우우우! (또래오래!)', '우우우우! (깐부치킨!)',
					'우우우우우! (치킨플러스!)', '우우우! (KFC!)'];
var recommend_ani_msg = ['애니추천', '만화추천', '애니 추천', '만화 추천', '추천애니', '추천만화', '추천 애니', '추천 만화'];
var today_ani_msg = ['오늘의 애니', '오늘의애니', '오늘 애니', '오늘애니'];

/* 호감도 명령어 */
var hogam_up_msg = ['사랑해', '이뻐', '귀여', '좋아', '착해', '똑똑', '최고', 
					'짱', '예뻐', '귀엽', '커엽', '귀욤', '귀요'];
var hogam_down_msg = ['바보', '멍청이', '못생', '싫', '나뻐', '나쁜', '멍청해', 
					'돼지', '뚱땡', '미워', '너무해', '흥', '그만', '냄',
					'저리', '최악', '나빠', '죽어', '별로'];
var hogam_sender = [];
var hogam_sender_value = [];

/* 공부하기 명령어 */
var study_msg = ['공부하기'];
var study_check_msg = ['공부내용'];
var study_del_msg = ['잊어버려'];
var study_req = [];
var study_rsp = [];

/* 미니게임 명령어 */
var game_msg = ['미니게임'];
var boss_game_msg = ['퍽', '펀치', '이얍'];
var game_start_flag = 0;
var game_start_cool_time = 0;
const BOSS_NEZUKO_HP = 2000;
var game_hp = BOSS_NEZUKO_HP;

/* 금지어 */
var yok_msg = ['ㅅㅂ','시발','시빨','씨발','씨빠','씨빨','슈발','싀발','슈빨','쓔발','쓔빨','씌발','싀빨','씌발',
				'ㅆㅃ','ㅅㅃ','ㅆㅃ','ㅅㅍ','시팔','씨팔', 'ㅄ','ㅂㅅ','병신','븅신','또라이','미친놈','미친년',
				'개새끼','뒤져','좆','ㅅ1ㅂ','ㅅ@ㅂ','시이발','씨댕','개빡','시파','싀파','싀팔','싀바','꺼져',
				'꺼저','도라이'];


function basic_response(msg, replier, req_msg, rsp_msg) {
	var rand = Math.floor(Math.random() * RAND_MAX);
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			java.lang.Thread.sleep(500);
			replier.reply(rsp_msg[rand % rsp_msg.length]);
			return 0;
		}
	}
	
	return -1;
}


function hinokami_kagura_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			java.lang.Thread.sleep(500);
			replier.reply(".");
			java.lang.Thread.sleep(500);
			replier.reply("..");
			java.lang.Thread.sleep(500);
			replier.reply("...");
			java.lang.Thread.sleep(500);
			replier.reply("「 혈귀술... 」");
			java.lang.Thread.sleep(1000);
			replier.reply("🩸");
			java.lang.Thread.sleep(1000);
			replier.reply("🩸");
			java.lang.Thread.sleep(1000);
			replier.reply("🩸");
			java.lang.Thread.sleep(1000);
			replier.reply("「 ...폭혈!!! 」");
			java.lang.Thread.sleep(1000);
			replier.reply("     🩸          🩸          🩸     🩸     \n          🩸🩸          🩸🩸               \n🩸🩸     🩸     🩸          🩸     🩸\n          🩸🩸     🩸     🩸     🩸     \n     🩸          🩸     🩸          🩸     \n🩸     🩸🩸     🩸     🩸🩸     🩸\n     🩸          🩸     🩸          🩸     \n🩸          🩸     🩸     🩸🩸           \n     🩸🩸          🩸     🩸     🩸🩸\n          🩸     🩸     🩸     🩸          \n🩸🩸     🩸     🩸          🩸     🩸");
			java.lang.Thread.sleep(200);
			replier.reply("     🔥          🔥          🔥     🔥     \n          🔥🔥          🔥🔥               \n🔥🔥     🔥     🔥          🔥     🔥\n          🔥🔥     🔥     🔥     🔥     \n     🔥          🔥     🔥          🔥     \n🔥     🔥🔥     🔥     🔥🔥     🔥\n     🔥          🔥     🔥          🔥     \n🔥          🔥     🔥     🔥🔥           \n     🔥🔥          🔥     🔥     🔥🔥\n          🔥     🔥     🔥     🔥          \n🔥🔥     🔥     🔥          🔥     🔥");
			java.lang.Thread.sleep(200);
			replier.reply("     💥          💥          💥     💥     \n          💥💥          💥💥               \n💥💥     💥     💥          💥     💥\n          💥💥     💥     💥     💥     \n     💥          💥     💥          💥     \n💥     💥💥     💥     💥💥     💥\n     💥          💥     💥          💥     \n💥          💥     💥     💥💥           \n     💥💥          💥     💥     💥💥\n          💥     💥     💥     💥          \n💥💥     💥     💥          💥     💥");
			return 0;
		}
	}
	
	return -1;
}


function getCoinPrice(pos) {

    var data = Utils.getWebText("https://m.search.daum.net/kakao?w=tot&DA=SH1&q="
    +pos+
    "%20%EA%B0%80%EA%B2%A9");
    data = data.split('txt_price">')[1];
    data = data.split("<")[0].trim();

    var result = "쿠우! (현재 "+pos+" 시세는 "+data+"원 인것 같다)";

    return result;
}


function coin_response(msg, replier, req_msg) {
	var split_str;
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			replier.reply(getCoinPrice(req_msg[i]));
			return 0;
		}
	}
	
	return -1
}


function getCal(pos) {
    var data = Utils.getWebText("http://www.dietshin.com/"
    +"calorie/calorie_search.asp?keyword="+pos);
    data = data.replace(/(<([^>]+)>)/g, "");
    data = data.replace(/ /gi, "");
    data = data.split("음식명\n칼로리")[1];
    data = data.split("kcal")[0];
    data = data.trim();
	data = data.replace("\n","");

    var result = "우후훗 (" + data + "kcal 인것 같다)";

    if (result.length > pos.length + 30) {
        result = "... (칼로리 정보를 찾지 못한 것 같다)"
    }
    return result;
}


function cal_response(msg, replier, req_msg) {
	var index;
	var split_str;
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			index = msg.indexOf(req_msg[i]) + 4;
			
			if (index < msg.length) {
				split_str = msg.substring(index, msg.length);
				replier.reply(getCal(split_str));
			}
			else {
				replier.reply('...? (못알아들은 듯 하다)');
			}
			return 0;
		}
	}
	
	return -1
}


function hogam_up_response(msg, replier, req_msg, sender) {
	var exist_flag = 0;
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			for (var j=0; j < hogam_sender.length; j++) {
				if (hogam_sender[j].indexOf(sender) != -1) {
					hogam_sender_value[j]++;
					exist_flag = 1;
					
					replier.reply("ㅎㅎㅎ (" + hogam_sender[j] + "님의 호감도 : " + hogam_sender_value[j] + ")");
				}
			}
			
			if (exist_flag == 0) {
				hogam_sender.push(sender);
				hogam_sender_value.push(1);
				
				replier.reply("ㅎㅎㅎ (" + sender + "님의 호감도 : 1)");
			}
			
			return 0;
		}
	}
	
	return -1;
}


function hogam_down_response(msg, replier, req_msg, sender) {
	var exist_flag = 0;
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			for (var j=0; j < hogam_sender.length; j++) {
				if (hogam_sender[j].indexOf(sender) != -1) {
					hogam_sender_value[j]--;
					exist_flag = 1;
					
					replier.reply("... (" + hogam_sender[j] + "님의 호감도 : " + hogam_sender_value[j] + ")");
				}
			}
			
			if (exist_flag == 0) {
				hogam_sender.push(sender);
				hogam_sender_value.push(-1);
				
				replier.reply("... (" + sender + "님의 호감도 : -1)");
			}
			
			return 0;
		}
	}
	
	return -1;
}


function study_req_rsp(msg, replier, req_msg) {
	var first_msg_start_index = -1;
	var first_msg_end_index = -1;
	var second_msg_start_index = -1;
	var second_msg_end_index = -1;
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			first_msg_start_index = msg.indexOf('[') + 1;
			first_msg_end_index = msg.indexOf(']');
			second_msg_start_index = msg.lastIndexOf('[') + 1;
			second_msg_end_index = msg.lastIndexOf(']');
			
			if ((first_msg_start_index != -1 && first_msg_end_index != -1 &&
			second_msg_start_index != -1 && second_msg_end_index != -1) && 
			(first_msg_start_index < first_msg_end_index &&
			first_msg_end_index < second_msg_start_index &&
			second_msg_start_index < second_msg_end_index)) {
				study_req.push(msg.substring(first_msg_start_index, first_msg_end_index));
				study_rsp.push(msg.substring(second_msg_start_index, second_msg_end_index));
				
				replier.reply('오에! (잘 배운 것 같다)');
			}
			else {
				replier.reply('으이 ("네즈코 공부하기 [배울 문장] [응답 문장]" 양식으로 써야 하는 것 같다")');
			}
			return 0;
		}
	}
	
	return -1;
}


function study_response(msg, replier, req_msg, rsp_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			java.lang.Thread.sleep(500);
			replier.reply(rsp_msg[i]);
			return 0;
		}
	}
	
	return -1;
}


function study_check_response(msg, replier, req_msg) {
	var result = '후웃! (네즈코가 공부한 내용은 아래와 같은것 같다)\n\n';
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			if (study_req.length == 0) {
				java.lang.Thread.sleep(500);
				replier.reply('... (공부를 하나도 안한것 같다)');
				return 0;
			}
			
			for (var j=0; j < study_req.length; j++) {
				result += '[' + study_req[j] + '] [' + study_rsp[j] + ']\n' ;
			}
			
			java.lang.Thread.sleep(500);
			replier.reply(result);
			return 0;
		}
	}
	
	return -1;
}


function study_del_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			study_req.splice(0, study_req.length);
			study_rsp.splice(0, study_rsp.length);
			
			java.lang.Thread.sleep(500);
			replier.reply('...! (네즈코는 공부내용을 말끔히 잊은 것 같다!)');
			return 0;
		}
	}
	
	return -1;
}


function help_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			java.lang.Thread.sleep(500);
			replier.reply('우~!우~!우~! (네즈코 도움말)\n * Nezuko Version ' + NEZUKO_VERSION + ' *\n\n 1. "네즈코", "인사말" 등 기본적으로 무조건 반사하는 문장들이 있다.\n 2. 일반적으로 "네즈코 [명령어]"로 지원하며 목록은 아래와 같다.\n   - 네즈코 도움말\n   - 네즈코 환영하기\n   - 네즈코 뭐해\n   - 네즈코 실시간 검색어\n   - 네즈코 애니추천\n 3. 그 외 명령어도 존재하며 소리소문없이 생성되었다 사라질 수 있다.\n 4. 건의사항 및 버그 정보는 오프모임 나와서 이야기 바라며, 이상 다덕임 수문장 네즈코의 설명이다.');
			return 0;
		}
	}
	
	return -1;
}

/*
function nalssi_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=날씨");
			var data2 = data.split("전국날씨</strong>");
			var data3 = data2[1].split("특보");
			var data4 = data3[0].replace(/(<([^>]+)>)/g, "");
			data4 = data4.trim();
			data4 = data4.replace(/  /g, "");
			data4 = data4.replace(/도씨/g, "℃");
			data4 = data4.replace(/ /g, ", ");
			replier.reply("누우~ (현재 날씨는 아래와 같은것 같다)\n\n" + data4);
			return 0;
		}
	}
	
	return -1;
}
*/


function nalssi_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			replier.reply("우! (대략 아래 링크에서 보라는 뜻)\nhttps://www.google.com/search?q=날씨");	
			return 0;
		}
	}
	
	return -1;
}


function silsigan_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			try { 
				var url = "https://www.naver.com/srchrank?frm=main&ag=all&gr=1&ma=-2&si=0&en=0&sp=0"; 
				var json = Utils.getWebText(url); 
				json = json.replace(/(<([^>]+)>)/ig, "");
				var keywords = []; 
				var datas = JSON.parse(json); 
				
				for (var j in datas["data"]) { 
					var keywordData = datas["data"][j];
					var str = keywordData["rank"] + ". " + keywordData["keyword"]; 
					keywords.push(str);
				}
				replier.reply("슈우!! (현재 인기 키워드는 아래와 같은 것 같다)\n\n" + keywords.join("\n")); 
			} catch (e) { 
				replier.reply("... (네즈코가 정신이 없다)"); 
			} 
			
			return 0;
		}
	}
	
	return -1;
}


function meet_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			replier.reply("우우 >_<\n(반가워요~ 닉네임은 이름/나이/최애캐 설정해주시고, 간단한 자기소개(입문작/최애작/최애캐/가장 최근에 본 애니) 부탁드려요!\n예를 들면 최애작 귀멸의 칼날! 최애캐 네즈코! 이런식으로 부탁드립니다ㅎㅎ)");
			return 0;
		}
	}
	
	return -1;
}


function yok_response(msg, replier, req_msg) {
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			replier.reply("누우!!! (그런말 쓰면 못써요!!!)");
			return 0;
		}
	}
	
	return -1;
}


function game_response(msg, replier, req_msg) {
	var rand = Math.floor(Math.random() * BOSS_NEZUKO_HP) + 1000;
	var today = new Date();
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			if (game_start_flag == 0) {
				if (today.getDate() != game_start_cool_time) {	
					game_start_flag = 1;
					game_start_cool_time = today.getDate();
					
					game_hp = rand;
					replier.reply("[System : 대왕 네즈코 등장!!]\n현재 체력 : " + game_hp + "\n(퍽, 펀치, 이얍 명령어로 공격가능)");
					
					java.lang.Thread.sleep(TEN_MIN_SEC * 1000);
					if (game_start_flag) {
						replier.reply("[System : 제한시간 초과로 미니게임 강제종료]");
						game_start_flag = 0;
					}
				}
				else {
					replier.reply("[System : 미니게임은 하루에 한번만 가능]");
				}
			}
			else {
				replier.reply("[System : 미니게임 실행중]");
			}
			
			return 0;
		}
	}
	
	return -1;
}


function boss_game_response(msg, replier, req_msg) {
	var rand = Math.floor(Math.random() * BOSS_GAME_RAND_MAX);
	
	if (game_start_flag) {
		for (var i=0; i < req_msg.length; i++) {
			if (msg.indexOf(req_msg[i]) != -1) {
				if (rand == 0) {
					game_hp -= 1000;
					replier.reply("[System : * 크리티컬 데미지 *]");
				}
				else {
					game_hp -= rand;
				}
				
				if (game_hp > 0) {
					if (rand == 0) {
						replier.reply("끼야야아아악!!!!!! (현재 체력 : " + game_hp + ")");
					}
					else if (rand < 20) {
						replier.reply("으으 (현재 체력 : " + game_hp + ")");
					}
					else if (rand < 40) {
						replier.reply("끅... (현재 체력 : " + game_hp + ")");
					}
					else if (rand < 80) {
						replier.reply("갹~ (현재 체력 : " + game_hp + ")");
					}
					else {
						replier.reply("꾸엑!!!!!!! (현재 체력 : " + game_hp + ")");
					}
				}
				else {
					game_start_flag = 0;
					replier.reply("[System : 대왕 네즈코 토벌 성공!!]");
				}
				
				return 0;
			}
		}
	}
	
	return -1;
}


function today_ani_response(msg, replier, req_msg) {
	var today = new Date();
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			
			try {
				var url = "https://www.anissia.net/anitime/list?w=" + today.getDay(); 
				var json = Utils.getWebText(url); 
				json = json.replace(/(<([^>]+)>)/ig, "");
				var keywords = []; 
				var datas = JSON.parse(json); 
				
				for (var j in datas) { 
					var keywordData = datas[j];
					var str = " - " + keywordData["s"] + " (" + keywordData["g"] + ")" + "\n   : " + keywordData["l"]; 
					keywords.push(str);
				}
				
				replier.reply("우후후~ (오늘 방영하는 애니는 아래와 같은 것 같다)\n\n" + keywords.join("\n")); 
			} catch (e) { 
				replier.reply("... (네즈코가 정신이 없다)"); 
			} 
			
			return 0;
		}
	}

	return -1
}


function recommend_ani_response(msg, replier, req_msg) {
	var page_rand = Math.floor(Math.random() * ANI_PAGE_RAND_MAX);
	var subject_rand = Math.floor(Math.random() * ANI_RECOMMEND_RAND_MAX);
	
	for (var i=0; i < req_msg.length; i++) {
		if (msg.indexOf(req_msg[i]) != -1) {
			
			try {
				var url = "https://www.anissia.net/anitime/end?p=" + page_rand; 
				var json = Utils.getWebText(url); 
				json = json.replace(/(<([^>]+)>)/ig, "");
				var datas = JSON.parse(json); 
								
				subject_rand = subject_rand % datas.length;
				var keywordData = datas[subject_rand];
				var str = " - " + keywordData["s"] + " (" + keywordData["g"] + ")" + "\n   : " + keywordData["l"]; 
							
				replier.reply("오우~! (추천애니는 아래와 같은 것 같다)\n\n" + str); 
			} catch (e) { 
				replier.reply("... (네즈코가 정신이 없다)"); 
			} 
			
			return 0;
		}
	}

	return -1
}


function nezuko_command_response(msg, sender, replier) {
	
	for (var i=0; i < nezuko_msg.length; i++) {
		if (msg.indexOf(nezuko_msg[i]) != -1) {
			/* 네즈코 명령어 */
			if (help_response(msg, replier, help_msg) == 0) return 0;
			if (meet_response(msg, replier, meet_msg) == 0) return 0;
			if (coin_response(msg, replier, coin_msg) == 0) return 0;
			if (study_req_rsp(msg, replier, study_msg) == 0) return 0;
			if (study_check_response(msg, replier, study_check_msg) == 0) return 0;
			if (study_del_response(msg, replier, study_del_msg) == 0) return 0;
			if (cal_response(msg, replier, cal_msg) == 0) return 0;
			if (nalssi_response(msg, replier, nalssi_msg) == 0) return 0;
			if (silsigan_response(msg, replier, silsigan_msg) == 0) return 0;
			if (basic_response(msg, replier, chik_msg, chik_reply) == 0) return 0;
			if (game_response(msg, replier, game_msg) == 0) return 0;
			if (boss_game_response(msg, replier, boss_game_msg) == 0) return 0;
			if (today_ani_response(msg, replier, today_ani_msg) == 0) return 0;
			if (recommend_ani_response(msg, replier, recommend_ani_msg) == 0) return 0;
			if (hogam_up_response(msg, replier, hogam_up_msg, sender) == 0) return 0;
			if (hogam_down_response(msg, replier, hogam_down_msg, sender) == 0) return 0;
			if (basic_response(msg, replier, nezuko_what_msg, nezuko_what_reply) == 0) return 0;
		}
	}
	
	return -1;
}


function response(room, msg, sender, isGroupChat, replier, ImageDB) {
	var rand = Math.floor(Math.random() * RAND_MAX);
	var today = new Date();
	var time_flag = 0;

	/* 우선 반응 명령어 */
	if (yok_response(msg, replier, yok_msg) == 0) return;
	if (hinokami_kagura_response(msg, replier, hinokami_msg) == 0) return;

	/* 네즈코 명령어 */
	if (nezuko_command_response(msg, sender, replier) == 0) return;
	
	/* 기본적인 응답 */
	if (basic_response(msg, replier, nezuko_msg, nezuko_reply) == 0) return;
	if (basic_response(msg, replier, hello_msg, hello_reply) == 0) return;
	if (basic_response(msg, replier, kkk_msg, kkk_reply) == 0) return;
	if (study_response(msg, replier, study_req, study_rsp) == 0) return;
}
