import { useNavigate, useParams } from "react-router-dom";
import { Rate, Button, Image } from "antd";
import { useEffect, useState } from "react";
import {
  DribbbleOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  LikeOutlined,
  FireOutlined,
} from "@ant-design/icons";

import "../layout/MovieDetail.less";
import photoPng from "../static/photo.png";
import BackToMovieList from "../features/backToMovieList/BackToMovieList";
import { getMovieDataReq } from "../api/movie";

const MovieDetailPage = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onBuyTicketClicked = () => {
    navigate("/chooseTheater/" + id);
  };

  useEffect(() => {
    getMovieDataReq(id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="MovieDetail">
      <BackToMovieList />
      {/* 电影信息 开始 */}
      <div className="movieInfo w">
        <div className="left">
          <img src={data?.movie?.imageUrl} alt="" />
        </div>
        <div className="right">
          <span className="name_wrap">
            <span className="name">
              {data?.movie?.name}
              <span className="hot">
                <FireOutlined />
                <span className="num">{data?.movie?.hot}</span>{" "}
              </span>{" "}
            </span>
          </span>
          <div className="type">{data?.movie?.types}</div>
          <div className="time">
            <div className="date_country">
              <DribbbleOutlined />
              <span>{data?.movie?.releaseDate}</span>
              <span className="runtime">
                <FieldTimeOutlined />
                <span>{data?.movie?.duration}分钟</span>
              </span>
            </div>
          </div>
          <span className="ticket">
            <LineChartOutlined />
            <span>$ {data?.movie?.boxOffice} </span>
          </span>
          <div className="score_wrap">
            <div className="totalScore score">
              <span className="num">{data?.movie?.score}</span>
              <Rate allowHalf disabled value={data?.movie?.score} />
              <p className="info">Total Score</p>
            </div>
            {/* <div className="userScore score">
              <span className="num">4.5</span>
              <Rate allowHalf disabled value={4.5} />
              <p className="info">My Score</p>
            </div> */}
            <div className="buy_btn">
              <Button type="primary" onClick={onBuyTicketClicked}>
                Buy Ticket
              </Button>
            </div>
          </div>
        </div>
        {/* 电影信息 结束 */}
      </div>
      {/* 楼层 开始 */}
      <ul className="detail w">
        {/* 剧照 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Stage Photo</span>
          </div>
          <div className="content photo">
            <Image src={photoPng} alt="" />
            <Image src={photoPng} alt="" />
            <Image src={photoPng} alt="" />
          </div>
        </li>
        {/* 剧照 结束 */}
        {/* 剧情简介 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Plot Introduction</span>
          </div>
          <div className="content introduction">
            <span>{data?.movie?.description}</span>
          </div>
        </li>
        {/* 剧情简介 结束 */}
        {/* CAST 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">CAST</span>
          </div>
          <div className="content cast">
            {data?.directorList?.map((director) => {
              return (
                <div className="item" key={director.id}>
                  <img src={director.imgUrl} alt="" />
                  <span className="name">{director.name}</span>
                  <br />
                  <span className="position">导演</span>
                </div>
              );
            })}
            {data?.actorList?.map((actor) => {
              return (
                <div className="item" key={actor.id}>
                  <img src={actor.imgUrl} alt="" />
                  <span className="name">{actor.name}</span>
                  <br />
                  <span className="position">演员</span>
                </div>
              );
            })}
          </div>
        </li>
        {/* CAST 结束 */}
        {/* 热门评价 开始 */}
        <li className="detailItem">
          <div className="title">
            <i className="before"></i>
            <span className="titleName">Hot Comments</span>
          </div>
          <ul className="content comment">
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={photoPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> a few seconds ago</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={photoPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> a few seconds ago</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
            {/* 单条评价 开始 */}
            <li className="commentItem">
              <div className="head">
                <img src={photoPng} alt="" />
                <span className="name"> Melenie</span>
                <span className="time"> a few seconds ago</span>
              </div>
              <div className="body">
                High score hot hot reflection! Louis Koo appointed chief
                supervisor! Chinese science fiction Annual shock show! Mecha vs.
                alien, hardcore home guard! The future world earth pollution is
                serious, an outer space meteorite suddenly, with the alien life
                body Pandora arrived on earth, attack human beings.
                <div className="like">
                  <span className="num">4</span>
                  <LikeOutlined />
                </div>
              </div>
            </li>
            {/* 单条评价 结束 */}
          </ul>
        </li>
        {/* 热门评价 结束 */}
      </ul>
      {/* 楼层 结束 */}
    </div>
  );
};

export default MovieDetailPage;
