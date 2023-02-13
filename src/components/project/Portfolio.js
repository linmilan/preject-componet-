import React from 'react';
import './portfolio.css';
// import '../../index.css';
import IMG1 from '../../assets/img/project-img1.png';
import IMG2 from '../../assets/img/project-img2.png';
import IMG3 from '../../assets/img/project-img3.png';
import IMG4 from '../../assets/img/project-img4.png';
import IMG5 from '../../assets/img/project-img5.png';
import IMG6 from '../../assets/img/project-img6.png';

const data = [
    {
        id:1,
        image:IMG1,
        title:'balance ball',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
    {
        id:2,
        image:IMG2,
        title:'balance ball',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
    {
        id:3,
        image:IMG3,
        title:'balance ball to many to say how it',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
    {
        id:4,
        image:IMG4,
        title:'balance ball',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
    {
        id:5,
        image:IMG5,
        title:'balance ball',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
    {
        id:6,
        image:IMG6,
        title:'balance ball',
        github:'https://github.com',
        demo:'https://dribbble.com'
    },
]

const Portfolio =()=>{
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio_container'>
                {/* <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item_image'>
                        <img src={IMG1} alt=''/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'> 
                        <a href='http://github.com' className='btn' target='_blank'>Github</a>
                        <a href='https://dribbble.com' className='btn btn-primary' target='_blank'>Demo</a>
                    </div> 
                </article> */}
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item_image'>
                                    <img src={image} alt={title}/>
                                </div>
                                {/* <h3>{title}</h3> */}
                                <div className='portfolio_item-cta'> 
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                                </div> 
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio
