import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">중심부에서 {item.distance}m</span>
        <span className="siTaxiOp">무료 공항 택시</span>
        <span className="siSubtitle">디럭스 패밀리 트윈룸 - 바다 전망</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">무료 취소</span>
        <span className="siCancelOpSubtitle">
          선결제 필요 없음 - 숙소에서 결제
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>{item.ratingText}</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">₩{item.cheapestPrice}0,000</span>
          <span className="siTaxOp">세금 및 기타 요금 포함</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">예약 가능 옵션 보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
