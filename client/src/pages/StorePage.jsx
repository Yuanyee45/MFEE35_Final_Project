import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css/store.css";
import Footer from "../components/footer";

import { Helmet } from "react-helmet";

const StorePage = () => {
  // 設定秒數
  const [second, setSecond] = useState("1");
  const [numIds, setNumIds] = useState();
  const [caroesel, setCarousel] = useState("");
  const [images, setImages] = useState("");
  const [eventTitles, setEventTitle] = useState("");
  const [texts, setText] = useState("");

  // 試用哲銓的api(活動)需要帶入回傳的資料項
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/activity/getActivity`)
      .then((res) => {
        console.log(res);
        setImages(res.data.map((image) => image.activityUrl));
        setEventTitle(res.data.map((eventTitle) => eventTitle.activityName));
        const ids = res.data.map((numId) => numId.activityId);
        setNumIds(ids.length);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // 環境重新渲染的function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevCount) => (prevCount % numIds) + 1);
    }, 2000);

    setCarousel(images[second - 1]);
    setText(eventTitles[second - 1]);

    return () => clearInterval(intervalId);
  }, [second, numIds]);

  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="firstP">
        <div>
          <p className="topicText">PRODUCT</p>
        </div>
        <div className="countdownContainer">
          <div className="countingIcon">
            <div className="countingNumber">{second}</div>
          </div>
          <a href="http://localhost:3000/goods" rel="noreferrer">
            <div className="changingImg">
              <img className="chPic" src={caroesel} alt="輪播圖" />
            </div>
          </a>
          <a
            className="event"
            href="http://localhost:3000/goods"
            rel="noreferrer"
            target="_blank"
          >
            {texts}
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="goodsPge">
        <span className="drinkgoodsPge">
          <a
            className="a"
            href="http://localhost:3000/goods"
            rel="noreferrer"
            target="_blank"
          >
            乳清蛋白
          </a>
        </span>
        <span className="dietgoodsPge">
          <a
            className="b"
            href="http://localhost:3000/goods"
            rel="noreferrer"
            target="_blank"
          >
            增肌減脂套餐
          </a>
        </span>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="mycontain">
        <div className="selectS">
          <span className="allGoods">
            <p>全站商品</p>
          </span>
          <span className="goodsQty">
            <p>
              共 <input className="howMuchGoods" type="text" placeholder="12" />{" "}
              件商品
            </p>
          </span>
          <span className="changegoodsWay">
            <button
              id="cardLn"
              className="squareBtn"
              //   onClick={this.handleCardLnClick}
            >
              <img
                className="squareImg"
                src="./image/store/changebtn1.png"
                alt="squarebtn"
              />
            </button>
            <button
              id="cardBl"
              className="listBtn"
              //   onClick={this.handleCardBlClick}
            >
              <img
                className="listImg"
                src="./image/store/changebtn2.webp"
                alt="listbtn"
              />
            </button>
          </span>
        </div>
        <br />
        <p id="top"></p>
        <hr />
      </div>

      <div>
        <a href="http://localhost:3000/goodstop" className="gotopBtn">
          <div className="backGroup">
            <div>
              <img
                className="arrowImg"
                src="./image/store/backToTop.png"
                alt="箭頭"
              />
            </div>
            <span>TOP</span>
          </div>
        </a>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div className="mycardIcon">
                <img id="myCard" src="./image/store/good1.png" alt="商品大圖" />
                <span className="hiddenIcon">
                  <div className="magnifierBlock">
                    <img src="./image/store/ magnifier.png" alt="放大鏡" />
                  </div>
                </span>
              </div>
            </a>

            <br />
            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <div>
                <p className="fw-semibold cardTopic">
                  紅酒燉牛肉烤蔬菜地瓜餐盒
                </p>
                <p className="cardText">
                  紅酒燉牛肉：綜合牛腱,紅酒,洋蔥,紅蘿蔔,番茄碎,百里香,月桂葉,迷迭香,西洋芹,鹽,黑胡椒粉。
                  <br />
                  地中海堅果烤蔬菜＋地瓜：牛番茄,紫洋蔥,青花菜,玉米筍,綠橄欖,橄欖油,鹽,葵瓜子,地瓜。
                </p>
              </div>
            </a>

            <a
              href="http://localhost:3000/goods"
              rel="noreferrer"
              target="_blank"
              className="whereUsergo"
            >
              <span className="cardSprice">NTD1200</span>
              <span className="cardPrice">NTD1600</span>
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="nextPage">
        <a
          href="http://localhost:3000/goods"
          rel="noreferrer"
          className="nextOne"
        >
          1
        </a>
        <a
          href="http://localhost:3000/goods"
          rel="noreferrer"
          className="nextTwo"
        >
          2
        </a>
        <a
          href="http://localhost:3000/goods"
          rel="noreferrer"
          className="nextThree"
        >
          3
        </a>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default StorePage;
