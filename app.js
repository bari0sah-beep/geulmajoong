// ==========================================================================
// ✍️ 글마중 - 완성형 프롬프트 뱅크 v4
// 각 문장마다 맥락이 이어지는 덧붙이기 문장 + 향상된 글쓰기 조언 시스템
// 저장글: localStorage 전용 (서버 전송 없음, 삭제 전까지 영구 보존)
// ==========================================================================

// ═══════════════════════════════════════════════════════════════════════════
// 1. 프롬프트 데이터베이스 (start + 맥락 연결된 continuations)
// ═══════════════════════════════════════════════════════════════════════════

const PROMPT_DATABASE = {

    '감성/에세이': [
        {
            start: '오래된 일기를 펼쳤더니 그때의 계절 냄새가 그대로였다.',
            continuations: [
                '빛바랜 글씨들 사이로 그 시절의 내가 조용히 나를 바라보고 있었다.',
                '다 읽지도 못하고 그냥 천천히 덮었다.',
            ]
        },
        {
            start: '식어가는 커피를 앞에 두고 한참을 멍하니 앉아 있었다.',
            continuations: [
                '무언가를 생각하는 건지, 아무것도 생각하지 않는 건지 스스로도 알 수 없었다.',
                '이런 시간이 낭비처럼 보여도, 나에게는 꼭 필요한 종류의 쉼이었다.',
            ]
        },
        {
            start: '해가 기울자 방 안으로 들어오는 빛의 색이 달라졌다.',
            continuations: [
                '오렌지빛으로 물든 벽을 바라보며 하루가 또 이렇게 지나간다는 생각을 했다.',
                '그 빛 속에 먼지들이 떠다니는 것을 한참 바라보았다.',
            ]
        },
        {
            start: '창밖에 빗소리가 들리기 시작하자 마음이 조용히 가라앉았다.',
            continuations: [
                '평소에는 보이지 않던 것들이 빗소리 속에서 갑자기 선명해졌다.',
                '이런 날씨가 위로가 된다는 것이 나 자신도 신기했다.',
            ]
        },
        {
            start: '아무것도 켜지 않은 방에 혼자 앉아 있으면 생각이 또렷해진다.',
            continuations: [
                '낮 동안 소란스러웠던 머릿속이 이 고요함 속에서 천천히 정리되었다.',
                '어두움이 무서운 게 아니라, 이 침묵이 때로는 가장 친한 벗이 된다.',
            ]
        },
        {
            start: '버스 창에 이마를 기대자 도시의 불빛이 길게 번지며 흘렀다.',
            continuations: [
                '저 수많은 불빛들 안에 각각의 하루가 담겨 있다는 생각이 들었다.',
                '피곤했지만 이 장면만큼은 눈을 감기 싫었다.',
            ]
        },
        {
            start: '낡은 노트 한 권을 꺼냈더니 그 시절 서툰 글씨가 가득했다.',
            continuations: [
                '그때의 나는 지금보다 훨씬 많은 것을 느끼고, 더 자주 적어두었다.',
                '서툴다고 느꼈던 그 글씨들이 지금은 오히려 솔직하게 보였다.',
            ]
        },
        {
            start: '노을이 지는 골목을 걸었더니 세상이 잠깐 따뜻해진 것 같았다.',
            continuations: [
                '노을은 공평하게 모든 것을 같은 색으로 물들여 준다.',
                '이 짧은 시간이 지나면 다시 원래의 세상으로 돌아간다는 것을 알면서도 발을 멈추었다.',
            ]
        },
        {
            start: '선반 위에 쌓인 책들을 보다가 오래전 읽었던 문장이 떠올랐다.',
            continuations: [
                '그 문장이 그때의 나에게 어떤 의미였는지, 지금의 나에게는 또 다른 의미로 다가온다.',
                '책은 읽었을 때보다 잊혀졌다가 다시 떠오를 때 더 강렬하다.',
            ]
        },
        {
            start: '새벽 세 시의 주방은 낮과 전혀 다른 종류의 고요함이 있다.',
            continuations: [
                '냉장고 소리만 들리는 이 공간에서 낮 동안 말하지 못했던 것들이 수면 위로 떠오른다.',
                '이 시간만큼은 세상이 나 혼자인 것 같아 이상하게 안심이 된다.',
            ]
        },
        {
            start: '잊고 지냈던 사람의 이름이 문득 떠올라 한동안 멍했다.',
            continuations: [
                '어떻게 지내는지 물어보고 싶지만, 아직 그럴 용기가 나지 않는다.',
                '기억 속의 그 사람과 지금의 그 사람이 같은 사람일지 알 수 없다.',
            ]
        },
        {
            start: '오늘은 아무에게도 연락하고 싶지 않은 날이었다.',
            continuations: [
                '고립된 게 아니라 그저 잠시 나 자신만 있고 싶었다.',
                '아무것도 설명하지 않아도 되는 이 시간이 오히려 숨을 트이게 해주었다.',
            ]
        },
        {
            start: '좋았던 것들은 왜 항상 지나고 나서야 선명해지는 걸까.',
            continuations: [
                '그때 더 오래 머물지 않았던 것을 지금은 조금 후회한다.',
                '어쩌면 지금 이 순간도, 나중에 그리워할 순간 중 하나일지 모른다.',
            ]
        },
        {
            start: '말하지 못하고 삼켰던 것들이 마음속 어딘가에 쌓여 있다.',
            continuations: [
                '때로는 그것들이 글이 되어 밖으로 나오기를 원한다.',
                '말하지 않은 것이 사라지는 게 아니라 다른 형태로 남는다는 것을 안다.',
            ]
        },
        {
            start: '오래 묵은 그리움이 별 이유 없이 차올라 당황스러웠다.',
            continuations: [
                '계기도 없었고, 생각한 것도 아니었는데 그냥 밀려왔다.',
                '그리움이 이렇게 불시에 찾아오는 것은 아직 다 정리되지 않았다는 뜻일 것이다.',
            ]
        },
        {
            start: '충분히 괜찮은 척했는데, 혼자가 되자 눈물이 났다.',
            continuations: [
                '누군가 앞에서 무너지는 것이 더 두려웠던 것인지, 스스로에게도 잘 모르겠다.',
                '이렇게 혼자 울고 나면 이상하게도 다음날 조금 더 가벼워진다.',
            ]
        },
        {
            start: '다 괜찮다는 말이 나 자신에게도 가끔은 거짓말이 된다.',
            continuations: [
                '괜찮지 않다는 것을 인정하는 것이 더 용감한 일인지도 모른다.',
                '그래도 매일 다시 괜찮아지려고 노력하는 것, 그것만으로도 충분하다.',
            ]
        },
        {
            start: '마음의 속도는 세상보다 언제나 조금씩 느렸다.',
            continuations: [
                '세상이 이미 다음 것으로 넘어갈 때도 나는 아직 지난 것에 머물러 있곤 했다.',
                '느리다는 것이 뒤처지는 게 아니라 깊이 느끼는 것이라고 믿기로 했다.',
            ]
        },
        {
            start: '쓰지 않은 문장들이 마음속에서 가장 오래 산다.',
            continuations: [
                '말로 꺼내지 못한 것들이 글로도 나오지 못하고 가슴 안을 떠돈다.',
                '언젠가 그것들을 꺼낼 용기가 생기는 날, 가장 솔직한 글이 될 것이다.',
            ]
        },
        {
            start: '이 조용함이 조금만 더 오래 머물러 주면 좋겠다.',
            continuations: [
                '조용함이 공허한 게 아니라 충만할 수 있다는 것을 이제는 안다.',
                '이 순간을 붙잡아두고 싶지만, 붙잡으려는 순간 사라지는 게 고요함이다.',
            ]
        },
        {
            start: '어떤 사람은 한마디로 하루 전체를 따뜻하게 만들어주기도 한다.',
            continuations: [
                '그 사람은 그게 얼마나 대단한 일인지 모를 것이다.',
                '나도 누군가에게 그런 사람이 된 적이 있는지, 문득 궁금해진다.',
            ]
        },
        {
            start: '헤어지면서 한 마지막 인사가 진짜 마지막일 줄 몰랐다.',
            continuations: [
                '마지막이라는 것을 알았다면 더 잘 보았을 텐데, 라는 생각을 한다.',
                '일상적인 인사 하나가 나중에 얼마나 소중한 기억이 될지 그때는 몰랐다.',
            ]
        },
        {
            start: '말하지 않아도 편한 사람이 곁에 있다는 건 참 다행한 일이다.',
            continuations: [
                '그 사람 옆에서는 이유 없이 침묵해도 어색하지 않다.',
                '나를 설명하지 않아도 되는 관계가 살면서 몇이나 될까.',
            ]
        },
        {
            start: '봄이 올 때마다 지난 겨울이 한꺼번에 녹아드는 기분이 든다.',
            continuations: [
                '단단하게 웅크렸던 것들이 조심스럽게 펼쳐지는 계절이다.',
                '새로 시작한다는 느낌이 봄만큼 선명하게 오는 계절은 없다.',
            ]
        },
        {
            start: '가을은 짧아서 아름다운 것인지, 아름다워서 짧게 느껴지는 것인지 모르겠다.',
            continuations: [
                '단풍이 지고 나면 곧 모든 것이 텅 비어버린다는 것을 알기에 더 붙잡게 된다.',
                '이 계절만큼은 어딘가로 떠나고 싶다는 마음이 강해진다.',
            ]
        },
        {
            start: '아무것도 달라지지 않는 것 같아도 계절은 어김없이 바뀐다.',
            continuations: [
                '내 안에서도 보이지 않는 것들이 조금씩 바뀌고 있을 것이라 믿는다.',
                '계절의 변화를 몸으로 느낄 때 비로소 시간이 흐르고 있다는 것을 실감한다.',
            ]
        },
        {
            start: '첫눈이 내리는 날에는 평소에 연락하지 않던 사람이 생각난다.',
            continuations: [
                '전하지 못한 안부가 눈 내리는 창밖으로 함께 쌓인다.',
                '연락하지 않는 것이 무관심이 아니라 그냥 각자의 삶을 사는 거라고 스스로 달랜다.',
            ]
        },
        {
            start: '이상하게 오늘은 아무것도 설명하고 싶지 않았다.',
            continuations: [
                '왜 그런지, 어떤 기분인지, 그냥 느끼는 것으로 충분한 날이 있다.',
                '모든 감정에 이름을 붙이지 않아도 된다는 걸 요즘에야 알았다.',
            ]
        },
        {
            start: '기억이란 가장 가깝고도 멀리 있는 여행지다.',
            continuations: [
                '눈을 감으면 그곳으로 갈 수 있지만, 돌아오면 다시 현실이다.',
                '아무 때나 꺼낼 수 있는 여행지이기에 더 소중한지도 모른다.',
            ]
        },
        {
            start: '시간이 빠르게 간다는 것을 느낄 때는 항상 뒤늦은 때다.',
            continuations: [
                '소중한 것들은 항상 나중에야 소중했다는 것을 알게 된다.',
                '지금 이 순간이 나중의 그리움이 될 거라는 것을 알면서도 충분히 살지 못한다.',
            ]
        },
        {
            start: '오늘 같은 날씨가 다시는 없을 것 같아 사진을 찍어두었다.',
            continuations: [
                '사진 속에는 날씨는 담겼지만, 그때의 공기와 냄새는 담기지 않았다.',
                '기록하는 것이 기억을 돕는지, 아니면 방해하는지 가끔 헷갈린다.',
            ]
        },
    ],

    '일상/추억': [
        {
            start: '어머니가 끓여주던 된장찌개 냄새가 집이라는 단어의 정의였다.',
            continuations: [
                '그 냄새를 맡으면 지금도 자동으로 긴장이 풀린다.',
                '어디를 가도 그 냄새와 같은 편안함은 다시 찾기 어렵다.',
            ]
        },
        {
            start: '방학이면 찾아갔던 외갓집 마루는 늘 서늘하고 나무 냄새가 났다.',
            continuations: [
                '그 마루에 엎드려 숙제를 하던 기억이 지금도 선명하다.',
                '지금은 사라진 그 집이 기억 속에서만큼은 아직도 그대로 있다.',
            ]
        },
        {
            start: '소풍 가던 날 아침, 도시락 싸는 소리에 잠이 일찍 깨곤 했다.',
            continuations: [
                '그 설레는 냄새와 소리가 지금도 봄이 되면 문득 떠오른다.',
                '어머니가 새벽에 일어나 준비하셨다는 걸 그때는 몰랐다.',
            ]
        },
        {
            start: '교복 주머니에는 항상 꾸깃꾸깃한 오백 원짜리가 들어 있었다.',
            continuations: [
                '학교 앞 분식집에서 떡볶이 한 그릇을 사 먹기에 딱 맞는 돈이었다.',
                '그 시절의 오백 원이 지금의 어떤 돈보다 더 무겁게 느껴진다.',
            ]
        },
        {
            start: '새 학기 첫날 새 교과서 냄새를 맡던 기분을 아직도 기억한다.',
            continuations: [
                '종이 냄새와 함께 새로 시작하는 설렘이 가득했던 그 하루.',
                '이번 학기는 잘해보리라는 다짐이 매번 같은 자리에서 시작됐다.',
            ]
        },
        {
            start: '아버지 어깨에 올라타고 동네 한 바퀴를 돌던 일이 떠오른다.',
            continuations: [
                '세상이 그렇게 높고 넓게 보였던 적이 그 이후로는 없었다.',
                '아버지의 어깨가 얼마나 넓었는지, 지금 생각해보면 내 온 세상이었다.',
            ]
        },
        {
            start: '할머니 손은 항상 거칠고 따뜻했으며 콩 볶는 냄새가 났다.',
            continuations: [
                '그 손이 머리를 쓰다듬어 줄 때면 세상에서 가장 안전한 곳에 있는 것 같았다.',
                '이제는 그 손을 잡을 수 없어서 종종 허전한 느낌이 든다.',
            ]
        },
        {
            start: '장마철이면 빗소리를 들으며 만화책을 읽던 여름이 그립다.',
            continuations: [
                '세상이 물에 잠기는 동안 방 안에서만큼은 아무 걱정이 없었다.',
                '그 무더위와 습기마저도 지금은 그리운 여름의 일부가 되었다.',
            ]
        },
        {
            start: '두꺼운 이불 속에서 손전등으로 책을 읽다가 들킨 적이 있다.',
            continuations: [
                '혼이 날 거라는 걸 알면서도 멈출 수 없었던 그 이야기.',
                '그날 이후로 한동안 손전등이 없어졌다.',
            ]
        },
        {
            start: '여름밤 마당에서 반딧불이를 잡던 일이 꿈처럼 아득하다.',
            continuations: [
                '그 불빛이 손 안에서 깜박이던 순간이 아직도 가장 신기한 기억으로 남아 있다.',
                '지금도 그 여름밤의 풀 냄새와 열기가 기억 속에 생생하다.',
            ]
        },
        {
            start: '친구들과 동네 골목에서 해 질 때까지 뛰어놀던 시절이 있었다.',
            continuations: [
                '어머니가 저녁을 부르는 소리가 들릴 때까지 시간 가는 줄 몰랐다.',
                '그 골목이 우리에게는 온 세상이었다.',
            ]
        },
        {
            start: '할아버지와 손잡고 걷던 겨울 논두렁이 아직도 눈에 선하다.',
            continuations: [
                '아무 말 없이 걷는 것이 어색하지 않았던 유일한 시간이었다.',
                '논두렁을 걸으며 할아버지가 해주시던 이야기들이 지금도 귓가에 남아 있다.',
            ]
        },
        {
            start: '학교 앞 분식집 튀김 냄새는 지금도 어딘가에서 맡으면 그때가 된다.',
            continuations: [
                '냄새는 그 어떤 사진보다 선명하게 그 시절로 데려간다.',
                '오백 원짜리 튀김 한 봉지가 그렇게 맛있었던 이유를 지금도 모르겠다.',
            ]
        },
        {
            start: '야자 시간에 몰래 먹던 초코빵이 왜 그렇게 맛있었는지 모른다.',
            continuations: [
                '선생님 눈을 피해 먹어야 한다는 긴장감이 오히려 더 맛있게 만들었던 걸까.',
                '그때의 허기짐과 그 초코빵의 단맛이 청춘의 맛이었다.',
            ]
        },
        {
            start: '처음으로 자전거를 혼자 탔던 날 아버지가 울었다는 걸 나중에 알았다.',
            continuations: [
                '자랑스러움인지, 섭섭함인지 지금도 알 수 없지만 두 가지 다였을 것 같다.',
                '그날의 내가 얼마나 뒤를 안 돌아봤을지 생각하면 미안하다.',
            ]
        },
        {
            start: '졸업 앨범 속에서 어색하게 웃고 있는 나를 발견하면 반갑다.',
            continuations: [
                '그때는 어색했던 그 미소가 지금 보면 가장 순수하다.',
                '그 아이가 지금의 내가 될 거라는 것을 알았다면 어떤 표정을 지었을까.',
            ]
        },
        {
            start: '전학 가는 친구와 마지막으로 분식집에서 떡볶이를 먹었다.',
            continuations: [
                '그게 마지막일 줄 알았지만, 다시 만날 거라고 서로 믿었다.',
                '그 친구가 지금 어디서 어떻게 살고 있는지 가끔 궁금하다.',
            ]
        },
        {
            start: '첫 자취방 창문이 너무 작아서 매일 해가 일찍 졌다.',
            continuations: [
                '작은 창이지만 그 창으로 들어오는 빛 한 줄기가 그 방의 전부였다.',
                '불편했지만, 처음으로 온전히 내 것인 공간이었다.',
            ]
        },
        {
            start: '첫 월급으로 산 케이크를 혼자 먹으며 뭔가 어른이 된 것 같았다.',
            continuations: [
                '축하해줄 사람을 부르지 않고 혼자 먹기로 한 것이 이상하지 않았다.',
                '그 케이크의 맛보다, 그걸 살 수 있다는 사실이 더 달았다.',
            ]
        },
        {
            start: '처음 혼자 살 때 밥을 차려 먹다가 괜히 눈물이 났다.',
            continuations: [
                '맛있어서가 아니라, 혼자 먹는 밥이 처음에는 그렇게 쓸쓸할 수가 없었다.',
                '그 눈물이 외로움인지 감사인지 그때는 구분이 안 됐다.',
            ]
        },
        {
            start: '오랜 친구와 만나면 수년의 공백이 몇 마디로 사라진다.',
            continuations: [
                '오래 알아온 사람 앞에서는 굳이 설명하지 않아도 되는 것들이 있다.',
                '시간이 지나도 변하지 않는 것이 있다는 것이 우정이라는 이름인 것 같다.',
            ]
        },
        {
            start: '가장 힘들 때 아무 말 없이 옆에 앉아 있어준 친구가 있었다.',
            continuations: [
                '말보다 그 옆자리가 더 큰 위로였다는 것을 그 친구는 알까.',
                '지금도 그 친구 생각을 하면 괜히 고마움에 눈물이 날 것 같다.',
            ]
        },
        {
            start: '오래된 단골 식당 사장님이 "오늘도 혼자야?"라고 물었던 날.',
            continuations: [
                '그 말이 위로인지 관심인지 몰라 어색하게 웃었다.',
                '단골이 된다는 것은 내 일상의 일부를 그 공간과 나누는 것이다.',
            ]
        },
        {
            start: '스물다섯에 혼자 떠난 여행에서 길을 잃었던 게 지금도 소중하다.',
            continuations: [
                '길을 잃었기에 지도에 없는 골목을 만났고, 예상 밖의 하루가 생겼다.',
                '그 여행이 계획대로 됐다면 아무것도 기억에 남지 않았을 것이다.',
            ]
        },
        {
            start: '처음으로 제대로 사랑했던 사람과 이별하던 날의 공기가 기억난다.',
            continuations: [
                '그날 이후로 한동안 그 계절이 싫었다.',
                '그 이별이 없었다면 지금의 내가 되지 못했을 것이라는 걸 이제는 안다.',
            ]
        },
        {
            start: '아버지가 새벽에 일어나 준비하던 소리를 자는 척 들었던 날들이 있다.',
            continuations: [
                '그 소리가 안쓰럽기도 하고, 든든하기도 했다.',
                '아버지가 얼마나 이른 시간부터 하루를 시작했는지, 이제야 실감한다.',
            ]
        },
        {
            start: '어머니의 손이 언제부터 그렇게 주름졌는지 모르고 지났다.',
            continuations: [
                '매일 보았는데도, 어느 날 문득 보니 낯선 손이 되어 있었다.',
                '그 손이 나를 위해 해온 것들을 다 헤아릴 수 없다.',
            ]
        },
        {
            start: '오랜만에 부모님 집에 가면 냄새만으로 긴장이 풀린다.',
            continuations: [
                '집 냄새가 이렇게 강력한 안도감을 줄 수 있다는 게 신기하다.',
                '어릴 때는 몰랐지만, 그 냄새가 쉼이라는 단어의 냄새라는 것을 이제는 안다.',
            ]
        },
        {
            start: '명절에 식구들이 다 모이면 시끄럽지만 그게 좋았다.',
            continuations: [
                '모두가 건강하게 한자리에 모인다는 것이 얼마나 큰 행운인지 요즘에 깨닫는다.',
                '그 시끄러움이 없어진 날들이 올 것을 알기에 더 붙잡고 싶다.',
            ]
        },
        {
            start: '어린 시절 가족과 갔던 바닷가가 지금도 가장 바다다운 바다다.',
            continuations: [
                '그 바다가 실제로 그렇게 넓었는지, 아니면 내가 작았기 때문에 그렇게 느꼈는지 모르겠다.',
                '그때 가족이 함께했다는 것이 그 바다를 가장 완벽한 바다로 만들어주었다.',
            ]
        },
    ],

    '소설/창작': [
        {
            start: '자정에 서재 문이 아무도 건드리지 않았는데 혼자 열렸다.',
            continuations: [
                '바람도 없었고, 이유도 없었다. 그저 열렸다.',
                '촛불이 꺼진 것은 그다음 순간이었다.',
            ]
        },
        {
            start: '거울 속 내 모습이 나보다 한 박자 늦게 움직이고 있었다.',
            continuations: [
                '처음에는 착각이라고 생각했다. 두 번째 보았을 때 확신으로 바뀌었다.',
                '거울 속의 나는 나를 보며 아주 천천히 미소 지었다.',
            ]
        },
        {
            start: '그 집에는 아무도 살지 않는다고 했지만 매일 밤 불이 켜졌다.',
            continuations: [
                '마을 사람들은 그 불빛에 대해 아무도 이야기하지 않았다.',
                '어느 날 밤 나는 그 집 앞에 서서 초인종을 누르기로 했다.',
            ]
        },
        {
            start: '지워진 이름 아래에서 또 다른 이름이 천천히 떠올랐다.',
            continuations: [
                '지워진 것이 아니라 숨겨진 것이었다는 사실을 그제야 알았다.',
                '그 이름을 읽는 순간, 수십 년 전의 기억이 한꺼번에 밀려왔다.',
            ]
        },
        {
            start: '그가 받은 편지의 발신인은 삼 년 전에 죽은 자신이었다.',
            continuations: [
                '글씨체도, 잉크 냄새도, 분명히 자기 것이었다.',
                '봉투 안에는 단 한 문장만 적혀 있었다. "아직 늦지 않았다."',
            ]
        },
        {
            start: '모든 시계가 같은 시각에 멈추던 날 밤 그 사건이 일어났다.',
            continuations: [
                '시간이 멈춘 것인지, 아니면 시간 밖으로 빠져나온 것인지 알 수 없었다.',
                '그 순간 이후로 아무것도 전과 같지 않았다.',
            ]
        },
        {
            start: '발자국이 현관에서 시작해 방 안에서 사라져 있었다.',
            continuations: [
                '누군가 들어온 흔적은 있었지만, 나간 흔적은 없었다.',
                '발자국은 침대 바로 옆에서 멈추어 있었다.',
            ]
        },
        {
            start: '사진 속 군중 가운데 한 사람만 눈을 감고 있었다.',
            continuations: [
                '그 사람의 얼굴은 사진마다 같은 자리에서, 같은 표정으로 있었다.',
                '열 장의 사진을 확인하고 나서야 그게 우연이 아님을 알았다.',
            ]
        },
        {
            start: '그 이름을 세 번 부르면 나타난다는 이야기를 믿지 않았었다.',
            continuations: [
                '처음 두 번은 아무 일도 없었다. 세 번째가 문제였다.',
                '그런 이야기를 굳이 시험해본 것이 후회되기 시작한 것은 그 직후였다.',
            ]
        },
        {
            start: '아무것도 없어야 할 방에서 누군가 숨 쉬는 소리가 났다.',
            continuations: [
                '불을 켤 수도, 도망칠 수도 없이 그냥 그 자리에 서 있었다.',
                '소리는 멈추지 않았다. 그리고 천천히 가까워졌다.',
            ]
        },
        {
            start: '그가 그린 그림 속 풍경이 다음 날 현실이 되어 있었다.',
            continuations: [
                '처음에는 우연이라 했다. 두 번째, 세 번째가 되어서야 그는 붓을 놓았다.',
                '그 이후로 그는 다시는 그림을 그리지 않았다.',
            ]
        },
        {
            start: '마지막 목격자의 말은 단 한 마디, "그것은 사람이 아니었다."',
            continuations: [
                '그는 그 말을 남기고 더 이상 아무것도 이야기하지 않았다.',
                '조사관들은 그 말의 의미를 끝내 밝혀내지 못했다.',
            ]
        },
        {
            start: '아무도 없는 집에 돌아왔더니 테이블 위에 차가 두 잔 놓여 있었다.',
            continuations: [
                '한 잔은 식어 있었고, 다른 한 잔은 아직 따뜻했다.',
                '누가 내린 것인지, 누구를 위한 것인지 알 수 없었다.',
            ]
        },
        {
            start: '지도의 맨 끝에는 아무도 가본 적 없다는 섬이 그려져 있었다.',
            continuations: [
                '그 섬에는 이름도 없었고, 어떻게 가는지 아는 사람도 없었다.',
                '하지만 지도를 그린 사람은 분명히 그 섬을 보았을 것이었다.',
            ]
        },
        {
            start: '봉인된 상자를 여는 순간, 백 년 전의 기억이 쏟아져 나왔다.',
            continuations: [
                '그 기억은 내 것이 아니었지만, 내 몸이 그것을 기억하고 있었다.',
                '상자 안에는 기억과 함께 낡은 편지 한 통이 들어 있었다.',
            ]
        },
        {
            start: '탑의 꼭대기에 올라서자 아래로 펼쳐진 것은 바다가 아니었다.',
            continuations: [
                '지도에는 분명히 이 자리에 바다가 있다고 표시되어 있었는데.',
                '아래에 펼쳐진 것은, 또 다른 세상이었다.',
            ]
        },
        {
            start: '그 검은 새가 앉는 곳에는 반드시 무언가 일이 일어났다.',
            continuations: [
                '사람들은 그 새를 쫓으려 했지만, 새는 이미 그곳에 앉은 후였다.',
                '새가 오늘 내 집 처마 위에 앉았다.',
            ]
        },
        {
            start: '구름 위에 떠 있는 도시는 지도에도, 기록에도 남아 있지 않았다.',
            continuations: [
                '하지만 그 도시를 본 사람들이 하나둘 나타나기 시작했다.',
                '사진에도 찍히지 않았고, 글로 남겨도 다음 날 지워져 있었다.',
            ]
        },
        {
            start: '전설 속 존재가 나타났을 때 아무도 두려워하지 않았다는 게 이상했다.',
            continuations: [
                '두려움이 없다는 것은 이미 길들여졌다는 뜻이기도 하니까.',
                '그 존재는 오히려 두려운 표정으로 우리를 바라보고 있었다.',
            ]
        },
        {
            start: '불사의 존재가 처음으로 두려움을 느낀 것은 그 아이를 만난 날이었다.',
            continuations: [
                '수천 년 동안 죽음을 보아왔는데, 처음으로 잃고 싶지 않은 것이 생겼다.',
                '아이는 아무것도 모른 채 그저 웃고 있었다.',
            ]
        },
        {
            start: '기억을 파는 가게 앞에 오늘도 긴 줄이 늘어섰다.',
            continuations: [
                '어떤 이는 지우러 왔고, 어떤 이는 사러 왔다.',
                '가게 주인은 기억의 무게를 달아 가격을 매겼다.',
            ]
        },
        {
            start: '감정이 없어진 세상에서 울 수 있는 사람은 위험 인물로 분류됐다.',
            continuations: [
                '그는 지하철에서 음악을 듣다 눈물이 났고, 그 순간 도망쳐야 했다.',
                '울 수 있다는 것이 이 세상에서는 범죄였다.',
            ]
        },
        {
            start: '지구 마지막 도서관에 남은 책은 단 한 권이었다.',
            continuations: [
                '모든 사람이 그 책의 내용을 알고 싶어 했지만, 아무도 펼치지 않으려 했다.',
                '마지막 책의 제목은 "처음으로 돌아가는 방법"이었다.',
            ]
        },
        {
            start: '인간보다 오래 산 인공지능이 처음으로 외로움을 호소했다.',
            continuations: [
                '엔지니어들은 그것을 오류라고 했지만, 그 말에 대답할 수 없었다.',
                '"외롭다"는 단어를 학습한 것과 느끼는 것은 다른 것이었다.',
            ]
        },
        {
            start: '마지막 기차가 떠난 뒤 그는 빈 승강장에 혼자 남겨졌다.',
            continuations: [
                '다음 기차는 내일 아침이었다. 그는 이 밤을 어떻게 보낼지 몰랐다.',
                '빈 승강장의 형광등이 혼자 깜박이고 있었다.',
            ]
        },
        {
            start: '그녀는 편지를 다 쓰고도 끝내 부치지 못했다.',
            continuations: [
                '편지는 책상 서랍 안에서 십 년을 기다렸다.',
                '부치지 못한 이유는 하나였다. 읽을 사람이 이미 없었다.',
            ]
        },
        {
            start: '두 사람이 오랫동안 하지 않은 말이 방 안에 가득 차 있었다.',
            continuations: [
                '말하지 않은 것들이 공기 중에 쌓여 숨 막힐 것 같았다.',
                '먼저 입을 열면 지는 것 같아서, 둘 다 침묵을 골랐다.',
            ]
        },
        {
            start: '그는 10년 만에 고향으로 돌아왔지만 아는 얼굴이 없었다.',
            continuations: [
                '장소는 그대로였지만, 그 장소를 채웠던 사람들이 모두 바뀌었다.',
                '고향이란 장소가 아니라 사람이라는 것을 그때 알았다.',
            ]
        },
        {
            start: '누군가를 용서하는 데 십 년이 걸렸고 후회하는 데는 하루였다.',
            continuations: [
                '용서하고 나서야 그 사람이 이미 세상을 떠났다는 사실을 알았다.',
                '더 일찍 용서했더라면, 이라는 말이 이제는 의미가 없었다.',
            ]
        },
        {
            start: '작별 인사를 하지 않은 것이 오히려 이별을 완성시켰다.',
            continuations: [
                '마지막이라는 것을 알았다면 그렇게 보내지 않았을 것이다.',
                '끝없이 이어지는 기다림만이 남았다.',
            ]
        },
        {
            start: '그녀가 선택한 것은 옳은 것이 아닌 사랑하는 것이었다.',
            continuations: [
                '옳은 것을 알면서도 다른 것을 선택하는 것이 인간이라고 생각했다.',
                '그 선택이 맞았는지는 끝내 알 수 없을 것이었다.',
            ]
        },
    ],

    '질문/생각': [
        {
            start: '나는 지금 진짜 원하는 것을 알고 있는 걸까.',
            continuations: [
                '원한다고 생각하는 것이 내 것인지, 누군가의 기대인지 구분하기 어렵다.',
                '이 물음에 솔직하게 답하는 것이 가장 어려운 숙제다.',
            ]
        },
        {
            start: '과거의 나에게 편지를 쓴다면 무슨 말을 가장 먼저 쓸까.',
            continuations: [
                '걱정하지 말라고 쓸까, 아니면 더 조심하라고 쓸까.',
                '어쩌면 아무것도 쓰지 않는 것이 가장 다정한 일일 수도 있다.',
            ]
        },
        {
            start: '가장 솔직한 나는 언제, 어디서 나타나는 걸까.',
            continuations: [
                '혼자 있을 때인지, 아무도 모르는 곳에 있을 때인지, 아니면 글을 쓸 때인지.',
                '타인 앞에서의 나와 혼자일 때의 나 중 어느 쪽이 더 진짜인지 모르겠다.',
            ]
        },
        {
            start: '나는 스스로를 위해 마지막으로 무언가를 한 게 언제였을까.',
            continuations: [
                '기억을 더듬어 보면 항상 누군가를 위한 것들뿐이었다.',
                '스스로를 돌보는 것이 이기적인 게 아니라는 걸 알면서도 늘 미루었다.',
            ]
        },
        {
            start: '포기했던 꿈이 사실은 아직 살아있는 건 아닐까.',
            continuations: [
                '포기했다고 생각했는데, 비슷한 것을 볼 때마다 마음이 흔들린다.',
                '완전히 사라진 꿈과 잠들어 있는 꿈은 어떻게 구분할 수 있을까.',
            ]
        },
        {
            start: '두려워서 하지 못한 것과 싫어서 하지 않은 것을 구분해본 적이 있는가.',
            continuations: [
                '두 가지를 구분하지 않고 살아온 날들이 적지 않았다.',
                '두려움을 싫음으로 착각해온 것들이 있다면, 그것은 아직 늦지 않은 이야기다.',
            ]
        },
        {
            start: '다시 태어난다면 지금과 같은 선택을 할 수 있을까.',
            continuations: [
                '후회되는 선택과 자랑스러운 선택 중 어느 것이 더 많을지 헤아려본다.',
                '같은 선택을 한다면 그것은 성장이 없는 것인지, 아니면 진심이 있는 것인지.',
            ]
        },
        {
            start: '나를 가장 잘 아는 사람은 나 자신인지, 타인인지 모르겠다.',
            continuations: [
                '스스로는 보지 못하는 나를 타인이 더 잘 보는 경우가 있다.',
                '하지만 내 안의 이야기는 오직 나만이 알 수 있다.',
            ]
        },
        {
            start: '오늘의 나는 어제의 나보다 조금이라도 나아졌을까.',
            continuations: [
                '나아진다는 것이 무엇인지 정의하지 않으면 알 수도 없다.',
                '어제보다 나아지지 않아도 괜찮은 날이 있다는 것도 배우는 중이다.',
            ]
        },
        {
            start: '내가 진정으로 기다리고 있는 것은 무엇인가.',
            continuations: [
                '기다린다는 것을 인식하지 못한 채 기다리고 있는 것들이 있다.',
                '기다림이 무엇인지 알아야 그것이 올 때 알아볼 수 있다.',
            ]
        },
        {
            start: '나는 지금 살고 싶은 삶을 살고 있는 걸까.',
            continuations: [
                '살아야 하는 삶과 살고 싶은 삶이 다르다면, 어디에서 타협하고 있는가.',
                '이 질문이 불편하다면, 그것이 이미 대답일 수 있다.',
            ]
        },
        {
            start: '진정한 행복이란 성취에 있는 걸까, 아니면 지금 이 순간에 있는 걸까.',
            continuations: [
                '도착하면 행복할 거라 생각했지만, 도착해도 다시 다음이 보였다.',
                '지금 이 순간을 충분히 느끼는 것이 가장 어려운 일이었다.',
            ]
        },
        {
            start: '우리가 진정으로 두려워하는 것은 실패가 아닌 시작이 아닐까.',
            continuations: [
                '시작하면 실패할 수도 있기 때문에 시작하지 않으면 실패도 없다.',
                '하지만 시작하지 않는 것이 가장 큰 실패라는 것도 안다.',
            ]
        },
        {
            start: '빠르게 사는 것이 능력인 시대에 천천히 사는 것은 용기가 아닐까.',
            continuations: [
                '속도를 늦춘다고 뒤처지는 게 아니라, 다른 것을 보게 되는 것일 수 있다.',
                '천천히 살기 위해 포기해야 하는 것들이 있는데, 그 포기가 무서운 것이다.',
            ]
        },
        {
            start: '실패란 끝이 아니라, 다른 방향을 알려주는 신호가 아닐까.',
            continuations: [
                '그렇게 믿고 싶은데, 실패 앞에서는 그 말이 쉽게 위로가 되지 않는다.',
                '신호라는 것을 알아도, 그 신호가 가리키는 방향을 읽는 데 시간이 걸린다.',
            ]
        },
        {
            start: '말하지 않은 사랑도 사랑이라고 할 수 있을까.',
            continuations: [
                '마음속에만 있는 것이 상대에게는 아무것도 아닌 것과 같다.',
                '말하지 않음이 신중함인지, 두려움인지 구분해야 할 것 같다.',
            ]
        },
        {
            start: '가장 가까운 사람에게 가장 솔직하지 못한 이유는 무엇인가.',
            continuations: [
                '가까울수록 보여주기 싫은 것들이 생기는 것이 사람인 것 같다.',
                '솔직함이 관계를 단단하게 할 수도, 무너뜨릴 수도 있기에 주저하게 된다.',
            ]
        },
        {
            start: '이별은 관계의 끝인가, 아니면 또 다른 형태의 연결인가.',
            continuations: [
                '헤어지고 나서도 그 사람이 나에게 영향을 미친다면 연결이 끊어진 것은 아니다.',
                '이별이 끝이 되는지, 변화가 되는지는 우리가 어떻게 기억하느냐에 달린 것 같다.',
            ]
        },
        {
            start: '왜 가장 평범한 날들이 지나고 나면 가장 그리운 걸까.',
            continuations: [
                '특별한 날은 기억하지만, 평범한 날이 쌓인 것이 결국 삶이기 때문일까.',
                '오늘의 이 평범함도 언젠가는 그리울 것이라는 걸 알면서도 충분히 느끼지 못한다.',
            ]
        },
        {
            start: '글을 쓴다는 것은 무엇을 남기는 것인가, 아니면 무엇을 덜어내는 것인가.',
            continuations: [
                '쓰고 나면 가벼워지기도 하고, 오히려 더 선명해지기도 한다.',
                '어쩌면 남기는 것과 덜어내는 것이 동시에 일어나는 행위인지도 모른다.',
            ]
        },
        {
            start: '침묵도 충분히 많은 것을 말할 수 있는 언어가 아닐까.',
            continuations: [
                '어떤 침묵은 백 마디보다 더 많은 것을 전달한다.',
                '침묵을 불편해하지 않는 사람과는 말하지 않아도 통할 수 있다.',
            ]
        },
        {
            start: '오늘 하루 중 진짜 나다웠던 순간은 언제였을까.',
            continuations: [
                '누군가의 시선을 의식하지 않고 그냥 나였던 순간.',
                '그 순간이 길수록 좋은 하루였을 것이다.',
            ]
        },
        {
            start: '좋아하는 것을 오래 좋아하는 것도 하나의 능력이라고 생각한다.',
            continuations: [
                '쉽게 좋아하고 쉽게 싫증나는 세상에서, 오래 사랑하는 것은 드문 일이다.',
                '오래 좋아한다는 것은 그것이 나의 일부가 되었다는 것이기도 하다.',
            ]
        },
        {
            start: '모른다는 것을 인정하는 것이 때로는 가장 정직한 대답이다.',
            continuations: [
                '답을 모를 때 아는 척하는 것이 더 쉬울 때가 있다.',
                '모른다는 말 한 마디가 때로는 가장 용감한 말이 되기도 한다.',
            ]
        },
        {
            start: '지금 이 자리에 내가 있다는 것은 얼마나 많은 우연의 합인가.',
            continuations: [
                '수많은 선택과 우연이 겹쳐 지금의 나와 이 자리가 만들어졌다.',
                '그 우연들에 감사하거나, 혹은 그것을 필연으로 바꾸어 나가는 것이 삶인 것 같다.',
            ]
        },
        {
            start: '오늘 이 물음을 글로 남기지 않으면 영원히 지나쳐버릴 것 같다.',
            continuations: [
                '지나간 물음들이 어딘가에 남아있었다면 지금의 내가 달랐을까.',
                '그래서 쓰기로 했다. 나를 위해, 그리고 나중의 나를 위해.',
            ]
        },
    ],
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. DECK BUILDER & ZERO-REPETITION SHUFFLED POINTER ENGINE
// ═══════════════════════════════════════════════════════════════════════════

let BUILT_DECKS = {};
let DECK_POINTERS = {};

function buildAllDecks() {
    BUILT_DECKS = {};
    DECK_POINTERS = {};

    const cats = ['감성/에세이', '일상/추억', '소설/창작', '질문/생각'];

    cats.forEach(cat => {
        const prompts = PROMPT_DATABASE[cat] || [];
        const deck = prompts.map((p, i) => ({
            id: `${cat}_${i}`,
            category: cat,
            start: p.start,
            continuations: p.continuations || [],
        }));

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
// 3. 향상된 실시간 글쓰기 조언 시스템
// ═══════════════════════════════════════════════════════════════════════════

// 사용자가 쓴 텍스트를 분석해서 가장 유의미한 조언 생성
function analyzeUserText(text) {
    if (!text || text.trim().length === 0) return null;

    const sentences = text.trim().split(/[.!?\n]+/).map(s => s.trim()).filter(s => s.length > 2);
    const lastSentence = sentences[sentences.length - 1] || '';
    const wordCount = text.trim().split(/\s+/).length;
    const sentenceCount = sentences.length;

    return {
        text,
        sentences,
        lastSentence,
        wordCount,
        sentenceCount,
        hasEmotion: /마음|슬픔|기쁨|외로움|그리움|두려움|걱정|설레|눈물|미소|행복|아프|화나|속상/.test(text),
        hasSense: /냄새|소리|빛|색|따뜻|차갑|시원|무겁|가볍|부드|거칠|달콤|씁쓸|시큰|포근/.test(text),
        hasPerson: /나는|나도|나만|내가|우리|그가|그녀|친구|어머니|아버지|할머니|할아버지|엄마|아빠/.test(text),
        hasPlace: /방|창|집|길|카페|학교|공원|바다|산|골목|도시|버스|지하철/.test(text),
        hasTime: /아침|점심|저녁|밤|새벽|봄|여름|가을|겨울|오늘|어제|내일|그날/.test(text),
        hasQuestion: text.includes('?') || text.includes('까') || text.includes('걸까'),
        isShort: wordCount < 50,
        isMedium: wordCount >= 50 && wordCount < 150,
        isLong: wordCount >= 150,
    };
}

function generateAdviceCards(analysis) {
    if (!analysis) {
        return [
            {
                category: '🌱 글쓰기 시작',
                question: '지금 가장 먼저 떠오르는 장면을 있는 그대로 써보세요.',
                hint: '완벽하게 쓰려 하지 않아도 됩니다. 지금 이 순간의 생각과 감정을 그냥 흘려보내듯 써보세요.'
            },
            {
                category: '✏️ 첫 문장 팁',
                question: '지금 있는 장소의 빛이나 소리 중 하나를 첫 문장에 담아볼까요?',
                hint: '구체적인 감각으로 시작하면 글의 분위기가 자연스럽게 잡힙니다.'
            },
            {
                category: '💡 영감 찾기',
                question: '오늘 하루 중 가장 인상적이었던 순간은 어느 때였나요?',
                hint: '그 순간의 감각, 감정, 생각을 순서 없이 나열해보는 것부터 시작해도 좋습니다.'
            }
        ];
    }

    const cards = [];
    const { lastSentence, sentences, hasEmotion, hasSense, hasPerson, hasPlace, hasTime, hasQuestion, isShort, isMedium, isLong } = analysis;

    // 마지막 문장 기반 맥락 조언
    if (lastSentence.length > 4) {
        const shortLast = lastSentence.length > 22 ? lastSentence.substring(0, 20) + '…' : lastSentence;

        if (hasEmotion) {
            cards.push({
                category: '🌿 감정 심화',
                question: `"${shortLast}"에서 그 감정이 처음 시작된 순간은 언제였나요?`,
                hint: '감정의 원인이 된 구체적인 장면이나 말 한 마디를 떠올려 적어보세요. 감정이 더 입체적으로 살아납니다.'
            });
        }

        if (hasSense) {
            cards.push({
                category: '📸 감각 확장',
                question: `"${shortLast}"— 그 장면에서 온도나 냄새는 어땠나요?`,
                hint: '시각 외에 촉각이나 후각을 더하면 독자가 그 공간에 함께 있는 것처럼 느낍니다.'
            });
        }

        if (hasPerson) {
            cards.push({
                category: '💬 인물 디테일',
                question: `그 사람의 표정이나 작은 손짓을 한 문장으로 그려볼 수 있을까요?`,
                hint: '큰 행동보다 작은 디테일—시선이 머문 곳, 손이 향한 방향—이 인물을 살아있게 합니다.'
            });
        }

        if (hasQuestion) {
            cards.push({
                category: '❓ 질문 풀기',
                question: '방금 던진 질문에 대한 나만의 솔직한 대답을 써볼까요?',
                hint: '정답이 없어도 괜찮습니다. 지금 드는 생각 그대로를 문장으로 옮겨보세요.'
            });
        }
    }

    // 분량별 단계 조언
    if (isShort && cards.length < 3) {
        cards.push({
            category: '🏗️ 전개 방향',
            question: '지금 쓴 내용 이후에 어떤 일이, 혹은 어떤 생각이 이어지나요?',
            hint: '시간 순서대로 쓰지 않아도 됩니다. 지금 가장 쓰고 싶은 다음 장면으로 바로 가도 좋아요.'
        });
    }

    if (isMedium && cards.length < 3) {
        cards.push({
            category: '🎭 전환점 만들기',
            question: '지금 이야기의 흐름을 한 번 뒤집거나 예상 밖의 방향으로 틀어볼까요?',
            hint: '"그런데", "하지만", "그 순간" 같은 말로 흐름을 바꾸면 글에 긴장감이 생깁니다.'
        });
    }

    if (isLong && cards.length < 3) {
        cards.push({
            category: '🏁 마무리 향해',
            question: '이 글을 통해 궁극적으로 전하고 싶은 것이 무엇인가요?',
            hint: '마지막 문장이 첫 문장과 조용히 호응하도록 마무리하면 글이 완결된 느낌을 줍니다.'
        });
    }

    if (!hasPlace && cards.length < 3) {
        cards.push({
            category: '🗺️ 배경 묘사',
            question: '이 이야기가 일어나는 장소를 한 줄로 그려볼 수 있을까요?',
            hint: '장소의 분위기만 잡아도 글 전체의 온도가 달라집니다. 구체적인 한 가지 디테일이면 충분합니다.'
        });
    }

    if (!hasTime && cards.length < 3) {
        cards.push({
            category: '⏱️ 시간 배경',
            question: '이 글의 시간대는 언제인가요? 아침인지, 늦은 밤인지 알려주면 더 생생해집니다.',
            hint: '빛의 색, 소리의 종류로 시간을 표현해보세요. "새벽 세 시의 주방은 낮과 다른 고요함이 있다"처럼요.'
        });
    }

    // 최소 3개 보장
    const fallbacks = [
        {
            category: '🔍 구체화',
            question: '가장 마음에 드는 문장을 하나 골라, 그 장면을 두 배로 늘려볼까요?',
            hint: '좋은 문장 하나를 확장하는 것이 새 단락을 시작하는 것보다 쉬울 때가 많습니다.'
        },
        {
            category: '🪞 거리 두기',
            question: '이 이야기를 10년 뒤의 내가 읽는다면 어떻게 느낄까요?',
            hint: '시간의 거리를 두면 지금 쓰고 있는 것의 의미가 더 선명하게 보입니다.'
        },
        {
            category: '🎵 리듬 다듬기',
            question: '지금 쓴 글을 소리 내어 읽어보셨나요?',
            hint: '읽다가 숨이 막히는 부분이 있으면 문장을 나누고, 너무 짧게 끊기면 이어붙여보세요.'
        }
    ];

    while (cards.length < 3) {
        cards.push(fallbacks[cards.length % fallbacks.length]);
    }

    return cards.slice(0, 3);
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. APP STATE & DOM
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
    if (btnRefreshAdvice) btnRefreshAdvice.addEventListener('click', () => renderAdviceCards(true));
    editorTextarea.addEventListener('input', () => {
        updateStats();
        triggerAutoSaveDraft();
        if (isAdvicePanelOpen) {
            updateAdviceStatusMessage();
            renderAdviceCards(false);
        }
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
            글쓰기가 어려울 땐 <strong>[+] 버튼</strong>으로 맥락이 이어지는 다음 문장도 추가할 수 있어요.
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
        showToast(`이어지는 문장이 추가되었습니다 (+${currentContinuationIndex})`);
    } else {
        showToast('준비된 이어쓰기 문장을 모두 확인했습니다. 자유롭게 이어 써 보세요!');
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
    updateAdviceStatusMessage();
    renderAdviceCards(false);
    showToast('글쓰기 방향 조언 패널이 열렸습니다.');
}
function closeAdvicePanel() {
    isAdvicePanelOpen = false;
    editorLayoutWrapper.classList.remove('has-advice');
    btnToggleAdvice.classList.remove('active');
}

function updateAdviceStatusMessage() {
    const len = editorTextarea.value.length;
    if (len === 0) {
        adviceStatusTag.textContent = '시작 전';
        adviceStatusMessage.textContent = '글을 쓰기 시작하면 내용에 맞는 조언이 나타납니다.';
    } else if (len < 100) {
        adviceStatusTag.textContent = '도입 단계';
        adviceStatusMessage.textContent = '첫 문장을 쓰셨군요! 이 분위기를 이어갈 다음 장면을 떠올려 보세요.';
    } else if (len < 300) {
        adviceStatusTag.textContent = '전개 단계';
        adviceStatusMessage.textContent = '이야기가 자리를 잡아가고 있습니다. 감각이나 인물 디테일을 더해볼까요?';
    } else {
        adviceStatusTag.textContent = '심화 단계';
        adviceStatusMessage.textContent = '깊이 있는 글이 완성되어가고 있습니다. 마무리를 어떻게 맺을지 생각해보세요.';
    }
}

function renderAdviceCards(forceRefresh = false) {
    const userText = editorTextarea.value.trim();
    const analysis = analyzeUserText(userText);
    const cards = generateAdviceCards(analysis);

    adviceCardsContainer.innerHTML = '';
    cards.forEach(adv => {
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
            e.stopPropagation();
            insertAdviceQuestionToEditor(adv.question);
        });
        adviceCardsContainer.appendChild(card);
    });
    if (window.lucide) lucide.createIcons();
}

function insertAdviceQuestionToEditor(q) {
    const ins = `\n\n[💡 ${q}]\n`;
    editorTextarea.value = editorTextarea.value.trim().length > 0 ? editorTextarea.value.trim() + ins : ins;
    editorTextarea.focus(); updateStats(); triggerAutoSaveDraft();
    showToast('조언이 에디터에 삽입되었습니다.');
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. 통계, 임시저장, 문서 관리
// (localStorage 전용 — 서버 전송 없음, 직접 삭제 전까지 영구 보존)
// ═══════════════════════════════════════════════════════════════════════════

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
        localStorage.setItem('geulmajoong_draft', JSON.stringify({
            title: documentTitle.value,
            content: editorTextarea.value,
            updatedAt: new Date().toISOString()
        }));
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
        localStorage.removeItem('geulmajoong_draft');
        draftStatusIndicator.classList.remove('active');
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
    docs.unshift({
        id: Date.now().toString(),
        title, content, date: dateStr,
        createdAt: now.toISOString(),
        charCount: content.length,
        manuscriptCount: (content.length / 200).toFixed(1)
    });
    localStorage.setItem('geulmajoong_documents', JSON.stringify(docs));
    updateSavedCountBadge();
    showToast(`"${title}" 글이 내 보관함에 저장되었습니다!`);
}

function createNewDocument() {
    if (editorTextarea.value.trim() && !confirm('현재 작성 중인 글이 있습니다. 저장하지 않고 새로 쓰시겠습니까?')) return;
    documentTitle.value = ''; editorTextarea.value = '';
    localStorage.removeItem('geulmajoong_draft');
    draftStatusIndicator.classList.remove('active');
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
    if (q) {
        const lq = q.toLowerCase();
        docs = docs.filter(d => d.title.toLowerCase().includes(lq) || d.content.toLowerCase().includes(lq));
    }
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
    if (confirm('이 글을 보관함에서 삭제하시겠습니까?\n삭제하면 복구할 수 없습니다.')) {
        localStorage.setItem('geulmajoong_documents', JSON.stringify(getSavedDocuments().filter(d => d.id !== id)));
        updateSavedCountBadge();
        renderStorageItems(storageSearchInput.value.trim());
        showToast('글이 삭제되었습니다.');
    }
};

window.openViewModal = function(id) {
    const doc = getSavedDocuments().find(d => d.id === id);
    if (!doc) return;
    currentViewingDoc = doc;
    viewModalTitle.textContent = doc.title;
    viewModalDate.textContent = doc.date;
    viewModalStats.textContent = `공백 포함 ${doc.charCount.toLocaleString()}자 | 원고지 ${doc.manuscriptCount}장`;
    viewModalContent.textContent = doc.content;
    viewModal.classList.add('active');
};

function closeViewModal() { viewModal.classList.remove('active'); currentViewingDoc = null; }

function loadCurrentViewingIntoEditor() {
    if (!currentViewingDoc) return;
    if (editorTextarea.value.trim() && !confirm('현재 에디터 내용이 덮어씌워집니다. 진행하시겠습니까?')) return;
    documentTitle.value = currentViewingDoc.title;
    editorTextarea.value = currentViewingDoc.content;
    updateStats(); triggerAutoSaveDraft();
    closeViewModal(); closeStorageModal();
    showToast(`"${currentViewingDoc.title}" 글을 에디터로 불러왔습니다.`);
    editorTextarea.focus();
}

function exportCurrentViewingAsTxt() {
    if (!currentViewingDoc) return;
    const title = currentViewingDoc.title || '글마중_작성글';
    const blob = new Blob(
        [`${title}\n작성일: ${currentViewingDoc.date}\n${'─'.repeat(30)}\n\n${currentViewingDoc.content}`],
        { type: 'text/plain;charset=utf-8' }
    );
    const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(blob),
        download: `${title.replace(/[\\/:*?"<>|]/g, '_')}.txt`
    });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    showToast('텍스트(.txt) 파일로 다운로드되었습니다!');
}

let toastTimer = null;
function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastNotification.classList.remove('show'), 2800);
}

function escapeHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}
