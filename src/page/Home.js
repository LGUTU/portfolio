import Header from "./Header";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";

function home(){
  return(
    <>
    <div id="wrap">
      <Header />
      <div className="container">
        <div>
          <figure>
            <img src="img/imgmain.jpg" alt=""/>
            <figcaption>
              <dl>
                <dt>건조한 피부에 채우는 영양</dt>
                <dd>비건 비타민c 하이드레이션 크림</dd>
                <dd className="btn">
                  <button type="button"><Link to={"/src/page/Shop"}>바로 가기</Link></button>
                </dd>
                </dl>
            </figcaption>
          </figure>
        </div>
      </div>
      <article>
        <section className="box01">
          <h2>Bestsellers</h2>
          <div>
            <figure className="first">
              <Link to={"/src/page/Shop"}><img src="img/melixir1.jpg" alt=""/></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 립 버터 듀오</dt>
                  <dd>24,000원 <b>/ </b>16,000원</dd>
                </dl>
              </figcaption>           
            </figure>
            <figure className="second">
              <Link to={"/src/page/Shop"}><img src="img/melixir3.jpg" alt=""/></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 비타민c 하이드레이션 크림</dt>
                  <dd>52,000원</dd>
                </dl>
              </figcaption>
            </figure>
            <figure className="third">
            <Link to={"/src/page/Shop"}><img src="img/melixir5.jpg" alt=""/></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 에어핏 선크림 듀오</dt>
                  <dd>60,000원 <b>-</b> 50,000원</dd>
                </dl>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="box02">
          <h3>Made from Plants</h3>
          <div align="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o1nf-5Ss1Uw?autoplay=1&mute=1&amp;playlist=o1nf-5Ss1Uw&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>
        <section className="box03">
          <h4>New Arrivals</h4>

          <div className="new">
            <figure>
            <Link to={"/src/page/Shop"}><img src="img/melixir7.jpg" alt="7" /></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 핸드워시 & 핸드크림 세트</dt>
                  <dd>50,000원</dd>
                </dl>
              </figcaption>
            </figure>
            <figure>
            <Link to={"/src/page/Shop"}><img src="img/melixir9.jpg" alt="9" /></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 립 버터 & 핸드크림 세트</dt>
                  <dd>30,000원</dd>
                </dl>
              </figcaption>
            </figure>
            <figure>
            <Link to={"/src/page/Shop"}><img src="img/melixir11.jpg" alt="11" /></Link>
              <figcaption>
                <dl>
                  <dt>멜릭서 비건 바하 리퀴드 각질제거제</dt>
                  <dd>26,000원</dd>
                </dl>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="box04">
          <h4>Our Promise</h4>
          <div>
            <figure>
              <img src="img/melixir-about.jpg" alt="About"/>
              <figcaption>
                <dl>
                  <dt>민감성 피부를 위한 처방</dt>
                  <dd>멜릭서는 건강하지 않은 화장품 산업을 바꾸기 위해 채식주의 개념을 화장품으로 확장한 한국 최초의 비건 스킨케어 브랜드입니다. 혁신 기술에 기초하여 식물성 성분과 잘 선별한 안전한 인공 성분을 조합하여 피부에 가장 효과적인 제품을 만듭니다.</dd>
                </dl>
              </figcaption>
            </figure>
            <figure>
            <img src="img/melixir-sustainability.jpg" alt=""/>
              <figcaption>
                <dl>
                  <dt>지속가능성을 위한 노력</dt>
                  <dd>제조부터 제품이 사용되고 난 후의 과정까지, 멜릭서는 사람과 자연이 건강할 수 있는 방법을 고민합니다. 지속가능한 소재를 사용하고, 탄소배출 감축을 위한 공병 재활용 캠페인 미사이클을 운영하는 것은 미래 세대를 위해 우리가 지금 실천할 수 있는 것들을 조금씩 해나간다는 것을 의미합니다.
                  </dd>
                </dl>
              </figcaption>
            </figure>
          </div>
        </section>
      </article>
      <Footer />
    </div>
    </>
  )
}

export default home;