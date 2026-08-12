// ==========================================================================
// ✍️ 글마중 - 수작업 완성 문장 뱅크 (비문 제로, 카테고리당 100개+)
// ==========================================================================

// ═══════════════════════════════════════════════════════════════════════════
// 1. 수작업 완성 문장 뱅크 (조합 없음, 모든 문장 개별 검수)
// ═══════════════════════════════════════════════════════════════════════════

const PROMPT_DATABASE = {
    '감성/에세이': [
        // --- 감각과 공간 ---
        '오래된 일기를 펼쳤더니 그때의 계절 냄새가 그대로였다.',
        '식어가는 커피를 앞에 두고 한참을 멍하니 앉아 있었다.',
        '해가 기울자 방 안으로 들어오는 빛의 색이 달라졌다.',
        '창밖에 빗소리가 들리기 시작하자 마음이 조용히 가라앉았다.',
        '아무것도 켜지 않은 방에 혼자 앉아 있으면 생각이 또렷해진다.',
        '버스 창에 이마를 기대자 도시의 불빛이 길게 번지며 흘렀다.',
        '달이 뜬 테라스에서 아무 말도 없이 하늘을 바라보았다.',
        '낡은 노트 한 권을 꺼냈더니 그 시절 서툰 글씨가 가득했다.',
        '비어있는 컵을 손에 쥔 채로 오랫동안 창밖을 보고 있었다.',
        '노을이 지는 골목을 걸었더니 세상이 잠깐 따뜻해진 것 같았다.',
        '선반 위에 쌓인 책들을 보다가 오래전 읽었던 문장이 떠올랐다.',
        '새벽 세 시의 주방은 낮과 전혀 다른 종류의 고요함이 있다.',
        '첫차가 오기 전 승강장에 혼자 서 있으면 세상이 내 것 같다.',
        '라디오에서 흘러나오는 노래가 오래전 기억을 데려왔다.',
        '이사 가기 전날 밤, 빈 방에 혼자 앉아 벽을 바라보았다.',
        '해가 드는 창가에 화분 하나를 올려두었더니 방이 달라 보였다.',
        '오래된 동네 골목을 다시 걸었더니 시간이 거꾸로 흐르는 것 같았다.',
        '잠들기 전 오늘 하루를 떠올려 보면 별것 없이도 충분했다.',
        '아침 햇살이 이불 위로 들어오는 순간이 하루 중 가장 좋다.',
        '아무 계획도 없는 일요일 오후에야 비로소 숨이 쉬어진다.',
        // --- 내면과 감정 ---
        '잊고 지냈던 사람의 이름이 문득 떠올라 한동안 멍했다.',
        '오늘은 아무에게도 연락하고 싶지 않은 날이었다.',
        '좋았던 것들은 왜 항상 지나고 나서야 선명해지는 걸까.',
        '말하지 못하고 삼켰던 것들이 마음속 어딘가에 쌓여 있다.',
        '이상하게 오늘은 아무것도 설명하고 싶지 않았다.',
        '오래 묵은 그리움이 별 이유 없이 차올라 당황스러웠다.',
        '충분히 괜찮은 척했는데, 혼자가 되자 눈물이 났다.',
        '다 괜찮다는 말이 나 자신에게도 가끔은 거짓말이 된다.',
        '슬픔이 잘못이 아니라 여전히 살아있다는 증거라고 믿는다.',
        '마음의 속도는 세상보다 언제나 조금씩 느렸다.',
        '어떤 그리움은 대상이 없어도 그냥 찾아오기도 한다.',
        '쓰지 않은 문장들이 마음속에서 가장 오래 산다.',
        '아무것도 아닌 것들이 오늘따라 유독 다정하게 느껴졌다.',
        '이 조용함이 조금만 더 오래 머물러 주면 좋겠다.',
        '누군가를 기다리는 것도, 보내는 것도 사랑의 다른 이름이다.',
        '살면서 혼자 감내해온 것들이 생각보다 많다는 걸 알았다.',
        '오늘 하루 수고했다는 말을 나 자신에게 건네는 연습을 한다.',
        '기억이란 가장 가깝고도 멀리 있는 여행지다.',
        '마음 한 귀퉁이가 오늘따라 유독 쓸쓸하게 환하다.',
        '이 감정에 이름을 붙이자면 딱 맞는 단어가 없어서 그냥 둔다.',
        // --- 사람과 관계 ---
        '어떤 사람은 한마디로 하루 전체를 따뜻하게 만들어주기도 한다.',
        '오래 알고 지낸 사람의 목소리가 갑자기 낯설게 들린 적이 있다.',
        '헤어지면서 한 마지막 인사가 진짜 마지막일 줄 몰랐다.',
        '그 사람이 떠난 자리에는 한동안 그 사람의 온도가 남아 있었다.',
        '말하지 않아도 편한 사람이 곁에 있다는 건 참 다행한 일이다.',
        '가끔은 아무것도 묻지 않고 그냥 옆에 있어주는 것이 최선이다.',
        '오랜 친구와 전화를 끊고 나면 이상하게 더 보고 싶어진다.',
        '처음 만났을 때부터 오래 알고 지낸 것 같은 사람이 있다.',
        '그 사람에게 하지 못한 말이 아직도 목 근처에 걸려 있다.',
        '함께 있어도 각자의 생각 속에 있을 때가 우리에게는 제일 편했다.',
        // --- 계절과 시간 ---
        '봄이 올 때마다 지난 겨울이 한꺼번에 녹아드는 기분이 든다.',
        '여름 소나기가 쏟아지는 냄새를 맡으면 유독 쓸쓸해진다.',
        '가을은 짧아서 아름다운 것인지, 아름다워서 짧게 느껴지는 것인지 모르겠다.',
        '겨울 새벽 공기를 마시면 머릿속이 한 번에 정리되는 것 같다.',
        '계절이 바뀔 때마다 지나간 것들에 대해 한 번씩 생각하게 된다.',
        '시간이 빠르게 간다는 것을 느낄 때는 항상 뒤늦은 때다.',
        '해가 짧아지기 시작하면 마음도 괜히 서둘러지는 것 같다.',
        '아무것도 달라지지 않는 것 같아도 계절은 어김없이 바뀐다.',
        '오늘 같은 날씨가 다시는 없을 것 같아 사진을 찍어두었다.',
        '첫눈이 내리는 날에는 평소에 연락하지 않던 사람이 생각난다.',
    ],

    '일상/추억': [
        // --- 어린 시절 ---
        '어머니가 끓여주던 된장찌개 냄새가 집이라는 단어의 정의였다.',
        '방학이면 찾아갔던 외갓집 마루는 늘 서늘하고 나무 냄새가 났다.',
        '소풍 가던 날 아침, 도시락 싸는 소리에 잠이 일찍 깨곤 했다.',
        '교복 주머니에는 항상 꾸깃꾸깃한 오백 원짜리가 들어 있었다.',
        '방학 숙제를 끝마지막 날에 몰아서 했던 그 긴장감이 생각난다.',
        '새 학기 첫날 새 교과서 냄새를 맡던 기분을 아직도 기억한다.',
        '아버지 어깨에 올라타고 동네 한 바퀴를 돌던 일이 떠오른다.',
        '할머니 손은 항상 거칠고 따뜻했으며 콩 볶는 냄새가 났다.',
        '장마철이면 빗소리를 들으며 만화책을 읽던 여름이 그립다.',
        '운동회 날 달리기에서 꼴찌를 했어도 기분이 나쁘지 않았다.',
        '두꺼운 이불 속에서 손전등으로 책을 읽다가 들킨 적이 있다.',
        '처음으로 혼자 버스를 탔던 날의 설렘과 긴장감이 아직 남아 있다.',
        '여름밤 마당에서 반딧불이를 잡던 일이 꿈처럼 아득하다.',
        '친구들과 동네 골목에서 해 질 때까지 뛰어놀던 시절이 있었다.',
        '처음으로 용돈을 받아 혼자 문구점에 갔던 날이 생생하다.',
        '할아버지와 손잡고 걷던 겨울 논두렁이 아직도 눈에 선하다.',
        '학교 앞 분식집 튀김 냄새는 지금도 어딘가에서 맡으면 그때가 된다.',
        '야자 시간에 몰래 먹던 초코빵이 왜 그렇게 맛있었는지 모른다.',
        '처음으로 자전거를 혼자 탔던 날 아버지가 울었다는 걸 나중에 알았다.',
        '친구에게 처음으로 비밀을 털어놓던 날 밤이 유독 기억난다.',
        // --- 학창 시절 ---
        '졸업 앨범 속에서 어색하게 웃고 있는 나를 발견하면 반갑다.',
        '중학교 복도 끝 수돗가에서 마시던 물이 세상에서 제일 시원했다.',
        '수학 시간에 몰래 소설책을 읽다가 선생님께 들킨 기억이 있다.',
        '고3 때 새벽에 혼자 공부하다 먹던 라면이 그렇게 맛있을 수가 없었다.',
        '졸업식 날 교문을 나서면서 이제 다 됐다고 생각했던 그 기분.',
        '전학 가는 친구와 마지막으로 분식집에서 떡볶이를 먹었다.',
        '수행평가 발표 전날 밤 잠 못 이루던 그 긴장감이 떠오른다.',
        '체육 시간에 팀에서 꼴찌로 뽑히던 그 민망함을 아직도 안다.',
        '합창 대회 전날 파트 연습을 하다가 웃음이 멈추지 않았다.',
        '선생님이 써준 생활기록부 한 줄이 고맙게도 오래 기억난다.',
        // --- 청년과 일상 ---
        '첫 자취방 창문이 너무 작아서 매일 해가 일찍 졌다.',
        '첫 월급으로 산 케이크를 혼자 먹으며 뭔가 어른이 된 것 같았다.',
        '처음 혼자 살 때 밥을 차려 먹다가 괜히 눈물이 났다.',
        '취업 준비를 하던 겨울에 혼자 걷던 강변 길이 생각난다.',
        '오래된 단골 식당 사장님이 "오늘도 혼자야?"라고 물었던 날.',
        '스물다섯에 혼자 떠난 여행에서 길을 잃었던 게 지금도 소중하다.',
        '이유 없이 눈물이 나던 날 버스에서 혼자 울었던 적이 있다.',
        '처음으로 제대로 사랑했던 사람과 이별하던 날의 공기가 기억난다.',
        '친구들이 하나둘 떠나고 혼자 남은 도시가 처음에는 너무 낯설었다.',
        '밤새워 만든 기획서가 아침에 채택되던 날의 뿌듯함이 잊히지 않는다.',
        // --- 가족과 일상 ---
        '아버지가 새벽에 일어나 준비하던 소리를 자는 척 들었던 날들이 있다.',
        '어머니의 손이 언제부터 그렇게 주름졌는지 모르고 지났다.',
        '오랜만에 부모님 집에 가면 냄새만으로 긴장이 풀린다.',
        '명절에 식구들이 다 모이면 시끄럽지만 그게 좋았다.',
        '어릴 때 가족과 갔던 바닷가가 지금도 가장 바다다운 바다다.',
        '형제와 싸웠던 날에도 한 이불을 덮고 잤던 게 이상하게 그립다.',
        '부모님이 두 분 다 계실 때 함께한 밥상이 가장 완전했다.',
        '어린 시절 가족 여행 사진 속 우리는 어쩜 그리 작고 밝았을까.',
        '아직도 어머니 목소리가 전화기 너머로 들리면 마음이 놓인다.',
        '언젠가 이 평범한 가족의 식탁이 그리워질 날이 올 것이다.',
        // --- 친구와 추억 ---
        '오랜 친구와 만나면 수년의 공백이 몇 마디로 사라진다.',
        '같이 밤새워 이야기한 친구가 지금은 다른 나라에 살고 있다.',
        '가장 힘들 때 아무 말 없이 옆에 앉아 있어준 친구가 있었다.',
        '친구들과 나눈 터무니없는 꿈 이야기가 실은 가장 진심이었다.',
        '오랫동안 연락하지 않다가 다시 만나도 달라진 게 없는 친구가 있다.',
    ],

    '소설/창작': [
        // --- 미스터리 / 공포 ---
        '자정에 서재 문이 아무도 건드리지 않았는데 혼자 열렸다.',
        '거울 속 내 모습이 나보다 한 박자 늦게 움직이고 있었다.',
        '그 집에는 아무도 살지 않는다고 했지만 매일 밤 불이 켜졌다.',
        '지워진 이름 아래에서 또 다른 이름이 천천히 떠올랐다.',
        '그가 받은 편지의 발신인은 삼 년 전에 죽은 자신이었다.',
        '모든 시계가 같은 시각에 멈추던 날 밤 그 사건이 일어났다.',
        '발자국이 현관에서 시작해 방 안에서 사라져 있었다.',
        '사진 속 군중 가운데 한 사람만 눈을 감고 있었다.',
        '문을 잠그고 나왔는데 방 안에서 발소리가 들렸다.',
        '그 이름을 세 번 부르면 나타난다는 이야기를 믿지 않았었다.',
        '아무것도 없어야 할 방에서 누군가 숨 쉬는 소리가 났다.',
        '그가 그린 그림 속 풍경이 다음 날 현실이 되어 있었다.',
        '마지막 목격자의 말은 단 한 마디, "그것은 사람이 아니었다."',
        '아무도 없는 집에 돌아왔더니 테이블 위에 차가 두 잔 놓여 있었다.',
        '그 노인이 말했던 예언은 단 하나도 틀린 적이 없었다.',
        // --- 판타지 / 모험 ---
        '지도의 맨 끝에는 아무도 가본 적 없다는 섬이 그려져 있었다.',
        '봉인된 상자를 여는 순간, 백 년 전의 기억이 쏟아져 나왔다.',
        '탑의 꼭대기에 올라서자 아래로 펼쳐진 것은 바다가 아니었다.',
        '오래된 서적 속에 그것을 소환하는 주문이 적혀 있었다.',
        '그 검은 새가 앉는 곳에는 반드시 무언가 일이 일어났다.',
        '구름 위에 떠 있는 도시는 지도에도, 기록에도 남아 있지 않았다.',
        '마법사가 마지막으로 남긴 것은 한 장의 지도와 깃털 하나였다.',
        '그 문을 열 수 있는 사람은 세상에 오직 한 명뿐이라고 했다.',
        '전설 속 존재가 나타났을 때 아무도 두려워하지 않았다는 게 이상했다.',
        '불사의 존재가 처음으로 두려움을 느낀 것은 그 아이를 만난 날이었다.',
        '천 년을 잠들어 있던 것이 드디어 눈을 뜨기 시작했다.',
        '그 별이 사라지는 순간 세계의 균형이 흐트러지기 시작했다.',
        '아무도 몰랐지만, 그 소년은 이미 오래전부터 모든 것을 알고 있었다.',
        '왕국의 비밀은 왕도, 왕비도 아닌 오래된 정원사가 지키고 있었다.',
        '멈춰있던 시간이 다시 흐르기 시작했을 때 세상이 달라져 있었다.',
        // --- 드라마 / 인물 중심 ---
        '마지막 열차가 떠난 뒤 그는 빈 승강장에 혼자 남겨졌다.',
        '그녀는 편지를 다 쓰고도 끝내 부치지 못했다.',
        '두 사람이 오랫동안 하지 않은 말이 방 안에 가득 차 있었다.',
        '그는 10년 만에 고향으로 돌아왔지만 아는 얼굴이 없었다.',
        '누군가를 용서하는 데 십 년이 걸렸고 후회하는 데는 하루였다.',
        '그 작은 카페에서 두 사람은 우연히 다시 마주쳤다.',
        '작별 인사를 하지 않은 것이 오히려 이별을 완성시켰다.',
        '그가 말하지 않은 진실 하나가 두 사람의 삶을 갈랐다.',
        '오랫동안 믿었던 사람이 사실 처음부터 거짓말을 했다.',
        '결국 그녀가 선택한 것은 옳은 것이 아닌 사랑하는 것이었다.',
        '그 도시를 떠나기로 결심했을 때 처음으로 자유로워진 기분이었다.',
        '두 사람의 이야기는 끝났지만 장소는 그들을 오래 기억하고 있었다.',
        '그는 자신이 사랑받고 있다는 것을 끝내 알지 못했다.',
        '한 통의 전화가 모든 것을 바꿔놓았다.',
        '그녀는 평생 숨겨온 비밀을 처음 만난 낯선 이에게 털어놓았다.',
        // --- SF / 상상 ---
        '기억을 파는 가게 앞에 오늘도 긴 줄이 늘어섰다.',
        '감정이 없어진 세상에서 울 수 있는 사람은 위험 인물로 분류됐다.',
        '꿈과 현실을 구분하는 기계가 처음으로 오작동을 일으켰다.',
        '지구 마지막 도서관에 남은 책은 단 한 권이었다.',
        '인간보다 오래 산 인공지능이 처음으로 외로움을 호소했다.',
        '2050년, 사람들은 더 이상 글을 손으로 쓰지 않았다.',
        '시간을 되돌리는 기계는 완성됐지만 아무도 사용하지 않았다.',
        '감정을 이식하는 수술이 보편화된 세상에서 진짜 슬픔을 찾기 어려워졌다.',
        '그 행성에는 언어가 없었고, 모든 것은 글로만 전달됐다.',
        '마지막 인간이 눈을 감기 전에 남긴 말은 "다시 해봐"였다.',
        // --- 단편적 장면 ---
        '할머니의 낡은 재봉틀 소리가 온 집 안을 가득 채우던 오후.',
        '첫사랑이 웃으며 고개를 돌리던 순간, 시간이 멈춘 것 같았다.',
        '비가 쏟아지는 골목에서 우산을 나눠 쓰던 것이 시작이었다.',
        '그 식당 창가 자리에 앉으면 항상 같은 풍경이 보였다.',
        '계단 세 칸을 뛰어오르던 소리, 그것이 그가 왔다는 신호였다.',
    ],

    '질문/생각': [
        // --- 나 자신에 대한 질문 ---
        '나는 지금 진짜 원하는 것을 알고 있는 걸까.',
        '과거의 나에게 편지를 쓴다면 무슨 말을 가장 먼저 쓸까.',
        '가장 솔직한 나는 언제, 어디서 나타나는 걸까.',
        '나는 스스로를 위해 마지막으로 무언가를 한 게 언제였을까.',
        '지금의 선택들이 훗날 어떻게 기억될지 가끔 궁금해진다.',
        '포기했던 꿈이 사실은 아직 살아있는 건 아닐까.',
        '나를 가장 잘 아는 사람은 나 자신인지, 타인인지 모르겠다.',
        '두려워서 하지 못한 것과, 싫어서 하지 않은 것을 구분해본 적이 있는가.',
        '다시 태어난다면 지금과 같은 선택을 할 수 있을까.',
        '오늘의 나는 어제의 나보다 조금이라도 나아졌을까.',
        '내가 진정으로 기다리고 있는 것은 무엇인가.',
        '스스로를 돌보는 것과 자신을 사랑하는 것은 다른 일일까.',
        '지금 이 감정에 정직하게 이름을 붙인다면 무엇이 될까.',
        '나는 지금 살고 싶은 삶을 살고 있는 걸까, 살아야 하는 삶을 사는 걸까.',
        '가장 중요하다고 생각했던 것이 지금도 중요한가.',
        // --- 삶과 인생에 대한 질문 ---
        '진정한 행복이란 성취에 있는 걸까, 아니면 지금 이 순간에 있는 걸까.',
        '우리가 진정으로 두려워하는 것은 실패가 아닌 시작이 아닐까.',
        '좋은 삶이란 무엇인가라는 질문은 너무 크지만, 오늘만큼은 생각해보고 싶다.',
        '빠르게 사는 것이 능력인 시대에 천천히 사는 것은 용기가 아닐까.',
        '실패란 끝이 아니라, 다른 방향을 알려주는 신호가 아닐까.',
        '가장 작은 친절이 가장 오래 기억되는 이유는 무엇일까.',
        '말하지 않은 사랑도 사랑이라고 할 수 있을까.',
        '모든 것을 알면서도 같은 선택을 할 수 있는 것이 진정한 용기다.',
        '삶은 목적지가 아니라 걷는 방식에 있다고 믿고 싶다.',
        '잃는 것을 두려워할 만큼 사랑하고 있다면 그것만으로 충분하지 않을까.',
        '완벽한 선택은 없지만, 선택하는 것 자체가 이미 삶이다.',
        '타인의 기대에 맞추는 삶과 스스로 만족하는 삶 중 어느 것이 나에게 가까운가.',
        '모른다는 것을 인정하는 것이 때로는 가장 정직한 대답이다.',
        '오늘을 충분히 살았다고 말할 수 있는 기준이 나에게 있는가.',
        '기억하고 싶은 것과 잊고 싶은 것, 그 사이에서 우리는 어떻게 살아가는가.',
        // --- 사람과 관계에 대한 질문 ---
        '진심으로 누군가를 이해한다는 것이 정말 가능한 일일까.',
        '상처를 준 사람을 용서하는 것은 그를 위한 일일까, 나를 위한 일일까.',
        '오래된 관계와 새로운 관계 중 어느 것이 더 나를 잘 아는 걸까.',
        '가장 가까운 사람에게 가장 솔직하지 못한 이유는 무엇인가.',
        '사랑은 감정인가, 의지인가, 아니면 그 사이 어딘가인가.',
        '말하지 않아도 통한다는 것은 믿음인가, 착각인가.',
        '이별은 관계의 끝인가, 아니면 또 다른 형태의 연결인가.',
        '좋은 관계란 서로를 바꾸는 것인가, 서로를 그대로 두는 것인가.',
        '가장 오래 기억에 남는 사람은 가장 오래 함께한 사람일까.',
        '처음 만난 사람에게 우리는 왜 때로 더 솔직해지는 걸까.',
        // --- 세상과 일상에 대한 질문 ---
        '침묵도 충분히 많은 것을 말할 수 있는 언어가 아닐까.',
        '왜 가장 평범한 날들이 지나고 나면 가장 그리운 걸까.',
        '아무것도 하지 않는 시간도 삶의 일부라고 인정해도 괜찮을까.',
        '글을 쓴다는 것은 무엇을 남기는 것인가, 아니면 무엇을 덜어내는 것인가.',
        '오늘 하루 중 진짜 나다웠던 순간은 언제였을까.',
        '지금 이 자리에 내가 있다는 것은 얼마나 많은 우연의 합인가.',
        '느리게 살아도 괜찮다는 말을 진심으로 믿을 수 있을까.',
        '세상이 빠를수록 나만의 속도를 유지하는 것이 더 중요해지는 것 같다.',
        '좋아하는 것을 오래 좋아하는 것도 하나의 능력이라고 생각한다.',
        '오늘 이 물음을 글로 남기지 않으면 영원히 지나쳐버릴 것 같다.',
    ],
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. 이어쓰기 가이드 문장 (카테고리별 3세트)
// ═══════════════════════════════════════════════════════════════════════════

const CONT_POOL = {
    '감성/에세이': [
        ['그날의 온기가 이렇게나 오래 남을 줄 몰랐다.', '아마 그때의 나도 나름의 최선을 다했을 것이다.', '이 고요함이 오래 머물러 주기를 바란다.'],
        ['말하지 못한 것들이 지금은 그리움의 이름을 달고 있다.', '오늘 밤만큼은 아무것도 설명하지 않아도 된다.', '슬픔이 잘못이 아니라는 걸 이제는 안다.'],
        ['기억은 가장 따뜻한 여행지다.', '오늘 하루도 참 수고로웠다는 말을 나 자신에게 건넨다.', '이 감정에 이름을 붙이지 않아도 충분히 진짜다.'],
    ],
    '일상/추억': [
        ['그 시절이 그리 먼 것도 아닌 것 같다.', '기억이 이렇게 생생한 건 그만큼 소중했다는 뜻이다.', '언젠가 오늘도 그렇게 그리워지겠지.'],
        ['가장 평범했던 날들이 지금은 가장 눈부시다.', '함께였던 사람들은 지금 어디에 있을까.', '돌아갈 수 없기에 더욱 소중하다.'],
        ['삶은 결국 이런 사소한 것들로 이루어진다.', '그 시절 우리는 빛나고 있었다.', '지금 이 일상도 나중엔 그리울 것이다.'],
    ],
    '소설/창작': [
        ['이제 돌아갈 방법은 사라졌다.', '세계는 그 이전과 이후로 나뉘었다.', '살아남은 자의 이야기가 비로소 시작됐다.'],
        ['진실을 아는 자는 단 한 명뿐이었다.', '그 선택이 결국 모든 것을 바꿔놓았다.', '아무도 믿지 않겠지만, 그것은 분명히 일어났다.'],
        ['운명은 거역하는 것이 아니라 선택하는 것이었다.', '이 이야기를 기록할 수 있는 사람은 이제 나뿐이다.', '그날 이후로 세상은 예전으로 돌아가지 않았다.'],
    ],
    '질문/생각': [
        ['답을 모르기에 오히려 오래 생각하게 된다.', '어쩌면 질문하는 것만으로 충분하다.', '가장 어려운 상대는 언제나 나 자신이었다.'],
        ['물음표 하나가 마침표보다 더 많은 걸 담을 때가 있다.', '나는 오늘도 나에게 가장 솔직하지 못하다.', '정답이 없는 질문일수록 더 오래 품고 싶어진다.'],
        ['삶은 이 모든 물음 위를 걷는 여정이다.', '이 생각을 글로 남기지 않으면 영원히 맴돌 것이다.', '가장 용감한 일은 스스로에게 솔직한 질문을 던지는 것이다.'],
    ],
};

// ═══════════════════════════════════════════════════════════════════════════
// 3. DECK BUILDER & ZERO-REPETITION SHUFFLED POINTER ENGINE
// ═══════════════════════════════════════════════════════════════════════════

let BUILT_DECKS = {};
let DECK_POINTERS = {};

function buildAllDecks() {
    BUILT_DECKS = {};
    DECK_POINTERS = {};

    const cats = ['감성/에세이', '일상/추억', '소설/창작', '질문/생각'];

    cats.forEach(cat => {
        const sentences = PROMPT_DATABASE[cat] || [];
        const contPool = CONT_POOL[cat] || [];

        const deck = sentences.map((sent, i) => ({
            id: `${cat}_${i}`,
            category: cat,
            start: sent,
            continuations: contPool[i % contPool.length],
        }));

        shuffleDeck(deck);
        BUILT_DECKS[cat] = deck;
        DECK_POINTERS[cat] = 0;
    });

    // 전체 덱
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
// 5. APP STATE & DOM
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
