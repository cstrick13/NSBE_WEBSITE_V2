import React from 'react'
import './SectionWrapper.css'


const SectionWrapper = (Component,idName) =>
function HOC(){
    return(
        <section> 
            <span className="hash-span" id={idName}>
            </span>
            <Component />
            </section>
    )
}

export default SectionWrapper