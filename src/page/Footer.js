import "./Footer.css"
import Logo from "../assets/Logo.png";

function footer(){
  return(
    <>
      <div id="container">
        <div>
          <dl className="fst">
            <dt><img src={Logo} alt="1"/></dt>
            <dd>Copyright © 주식회사 멜릭서.All rights reserved.</dd>
          </dl>
        </div>
      <dl className="sec">
        <dt>Customer center</dt>
        <dd>02-6953-7373</dd>
        <dd>업무 시간 : 평일 09:30-18:00</dd>
        <dd>휴무 : 주말 및 공휴일</dd>
        <dd>국민은행 378801-01-132905</dd>
        <dd>예금주 : 주식회사 멜릭서</dd>
      </dl>
      <dl className="tri">
        <dt>Company info</dt>
        <dd>상호명 : 주식회사 멜릭서</dd>
        <dd>대표 : 이하나</dd>
        <dd>주소 : 서울특별시 강남구 압구정로42길 49 (신사동) 1층, 멜릭서</dd>
        <dd>사업자 등록번호 : 825-81-00918</dd>
        <dd>통신판매신고번호 : 2020-서울성동-00928</dd>
        <dd>이메일 : info@melixirskincare.com</dd>
      </dl>
      <dl className="forth">
        <dt>Shop Menu</dt>
        <dd>Notice</dd>
        <dd>My page</dd>
        <dd>Q&A</dd>
        <dd>FAQ</dd>
      </dl>
      <dl className="fif">
        <dt>Follow us</dt>
        <dd>Instagram</dd>
        <dd>Smartstore</dd>
      </dl>  
      </div>  
    </>
  )
}  


export default footer;