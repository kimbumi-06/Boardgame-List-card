import React from 'react';
import '../styles/CardHeader.css';
import '../styles/CardBody.css';
import '../styles/CardFooter.css';
import * as images from '../assets/images.js';

function Card() {

  return (
    <div className="card">



        <header className="card-header">
    
            <section className="rating-circle">
                <img className="rating-image" src={images.rating} alt="Rating" />
                <text className="rating-text">3.9</text>
            </section>
            <section className="title-area">
                <div className="card-title-kor">한글 제목을 입력하세요</div>
                <div className="card-title-eng">eng plz</div>
            </section>
        </header>



        <div className="card-body">
            <aside className="boardgame-info">
                <div className="info-item">
                    <img className="info-icon" src={images.playtime} alt="Time" />
                    <text className="info-text">120-150</text>
                </div>
                <div className="info-item">
                    <img className="info-icon" src={images.player} alt="Players" />
                    <text className="info-text">2-4인</text>
                </div>
                <div className="info-item">
                    <img className="info-icon" src={images.ranking} alt="Ranking" />
                    <text className="info-text">1165위</text>
                </div>
            </aside>

            <figure className="image-wrapper">
                <img className="card-image" src={images.gameImage} alt="Game" />
            </figure>
        </div>





        <footer>
            <div className="mechanics">
                <span className="mechanics-dots">
                    <span className="mechanics-text">매커니즘</span>
                </span><span className="mechanics-dots">
                    <span className="mechanics-text">매커니즘</span>
                </span><span className="mechanics-dots">
                    <span className="mechanics-text">매커니즘</span>
                </span>
            
            <section className="genre">
                <span className="genre-text">여기가 장르</span>
            </section>
            </div>


            <section className="description">
                <p className="description-text">게임 설명을 입력하세요.</p>
            </section>
        </footer>

    </div>
  );
}

export default Card;
