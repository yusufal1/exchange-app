import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=56450d1ce5554dd280345783e325b1af');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching exchange data:', error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },      
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container">
        <div className="news">
        <h1 className="newsTitle">Haberler</h1>
      <Slider {...settings} className="cards">
        {news.map((article, index) => (
          <div key={index} className="card">
            <Card>
              <Card.Img variant="top" src={article.urlToImage == null ? "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" : article.urlToImage} alt="new-img" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                {
                    article.description == null ? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eaque dolorum quia modi, quae nisi sit adipisci consectetur nesciunt quod!</p> : article.description
                }
                </Card.Text>
                <Button variant="primary" href={article.url}>Devamını Oku...</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
        </div>
    </div>
  );
};

export default News;
