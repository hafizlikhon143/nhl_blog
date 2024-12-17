import React, { Component } from 'react';
import Card from './Card';
import blog_img1 from "../img/blog/blog_img_1.jpg";
import blog_img2 from "../img/blog/blog_img_2.jpg";
import blog_img3 from "../img/blog/blog_img_3.jpg";
import blog_img4 from "../img/blog/blog_img_4.jpg";
import blog_img5 from "../img/blog/blog_img_5.jpg";
import blog_img6 from "../img/blog/blog_img_6.jpg";
import '../css/blog_holder.css';

class Blog_holder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    header: "How to start with web development"  ,
                    img: blog_img1,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
                {
                    id: 2,
                    header: "Top 3 JavaScript Frameworks" ,
                    img: blog_img2,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
                {
                    id: 3,
                    header: "A Guide to Becoming a Full-Stack Developer" ,
                    img: blog_img3,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
                {
                    id: 4,
                    header: "High Performance JavaScript" ,
                    img: blog_img4,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
                {
                    id: 5,
                    header: "Learn React in 24 Hours"  ,
                    img: blog_img5,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
                {
                    id: 6,
                    header: "How to Build Desktop Apps with HTML, CSS and JavaScript"  ,
                    img: blog_img6,
                    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quibusdam saepe, blanditiis tempora quam nisi voluptate provident adipisci molestiae aliquid nobis expedita sapiente, natus a totam corporis aperiam quas iusto?",
                    link: '#'
                },
            ]
        };
    }
    handelShort = e =>{
        let btns = document.querySelectorAll('.short_li_btn');
        btns.forEach(btn=>{            
            try{
                btn.classList.remove('active');
            }
            catch(error){
            }
            e.target.classList.add('active');
        })
    }
    render() {
        return <>
        <div id="blog_container">
            <div className="blog_search_form">
                <div className="blog_search_title">
                    My blog about all Web and Software making
                </div>
                <div className="blog_search_info">
                Welcome to my blog. Search if you have anything in mind.
                </div>
                <form action="" className="blog_search_form_cont">
                    <input type="text" id="search_text_input" placeholder='Search Anything of intrest about development'  className='blog_search_text_input'/>
                    <button type='submit' className="search_input_btn">Search</button>
                </form>
            </div>
            <div className="search_nav_bar">
                <ul className="short_navbar">
                    <li onClick={this.handelShort} className="short_li_btn active">ALL</li>
                    <li onClick={this.handelShort} className="short_li_btn">Beginner</li>
                    <li onClick={this.handelShort} className="short_li_btn">Coding</li>
                    <li onClick={this.handelShort} className="short_li_btn">Hosting</li>
                    <li onClick={this.handelShort} className="short_li_btn">Tips & Tricks</li>
                </ul>
            </div>
            <div className="blog_body">
                <Card 
                header={this.state.data[0].header}
                img={this.state.data[0].img} 
                desc={this.state.data[0].desc}
                link={this.state.data[0].link}
                />
                <Card 
                header={this.state.data[1].header}
                img={this.state.data[1].img} 
                desc={this.state.data[1].desc}
                link={this.state.data[1].link}
                />
                <Card 
                header={this.state.data[2].header}
                img={this.state.data[2].img} 
                desc={this.state.data[2].desc}
                link={this.state.data[2].link}
                />
                <Card 
                header={this.state.data[3].header}
                img={this.state.data[3].img} 
                desc={this.state.data[3].desc}
                link={this.state.data[3].link}
                />
                <Card 
                header={this.state.data[4].header}
                img={this.state.data[4].img} 
                desc={this.state.data[4].desc}
                link={this.state.data[4].link}
                />
                <Card 
                header={this.state.data[5].header}
                img={this.state.data[5].img} 
                desc={this.state.data[5].desc}
                link={this.state.data[5].link}
                />
            </div>
            <div className="view_more">
                <button className="view_more_btn">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>
            </div>
        </div>
        </>;
    }
}

export default Blog_holder;