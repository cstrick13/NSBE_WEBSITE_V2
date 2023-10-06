import React from 'react'
import './SectionWrapper.css'


const SectionWrapper = (Component,idName) =>
function HOC(){
    return(
        <section viewport={{once:true,amount:0.25}}> 
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
            </section>
    )
}

export default SectionWrapper