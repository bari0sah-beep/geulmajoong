// ==========================================================================
// ✍️ 글마중 - MEGA IMAGINATION ENGINE
// 항목당 1000개+ 완전 새로운 문장 보장 (다중 템플릿 × 대용량 어휘 뱅크)
// ==========================================================================

// ═══════════════════════════════════════════════════════════════════════════
// 1. MEGA SENTENCE GENERATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════

const MEGA_ENGINE = {

    // ─────────────────────────────────────────────────────────────
    // 📖 감성 / 에세이 - 1000개+ 섬세한 내면 서정 문장
    // ─────────────────────────────────────────────────────────────
    '감성/에세이': {
        templates: [
            // 템플릿 A: [장소/시간] + 에서 + [내면 행위] + [정서적 결론]
            (a, b, c) => `${a}에서 ${b} 보면, ${c}`,
            // 템플릿 B: [감각 대상] + 이/가 + [감각 묘사] + [내면 결론]
            (a, b, c) => `${a}이/가 ${b} 순간, ${c}`,
            // 템플릿 C: [계절/날씨] + [풍경] + [독백]
            (a, b, c) => `${a} 날, ${b} 보며 ${c}`,
            // 템플릿 D: [감정/기억] + [비유적 묘사] + [깨달음]
            (a, b, c) => `${a}은 ${b} 닮아 있어서, ${c}`,
            // 템플릿 E: [구체적 행위] + [서정적 연결] + [여운]
            (a, b, c) => `${a}을 하다 문득 ${b}, ${c}`,
        ],
        A: [
            '새벽 네 시의 텅 빈 부엌', '비 내리는 화요일 오후의 카페 창가', '낡은 목욕탕 탈의실 거울 앞',
            '이사 가던 날 아침의 빈 방', '아무도 없는 학교 복도 끝', '할머니 댁 마루 끝 그늘',
            '첫차가 오기 전 승강장', '문 닫힌 도서관 계단 위', '퇴직한 아버지의 오래된 서재',
            '지하철 역 환승 통로', '눈 내리는 공원 벤치 위', '혼자 간 바다 방파제 끝',
            '긴 비행의 창가 자리', '낯선 도시의 여관 방', '혼자 찾은 전시관의 마지막 작품 앞',
            '편의점 앞 노란 불빛 아래', '야근 끝 빈 사무실 창가', '이른 봄 산책로의 벚꽃 나무 아래',
            '분식집 오래된 플라스틱 의자', '라디오가 켜진 심야 주방', '겨울 새벽 목욕탕 입구',
            '이삿짐 박스가 가득 찬 방 구석', '가을 공원 낙엽 쌓인 오솔길', '기차 종착역 플랫폼',
            '해 질 녘의 오래된 동네 골목', '비 오는 날 처마 밑', '반지하 방 창문 너머 발목 높이 거리',
            '오래된 다방의 빨간 소파 위', '아무것도 약속하지 않은 일요일 오전', '물이 식어가는 욕조 안',
        ],
        B: [
            '가만히 앉아', '홀로 차를 마시다', '창밖을 바라보다', '멍하니 서 있다',
            '오래된 일기를 펼쳐', '낡은 사진을 들여다', '음악을 켜지 않고 있다', '생각 없이 걷다',
            '잠시 숨을 고르다', '별 것 아닌 것들을 정리하다', '혼잣말을 하다', '아무것도 하지 않고',
            '무심코 메모를 들여다', '커피를 두 손으로 감싸 쥐고', '비어있는 컵을 바라', '창에 입김을 불어넣다',
            '오래된 노래 한 곡을 틀어', '이름 모를 사람의 뒷모습을 보다', '고개를 창쪽으로 돌리다',
            '아무 생각 없이 천장을 올려다', '손톱만 한 창문 너머 하늘을 보다', '습관처럼 핸드폰을 내려놓다',
            '조용히 눈을 감고 숨을 들이마시다', '무릎 위에 손을 얹어', '연필을 굴리며 멍하니',
            '발끝으로 바닥을 두드리다', '빛이 무너지는 방향을 좇다', '먼지 쌓인 선반을 손가락으로 닦으며',
            '흘러가는 구름을 눈으로 따라가다', '아무에게도 보내지 않은 문자를 쓰다',
        ],
        C: [
            '세상이 잠시 나를 잊어준 것처럼 조용하다.',
            '그때 하지 못했던 말이 아직도 어딘가에 떠돌고 있는 것 같다.',
            '나는 여전히 그 시절의 나를 완전히 떠나보내지 못했음을 깨닫는다.',
            '오래도록 쌓였던 것들이 조용히 제 무게로 가라앉기 시작한다.',
            '생각보다 많은 것을 혼자 감내하며 살아왔다는 걸 새삼 느낀다.',
            '누군가를 기다리는 것도, 떠나보내는 것도 모두 사랑의 다른 이름임을 안다.',
            '좋았던 것들은 왜 항상 뒤돌아서야만 비로소 선명해지는 걸까.',
            '지금 이 순간을 잘 기억해두어야겠다 싶으면서도 이미 조금씩 흐릿해진다.',
            '마음의 어느 한 귀퉁이가 오늘따라 유독 쓸쓸하게 환하다.',
            '잘 지내고 있다는 말이 스스로에게도 가끔은 거짓말이 된다.',
            '이상하게 오늘은 아무것도 설명하고 싶지 않다.',
            '우리가 서로에게 다정했던 시절이 실은 얼마나 짧았는지 모른다.',
            '아무것도 아닌 것들이 쌓여 결국 삶이 된다는 것이 신기하다.',
            '이 조용한 시간이 오래 머물러 주기를 바라면서도 두렵기도 하다.',
            '어떤 그리움은 대상이 없어도 찾아온다.',
            '소란스럽게 살아왔는데 정작 마음의 속도는 언제나 이렇게 느렸다.',
            '지금 이 순간에도 어딘가에서 누군가는 똑같은 외로움을 앓고 있을 것이다.',
            '슬픔이란 잘못이 아니라 여전히 살아있다는 증거다.',
            '다 괜찮다고 말하는 사람이 실은 가장 안 괜찮은 경우가 많다.',
            '살면서 아무도 나를 완전히 알아주지 않아도 괜찮다는 걸 받아들이는 중이다.',
            '가장 진솔한 이야기는 결국 혼자인 시간에만 쓸 수 있다.',
            '행복했던 순간도 지나고 나면 어째서 이렇게 아프게 느껴지는 걸까.',
            '오늘 하루 수고한 나에게 가장 필요한 건 판단이 아닌 따뜻함이다.',
            '그사람이 떠난 자리에는 계속 그사람의 온도가 남아 있다.',
            '쓰지 않은 문장들이 마음속에서 가장 오래 산다.',
            '기억한다는 건 어쩌면 사랑하기를 포기하지 않는다는 뜻이다.',
            '차가운 날씨가 오히려 마음속 온기를 또렷하게 느끼게 해준다.',
            '아무것도 해결되지 않아도 이 자리에 있다는 것만으로 충분하다.',
            '언젠가 이 모든 게 그리워질 거라는 것을 알면서도 쉬이 놓아지지 않는다.',
            '나를 향한 가장 오래된 물음은 결국 오늘 밤도 답을 내놓지 않는다.',
        ],
    },

    // ─────────────────────────────────────────────────────────────
    // 🌿 일상 / 추억 - 1000개+ 구체적 감각의 일상 문장
    // ─────────────────────────────────────────────────────────────
    '일상/추억': {
        templates: [
            (a, b, c) => `${a}의 ${b} 생각만으로도 ${c}`,
            (a, b, c) => `${a}을 다시 마주하는 순간, ${b} 느끼며 ${c}`,
            (a, b, c) => `${a}이 있는 풍경 속에서 ${b} 나는 ${c}`,
            (a, b, c) => `${a}처럼 사소한 것이 ${b} 오늘따라 ${c}`,
            (a, b, c) => `${a}을 기억하면 어김없이 ${b} 그리고 ${c}`,
        ],
        A: [
            '어머니가 끓여주던 미역국', '형광등이 깜박이던 공부방', '교복 주머니 속 꾸깃꾸깃 500원',
            '졸업식 날 운동장의 흙 냄새', '방학 때마다 찾던 외갓집 縁마루', '녹슨 철봉이 있던 동네 공터',
            '새벽에 아버지가 마시던 숭늉 소리', '비 오는 날 창가에서 먹던 라면', '오래된 반 친구의 낙서 가득한 교과서',
            '첫 월급날 슈퍼에서 산 케이크', '할머니 손에서 나던 따뜻한 콩 냄새', '소풍 날 아침 도시락 싸던 소리',
            '중학교 복도 끝 낡은 수돗가', '여름방학 TV 앞 선풍기 바람', '처음 탄 비행기 창밖 구름',
            '첫 자취방의 좁고 기울어진 책상', '문구점 앞 뽑기 기계', '친구들과 꾸벅꾸벅 졸다 나온 영화관',
            '야자 시간에 몰래 먹던 빵', '새 학기 첫날 새 교과서 냄새', '입학 선물로 받은 만년필',
            '삼촌이 타주던 오래된 오토바이', '겨울방학 찾아간 스케이트장', '부모님이 싸우던 날 담요 속에 숨어듣던 라디오',
            '첫사랑이 주던 편의점 삼각김밥', '졸업 앨범 속 어색하게 웃는 나', '중학교 때 반장 선거에서 진 날',
            '엄마 지갑에서 몰래 꺼낸 천 원', '여름밤 마당에서 잡던 반딧불이', '친구집 냉장고 속 시원한 수박',
            '할아버지와 걷던 겨울 논두렁길',
        ],
        B: [
            '왜 이리 코끝이 시큰해지는지 모르겠다', '가슴 어딘가가 조용히 따뜻해지는 것을', '그때 그 냄새가 코끝에 스치는 것을',
            '얼굴도 기억 안 나는 사람들이 선명하게 떠오르는 것을', '그 시절의 내가 얼마나 작고 귀여웠는지',
            '지금 이 순간이 언젠가의 추억이 될 것임을', '그때는 몰랐던 소중함을 이제야 알게 됨을',
            '시간이 이렇게나 빨리 흐른다는 것을', '아직 그때 감각을 몸이 기억하고 있다는 것을',
            '삶은 결국 이런 작은 것들로 만들어진다는 것을', '그리워한다는 것이 아프기도 하고 기쁘기도 하다는 것을',
            '우리가 공유했던 시간의 무게를', '그것이 얼마나 평범하고 동시에 소중했는지를',
            '매일 같은 일상이 사실 얼마나 행운이었는지를', '이 기억이 내 안에서 사라지지 않기를 바란다는 것을',
            '함께 있던 사람들이 지금 어디에 있을지를', '아무렇지도 않은 척 살아왔지만 사실 많이 그리웠음을',
            '그 계절의 온도가 아직도 몸에 남아있음을', '다시는 돌아갈 수 없기에 더 소중하다는 것을',
            '기억이란 가장 가깝고도 먼 여행임을',
        ],
        C: [
            '마음의 오래된 서랍이 스르르 열린다.',
            '그 시절이 그리 먼 것도 아닌 것 같다.',
            '잠시 모든 걸 내려놓고 그때로 돌아가고 싶어진다.',
            '살아있다는 것이 새삼 다정하게 느껴진다.',
            '나는 어쩌다 이렇게 멀리 왔나 싶다.',
            '그게 일상이었다는 사실이 이제는 기적처럼 느껴진다.',
            '인생에서 가장 빛났던 시간이 어디였는지 알 것 같다.',
            '지금 이 순간도 언젠가는 그리운 추억이 될 것이다.',
            '오늘 하루가 참 수고로웠다는 말을 그때의 나에게 전해주고 싶다.',
            '그날의 공기와 냄새가 지금도 온몸에 선명하다.',
            '사람은 결국 기억의 무게로 살아가는 존재인 것 같다.',
            '그 시절 우리가 얼마나 빛나고 있었는지 그때는 몰랐다.',
            '아무 의미 없어 보였던 날들이 지금은 가장 아름답다.',
            '잃어버린 것들 중에 가장 아름다운 것이 바로 그 시절이다.',
            '지금도 그 골목 어딘가에서 우리가 웃고 있을 것만 같다.',
            '세상이 빠르게 변해도 기억 속의 그 장면은 변하지 않는다.',
            '사소하기에 끝없이 그립고, 그립기에 더 사소해진다.',
            '그때의 나는 지금의 내가 얼마나 부러웠을까.',
            '시간이 준 선물 중 기억만큼 따뜻한 것은 없다.',
            '돌아갈 수 없어 비로소 영원이 된 하루가 있다.',
        ],
    },

    // ─────────────────────────────────────────────────────────────
    // 🌌 소설 / 창작 - 1000개+ 완전 상상력 폭발 문장
    // ─────────────────────────────────────────────────────────────
    '소설/창작': {
        templates: [
            // 이세계/신비 템플릿
            (a, b, c) => `${a} 그 순간, ${b} 그리고 ${c}`,
            // 인물 중심 플롯 템플릿
            (a, b, c) => `${a}을 손에 넣은 ${b} 비로소 깨달았다— ${c}`,
            // 불길한 예감 템플릿
            (a, b, c) => `${a}가 시작되던 날 밤, ${b} 것을 눈치챈 것은 ${c}`,
            // 모험/탐험 템플릿
            (a, b, c) => `${a}의 지도를 따라간 끝에, ${b} 그곳에서 ${c}`,
            // 반전/충격 템플릿
            (a, b, c) => `모두가 ${a}라 믿었지만, ${b} 진실은 ${c}`,
        ],
        A: [
            '자정에 열두 번 울리는 괘종시계', '달이 사라진 이틀 연속의 밤', '거울 속 또 다른 세계',
            '봉인된 석관의 황금 자물쇠', '이름이 지워진 낡은 양피지 지도', '바다 밑에 가라앉은 유리 도시',
            '그림자가 주인보다 먼저 움직이기 시작한 것', '100년째 닫히지 않는 낡은 저택의 문',
            '모든 새가 한 방향으로만 날기 시작한 것', '소년이 주운 상자 속 낯선 언어의 편지',
            '목격자 없이 사라진 마을 전체', '어두운 호수 밑에서 올라온 손',
            '세 번 부르면 나타난다는 이름 없는 존재', '뒤집어진 달력이 가리키는 날짜',
            '오직 정오에만 열리는 비밀 문', '기억을 먹는다는 소문의 나방',
            '탑의 꼭대기에서 들리는 누군가의 노래', '불에 타지 않는 한 장의 사진',
            '모든 시계가 같은 시각에 멈춘 것', '번개가 열두 번 같은 곳에 떨어진 밭',
            '죽은 나무에서 피어난 하얀 꽃', '지하 깊은 곳에서 발견된 빛나는 돌',
            '아무도 보낸 적 없는 편지가 매일 도착하는 것', '물속에서도 꺼지지 않는 촛불 하나',
            '지워지지 않는 붉은 발자국', '잠을 자면 같은 꿈에서 만나는 낯선 여인',
            '열 개의 계단을 내려가야 나오는 열한 번째 방', '소리가 사라진 도시',
            '유리구슬 속에 갇힌 작은 도시', '별자리가 하룻밤 새 바뀌어버린 하늘',
        ],
        B: [
            '세상의 모든 문이 동시에 잠겨버렸다', '그것은 태초부터 그곳에 있었던 것이 아니었다',
            '두 사람의 그림자가 하나로 합쳐졌다', '백 년간의 침묵이 끝났다',
            '지도에 없던 새로운 길이 나타났다', '그는 자신이 이미 죽었음을 알아챘다',
            '선택지는 오직 두 개였으나 둘 다 돌아올 수 없는 길이었다',
            '그 물건을 만지는 순간 과거의 장면들이 폭포처럼 쏟아졌다',
            '아무도 기억하지 못하는 기억이 되살아났다', '하늘의 색이 서서히 바뀌기 시작했다',
            '그 문을 열었을 때 들려온 것은 자신의 목소리였다', '존재하지 않아야 할 것들이 눈앞에 펼쳐졌다',
            '그 이름을 부르는 순간 세상이 단 일 초 멈췄다', '그가 떠난 뒤에도 의자에는 온기가 남았다',
            '지하 세계로 내려가는 계단이 끝없이 이어졌다', '모든 거울이 같은 얼굴을 보여주기 시작했다',
            '금지된 책의 마지막 페이지가 저절로 펼쳐졌다', '그가 그린 지도가 현실이 되기 시작했다',
            '적은 뜻밖에도 오랜 친구의 얼굴을 하고 있었다', '탑 꼭대기에 도달한 것은 그 홀로가 아니었다',
            '나침반 바늘이 북쪽이 아닌 그를 가리켰다', '모든 사람이 잠든 시각, 세상이 거꾸로 돌았다',
        ],
        C: [
            '이 모든 것이 처음부터 계획된 일이었다.',
            '그것이 세상의 끝이자 또 다른 시작임을 알았다.',
            '오직 그 한 사람만이 진실을 알고 있었다.',
            '돌아갈 방법은 이미 사라지고 없었다.',
            '두려움보다 강한 것이 호기심이었고, 그것이 모든 것을 바꾸었다.',
            '천 년의 봉인이 단 한 사람의 손으로 풀리는 순간이었다.',
            '세계는 그 선택 이전과 이후로 영원히 나뉘었다.',
            '진실을 아는 자와 모르는 자 사이의 경계가 무너졌다.',
            '이름 없는 것들에게도 이야기가 있다는 사실을 비로소 알았다.',
            '아무도 믿지 않을 이야기지만, 그것은 분명히 일어났다.',
            '그 문 너머에서 기다리고 있는 것은 구원인지 파멸인지 알 수 없었다.',
            '운명이란 거역할 수 없는 것이 아니라, 선택하는 것임을 알았다.',
            '살아남은 자의 이야기는 이제 막 시작되고 있었다.',
            '그날 밤 이후로 그 마을에서는 아무도 별을 올려다보지 않았다.',
            '수백 년 전 누군가도 이 자리에서 같은 선택을 했음을 뒤늦게 깨달았다.',
            '불가능하다 여겼던 일이 바로 눈앞에서 실재가 되었다.',
            '그것을 믿지 않았던 자들도 이제는 침묵 속에 고개를 끄덕였다.',
            '한 사람의 선택이 어떻게 세상의 방향을 바꾸는지 그날에야 알았다.',
            '이야기는 끝났지만, 그 여운은 영원히 사라지지 않을 것이었다.',
            '누군가 이 이야기를 기록해야 한다면, 바로 내가 해야 했다.',
        ],
    },

    // ─────────────────────────────────────────────────────────────
    // 💭 질문 / 생각 - 1000개+ 깊은 성찰과 철학적 물음
    // ─────────────────────────────────────────────────────────────
    '질문/생각': {
        templates: [
            (a, b, c) => `만약 ${a} 수 있다면, 나는 ${b} 것인가— ${c}`,
            (a, b, c) => `${a}이란 ${b} 것이 아니라, ${c}`,
            (a, b, c) => `우리가 ${a}하는 진짜 이유는 ${b} 것이 아닐까— ${c}`,
            (a, b, c) => `${a}을 잃지 않기 위해 ${b} 것은 아닐까— ${c}`,
            (a, b, c) => `${a}가 없다면 나는 과연 ${b}— ${c}`,
        ],
        A: [
            '시간을 되돌릴', '단 하나의 진실만을 알', '내 기억을 모두 지울',
            '타인의 마음을 그대로 느껴볼', '아무도 모르게 다시 시작할', '삶의 속도를 마음대로 조절할',
            '죽음이 오는 날짜를 미리 알', '내가 싫어하는 사람의 삶 하루를 살아볼',
            '아무것도 아닌 채로 아무도 모르게 존재해볼', '세상에서 가장 사랑받는 사람이 될',
            '거짓말을 전혀 할 수 없게 될', '기억을 고를', '상처를 느끼지 못할',
            '타인의 꿈속을 여행할', '삶을 완전히 처음부터 다시 설계할',
        ],
        B: [
            '과연 다른 선택을 했을', '정말로 지금과 같은 사람이 되었을',
            '무엇을 가장 먼저 바꾸고 싶었을', '진심으로 행복해질', '스스로를 더 잘 이해할',
            '더 용감해질', '주변을 더 아낄', '덜 후회하며 살',
            '더 많은 것을 내려놓을', '지금의 나를 더 사랑할',
            '삶을 덜 두려워할', '타인에게 더 다정해질', '진짜 원하는 것을 알',
            '스스로에게 더 솔직해질', '지금과 전혀 다른 사람이 되어있을',
        ],
        C: [
            '답을 모르기에 오히려 오래도록 생각하게 된다.',
            '어쩌면 질문을 던지는 것만으로도 이미 충분한 삶이다.',
            '살면서 가장 어려운 상대는 늘 나 자신이었다.',
            '완벽한 선택은 없지만, 선택을 하는 것이 곧 삶이다.',
            '이 질문에 대한 답은 결국 살아가면서 스스로 찾아야 한다.',
            '모든 사람이 저마다의 답을 갖고 태어나는 것은 아닐까.',
            '두려워한다는 것은 아직 그것에 진심이라는 뜻이다.',
            '알 수 없기에 인생은 여전히 흥미롭고 가치 있다.',
            '나는 오늘도 나 자신에게 가장 솔직하지 못한 사람이다.',
            '물음표 하나가 때로는 마침표보다 더 많은 이야기를 담는다.',
            '삶이 답을 숨겨두는 이유는, 스스로 찾는 과정이 더 중요하기 때문일 것이다.',
            '후회보다 질문이 더 건강하다고 믿기로 한다.',
            '우리는 모두 자기 자신이라는 가장 어려운 문제를 풀며 산다.',
            '어떤 진실은 알고 싶지 않지만, 그래서 더 알아야 한다.',
            '가장 용감한 행동은 자기 자신에게 솔직한 질문을 던지는 것이다.',
            '삶은 목적지가 아니라 이 모든 물음 위를 걷는 여정이다.',
            '정답이 없는 질문일수록 더 오래 곁에 두고 싶어진다.',
            '이 생각을 글로 남기지 않으면, 아마 평생 마음속에서만 맴돌 것이다.',
            '나에게 던지는 질문의 수가 많을수록, 삶의 깊이가 달라진다.',
            '가장 사랑하는 것을 잃을 두려움이 곧 가장 크게 사랑하고 있다는 증거다.',
        ],
    },
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. BUILD AND SHUFFLE MEGA DECKS AT STARTUP (각 카테고리 1000개+ 자동 생성)
// ═══════════════════════════════════════════════════════════════════════════

let BUILT_DECKS = {};
let DECK_POINTERS = {};

function buildAllDecks() {
    BUILT_DECKS = {};
    DECK_POINTERS = {};

    const catNames = ['감성/에세이', '일상/추억', '소설/창작', '질문/생각'];
    catNames.forEach(cat => {
        BUILT_DECKS[cat] = generateDeckForCategory(cat);
        shuffleDeck(BUILT_DECKS[cat]);
        DECK_POINTERS[cat] = 0;
    });

    // ALL = union of all category decks, shuffled
    BUILT_DECKS['all'] = [];
    catNames.forEach(cat => {
        BUILT_DECKS[cat].forEach(item => {
            BUILT_DECKS['all'].push({ ...item });
        });
    });
    shuffleDeck(BUILT_DECKS['all']);
    DECK_POINTERS['all'] = 0;
}

function generateDeckForCategory(cat) {
    const eng = MEGA_ENGINE[cat];
    if (!eng) return [];

    const { templates, A, B, C } = eng;
    const deck = [];
    let idCounter = 0;

    // Permute all combinations: for each template × A × B × C
    // We cap each combination block at 1000 to keep performance snappy
    templates.forEach((tmpl, ti) => {
        A.forEach((a, ai) => {
            B.forEach((b, bi) => {
                // Pick C based on (ai + bi + ti) to ensure variety without triple loop blowup
                const c = C[(ai + bi + ti) % C.length];
                const sentence = tmpl(a, b, c);
                deck.push({
                    id: `${cat}_${idCounter++}`,
                    category: cat,
                    start: sentence,
                    continuations: getContinuations(cat, ai, bi, ti)
                });
            });
        });
    });

    return deck;
}

// Continuation sentence pools per category
const CONT = {
    '감성/에세이': [
        ['그날의 온기가 이렇게나 오래 남아있을 줄 몰랐다.', '아마 그때의 나도 나름의 최선을 다하고 있었을 것이다.', '이 고요함이 오래 머물러 주기를 바란다.'],
        ['말하지 못했던 많은 것들이 지금은 그리움의 이름을 달고 있다.', '오늘 밤만큼은 아무것도 설명하지 않아도 되는 시간이다.', '슬픔이 잘못이 아니라는 걸 이제는 안다.'],
        ['누군가는 지금 이 순간도 똑같은 감정을 느끼고 있을 것이다.', '기억은 가장 따뜻한 여행지다.', '오늘 하루도 참 수고로웠다는 말을 나 자신에게 건넨다.'],
    ],
    '일상/추억': [
        ['그 시절이 그리 먼 것도 아닌 것 같다.', '기억이 이렇게 생생한 건 그만큼 소중했다는 뜻이다.', '언젠가 이날도 그렇게 그리워지겠지.'],
        ['가장 평범했던 날들이 지금은 가장 눈부시다.', '함께였던 사람들은 지금 어디에서 무엇을 하고 있을까.', '그때로 돌아갈 수 없기에 더욱 소중하다.'],
        ['삶은 결국 이런 사소한 것들로 이루어진다.', '추억은 나이가 들수록 더 또렷해진다.', '그 시절 우리는 빛나고 있었다.'],
    ],
    '소설/창작': [
        ['이제 돌아갈 방법은 사라졌다.', '세계는 그 이전과 이후로 나뉘었다.', '살아남은 자의 이야기가 비로소 시작됐다.'],
        ['진실을 아는 자는 단 한 명뿐이었다.', '그 선택이 결국 모든 것을 바꿔놓았다.', '아무도 믿지 않을 이야기지만, 그것은 일어났다.'],
        ['운명은 거역하는 것이 아니라 선택하는 것임을 알았다.', '이 이야기를 기록할 수 있는 사람은 이제 나뿐이다.', '그날 이후로 세상은 다시 예전으로 돌아가지 않았다.'],
    ],
    '질문/생각': [
        ['답을 모르기에 오히려 오래 생각하게 된다.', '어쩌면 질문을 던지는 것만으로 충분하다.', '살면서 가장 어려운 상대는 언제나 나 자신이었다.'],
        ['물음표 하나가 마침표보다 더 많은 것을 담을 때가 있다.', '나는 오늘도 나에게 가장 솔직하지 못하다.', '정답이 없는 질문일수록 더 오래 품고 싶어진다.'],
        ['가장 용감한 행동은 자신에게 솔직한 질문을 던지는 것이다.', '삶은 이 모든 물음 위를 걷는 여정이다.', '이 생각을 글로 남기지 않으면 영원히 마음속에서만 맴돌 것이다.'],
    ],
};

function getContinuations(cat, ai, bi, ti) {
    const pool = CONT[cat] || CONT['감성/에세이'];
    const idx = (ai + bi + ti) % pool.length;
    return pool[idx];
}

function shuffleDeck(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getNextPrompt(category) {
    const deck = BUILT_DECKS[category];
    if (!deck || deck.length === 0) return null;

    let ptr = DECK_POINTERS[category] || 0;

    if (ptr >= deck.length) {
        // Re-shuffle and restart when all prompts have been shown
        shuffleDeck(deck);
        ptr = 0;
    }

    const prompt = deck[ptr];
    DECK_POINTERS[category] = ptr + 1;
    return prompt;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. SMART REAL-TIME ADVICE ENGINE
// ═══════════════════════════════════════════════════════════════════════════

const ADVICE_PATTERNS = [
    {
        keywords: ['바람', '하늘', '햇살', '빗소리', '노을', '구름', '비', '눈', '나무', '바다', '꽃', '공기', '냄새', '소리', '빛'],
        category: '📸 오감 & 풍경 묘사 확장',
        getAdvice: (snippet) => ({
            question: `작성하신 글 중 "${snippet}" 구절의 풍경 묘사가 정갈하네요!`,
            hint: '장면 속의 온도나 바람의 촉감, 공간에 감돌던 냄새 중 하나를 한 문장 더 추가해보면 읽는 사람이 더 깊게 몰입합니다.'
        })
    },
    {
        keywords: ['마음', '슬픔', '행복', '외로움', '기억', '아픔', '눈물', '미소', '그리움', '불안', '걱정', '감정', '두려움', '진심'],
        category: '🌿 내면 감정 심화',
        getAdvice: (snippet) => ({
            question: `글에 담긴 "${snippet}" 마음의 결이 깊게 느껴집니다.`,
            hint: '그 감정이 처음 일어난 구체적인 사건이나 계기를 조금 더 솔직하게 적어내려가 보세요. 감정의 폭이 한층 풍성해집니다.'
        })
    },
    {
        keywords: ['친구', '어머니', '아버지', '사람', '그', '그녀', '너', '우리', '말했다', '물었다', '대화', '표정', '손', '얼굴'],
        category: '💬 인물 서사 & 행동 디테일',
        getAdvice: (snippet) => ({
            question: `"${snippet}" 부분에서 인물이나 관계의 생동감이 느껴지네요!`,
            hint: '그 인물이 지었던 특유의 미세한 손짓이나 눈빛, 혹은 나눴던 짤막한 말 한 토막을 글로 가져와 이어붙여 보세요.'
        })
    },
    {
        keywords: ['왜', '생각', '만약', '질문', '이유', '깨달음', '의문', '삶', '인생', '의미', '미래', '과거', '선택'],
        category: '❓ 시각 전환 & 성찰 심화',
        getAdvice: (snippet) => ({
            question: `"${snippet}"에 담긴 깊은 생각이 깊은 여운을 줍니다.`,
            hint: '만약 5년 뒤의 내가 지금의 이 글을 읽는다면 스스로에게 어떤 따뜻한 말을 건넬까요? 그 시선으로 문장을 마무리해보세요.'
        })
    }
];

const DEFAULT_ADVICES = [
    {
        category: '🌱 서두 묘사 팁',
        question: '글의 분위기를 잡기 위해 장소의 빛깔이나 시각을 적어보셨나요?',
        hint: '창밖의 날씨나 조명의 온도를 서두에 한 조각 얹어주면 글 전체의 분위기가 차분하게 정리됩니다.'
    },
    {
        category: '🔍 인물 행동 묘사',
        question: '글 속 인물이 멍하니 서 있거나 잔을 만지작거리고 있나요?',
        hint: '커피잔을 두 손으로 감싸쥐거나 창밖을 응시하는 작은 행동 묘사는 백 마디 말보다 더 깊은 감정을 전달합니다.'
    },
    {
        category: '🏁 글 매듭짓기',
        question: '오늘의 이 생각을 통해 나 자신에게 건네고 싶은 응원의 한 마디는?',
        hint: '"그러니 오늘은 이만하면 충분하다", "다음 계절에는 조금 더 다정해지자"처럼 나를 보듬는 문장으로 마무리해 보세요.'
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// 4. APP STATE & DOM INIT
// ═══════════════════════════════════════════════════════════════════════════

let currentPrompt = null;
let currentContinuationIndex = 0;
let currentCategory = 'all';
let isAdvicePanelOpen = false;
let currentViewingDoc = null;

let promptDisplayArea, btnGeneratePrompt, btnRefreshPrompt, btnContinuePrompt,
    continueStepBadge, btnApplyToEditor, documentTitle, editorTextarea,
    draftStatusIndicator, statLengthWithSpaces, statLengthNoSpaces, statWords, statManuscript,
    btnClearEditor, btnCopyEditor, btnSaveDocument, btnOpenStorage, btnNewDocument, savedCountBadge,
    storageModal, btnCloseStorage, storageSearchInput, storageItemsList,
    viewModal, btnCloseView, viewModalTitle, viewModalDate, viewModalStats,
    viewModalContent, btnExportTxt, btnLoadIntoEditor,
    btnToggleAdvice, advicePanel, btnCloseAdvice, adviceStatusTag, adviceStatusMessage,
    adviceCardsContainer, btnRefreshAdvice, editorLayoutWrapper,
    toastNotification, toastMessage;

document.addEventListener('DOMContentLoaded', () => {
    initElements();
    initEventListeners();
    initCategoryPills();
    buildAllDecks();
    updateSavedCountBadge();
    loadDraftFromLocalStorage();
    updateStats();
    renderInitialPromptGuide();
});

function initElements() {
    promptDisplayArea = document.getElementById('prompt-display-area');
    btnGeneratePrompt = document.getElementById('btn-generate-prompt');
    btnRefreshPrompt = document.getElementById('btn-refresh-prompt');
    btnContinuePrompt = document.getElementById('btn-continue-prompt');
    continueStepBadge = document.getElementById('continue-step-badge');
    btnApplyToEditor = document.getElementById('btn-apply-to-editor');
    documentTitle = document.getElementById('document-title');
    editorTextarea = document.getElementById('editor-textarea');
    draftStatusIndicator = document.getElementById('draft-status-indicator');
    statLengthWithSpaces = document.getElementById('stat-length-with-spaces');
    statLengthNoSpaces = document.getElementById('stat-length-no-spaces');
    statWords = document.getElementById('stat-words');
    statManuscript = document.getElementById('stat-manuscript');
    btnClearEditor = document.getElementById('btn-clear-editor');
    btnCopyEditor = document.getElementById('btn-copy-editor');
    btnSaveDocument = document.getElementById('btn-save-document');
    btnOpenStorage = document.getElementById('btn-open-storage');
    btnNewDocument = document.getElementById('btn-new-document');
    savedCountBadge = document.getElementById('saved-count-badge');
    storageModal = document.getElementById('storage-modal');
    btnCloseStorage = document.getElementById('btn-close-storage');
    storageSearchInput = document.getElementById('storage-search-input');
    storageItemsList = document.getElementById('storage-items-list');
    viewModal = document.getElementById('view-modal');
    btnCloseView = document.getElementById('btn-close-view');
    viewModalTitle = document.getElementById('view-modal-title');
    viewModalDate = document.getElementById('view-modal-date');
    viewModalStats = document.getElementById('view-modal-stats');
    viewModalContent = document.getElementById('view-modal-content');
    btnExportTxt = document.getElementById('btn-export-txt');
    btnLoadIntoEditor = document.getElementById('btn-load-into-editor');
    btnToggleAdvice = document.getElementById('btn-toggle-advice');
    advicePanel = document.getElementById('advice-panel');
    btnCloseAdvice = document.getElementById('btn-close-advice');
    adviceStatusTag = document.getElementById('advice-status-tag');
    adviceStatusMessage = document.getElementById('advice-status-message');
    adviceCardsContainer = document.getElementById('advice-cards-container');
    btnRefreshAdvice = document.getElementById('btn-refresh-advice');
    editorLayoutWrapper = document.getElementById('editor-layout-wrapper');
    toastNotification = document.getElementById('toast-notification');
    toastMessage = document.getElementById('toast-message');
}

function initEventListeners() {
    btnGeneratePrompt.addEventListener('click', generatePrompt);
    btnRefreshPrompt.addEventListener('click', generatePrompt);
    btnContinuePrompt.addEventListener('click', addContinuationSentence);
    btnApplyToEditor.addEventListener('click', applyPromptToEditor);
    if (btnToggleAdvice) btnToggleAdvice.addEventListener('click', toggleAdvicePanel);
    if (btnCloseAdvice) btnCloseAdvice.addEventListener('click', closeAdvicePanel);
    if (btnRefreshAdvice) btnRefreshAdvice.addEventListener('click', renderAdviceCards);
    editorTextarea.addEventListener('input', () => {
        updateStats(); triggerAutoSaveDraft();
        if (isAdvicePanelOpen) { updateAdviceStatusMessage(); renderAdviceCards(); }
    });
    documentTitle.addEventListener('input', triggerAutoSaveDraft);
    btnClearEditor.addEventListener('click', clearEditor);
    btnCopyEditor.addEventListener('click', copyEditorContent);
    btnSaveDocument.addEventListener('click', saveDocument);
    btnOpenStorage.addEventListener('click', openStorageModal);
    btnNewDocument.addEventListener('click', createNewDocument);
    btnCloseStorage.addEventListener('click', closeStorageModal);
    storageModal.addEventListener('click', e => { if (e.target === storageModal) closeStorageModal(); });
    btnCloseView.addEventListener('click', closeViewModal);
    viewModal.addEventListener('click', e => { if (e.target === viewModal) closeViewModal(); });
    storageSearchInput.addEventListener('input', e => renderStorageItems(e.target.value.trim()));
    btnExportTxt.addEventListener('click', exportCurrentViewingAsTxt);
    btnLoadIntoEditor.addEventListener('click', loadCurrentViewingIntoEditor);
}

function initCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');
            if (currentCategory === 'all') { renderInitialPromptGuide(); } else { generatePrompt(); }
        });
    });
}

function renderInitialPromptGuide() {
    currentPrompt = null;
    currentContinuationIndex = 0;
    continueStepBadge.style.display = 'none';
    promptDisplayArea.innerHTML = `
        <p class="prompt-placeholder">
            아래 <strong>[첫 문장 뽑기]</strong> 버튼을 눌러 글의 첫 문장을 찾아보세요.<br>
            글쓰기가 어려울 땐 <strong>[+] 버튼</strong>으로 자연스럽게 이어지는 다음 문장도 추가할 수 있어요.
        </p>`;
}

function generatePrompt() {
    const prompt = getNextPrompt(currentCategory);
    if (!prompt) return;
    currentPrompt = prompt;
    currentContinuationIndex = 0;
    renderPromptDisplay();
}

function renderPromptDisplay() {
    if (!currentPrompt) return;
    let html = `<div class="prompt-category-tag">${currentPrompt.category}</div>
                <div class="prompt-text-main">"${escapeHtml(currentPrompt.start)}"</div>`;
    for (let i = 0; i < currentContinuationIndex; i++) {
        if (currentPrompt.continuations[i])
            html += `<div class="prompt-text-continuation">+ ${escapeHtml(currentPrompt.continuations[i])}</div>`;
    }
    promptDisplayArea.innerHTML = html;
    continueStepBadge.style.display = currentContinuationIndex > 0 ? 'inline-block' : 'none';
    if (currentContinuationIndex > 0) continueStepBadge.textContent = `+${currentContinuationIndex}`;
}

function addContinuationSentence() {
    if (!currentPrompt) { generatePrompt(); return; }
    if (currentContinuationIndex < currentPrompt.continuations.length) {
        currentContinuationIndex++;
        renderPromptDisplay();
        showToast(`다음 문장 가이드가 추가되었습니다 (+${currentContinuationIndex})`);
    } else {
        showToast('준비된 가이드 문장을 모두 확인하셨습니다. 자유롭게 이어 써 보세요!');
    }
}

function applyPromptToEditor() {
    if (!currentPrompt) { showToast('먼저 [첫 문장 뽑기] 버튼을 눌러 문장을 추천받으세요!'); return; }
    let text = currentPrompt.start;
    for (let i = 0; i < currentContinuationIndex; i++)
        if (currentPrompt.continuations[i]) text += ' ' + currentPrompt.continuations[i];
    const cur = editorTextarea.value;
    editorTextarea.value = cur.trim().length > 0 ? cur.trim() + '\n\n' + text + ' ' : text + ' ';
    editorTextarea.focus(); updateStats(); triggerAutoSaveDraft();
    showToast('추천 문장이 에디터에 적용되었습니다!');
}

function toggleAdvicePanel() { isAdvicePanelOpen ? closeAdvicePanel() : openAdvicePanel(); }
function openAdvicePanel() {
    isAdvicePanelOpen = true;
    editorLayoutWrapper.classList.add('has-advice');
    btnToggleAdvice.classList.add('active');
    updateAdviceStatusMessage(); renderAdviceCards();
    showToast('글쓰기 방향 조언 패널이 열렸습니다.');
}
function closeAdvicePanel() {
    isAdvicePanelOpen = false;
    editorLayoutWrapper.classList.remove('has-advice');
    btnToggleAdvice.classList.remove('active');
}

function updateAdviceStatusMessage() {
    const len = editorTextarea.value.length;
    if (len === 0) { adviceStatusTag.textContent = '시작 단계'; adviceStatusMessage.textContent = '아직 글을 작성하기 전입니다! 추천 문장을 적용하거나 첫 생각을 적어보세요.'; }
    else if (len < 120) { adviceStatusTag.textContent = '도입 단계'; adviceStatusMessage.textContent = '글의 첫 물꼬를 트셨군요! 장면의 풍경이나 그때의 내면 감정을 구체적으로 이어가 보세요.'; }
    else if (len < 350) { adviceStatusTag.textContent = '전개 단계'; adviceStatusMessage.textContent = '이야기가 차곡차곡 쌓이고 있습니다! 인물이나 주변 소리, 냄새 같은 오감의 결을 하나 더 추가해 보세요.'; }
    else { adviceStatusTag.textContent = '심화 & 마무리 단계'; adviceStatusMessage.textContent = '상당한 분량의 글이 완성되어 가네요! 이 생각이 전해주는 조용한 깨달음이나 내 자신에게 하고 싶은 말로 정돈해 보세요.'; }
}

function renderAdviceCards() {
    adviceCardsContainer.innerHTML = '';
    const userText = editorTextarea.value.trim();
    let matchedCards = [];
    if (userText.length > 0) {
        const sentences = userText.split(/(?<=[.!?\n])\s+/).filter(s => s.trim().length > 3);
        ADVICE_PATTERNS.forEach(pattern => {
            if (pattern.keywords.some(kw => userText.includes(kw))) {
                let snippet = sentences.find(s => pattern.keywords.some(kw => s.includes(kw))) || sentences[sentences.length - 1] || userText.substring(0, 30);
                if (snippet.length > 35) snippet = snippet.substring(0, 32) + '...';
                const adv = pattern.getAdvice(snippet);
                matchedCards.push({ category: pattern.category, question: adv.question, hint: adv.hint });
            }
        });
    }
    if (matchedCards.length < 3) {
        const fill = [...DEFAULT_ADVICES].sort(() => 0.5 - Math.random()).slice(0, 3 - matchedCards.length);
        matchedCards = matchedCards.concat(fill);
    }
    matchedCards.slice(0, 3).forEach(adv => {
        const card = document.createElement('div');
        card.className = 'advice-card';
        card.innerHTML = `
            <div class="advice-card-header">
                <span class="advice-card-category">${escapeHtml(adv.category)}</span>
                <button type="button" class="btn-insert-advice" title="에디터에 삽입">
                    <i data-lucide="plus" style="width:12px;height:12px;"></i> 삽입
                </button>
            </div>
            <div class="advice-card-question">${escapeHtml(adv.question)}</div>
            <div class="advice-card-hint">${escapeHtml(adv.hint)}</div>`;
        card.querySelector('.btn-insert-advice').addEventListener('click', e => {
            e.stopPropagation(); insertAdviceQuestionToEditor(adv.question);
        });
        adviceCardsContainer.appendChild(card);
    });
    if (window.lucide) lucide.createIcons();
}

function insertAdviceQuestionToEditor(q) {
    const ins = `\n\n[글쓰기 질문 💡: ${q}]\n`;
    editorTextarea.value = editorTextarea.value.trim().length > 0 ? editorTextarea.value.trim() + ins : ins;
    editorTextarea.focus(); updateStats(); triggerAutoSaveDraft();
    showToast('방향 조언 질문이 에디터에 삽입되었습니다.');
}

function updateStats() {
    const t = editorTextarea.value;
    statLengthWithSpaces.textContent = `${t.length.toLocaleString()}자`;
    statLengthNoSpaces.textContent = `${t.replace(/\s/g, '').length.toLocaleString()}자`;
    statWords.textContent = `${(t.trim() ? t.trim().split(/\s+/).length : 0).toLocaleString()}개`;
    statManuscript.textContent = `${(t.length / 200).toFixed(1)}장`;
}

let autoSaveTimer = null;
function triggerAutoSaveDraft() {
    draftStatusIndicator.classList.add('active');
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        localStorage.setItem('geulmajoong_draft', JSON.stringify({ title: documentTitle.value, content: editorTextarea.value, updatedAt: new Date().toISOString() }));
    }, 500);
}

function loadDraftFromLocalStorage() {
    const s = localStorage.getItem('geulmajoong_draft');
    if (!s) return;
    try {
        const d = JSON.parse(s);
        if (d.title) documentTitle.value = d.title;
        if (d.content) editorTextarea.value = d.content;
        if (d.title || d.content) draftStatusIndicator.classList.add('active');
    } catch (e) { console.error(e); }
}

function clearEditor() {
    if (!editorTextarea.value && !documentTitle.value) return;
    if (confirm('작성 중인 내용을 모두 지우시겠습니까?')) {
        documentTitle.value = ''; editorTextarea.value = ''; updateStats();
        localStorage.removeItem('geulmajoong_draft'); draftStatusIndicator.classList.remove('active');
        showToast('에디터가 초기화되었습니다.');
    }
}

function copyEditorContent() {
    if (!editorTextarea.value.trim()) { showToast('복사할 내용이 없습니다.'); return; }
    const t = documentTitle.value.trim();
    navigator.clipboard.writeText(t ? `${t}\n\n${editorTextarea.value}` : editorTextarea.value)
        .then(() => showToast('글 전체 내용이 클립보드에 복사되었습니다!'))
        .catch(() => showToast('복사에 실패했습니다.'));
}

function saveDocument() {
    const title = documentTitle.value.trim() || '제목 없는 글';
    const content = editorTextarea.value;
    if (!content.trim()) { showToast('저장할 내용을 에디터에 작성해 주세요!'); editorTextarea.focus(); return; }
    const now = new Date();
    const dateStr = `${now.getFullYear()}. ${(now.getMonth()+1).toString().padStart(2,'0')}. ${now.getDate().toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
    const docs = getSavedDocuments();
    docs.unshift({ id: Date.now().toString(), title, content, date: dateStr, createdAt: now.toISOString(), charCount: content.length, manuscriptCount: (content.length / 200).toFixed(1) });
    localStorage.setItem('geulmajoong_documents', JSON.stringify(docs));
    updateSavedCountBadge(); showToast(`"${title}" 글이 내 보관함에 저장되었습니다!`);
}

function createNewDocument() {
    if (editorTextarea.value.trim() && !confirm('현재 작성 중인 글이 있습니다. 저장하지 않고 새로 쓰시겠습니까?')) return;
    documentTitle.value = ''; editorTextarea.value = '';
    localStorage.removeItem('geulmajoong_draft'); draftStatusIndicator.classList.remove('active');
    updateStats(); showToast('새 글 작성을 시작합니다.'); documentTitle.focus();
}

function getSavedDocuments() {
    try { return JSON.parse(localStorage.getItem('geulmajoong_documents') || '[]'); } catch { return []; }
}
function updateSavedCountBadge() { savedCountBadge.textContent = getSavedDocuments().length; }
function openStorageModal() { renderStorageItems(); storageModal.classList.add('active'); storageSearchInput.value = ''; }
function closeStorageModal() { storageModal.classList.remove('active'); }

function renderStorageItems(q = '') {
    let docs = getSavedDocuments();
    if (q) { const lq = q.toLowerCase(); docs = docs.filter(d => d.title.toLowerCase().includes(lq) || d.content.toLowerCase().includes(lq)); }
    storageItemsList.innerHTML = docs.length === 0
        ? `<p style="text-align:center;color:var(--text-muted);padding:40px 0;">${q ? '검색 결과에 맞는 저장된 글이 없습니다.' : '아직 저장된 글이 없습니다. 새로운 글을 작성해 보세요!'}</p>`
        : '';
    docs.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'storage-item-card';
        card.innerHTML = `
            <div class="storage-item-header">
                <span class="storage-item-title">${escapeHtml(doc.title)}</span>
                <span class="storage-item-date">${doc.date}</span>
            </div>
            <p class="storage-item-snippet">${escapeHtml(doc.content)}</p>
            <div class="storage-item-footer">
                <span class="storage-item-stats">공백 포함 ${doc.charCount.toLocaleString()}자 | 원고지 ${doc.manuscriptCount}장</span>
                <div class="storage-item-actions">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="event.stopPropagation();openViewModal('${doc.id}')">
                        <i data-lucide="eye" style="width:14px;height:14px;"></i> 읽기
                    </button>
                    <button type="button" class="btn-icon-danger" onclick="event.stopPropagation();deleteDocument('${doc.id}')" title="삭제">
                        <i data-lucide="trash-2" style="width:14px;height:14px;"></i>
                    </button>
                </div>
            </div>`;
        card.addEventListener('click', () => openViewModal(doc.id));
        storageItemsList.appendChild(card);
    });
    if (window.lucide) lucide.createIcons();
}

window.deleteDocument = function(id) {
    if (confirm('이 글을 보관함에서 완전 삭제하시겠습니까?')) {
        localStorage.setItem('geulmajoong_documents', JSON.stringify(getSavedDocuments().filter(d => d.id !== id)));
        updateSavedCountBadge(); renderStorageItems(storageSearchInput.value.trim()); showToast('글이 삭제되었습니다.');
    }
};

window.openViewModal = function(id) {
    const doc = getSavedDocuments().find(d => d.id === id);
    if (!doc) return;
    currentViewingDoc = doc;
    viewModalTitle.textContent = doc.title; viewModalDate.textContent = doc.date;
    viewModalStats.textContent = `공백 포함 ${doc.charCount.toLocaleString()}자 | 원고지 ${doc.manuscriptCount}장`;
    viewModalContent.textContent = doc.content; viewModal.classList.add('active');
};

function closeViewModal() { viewModal.classList.remove('active'); currentViewingDoc = null; }

function loadCurrentViewingIntoEditor() {
    if (!currentViewingDoc) return;
    if (editorTextarea.value.trim() && !confirm('현재 작성 중인 에디터의 내용이 덮어씌워집니다. 진행하시겠습니까?')) return;
    documentTitle.value = currentViewingDoc.title; editorTextarea.value = currentViewingDoc.content;
    updateStats(); triggerAutoSaveDraft(); closeViewModal(); closeStorageModal();
    showToast(`"${currentViewingDoc.title}" 글을 에디터로 불러왔습니다.`); editorTextarea.focus();
}

function exportCurrentViewingAsTxt() {
    if (!currentViewingDoc) return;
    const title = currentViewingDoc.title || '글마중_작성글';
    const blob = new Blob([`${title}\n작성일: ${currentViewingDoc.date}\n---\n\n${currentViewingDoc.content}`], { type: 'text/plain;charset=utf-8' });
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: `${title.replace(/[\\/:*?"<>|]/g, '_')}.txt` });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href); showToast('텍스트(.txt) 파일로 다운로드되었습니다!');
}

let toastTimer = null;
function showToast(msg) {
    toastMessage.textContent = msg; toastNotification.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastNotification.classList.remove('show'), 2800);
}

function escapeHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
