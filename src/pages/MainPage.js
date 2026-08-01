import Card from '../components/Card';
import '../styles/Mainpage.css';
import * as images from '../assets/images.js';

function MainPage() {



  return (
    <div className="mainpage-container">

      <header className="mainpage-header">
        <img className="mainpage-logo" src={images.sulkus} alt="Sulkus" />
        <h1 className="mainpage-title">보드게임 리스트</h1>
      </header>

      <div className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MainPage;
