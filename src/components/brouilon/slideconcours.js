import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import Slide from '../slide';

/* import CSS */
import "bootstrap/dist/css/bootstrap.min.css";

export default class SlideConcours extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            concours: ''
        }
    }

    componentDidMount = () => {
        fetch('https://aubrylieutier-d5b0d-default-rtdb.firebaseio.com/aubrylieutier.json')
            .then(resp => resp.json())
            .then(data => this.setState({ concours: data.concours }));
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 200,
            slidesToShow: 5,
            slidesToScroll: 2,
            cssEase: 'ease-in-out',
            draggable: true,
            initialSlide: 0,
            initialeState: 0,
            vertical: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        draggable: true,
                    }
                }
            ]
        };

        const { concours } = this.state;
        return (
            <Container>
                <Slider {...settings}>
                    {
                        concours !== '' &&
                        concours.map((m) =>
                            <Slide slide={m} />
                        )
                    }
                </Slider>
            </Container>
        )
    }
}