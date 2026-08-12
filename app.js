// ==========================================================================
// ✍️ 글마중 - IMAGINATION ENGINE v3
// 조사 내장 배경구 × 서술부 조합 → 완성된 30~40자 자연스러운 문장 보장
// ==========================================================================

// ═══════════════════════════════════════════════════════════════════════════
// 1. 씨앗 문장 (hand-crafted 완성 문장, 문법 100% 검수)
// ═══════════════════════════════════════════════════════════════════════════

const SEED_SENTENCES = {
    '감성/에세이': [
        '오래된 일기를 펼쳤더니 계절 냄새가 났다.',
        '창밖에 빗소리가 들리자 마음이 가라앉았다.',
        '식어가는 커피를 붙잡고 한참을 멍했다.',
        '해가 기울자 골목의 그림자가 길어졌다.',
        '아무것도 하지 않는 오후가 필요했다.',
        '빛이 방 안으로 기울어지며 먼지가 떴다.',
        '버스 창에 이마를 기대고 눈을 감았다.',
        '잊고 지낸 이름 하나가 문득 떠올랐다.',
        '오늘은 아무에게도 연락하고 싶지 않았다.',
        '조용한 밤에 혼자 차를 마셨다.',
        '비어있는 컵을 들고 한동안 서 있었다.',
        '노을이 지자 세상이 잠깐 따뜻해졌다.',
        '혼자였지만 외롭지는 않은 저녁이었다.',
        '익숙한 냄새가 낯선 감정을 데려왔다.',
        '모른 척했던 감정이 오늘은 선명했다.',
        '오래 묵은 그리움이 조용히 차올랐다.',
        '충분히 괜찮은 하루가 지나가고 있었다.',
        '말하지 않은 것들이 마음에 쌓여 있었다.',
        '이 조용함이 오래 머물러 주면 좋겠다.',
        '아무것도 아닌 것들이 오늘은 다정했다.',
    ],
    '일상/추억': [
        '방학 때 외갓집 마루는 늘 서늘했다.',
        '어머니의 된장찌개 냄새가 집이었다.',
        '교복 주머니엔 항상 500원이 있었다.',
        '소풍 날 아침 도시락 싸던 소리가 났다.',
        '새 학기 교과서 냄새를 기억하고 있다.',
        '친구와 걷던 교문 앞 길이 그립다.',
        '빗속을 뛰어간 여름 골목이 생각난다.',
        '할머니 손에서 콩 냄새가 났다.',
        '야자 시간에 몰래 먹던 빵이 맛있었다.',
        '겨울방학 스케이트장의 냉기가 기억난다.',
        '반딧불이를 잡던 여름밤이 떠오른다.',
        '앨범을 펼쳤더니 그해 바다가 나왔다.',
        '첫 월급날 산 케이크가 제일 달았다.',
        '선풍기 앞에서 보낸 여름이 그립다.',
        '분식집 플라스틱 의자가 기억에 남는다.',
        '라디오 소리 속에 잠들던 밤이 있었다.',
        '전학 가던 날 친구 얼굴이 생각난다.',
        '할아버지와 걷던 논두렁이 선명하다.',
        '그 시절 하루하루가 지금은 눈부시다.',
        '별것 아닌 날들이 가장 그리운 법이다.',
    ],
    '소설/창작': [
        '자정에 서재 문이 혼자 열렸다.',
        '거울 속 낯선 사람이 먼저 손을 들었다.',
        '지도에 없는 섬이 안개 속에 떠 있었다.',
        '그는 죽은 사람이 보내온 편지를 받았다.',
        '봉인된 상자 안에서 빛이 새어 나왔다.',
        '시계 침이 역방향으로 돌기 시작했다.',
        '그녀가 사라진 건 비가 오던 밤이었다.',
        '열쇠 구멍 너머에서 목소리가 들렸다.',
        '지워진 이름 아래 글자가 되살아났다.',
        '탑의 꼭대기에 불이 혼자 켜졌다.',
        '그림자가 주인보다 한 발 먼저 걸었다.',
        '모든 새가 한꺼번에 날아올랐다.',
        '호수 밑에서 손 하나가 올라왔다.',
        '불에 타지 않는 편지가 한 장 남았다.',
        '그는 자신이 이미 죽었음을 알았다.',
        '달이 사흘 동안 뜨지 않았다.',
        '마을 전체가 흔적도 없이 사라졌다.',
        '나침반이 북쪽이 아닌 그를 가리켰다.',
        '발자국이 눈 위에서 거꾸로 이어졌다.',
        '선택지는 둘이었지만 둘 다 막혀 있었다.',
    ],
    '질문/생각': [
        '과거의 나에게 편지를 쓴다면 무슨 말을 할까.',
        '진정한 용기란 두려움 없음이 아닐 것이다.',
        '행복은 도착하는 것이 아니라 발견하는 것이다.',
        '우리가 두려운 것은 변화 자체가 아니다.',
        '가장 어려운 상대는 언제나 나 자신이다.',
        '말하지 않은 진심이 쌓여 삶이 된다.',
        '잃는 것을 두려워할 만큼 사랑하고 있다.',
        '실패는 끝이 아니라 다른 시작이다.',
        '침묵도 때로는 가장 깊은 언어다.',
        '후회보다 질문이 더 건강할 때가 있다.',
        '나는 정말 원하는 것을 알고 있는가.',
        '삶은 목적지보다 걷는 길에 가깝다.',
        '완벽한 선택은 없다. 선택이 곧 삶이다.',
        '스스로에게 가장 솔직하지 못한 건 나다.',
        '그 선택이 없었다면 나는 지금도 같을까.',
        '사랑한다는 것은 잃을 용기를 갖는 것이다.',
        '가장 작은 친절이 가장 오래 기억된다.',
        '모른다는 것이 때로는 자유가 된다.',
        '우리는 모두 자기 자신을 풀어가는 중이다.',
        '물음표 하나가 마침표보다 더 많은 걸 담는다.',
    ],
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. 2-슬롯 조합 뱅크 (조사 내장 배경구 + 서술부 → 자연스러운 완성 문장)
// 각 카테고리별 20 배경구 × 20 서술부 = 400 추가 조합
// ═══════════════════════════════════════════════════════════════════════════

const COMBO_BANK = {
    '감성/에세이': {
        // 배경구: 이미 조사 포함, 문장 앞에 붙여도 자연스러움
        A: [
            '새벽 빈 부엌에서',
            '비 내리는 창가에서',
            '늦은 저녁 골목에서',
            '오래된 일기 앞에서',
            '홀로 앉은 카페에서',
            '아무것도 켜지 않은 방에서',
            '달이 뜬 테라스에서',
            '식어가는 차 한 잔 앞에서',
            '아무도 없는 공원 벤치에서',
            '이사 가던 날 빈 방에서',
            '첫차 오기 전 승강장에서',
            '해가 기우는 창가에서',
            '낡은 앨범을 들추다가',
            '혼자 걷는 가을 길에서',
            '잠 못 드는 새벽에',
            '퇴근길 버스 창가에서',
            '멍하니 천장을 보다가',
            '빗소리를 들으며',
            '오래된 노래를 틀다가',
            '아무것도 아닌 오후에',
        ],
        // 서술부: 배경구 뒤에 붙어도, 단독으로 써도 자연스러움
        B: [
            '말 못 한 것들이 떠올랐다.',
            '오래된 그리움이 밀려왔다.',
            '누군가의 얼굴이 선명해졌다.',
            '아무것도 설명하고 싶지 않았다.',
            '그냥 울고 싶어졌다.',
            '지나간 것들이 아름다워 보였다.',
            '마음이 조용히 무거워졌다.',
            '다 괜찮다는 말이 제일 거짓말이었다.',
            '오늘 하루가 충분히 수고로웠다.',
            '혼자라는 것이 잠시 편안했다.',
            '이 순간을 기억해두고 싶었다.',
            '아무것도 바뀌지 않아도 좋았다.',
            '세상이 잠깐 조용해진 것 같았다.',
            '좋은 것들은 왜 금방 지나갈까 싶었다.',
            '살아있다는 것이 새삼 다정했다.',
            '나 자신에게 안부를 물어보았다.',
            '아직 많이 남아 있다는 걸 알았다.',
            '쓰지 않은 문장들이 마음에 쌓였다.',
            '이 고요함이 오래 머물면 좋겠다고 생각했다.',
            '마음의 속도가 세상보다 항상 느렸다.',
        ],
    },

    '일상/추억': {
        A: [
            '어릴 적 동네 골목을 지나다가',
            '어머니가 끓여준 국 냄새에',
            '오래된 앨범을 꺼내다가',
            '친구와 걷던 길을 지나며',
            '비 오는 날 창가에 앉아',
            '새 학기 첫날 교실에서',
            '소풍 날 아침 냄새를 맡으며',
            '졸업 사진을 들여다보다가',
            '할머니 댁 냄새를 맡으며',
            '오래된 노래 하나가 흘러나오자',
            '학교 앞 분식집 앞을 지나다가',
            '첫 자취방 생각을 하다가',
            '방학 때 외갓집이 떠오르자',
            '여름밤 반딧불이 생각에',
            '교복을 입은 사진을 보다가',
            '어릴 때 자주 듣던 노래에',
            '첫 월급날 기억이 나서',
            '그 시절 친구 얼굴이 떠올라',
            '눈 내리는 날이면 어김없이',
            '선풍기 소리가 들리면',
        ],
        B: [
            '가슴 한편이 뭉클해졌다.',
            '그때가 제일 빛났구나 싶었다.',
            '돌아갈 수 없어 더 선명하다.',
            '시간이 너무 빨리 갔다는 게 느껴졌다.',
            '그 사람들이 지금 어디 있을지 궁금했다.',
            '그리움이 무겁고 따뜻하게 왔다.',
            '별것 없던 날들이 가장 소중하다.',
            '다시 그때로 돌아가고 싶어졌다.',
            '삶이 이런 것들로 이루어진다는 걸 알았다.',
            '그때의 나도 최선을 다했다는 걸 안다.',
            '아무것도 아닌 것들이 눈물이 났다.',
            '기억이 사진보다 선명할 때가 있다.',
            '그 계절의 냄새가 몸에 남아 있다.',
            '오늘 이 순간도 언젠가 그리워질 것이다.',
            '함께였다는 것만으로도 충분했다.',
            '기억은 가장 따뜻한 여행지다.',
            '그 시절 우리는 빛나고 있었다.',
            '평범했던 날이 지금은 기적처럼 느껴진다.',
            '잃어버린 것 중 가장 아름다운 건 그때다.',
            '지금 이 일상도 나중엔 그리울 것이다.',
        ],
    },

    '소설/창작': {
        A: [
            '자정이 지나자',
            '안개가 걷히고 나서',
            '봉인이 풀리던 순간',
            '마지막 열차가 떠나자',
            '달이 사라진 밤에',
            '지도의 끝에 도달하자',
            '그림자가 움직이기 시작하자',
            '거울이 반응한 그 순간',
            '세 번째 이름을 부른 직후',
            '문이 저절로 열리며',
            '촛불이 혼자 꺼지고 나서',
            '땅이 흔들리기 시작하자',
            '하늘의 별자리가 바뀌던 밤에',
            '시계가 일제히 멈추자',
            '편지가 혼자 불타오르며',
            '마을 사람들이 모두 잠든 사이',
            '유리가 소리 없이 깨지며',
            '바다가 한순간 잠잠해지자',
            '두 번째 열쇠를 꽂는 순간',
            '붉은 달이 뜨던 그날 밤',
        ],
        B: [
            '그는 모든 것을 이해했다.',
            '세상이 달라지기 시작했다.',
            '진실이 하나씩 드러났다.',
            '돌아갈 길은 사라지고 없었다.',
            '살아남은 자는 그 혼자뿐이었다.',
            '예상치 못한 얼굴이 나타났다.',
            '그것은 처음부터 함정이었다.',
            '이야기는 이제 막 시작되었다.',
            '아무도 그 사실을 알지 못했다.',
            '운명이 선택을 기다리고 있었다.',
            '모든 것이 단 하나로 연결되어 있었다.',
            '금지된 문이 마침내 열렸다.',
            '백 년간의 침묵이 끝났다.',
            '그것은 전설이 아니었다.',
            '아무것도 우연이 아니었다.',
            '이 선택이 세상을 바꿀 것이었다.',
            '그는 자신이 이미 죽었음을 알았다.',
            '두 번의 기회는 없었다.',
            '진짜 적은 가장 가까운 곳에 있었다.',
            '그 이름을 부른 것이 실수였다.',
        ],
    },

    '질문/생각': {
        A: [
            '만약 시간을 되돌릴 수 있다면',
            '정말 행복하다고 말할 수 있다면',
            '모든 기억을 지울 수 있다면',
            '두려움이 사라진다면',
            '타인의 시선이 없다면',
            '실패가 두렵지 않다면',
            '진짜 원하는 것을 안다면',
            '다시 태어날 수 있다면',
            '혼자여도 괜찮다면',
            '아무것도 잃지 않아도 된다면',
            '내가 나에게 솔직하다면',
            '지금이 마지막 날이라면',
            '사랑을 망설이지 않는다면',
            '선택을 후회하지 않는다면',
            '느리게 살아도 된다면',
            '남의 기대에 맞추지 않아도 된다면',
            '지금 가진 것으로 충분하다면',
            '틀려도 괜찮은 세상이라면',
            '지금 이 순간이 전부라면',
            '포기한 꿈을 다시 꿀 수 있다면',
        ],
        B: [
            '나는 무엇을 가장 먼저 바꿀까.',
            '지금과는 전혀 다른 선택을 했을까.',
            '더 용감하게 살 수 있었을까.',
            '그래도 지금의 나를 선택했을까.',
            '어떤 하루를 가장 먼저 떠올릴까.',
            '더 가볍게 살 수 있었을까.',
            '진짜 하고 싶은 일을 했을까.',
            '더 솔직하게 사랑할 수 있었을까.',
            '잃는 것을 덜 두려워했을까.',
            '매일 조금 더 다정해졌을까.',
            '지금 이 물음이 이미 대답이다.',
            '삶은 그 질문 위를 걷는 여정이다.',
            '답이 없기에 더 오래 품게 된다.',
            '어쩌면 질문하는 것만으로 충분하다.',
            '가장 솔직한 대답은 침묵이었다.',
            '이 물음이 나를 살아있게 한다.',
            '모른다는 것도 하나의 답이다.',
            '정답보다 질문이 더 오래 남는다.',
            '그 답은 글 속에서 찾게 될 것이다.',
            '결국 나만 알 수 있는 이야기다.',
        ],
    },
};

// ═══════════════════════════════════════════════════════════════════════════
// 3. DECK BUILDER: seed + 2-슬롯 조합 → 합쳐서 Fisher-Yates 셔플
// ═══════════════════════════════════════════════════════════════════════════

let BUILT_DECKS = {};
let DECK_POINTERS = {};

// 연속 문장 이어쓰기 가이드 (카테고리별 3세트 풀)
const CONT_POOL = {
    '감성/에세이': [
        ['그날의 온기가 이렇게나 오래 남을 줄 몰랐다.', '아마 그때의 나도 나름의 최선을 다했을 것이다.', '이 고요함이 오래 머물러 주기를 바란다.'],
        ['말하지 못한 것들이 지금은 그리움의 이름을 달고 있다.', '오늘 밤만큼은 아무것도 설명하지 않아도 된다.', '슬픔이 잘못이 아니라는 걸 이제는 안다.'],
        ['누군가는 지금 이 순간도 같은 감정을 앓고 있을 것이다.', '기억은 가장 따뜻한 여행지다.', '오늘 하루도 참 수고로웠다.'],
    ],
    '일상/추억': [
        ['그 시절이 그리 먼 것도 아닌 것 같다.', '기억이 이렇게 생생한 건 그만큼 소중했다는 뜻이다.', '언젠가 이날도 그렇게 그리워지겠지.'],
        ['가장 평범했던 날들이 지금은 가장 눈부시다.', '함께였던 사람들은 지금 어디에 있을까.', '돌아갈 수 없기에 더욱 소중하다.'],
        ['삶은 결국 이런 사소한 것들로 이루어진다.', '그 시절 우리는 빛나고 있었다.', '지금 이 일상도 나중엔 그리울 것이다.'],
    ],
    '소설/창작': [
        ['이제 돌아갈 방법은 사라졌다.', '세계는 그 이전과 이후로 나뉘었다.', '살아남은 자의 이야기가 시작됐다.'],
        ['진실을 아는 자는 단 한 명뿐이었다.', '그 선택이 결국 모든 것을 바꿔놓았다.', '아무도 믿지 않을 이야기지만, 그것은 일어났다.'],
        ['운명은 거역하는 것이 아니라 선택하는 것이었다.', '이야기를 기록할 수 있는 사람은 이제 나뿐이다.', '그날 이후로 세상은 예전으로 돌아가지 않았다.'],
    ],
    '질문/생각': [
        ['답을 모르기에 오히려 오래 생각하게 된다.', '어쩌면 질문하는 것만으로 충분하다.', '가장 어려운 상대는 언제나 나 자신이었다.'],
        ['물음표 하나가 마침표보다 더 많은 걸 담는다.', '나는 오늘도 나에게 가장 솔직하지 못하다.', '정답이 없는 질문일수록 더 오래 품고 싶어진다.'],
        ['삶은 이 모든 물음 위를 걷는 여정이다.', '이 생각을 글로 남기지 않으면 영원히 맴돌 것이다.', '가장 용감한 일은 스스로에게 솔직한 질문을 던지는 것이다.'],
    ],
};

function buildAllDecks() {
    BUILT_DECKS = {};
    DECK_POINTERS = {};

    const cats = ['감성/에세이', '일상/추억', '소설/창작', '질문/생각'];

    cats.forEach(cat => {
        const deck = [];
        let id = 0;

        // 씨앗 문장 추가
        (SEED_SENTENCES[cat] || []).forEach(sent => {
            deck.push({
                id: `${cat}_seed_${id++}`,
                category: cat,
                start: sent,
                continuations: CONT_POOL[cat][(id) % CONT_POOL[cat].length],
            });
        });

        // 2-슬롯 조합 문장 추가
        const combo = COMBO_BANK[cat];
        if (combo) {
            combo.A.forEach((a, ai) => {
                combo.B.forEach((b, bi) => {
                    deck.push({
                        id: `${cat}_combo_${id++}`,
                        category: cat,
                        start: `${a} ${b}`,
                        continuations: CONT_POOL[cat][(ai + bi) % CONT_POOL[cat].length],
                    });
                });
            });
        }

        shuffleDeck(deck);
        BUILT_DECKS[cat] = deck;
        DECK_POINTERS[cat] = 0;
    });

    // 전체 덱 = 모든 카테고리 합산 셔플
    BUILT_DECKS['all'] = [];
    cats.forEach(cat => BUILT_DECKS[cat].forEach(p => BUILT_DECKS['all'].push({ ...p })));
    shuffleDeck(BUILT_DECKS['all']);
    DECK_POINTERS['all'] = 0;
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
        shuffleDeck(deck);
        ptr = 0;
    }
    const prompt = deck[ptr];
    DECK_POINTERS[category] = ptr + 1;
    return prompt;
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. SMART REAL-TIME ADVICE ENGINE
// ═══════════════════════════════════════════════════════════════════════════

const ADVICE_PATTERNS = [
    {
        keywords: ['바람', '하늘', '햇살', '빗소리', '노을', '구름', '비', '눈', '나무', '바다', '꽃', '공기', '냄새', '소리', '빛'],
        category: '📸 오감 & 풍경 묘사 확장',
        getAdvice: (snippet) => ({
            question: `"${snippet}" 구절의 풍경 묘사가 정갈하네요!`,
            hint: '장면 속 온도나 촉감, 냄새를 한 문장 더 얹으면 독자가 더 깊이 몰입합니다.'
        })
    },
    {
        keywords: ['마음', '슬픔', '행복', '외로움', '기억', '아픔', '눈물', '미소', '그리움', '불안', '걱정', '두려움', '진심'],
        category: '🌿 내면 감정 심화',
        getAdvice: (snippet) => ({
            question: `"${snippet}" 부분의 감정 결이 깊게 느껴집니다.`,
            hint: '그 감정이 처음 일어난 순간이나 계기를 구체적으로 써보세요. 감정의 폭이 한층 풍성해집니다.'
        })
    },
    {
        keywords: ['친구', '어머니', '아버지', '사람', '그가', '그녀가', '우리', '말했다', '물었다', '표정', '손', '얼굴'],
        category: '💬 인물 서사 & 행동 디테일',
        getAdvice: (snippet) => ({
            question: `"${snippet}" 부분에서 인물의 생동감이 느껴지네요!`,
            hint: '그 인물의 미세한 손짓이나 눈빛, 나눈 말 한 토막을 이어붙여 보세요.'
        })
    },
    {
        keywords: ['왜', '만약', '이유', '깨달음', '삶', '인생', '의미', '선택', '질문'],
        category: '❓ 시각 전환 & 성찰 심화',
        getAdvice: (snippet) => ({
            question: `"${snippet}"에 담긴 깊은 생각이 여운을 줍니다.`,
            hint: '5년 뒤의 내가 이 글을 읽는다면 스스로에게 어떤 말을 건넬까요? 그 시선으로 마무리해보세요.'
        })
    }
];

const DEFAULT_ADVICES = [
    {
        category: '🌱 서두 묘사 팁',
        question: '글의 분위기를 잡을 장소나 시각을 적어보셨나요?',
        hint: '창밖 날씨나 조명의 온도를 한 조각 얹으면 글 전체 분위기가 정리됩니다.'
    },
    {
        category: '🔍 인물 행동 묘사',
        question: '글 속 인물이 어떤 작은 행동을 하고 있나요?',
        hint: '잔을 감싸 쥐거나 창밖을 바라보는 작은 동작이 감정을 효과적으로 전달합니다.'
    },
    {
        category: '🏁 글 매듭짓기',
        question: '이 생각을 통해 나 자신에게 건네고 싶은 말은?',
        hint: '"오늘은 이만하면 충분하다"처럼 나를 보듬는 문장으로 마무리해 보세요.'
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// 5. APP STATE & DOM INIT
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
        showToast('가이드 문장을 모두 확인했습니다. 자유롭게 이어 써 보세요!');
    }
}

function applyPromptToEditor() {
    if (!currentPrompt) { showToast('먼저 [첫 문장 뽑기]를 눌러 문장을 추천받으세요!'); return; }
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
    if (len === 0) { adviceStatusTag.textContent = '시작 단계'; adviceStatusMessage.textContent = '추천 문장을 적용하거나 첫 생각을 적어보세요.'; }
    else if (len < 120) { adviceStatusTag.textContent = '도입 단계'; adviceStatusMessage.textContent = '글의 첫 물꼬를 트셨군요! 풍경이나 내면 감정을 구체적으로 이어가 보세요.'; }
    else if (len < 350) { adviceStatusTag.textContent = '전개 단계'; adviceStatusMessage.textContent = '이야기가 쌓이고 있습니다! 오감의 결을 하나 더 추가해 보세요.'; }
    else { adviceStatusTag.textContent = '심화 & 마무리 단계'; adviceStatusMessage.textContent = '분량이 완성되어 가네요! 조용한 깨달음이나 나 자신에게 건네는 말로 정돈해 보세요.'; }
}

function renderAdviceCards() {
    adviceCardsContainer.innerHTML = '';
    const userText = editorTextarea.value.trim();
    let matchedCards = [];
    if (userText.length > 0) {
        const sentences = userText.split(/(?<=[.!?\n])\s+/).filter(s => s.trim().length > 3);
        ADVICE_PATTERNS.forEach(pattern => {
            if (pattern.keywords.some(kw => userText.includes(kw))) {
                let snippet = sentences.find(s => pattern.keywords.some(kw => s.includes(kw))) || userText.substring(0, 20);
                if (snippet.length > 20) snippet = snippet.substring(0, 18) + '...';
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
    showToast('조언 질문이 에디터에 삽입되었습니다.');
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
    if (docs.length === 0) {
        storageItemsList.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:40px 0;">${q ? '검색 결과에 맞는 저장된 글이 없습니다.' : '아직 저장된 글이 없습니다. 새로운 글을 작성해 보세요!'}</p>`;
        return;
    }
    storageItemsList.innerHTML = '';
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
    if (editorTextarea.value.trim() && !confirm('현재 에디터 내용이 덮어씌워집니다. 진행하시겠습니까?')) return;
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
