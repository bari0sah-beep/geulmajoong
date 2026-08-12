// ==========================================================================
// ✍️ 글마중 (Writing Companion) - CORE APPLICATION LOGIC
// ==========================================================================

// 1. EXTENDED PROMPT DATABASE
const PROMPT_DATABASE = [
    // --- 감성 / 에세이 ---
    {
        id: 1,
        category: '감성/에세이',
        start: '오래된 노트를 펼쳤을 때 제일 먼저 풍긴 것은 지나간 계절의 냄새였다.',
        continuations: [
            '마치 잊고 있던 누군가의 편지가 툭 떨어질 것만 같은 아련함이 몰려왔다.',
            '연필로 꾹꾹 눌러 쓴 서툰 문장들 속에서, 그 시절의 내가 조용히 나를 바라보고 있었다.',
            '그때는 미처 알지 못했던 서툼마저도 지금 보니 참 따뜻하게 느껴진다.'
        ]
    },
    {
        id: 2,
        category: '감성/에세이',
        start: '마음이 조용히 가라앉는 저녁이면, 나는 나 자신에게 조용히 안부를 묻는다.',
        continuations: [
            '오늘 하루도 참 고생 많았다고, 굳이 세상의 속도에 맞추려 애쓰지 않아도 괜찮다고.',
            '따뜻한 차 한 잔을 비워낼 즈음이면 세상의 소음도 조금씩 멀어져 간다.',
            '이 조용한 서정의 시간이야말로 나를 온전히 회복시키는 유일한 쉼터다.'
        ]
    },
    {
        id: 3,
        category: '감성/에세이',
        start: '모든 비밀은 가장 은밀한 서랍이 아닌, 가장 평범한 일상의 표정에 숨겨져 있다.',
        continuations: [
            '스치듯 지어 보이는 미소 뒤에 숨겨진 진심을 알아채는 사람은 그리 많지 않다.',
            '우리는 저마다 말하지 못한 이야기들을 가슴 깊은 곳에 묻어둔 채 살아간다.',
            '어쩌면 글을 쓴다는 것은 그 말 못한 다정함들을 꺼내어 밝혀주는 작업일지도 모른다.'
        ]
    },
    {
        id: 4,
        category: '감성/에세이',
        start: '어떤 이별은 소리 없이 찾아와 가슴 한구석에 조용한 침묵의 빈자리를 남긴다.',
        continuations: [
            '커피잔 위에 맴도는 온기처럼, 다정했던 기억들은 여전히 스러지지 않은 채 잔향으로 남았다.',
            '슬픔이란 단지 아픔이 아니라, 한때 간직했던 깊은 애정의 증거였음을 이제는 안다.',
            '비워진 자리에는 언젠가 더 따스하고 견고한 새로운 계절이 채워질 것이다.'
        ]
    },
    {
        id: 5,
        category: '감성/에세이',
        start: '해가 기우는 골목길을 걷다 보면, 노을빛이 세상의 모든 모서리를 동글동글하게 마감해 준다.',
        continuations: [
            '낮 동안 뾰족하게 날 서 있던 마음의 앙금도 그 따스한 붉은빛 속으로 천천히 녹아내린다.',
            '지나가는 사람들의 지친 어깨 위로 쏟아지는 주황빛 햇살이 왠지 모를 위로를 건네는 듯하다.',
            '어둠이 내리기 직전, 이 짧고도 찬란한 시간 속에서 나는 비로소 숨을 깊게 내쉬어 본다.'
        ]
    },
    {
        id: 6,
        category: '감성/에세이',
        start: '누군가에게 전하지 못한 문장들은 마음속 깊은 바다 밑바닥에 조약돌처럼 쌓여간다.',
        continuations: [
            '손끝에 닿을 듯 삼켰던 그 말들은 다듬어지지 않은 채 밤마다 조용히 파도 소리를 낸다.',
            '언젠가 용기를 내어 꺼내어 놓는다면 그 조약돌은 어떤 빛깔로 반짝이게 될까.',
            '진심이란 꼭 타인에게 닿지 않더라도, 나 자신을 위로하는 고용한 빛이 되어준다.'
        ]
    },
    {
        id: 7,
        category: '감성/에세이',
        start: '새벽 세 시의 침묵은 세상의 모든 소음이 멈추고 오직 내 숨소리만 남는 신비로운 시간이다.',
        continuations: [
            '낮 동안은 바빠서 보살피지 못했던 마음의 어두운 구석을 조용히 불 밝혀 보게 된다.',
            '창밖의 희미한 가로등 빛 아래로 잊고 있던 어릴 적 기억 하나가 사뿐히 얹힌다.',
            '어둠이 가장 깊은 이 순간이 어쩌면 내면의 빛이 가장 밝게 빛나는 때일지 모른다.'
        ]
    },
    {
        id: 8,
        category: '감성/에세이',
        start: '단단하다고 믿었던 마음도 문득 불어오는 작은 바람 하나에 흔들릴 때가 있다.',
        continuations: [
            '흔들린다는 것은 여전히 내 삶이 살아 숨 쉬고 가슴이 굳어있지 않다는 증거다.',
            '바람에 서걱거리는 나무처럼, 나 역시 흔들리며 더 깊은 뿌리를 내리는 중일 것이다.',
            '부러지지 않고 유연하게 흔들릴 수 있는 다정함을 나 자신에게 허락해 본다.'
        ]
    },
    {
        id: 9,
        category: '감성/에세이',
        start: '창가에 내려앉는 주황빛 노을을 바라보다 문득 내 마음의 온도도 저빛을 닮았으면 했다.',
        continuations: [
            '차가운 세상의 속도 속에서도 잃지 않아야 할 것은 타인과 나를 향한 다정한 미소다.',
            '지나가는 작은 인연마저도 헛되이 보내지 않으려는 마음이 삶을 깊게 가꾸어준다.',
            '오늘 하루도 다정함이라는 온기를 품은 채 조용히 저녁을 맞이한다.'
        ]
    },
    {
        id: 10,
        category: '감성/에세이',
        start: '낙엽이 뒹구는 거리를 거닐 때면, 지나간 계절들이 저마다의 목소리로 이야기를 건넨다.',
        continuations: [
            '치열하게 피어났던 여름의 열기도 이제는 차분한 고요 속으로 자리를 양보하고 있다.',
            '비워내야만 새로운 봄을 맞이할 수 있다는 자연의 이치가 가슴 깊이 와닿는 순간이다.',
            '나 역시 가슴속의 헛헛한 미련들을 하나둘 내려놓으며 걸음을 옮긴다.'
        ]
    },

    // --- 일상 / 추억 ---
    {
        id: 11,
        category: '일상/추억',
        start: '비가 오기 직전의 공기에는 특유의 무겁고 달콤한 흙내음이 섞여 있다.',
        continuations: [
            '창문을 조금 열어두자 서늘한 바람이 습기를 한껏 머금은 채 조용히 들어왔다.',
            '문득 어릴 적 우산도 없이 주택가 골목길을 마구 달렸던 여름날의 빗소리가 떠올랐다.',
            '그때 신발 속으로 찰랑이며 스며들던 빗물의 축축함마저도 참 싱그러운 기억이었다.'
        ]
    },
    {
        id: 12,
        category: '일상/추억',
        start: '오래된 동네 서점의 서가 사이를 거닐 때면 이상하게 시간이 천천히 흐르는 기분이 든다.',
        continuations: [
            '종이가 품고 있는 묵직한 시간이 수많은 사람들의 생각과 함께 차곡차곡 쌓여 있기 때문일까.',
            '우연히 펼쳐 든 책장 사이에서 발견한 이전 독자의 메모 하나가 작은 울림을 주었다.',
            '얼굴도 모르는 누군가와 같은 문장에서 멈춰 섰을 생각을 하니 미소가 머물렀다.'
        ]
    },
    {
        id: 13,
        category: '일상/추억',
        start: '주말 아침, 창문 틈 사이로 흘러들어오는 햇살과 고소한 빵 냄새로 눈을 떴다.',
        continuations: [
            '알람 소리에 떠밀리듯 일어나는 평일과 달리, 온전히 내 의지로 맞이하는 한가로운 아침이다.',
            '따뜻하게 데운 우유 한 잔을 곁들이며 창밖으로 부지런히 움직이는 거리의 풍경을 바라본다.',
            '이 작은 여유 하나만으로도 다가올 한 주를 견뎌낼 에너지가 온몸으로 충전되는 듯하다.'
        ]
    },
    {
        id: 14,
        category: '일상/추억',
        start: '낡은 앨범 속 먼지를 털어내자 기억 저편으로 사라졌던 그해 여름의 바다가 펼쳐졌다.',
        continuations: [
            '사진 속 어리고 해맑았던 우리들의 미소 위로 자갈밭을 치고 나가던 파도 소리가 귀에 맴오는 듯했다.',
            '시간은 쏜살같이 흘러 많은 것을 바꾸어 놓았지만, 그때의 풋풋했던 마음만은 여전히 쨍쨍하다.',
            '가끔은 돌아갈 수 없는 그 시절의 한 조각이 문득 그리워지는 날이 있다.'
        ]
    },
    {
        id: 15,
        category: '일상/추억',
        start: '퇴근길 버스 창문에 머리를 기대자 도시의 불빛들이 길게 궤적을 그리며 흘러갔다.',
        continuations: [
            '수많은 사람들이 저마다의 일상을 뒤로한 채 하루를 마무리하기 위해 집으로 향하고 있었다.',
            '고단했던 하루의 무게를 잠시 내려놓고 이어폰 너머 흘러나오는 노래에 마음을 맡겨본다.',
            '지친 하루의 끝에서 나를 반겨줄 따뜻한 불빛이 있는 곳으로 돌아가는 길이다.'
        ]
    },
    {
        id: 16,
        category: '일상/추억',
        start: '어머니의 오래된 뚝배기에서 부글부글 끓어오르던 된장찌개 냄새는 집이라는 단어의 다른 이름이었다.',
        continuations: [
            '학교가 끝나고 대문을 열 때면 뿜어져 나오던 그 온기 하나만으로 온 세상의 시름이 날아갔었다.',
            '이제는 멀어져 버린 그 식탁의 풍경이 문득 그리워지는 서늘한 저녁이다.',
            '음식 하나에 담긴 사랑의 깊이는 세월이 흘러도 절대로 가라앉지 않는 법이다.'
        ]
    },
    {
        id: 17,
        category: '일상/추억',
        start: '오랜만에 만난 친구의 얼굴에서 풋풋했던 학창 시절의 눈매를 발견하고 반갑게 웃었다.',
        continuations: [
            '각자의 삶을 살아가느라 바빴지만, 주고받는 몇 마디에 수년의 공백은 이내 사르르 녹아내렸다.',
            '그 시절 우리가 함께 나눴던 무모하고도 눈부신 꿈 이야기들이 다시금 피어올랐다.',
            '함께 늙어갈 수 있는 누군가가 곁에 존재한다는 것만으로도 인생은 참 다정하다.'
        ]
    },

    // --- 소설 / 창작 ---
    {
        id: 18,
        category: '소설/창작',
        start: '마지막 기차가 경적을 울리며 승강장을 떠날 때, 그는 주머니 속 열쇠를 꽉 쥐었다.',
        continuations: [
            '돌아갈 길은 이제 완전히 끊겼고, 앞에는 오직 낯선 도시의 차가운 불빛들만이 찰렁거렸다.',
            '가방에 든 것은 몇 권의 서류와 낡은 시계뿐이었지만, 그의 표정은 그 어느 때보다 의연했다.',
            '이제 이 낯선 땅에서 자신만의 새로운 이야기를 다시 써 내려갈 차례였다.'
        ]
    },
    {
        id: 19,
        category: '소설/창작',
        start: '자정이 되자 저택 중앙 홀의 대형 괘종시계가 열두 번의 둔탁한 종소리를 내뿜었다.',
        continuations: [
            '마지막 종소리가 묵직하게 잦아들자마자, 닫혀 있던 서재의 문이 끼익 소리를 내며 저절로 열렸다.',
            '문 너머 어둠 속에서 조용히 걸어 나온 형체는 뜻밖에도 오랫동안 행방불명되었던 그 사람이었다.',
            '그의 손에 쥐어진 작은 금속 상자에서는 희미하게 푸른빛이 새어 나오고 있었다.'
        ]
    },
    {
        id: 20,
        category: '소설/창작',
        start: '바닷가 벼랑 끝에 서 있는 오래된 등대는 단 한 번도 항해사들에게 이름을 알려준 적이 없었다.',
        continuations: [
            '하지만 거친 풍랑 속을 항해하는 사내들에게 그 빛은 생명과도 같은 유일한 이정표였다.',
            '등대지기 노인은 밤마다 거센 바람을 맞으며 렌즈의 먼지를 조용히 닦아내곤 했다.',
            '그 빛줄기 하나에 수많은 사람들의 귀환과 생존이 걸려 있음을 누구보다 잘 알고 있었기 때문이다.'
        ]
    },
    {
        id: 21,
        category: '소설/창작',
        start: '그 사건이 일어나기 전까지 우리 동네는 지도에서도 찾아보기 힘들 만큼 조용한 시골 마을이었다.',
        continuations: [
            '오래된 방앗간 뒤편의 고요했던 숲속에서 정체불명의 빛과 소리가 관측되기 시작한 것은 지난주였다.',
            '마을 사람들은 하나둘 동요하기 시작했고, 조용했던 일상에는 미세한 균열이 생기기 시작했다.',
            '그리고 마침내 그날 밤, 숲의 가장 깊은 곳에서 첫 번째 비밀의 문이 열렸다.'
        ]
    },
    {
        id: 22,
        category: '소설/창작',
        start: '벽에 걸린 초상화 속 여인의 눈동자가 미세하게 움직인 것을 감지한 것은 오직 나뿐이었다.',
        continuations: [
            '촛불이 흐릿하게 흔들리는 가운데, 그림 속 여인은 마치 무언가를 경고하려는 듯 붉은 입술을 벙긋거렸다.',
            '차갑고 불길한 한기가 거실 전체를 덮쳤고, 방안의 모든 시계들이 일제히 멈춰 섰다.',
            '나는 떨리는 손으로 촛대를 쥔 채 그림 앞으로 한 걸음 천천히 다가섰다.'
        ]
    },
    {
        id: 23,
        category: '소설/창작',
        start: '그 지도를 손에 넣기 위해 지나온 수천 킬로미터의 거친 여정이 머릿속을 스쳐 지나갔다.',
        continuations: [
            '지도 표면에 새겨진 고대 문자들은 월광 아래에서 신비로운 은빛으로 밝게 출렁였다.',
            '전설로만 전해지던 잃어버린 지하 도시의 입구가 비로소 내 발 밑에서 소리를 내며 열렸다.',
            '긴 숨을 내쉬며 나침반을 고쳐 쥔 채, 어둠 속을 향해 첫 걸음을 내딛었다.'
        ]
    },

    // --- 질문 / 생각 ---
    {
        id: 24,
        category: '질문/생각',
        start: '만약 과거의 나에게 딱 한 번의 편지를 보낼 수 있다면, 나는 어떤 말을 첫 문장으로 적을까?',
        continuations: [
            '지나온 길의 수많은 시행착오와 눈물을 미리 경고해 주고 싶을까, 아니면 다 괜찮을 거라고 안아줄까.',
            '어쩌면 용기를 잃고 방황하던 그날의 나에게 주저하지 말고 스스로를 믿으라 적을지도 모른다.',
            '결국 어떤 선택을 하든 그 모든 과정이 지금의 소중한 나를 만들어냈음을 비로소 깨닫는다.'
        ]
    },
    {
        id: 25,
        category: '질문/생각',
        start: '우리가 진정으로 두려워하는 것은 변화 그 자체가 아니라, 소중한 무언가를 잃는 것은 아닐까?',
        continuations: [
            '익숙함이라는 울타리 안은 안락하지만, 새로운 시작은 늘 가슴 뛰는 불확실성을 동반한다.',
            '손에 쥔 것을 내려놓아야만 새로운 가능성을 비로소 두 손 가득 담을 수 있다는 사실을 잊곤 한다.',
            '용기란 두려움이 없는 것이 아니라, 두려움에도 불구하고 한 걸음 내딛는 마음이다.'
        ]
    },
    {
        id: 26,
        category: '질문/생각',
        start: '진정한 행복이란 크고 거창한 성취보다, 아주 작고 사소한 일상의 순간들에 숨어 있는 게 아닐까?',
        continuations: [
            '갓 볶아낸 커피의 고소한 향기, 해 질 녘 바람에 흔들리는 나뭇잎 소리 같은 미세한 기쁨들 말이다.',
            '목표를 향해 쉼 없이 달리느라 바로 곁에 있던 소중한 온기들을 놓치고 살았던 것은 아닌지 돌아보게 된다.',
            '행복은 발견되는 것이 아니라, 지금 이 순간의 다정함을 깨닫는 마음의 시선에서 태어난다.'
        ]
    },
    {
        id: 27,
        category: '질문/생각',
        start: '타인의 시선과 기대라는 무거운 겉옷을 벗어던지고 나면, 과연 진짜 나만의 모습은 무엇일까?',
        continuations: [
            '세상이 요구하는 역할과 기준에 맞추느라 오랜 시간 스스로의 진짜 목소리를 잊고 살았는지도 모른다.',
            '남들에게 증명해 보이기 위한 삶이 아닌, 나 스스로가 만족하고 솔직해질 수 있는 삶을 꿈꿔본다.',
            '오늘 밤은 다른 누구도 아닌, 오직 나 자신만을 위한 조용한 문장을 하나 적어본다.'
        ]
    },
    {
        id: 28,
        category: '질문/생각',
        start: '실패란 완벽한 끝이 아니라, 더 지혜로운 방식으로 다시 시작할 수 있는 기회가 아닐까?',
        continuations: [
            '한번 좌절했다고 해서 내가 걸어온 온 여정이 무가치해지는 것은 결코 아니다.',
            '넘어졌던 그 자리에서 찾아낸 작은 깨달음 하나가 다가올 길을 밝혀주는 등불이 된다.',
            '실패의 아픔 속에서도 배움을 건져 올릴 수 있다면 그것이야말로 진정한 성장이다.'
        ]
    },
    {
        id: 29,
        category: '질문/생각',
        start: '침묵은 아무것도 말하지 않는 공백일까, 아니면 소리보다 더 깊은 언어의 표현일까?',
        continuations: [
            '수많은 말들이 가득 찬 소란스러운 세상 속에서 때로는 고요한 침묵이 더 큰 위로를 전한다.',
            '서로 아무런 말을 하지 않아도 편안함을 느낄 수 있는 사람이 곁에 있다는 건 커다란 축복이다.',
            '침묵의 시간에 비로소 마음의 수면이 조용히 평정을 되찾는다.'
        ]
    }
];

// 2. DETERMINISTIC SHUFFLED DECK QUEUES FOR ZERO-REPETITION
let categoryDecks = {};

function getNextPromptFromDeck(category) {
    if (!categoryDecks[category] || categoryDecks[category].length === 0) {
        // Build and shuffle new deck
        let pool = PROMPT_DATABASE;
        if (category !== 'all') {
            pool = PROMPT_DATABASE.filter(p => p.category === category);
        }
        
        // Fisher-Yates Shuffle
        const shuffled = [...pool];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        categoryDecks[category] = shuffled;
    }

    return categoryDecks[category].pop();
}

// 3. SMART USER CONTEXTUAL ADVICE ANALYZER
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

// APP STATE
let currentPrompt = null;
let currentContinuationIndex = 0;
let currentCategory = 'all';
let isAdvicePanelOpen = false;
let currentViewingDoc = null;

// DOM ELEMENTS
let promptDisplayArea;
let btnGeneratePrompt;
let btnRefreshPrompt;
let btnContinuePrompt;
let continueStepBadge;
let btnApplyToEditor;

let documentTitle;
let editorTextarea;
let draftStatusIndicator;

let statLengthWithSpaces;
let statLengthNoSpaces;
let statWords;
let statManuscript;

let btnClearEditor;
let btnCopyEditor;
let btnSaveDocument;

let btnOpenStorage;
let btnNewDocument;
let savedCountBadge;

let storageModal;
let btnCloseStorage;
let storageSearchInput;
let storageItemsList;

let viewModal;
let btnCloseView;
let viewModalTitle;
let viewModalDate;
let viewModalStats;
let viewModalContent;
let btnExportTxt;
let btnLoadIntoEditor;

let btnToggleAdvice;
let advicePanel;
let btnCloseAdvice;
let adviceStatusTag;
let adviceStatusMessage;
let adviceCardsContainer;
let btnRefreshAdvice;
let editorLayoutWrapper;

let toastNotification;
let toastMessage;

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initElements();
    initEventListeners();
    initCategoryPills();
    updateSavedCountBadge();
    loadDraftFromLocalStorage();
    updateStats();
    renderInitialPromptGuide(); // Show initial guide text
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
    btnGeneratePrompt.addEventListener('click', () => generatePrompt());
    btnRefreshPrompt.addEventListener('click', () => generatePrompt());
    btnContinuePrompt.addEventListener('click', () => addContinuationSentence());
    btnApplyToEditor.addEventListener('click', () => applyPromptToEditor());

    if (btnToggleAdvice) btnToggleAdvice.addEventListener('click', () => toggleAdvicePanel());
    if (btnCloseAdvice) btnCloseAdvice.addEventListener('click', () => closeAdvicePanel());
    if (btnRefreshAdvice) btnRefreshAdvice.addEventListener('click', () => renderAdviceCards());

    editorTextarea.addEventListener('input', () => {
        updateStats();
        triggerAutoSaveDraft();
        if (isAdvicePanelOpen) {
            updateAdviceStatusMessage();
            renderAdviceCards();
        }
    });

    documentTitle.addEventListener('input', () => triggerAutoSaveDraft());

    btnClearEditor.addEventListener('click', () => clearEditor());
    btnCopyEditor.addEventListener('click', () => copyEditorContent());
    btnSaveDocument.addEventListener('click', () => saveDocument());

    btnOpenStorage.addEventListener('click', () => openStorageModal());
    btnNewDocument.addEventListener('click', () => createNewDocument());

    btnCloseStorage.addEventListener('click', () => closeStorageModal());
    storageModal.addEventListener('click', (e) => {
        if (e.target === storageModal) closeStorageModal();
    });

    btnCloseView.addEventListener('click', () => closeViewModal());
    viewModal.addEventListener('click', (e) => {
        if (e.target === viewModal) closeViewModal();
    });

    storageSearchInput.addEventListener('input', (e) => {
        renderStorageItems(e.target.value.trim());
    });

    btnExportTxt.addEventListener('click', () => exportCurrentViewingAsTxt());
    btnLoadIntoEditor.addEventListener('click', () => loadCurrentViewingIntoEditor());
}

function initCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.getAttribute('data-category');

            if (currentCategory === 'all') {
                renderInitialPromptGuide();
            } else {
                generatePrompt();
            }
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
        </p>
    `;
}

// DETERMINISTIC ZERO-REPETITION PROMPT ENGINE
function generatePrompt() {
    const prompt = getNextPromptFromDeck(currentCategory);
    if (!prompt) return;

    currentPrompt = prompt;
    currentContinuationIndex = 0;
    renderPromptDisplay();
}

function renderPromptDisplay() {
    if (!currentPrompt) return;

    let html = `
        <div class="prompt-category-tag">${currentPrompt.category}</div>
        <div class="prompt-text-main">"${escapeHtml(currentPrompt.start)}"</div>
    `;

    for (let i = 0; i < currentContinuationIndex; i++) {
        if (currentPrompt.continuations[i]) {
            html += `<div class="prompt-text-continuation">+ ${escapeHtml(currentPrompt.continuations[i])}</div>`;
        }
    }

    promptDisplayArea.innerHTML = html;

    if (currentContinuationIndex > 0) {
        continueStepBadge.style.display = 'inline-block';
        continueStepBadge.textContent = `+${currentContinuationIndex}`;
    } else {
        continueStepBadge.style.display = 'none';
    }
}

function addContinuationSentence() {
    if (!currentPrompt) {
        generatePrompt();
        return;
    }

    if (currentContinuationIndex < currentPrompt.continuations.length) {
        currentContinuationIndex++;
        renderPromptDisplay();
        showToast(`다음 문장 가이드가 추가되었습니다 (+${currentContinuationIndex})`);
    } else {
        showToast('준비된 가이드 문장을 모두 확인하셨습니다. 자유롭게 이어 써 보세요!');
    }
}

function applyPromptToEditor() {
    if (!currentPrompt) {
        showToast('먼저 [첫 문장 뽑기] 버튼을 눌러 문장을 추천받으세요!');
        return;
    }

    let textToApply = currentPrompt.start;
    for (let i = 0; i < currentContinuationIndex; i++) {
        if (currentPrompt.continuations[i]) {
            textToApply += ' ' + currentPrompt.continuations[i];
        }
    }

    const currentEditorText = editorTextarea.value;
    if (currentEditorText.trim().length > 0) {
        editorTextarea.value = currentEditorText.trim() + '\n\n' + textToApply + ' ';
    } else {
        editorTextarea.value = textToApply + ' ';
    }

    editorTextarea.focus();
    updateStats();
    triggerAutoSaveDraft();
    showToast('추천 문장이 에디터에 적용되었습니다!');
}

// ADVICE PANEL & REAL-TIME USER CONTENT-AWARE ADVICE RENDERER
function toggleAdvicePanel() {
    if (isAdvicePanelOpen) {
        closeAdvicePanel();
    } else {
        openAdvicePanel();
    }
}

function openAdvicePanel() {
    isAdvicePanelOpen = true;
    editorLayoutWrapper.classList.add('has-advice');
    btnToggleAdvice.classList.add('active');
    updateAdviceStatusMessage();
    renderAdviceCards();
    showToast('글쓰기 방향 조언 패널이 열렸습니다.');
}

function closeAdvicePanel() {
    isAdvicePanelOpen = false;
    editorLayoutWrapper.classList.remove('has-advice');
    btnToggleAdvice.classList.remove('active');
}

function updateAdviceStatusMessage() {
    const textLen = editorTextarea.value.length;
    if (textLen === 0) {
        adviceStatusTag.textContent = '시작 단계';
        adviceStatusMessage.textContent = '아직 글을 작성하기 전입니다! 추천 문장을 적용하거나 첫 생각을 적어보세요.';
    } else if (textLen < 120) {
        adviceStatusTag.textContent = '도입 단계';
        adviceStatusMessage.textContent = '글의 첫 물꼬를 트셨군요! 장면의 풍경이나 그때의 내면 감정을 구체적으로 이어가 보세요.';
    } else if (textLen < 350) {
        adviceStatusTag.textContent = '전개 단계';
        adviceStatusMessage.textContent = '이야기가 차곡차곡 쌓이고 있습니다! 인물이나 주변 소리, 냄새 같은 오감의 결을 하나 더 추가해 보세요.';
    } else {
        adviceStatusTag.textContent = '심화 & 마무리 단계';
        adviceStatusMessage.textContent = '상당한 분량의 글이 완성되어 가네요! 이 생각이 전해주는 조용한 깨달음이나 내 자신에게 하고 싶은 말로 정돈해 보세요.';
    }
}

function renderAdviceCards() {
    adviceCardsContainer.innerHTML = '';
    const userText = editorTextarea.value.trim();

    let matchedCards = [];

    if (userText.length > 0) {
        const sentences = userText.split(/(?<=[.!?\n])\s+/).filter(s => s.trim().length > 3);
        
        ADVICE_PATTERNS.forEach(pattern => {
            const hasKeyword = pattern.keywords.some(kw => userText.includes(kw));
            if (hasKeyword) {
                let snippet = sentences.find(s => pattern.keywords.some(kw => s.includes(kw))) || sentences[sentences.length - 1] || userText.substring(0, 30);
                if (snippet.length > 35) snippet = snippet.substring(0, 32) + '...';
                
                const adv = pattern.getAdvice(snippet);
                matchedCards.push({
                    category: pattern.category,
                    question: adv.question,
                    hint: adv.hint
                });
            }
        });
    }

    if (matchedCards.length < 3) {
        const remainingNeeded = 3 - matchedCards.length;
        const shuffledDefault = [...DEFAULT_ADVICES].sort(() => 0.5 - Math.random());
        const fill = shuffledDefault.slice(0, remainingNeeded);
        matchedCards = matchedCards.concat(fill);
    }

    matchedCards.slice(0, 3).forEach(adv => {
        const card = document.createElement('div');
        card.className = 'advice-card';
        card.innerHTML = `
            <div class="advice-card-header">
                <span class="advice-card-category">${escapeHtml(adv.category)}</span>
                <button type="button" class="btn-insert-advice" title="질문을 에디터에 가이드 문장으로 삽입">
                    <i data-lucide="plus" style="width: 12px; height: 12px;"></i> 삽입
                </button>
            </div>
            <div class="advice-card-question">${escapeHtml(adv.question)}</div>
            <div class="advice-card-hint">${escapeHtml(adv.hint)}</div>
        `;

        const insertBtn = card.querySelector('.btn-insert-advice');
        insertBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            insertAdviceQuestionToEditor(adv.question);
        });

        adviceCardsContainer.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
}

function insertAdviceQuestionToEditor(questionText) {
    const textToInsert = `\n\n[글쓰기 질문 💡: ${questionText}]\n`;
    const curVal = editorTextarea.value;
    if (curVal.trim().length > 0) {
        editorTextarea.value = curVal.trim() + textToInsert;
    } else {
        editorTextarea.value = textToInsert;
    }
    editorTextarea.focus();
    updateStats();
    triggerAutoSaveDraft();
    showToast('방향 조언 질문이 에디터에 삽입되었습니다.');
}

// STATS & DRAFT MANAGEMENT
function updateStats() {
    const text = editorTextarea.value;
    const lengthWithSpaces = text.length;
    const lengthNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const manuscript = (lengthWithSpaces / 200).toFixed(1);

    statLengthWithSpaces.textContent = `${lengthWithSpaces.toLocaleString()}자`;
    statLengthNoSpaces.textContent = `${lengthNoSpaces.toLocaleString()}자`;
    statWords.textContent = `${words.toLocaleString()}개`;
    statManuscript.textContent = `${manuscript}장`;
}

let autoSaveTimer = null;
function triggerAutoSaveDraft() {
    draftStatusIndicator.classList.add('active');
    
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        const draftData = {
            title: documentTitle.value,
            content: editorTextarea.value,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem('geulmajoong_draft', JSON.stringify(draftData));
    }, 500);
}

function loadDraftFromLocalStorage() {
    const savedDraft = localStorage.getItem('geulmajoong_draft');
    if (savedDraft) {
        try {
            const data = JSON.parse(savedDraft);
            if (data.title) documentTitle.value = data.title;
            if (data.content) editorTextarea.value = data.content;
            if (data.title || data.content) {
                draftStatusIndicator.classList.add('active');
            }
        } catch (e) {
            console.error('Failed to load draft:', e);
        }
    }
}

function clearEditor() {
    if (!editorTextarea.value && !documentTitle.value) return;

    if (confirm('작성 중인 내용을 모두 지우시겠습니까?')) {
        documentTitle.value = '';
        editorTextarea.value = '';
        updateStats();
        localStorage.removeItem('geulmajoong_draft');
        draftStatusIndicator.classList.remove('active');
        showToast('에디터가 초기화되었습니다.');
    }
}

function copyEditorContent() {
    const title = documentTitle.value.trim();
    const content = editorTextarea.value;

    if (!content.trim()) {
        showToast('복사할 내용이 없습니다.');
        return;
    }

    const textToCopy = title ? `${title}\n\n${content}` : content;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('글 전체 내용이 클립보드에 복사되었습니다!');
    }).catch(err => {
        showToast('복사에 실패했습니다.');
    });
}

function saveDocument() {
    const title = documentTitle.value.trim() || '제목 없는 글';
    const content = editorTextarea.value;

    if (!content.trim()) {
        showToast('저장할 내용을 에디터에 작성해 주세요!');
        editorTextarea.focus();
        return;
    }

    const now = new Date();
    const dateStr = `${now.getFullYear()}. ${(now.getMonth()+1).toString().padStart(2, '0')}. ${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const newDoc = {
        id: Date.now().toString(),
        title: title,
        content: content,
        date: dateStr,
        createdAt: now.toISOString(),
        charCount: content.length,
        manuscriptCount: (content.length / 200).toFixed(1)
    };

    const saved = getSavedDocuments();
    saved.unshift(newDoc);
    localStorage.setItem('geulmajoong_documents', JSON.stringify(saved));

    updateSavedCountBadge();
    showToast(`"${title}" 글이 내 보관함에 저장되었습니다!`);
}

function createNewDocument() {
    if (editorTextarea.value.trim()) {
        if (!confirm('현재 작성 중인 글이 있습니다. 저장하지 않고 새로 쓰시겠습니까?')) {
            return;
        }
    }
    documentTitle.value = '';
    editorTextarea.value = '';
    localStorage.removeItem('geulmajoong_draft');
    draftStatusIndicator.classList.remove('active');
    updateStats();
    showToast('새 글 작성을 시작합니다.');
    documentTitle.focus();
}

function getSavedDocuments() {
    const stored = localStorage.getItem('geulmajoong_documents');
    return stored ? JSON.parse(stored) : [];
}

function updateSavedCountBadge() {
    const docs = getSavedDocuments();
    savedCountBadge.textContent = docs.length;
}

function openStorageModal() {
    renderStorageItems();
    storageModal.classList.add('active');
    storageSearchInput.value = '';
}

function closeStorageModal() {
    storageModal.classList.remove('active');
}

function renderStorageItems(filterQuery = '') {
    const docs = getSavedDocuments();
    storageItemsList.innerHTML = '';

    let filtered = docs;
    if (filterQuery) {
        const q = filterQuery.toLowerCase();
        filtered = docs.filter(d => d.title.toLowerCase().includes(q) || d.content.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
        storageItemsList.innerHTML = `
            <p style="text-align: center; color: var(--text-muted); padding: 40px 0;">
                ${filterQuery ? '검색 결과에 맞는 저장된 글이 없습니다.' : '아직 저장된 글이 없습니다. 새로운 글을 작성해 보세요!'}
            </p>
        `;
        return;
    }

    filtered.forEach(doc => {
        const itemCard = document.createElement('div');
        itemCard.className = 'storage-item-card';
        itemCard.innerHTML = `
            <div class="storage-item-header">
                <span class="storage-item-title">${escapeHtml(doc.title)}</span>
                <span class="storage-item-date">${doc.date}</span>
            </div>
            <p class="storage-item-snippet">${escapeHtml(doc.content)}</p>
            <div class="storage-item-footer">
                <span class="storage-item-stats">공백 포함 ${doc.charCount.toLocaleString()}자 | 원고지 ${doc.manuscriptCount}장</span>
                <div class="storage-item-actions">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openViewModal('${doc.id}')">
                        <i data-lucide="eye" style="width: 14px; height: 14px;"></i> 읽기
                    </button>
                    <button type="button" class="btn-icon-danger" onclick="event.stopPropagation(); deleteDocument('${doc.id}')" title="삭제">
                        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>
            </div>
        `;

        itemCard.addEventListener('click', () => openViewModal(doc.id));
        storageItemsList.appendChild(itemCard);
    });

    if (window.lucide) lucide.createIcons();
}

window.deleteDocument = function(id) {
    if (confirm('이 글을 보관함에서 완전 삭제하시겠습니까?')) {
        let docs = getSavedDocuments();
        docs = docs.filter(d => d.id !== id);
        localStorage.setItem('geulmajoong_documents', JSON.stringify(docs));
        updateSavedCountBadge();
        renderStorageItems(storageSearchInput.value.trim());
        showToast('글이 삭제되었습니다.');
    }
};

window.openViewModal = function(id) {
    const docs = getSavedDocuments();
    const doc = docs.find(d => d.id === id);
    if (!doc) return;

    currentViewingDoc = doc;
    viewModalTitle.textContent = doc.title;
    viewModalDate.textContent = doc.date;
    viewModalStats.textContent = `공백 포함 ${doc.charCount.toLocaleString()}자 | 원고지 ${doc.manuscriptCount}장`;
    viewModalContent.textContent = doc.content;

    viewModal.classList.add('active');
};

function closeViewModal() {
    viewModal.classList.remove('active');
    currentViewingDoc = null;
}

function loadCurrentViewingIntoEditor() {
    if (!currentViewingDoc) return;

    if (editorTextarea.value.trim()) {
        if (!confirm('현재 작성 중인 에디터의 내용이 덮어씌워집니다. 진행하시겠습니까?')) {
            return;
        }
    }

    documentTitle.value = currentViewingDoc.title;
    editorTextarea.value = currentViewingDoc.content;
    updateStats();
    triggerAutoSaveDraft();

    closeViewModal();
    closeStorageModal();
    showToast(`"${currentViewingDoc.title}" 글을 에디터로 불러왔습니다.`);
    editorTextarea.focus();
}

function exportCurrentViewingAsTxt() {
    if (!currentViewingDoc) return;

    const title = currentViewingDoc.title || '글마중_작성글';
    const content = `${currentViewingDoc.title}\n작성일: ${currentViewingDoc.date}\n-----------------------------------\n\n${currentViewingDoc.content}`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[\\/:*?"<>|]/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('텍스트(.txt) 파일로 다운로드되었습니다!');
}

let toastTimer = null;
function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 2800);
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
