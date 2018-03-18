import React, { Component } from 'react';
import '../styles/OfferSearch.css';
import StarRatingComponent from 'react-star-rating-component';

import icon_app from '../images/icon_app.png';
import car from '../images/car.png';
import ic_history from '../images/ic_history.png';
import ic_help_outline_white from '../images/ic_help_outline_white.png';
import ic_person from '../images/ic_person.png';
import ic_airline_seat from '../images/ic_airline_seat.png'


class OfferSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 1
        };
    }

    render() {
        const { rating } = this.state;
        return (
            <div className="container">
                <div className="header">
                    <img className="img" src={icon_app}>

                    </img>
                    <div className="txtLeft">dichungtaxi </div>
                    <div className="txtLeft">&emsp;đề xuất kết quả này</div>
                    <img className="imageRight" src={ic_help_outline_white}></img>
                </div>

                <div className="contentCar">
                    <img className="imgCar" src={car}></img>
                    <div className="txtLarge">Xe hợp đồng</div>
                    <div className="containerRating">
                        <div  >
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={this.onStarClick.bind(this)}
                                emptyStarColor={"#c2c2c2"} />
                        </div>
                        <div className="numberRating">
                            4.0/
                            <img className="imgPeople" src={ic_person}></img>
                            <span> 2.335</span>
                        </div>
                    </div>

                </div>
                <div className="containerTimeActive">
                    <img className="imgTime" src={ic_history}></img> &nbsp;Hoạt động từ&nbsp;
                    <span>3:00</span> &nbsp;-&nbsp;
                    <span>22:30</span>
                    &nbsp;hàng ngày
                </div>
                <div style={{ backgroundColor: '#fafafa', height: 2, width: 10 }}></div>
                <div className="containerTimeActive">
                    <img className="imgTime" src={ic_airline_seat}></img> &nbsp;Hoạt động từ&nbsp;
                    <span>3:00</span> &nbsp;-&nbsp;
                    <span>22:30</span>
                    &nbsp;hàng ngày
                </div>
               
               


            </div>

        );
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
}

export default OfferSearch;