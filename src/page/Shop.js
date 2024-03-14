import Header from "./Header";
import Footer from "./Footer";
import Melixir1 from "../assets/melixir1-shop.jpg";
import Melixir2 from "../assets/melixir3.jpg";
import Melixir3 from "../assets/melixir5.jpg";
import Melixir4 from "../assets/cleansing-water.jpg";
import Melixir5 from "../assets/HandCream.jpg";
import Melixir6 from "../assets/HandWash.jpg";
import Melixir7 from "../assets/toner.jpg";
import Melixir8 from "../assets/form-cleanser.jpg";
import Melixir9 from "../assets/ShoppingBag.jpg";
import "./Shop.css";
import "./Footer.css";



function Shop(){
    return(
    <>
    <Header />
    <div id="product">
    <div id="ful">
      <h1>Shop</h1>
    </div>
    <section className="box01">
      <h2>Best Items</h2>
      <div className="img">
        <figure>
          <img src={Melixir1} alt="1"/>
            <figcaption>
              <dl>
                <dt>멜릭서 비건 립 버터 듀오</dt>
                <dd>24,000원</dd>
              </dl>
            </figcaption>
        </figure>
        <figure>
          <img src={Melixir2} alt="2"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 비타민c 하이드레이션 크림</dt>
              <dd>52,000원</dd>
            </dl>
          </figcaption>
      </figure>
        <figure>
          <img src={Melixir3} alt="3"/>
          <figcaption>
            <dl>
              <dt>비건 에어핏 선스크린 29CM</dt>
              <dd>21,900원</dd>
            </dl>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="box02">
      <h3>ItemList</h3>
      <div className="img2">
        <figure>
          <img src={Melixir4} alt="4"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 티트리 클렌징 워터</dt>
              <dd>20,000원</dd>
            </dl>
          </figcaption>
          </figure>
        <figure>
          <img src={Melixir5} alt="5"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 핸드크림</dt>
              <dd>20,000원</dd>
            </dl>
          </figcaption>
          </figure>
        <figure>
          <img src={Melixir6} alt="6"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 핸드워시</dt>
              <dd>28,000원</dd>
            </dl>
          </figcaption>
          </figure>
        <figure>
          <img src={Melixir7} alt="7"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 밸런싱 토너</dt>
              <dd>15,000원</dd>
            </dl>
          </figcaption>
          </figure>
        <figure>
          <img src={Melixir8} alt="8"/>
          <figcaption>
            <dl>
              <dt>멜릭서 비건 클래리파잉 폼 클렌저</dt>
              <dd>18,000원</dd>
            </dl>
          </figcaption>
          </figure>
        <figure>
          <img src={Melixir9} alt="9"/>
          <figcaption>
            <dl>
              <dt>쇼핑백</dt>
              <dd>2,500원</dd>
            </dl>
          </figcaption>
          </figure>
      </div>
    </section>
    </div>
    <Footer />
    </>
    )
}

export default Shop;