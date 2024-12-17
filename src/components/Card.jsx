import React, { Component } from 'react';
import '../css/card.css';
import blog_img1 from "../img/blog/blog_img_1.jpg";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return <>
        <div className="blog_card">
            <div className="blog_card_img_cont">
                <img src={this.props.img} alt="blog_img" className="img_container" />
            </div>
            <div className="blog_card_header">
                {this.props.header}
            </div>
            <div className="blog_card_desc">
                {this.props.desc}
            </div>
            <div className="read_more_btn">
                <a href={this.props.link}>
                    Read more
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </div>
            <div className="published_time">Published 2 days ago</div>
        </div>
        </>;
    }
}

export default Card;