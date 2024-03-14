import Header from "./Header"
import Footer from "./Footer"

function About(){
  return (
    <>
    <Header />
      <div className="about1">
        <h1>비건 화장품 멜릭서</h1>
        <p>멜릭서는 건강하지 않은 화장품 산업을 바꾸기 위해 채식주의(VEGAN) 개념을 화장품으로 확장한 한국 최초의 비건 스킨케어 브랜드입니다. 미국 PETA를 통해 크루얼티프리 앤 비건(Cruelty-free & Vegan) 인증을 받은 멜릭서는 혁신 기술에 기초하여 민감성 피부를 위한 건강한 식물성 화장품을 만들고, 지속가능한 소재와 최소한의 포장재를 사용하며, 탄소배출 감축을 위한 화장품 공병 재활용 캠페인을 운영함으로써 일상 속 건강한 선택지를 만들어가고 있습니다.</p>
        <figure>
          <img src="" alt=""/>
        </figure>
      </div>
      <div className="about2">
        <dl>
          <dt>멜릭서 본사</dt>
          <dd>주소</dd>
          <dd>서울특별시 강남구 압구정로42길 49 (신사동) 1층, 멜릭서</dd>
          <dt>고객센터</dt>
          <dd>02-6953-7373</dd>
          <dd>info@melixirskincare.com</dd>
          <dt>업무시간</dt>
          <dd>월-금 : 9:30 - 18:00</dd>
          <dd>주말 및 공휴일 휴무</dd>
        </dl>
        <figure>
          <img src="" alt=""/>
        </figure>
      </div>
      <Footer />
    </>
  )
}

export default About;