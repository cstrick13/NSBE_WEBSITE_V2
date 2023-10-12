import React from 'react';
import { SectionWrapper } from '../../hoc';
import { img4,cory,male,female} from '../../assets';
import "./Programs.css"

function Programs() {
  return (
    <>
    <div className='body-team'>
      <div className='team'>
        <h1>CEB Memebers</h1>
        <div className='content-team-top'>
        <div className='card-team1'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Liliane Lavine</div>
              <div className='details-team'>President</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team2'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Joeseph Johnson</div>
              <div className='details-team'>Vice-President</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
        </div>
        <div className='content-team'>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Alvin Kie</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Cory Strickland</div>
              <div className='details-team'>Telecoms</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Daniel Davis</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Janae Dotson</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Kelsie Cubert</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Kristen Steelman</div>
              <div className='details-team'>CEB Positiont</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Makayla Isaac</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Tremond Thompson</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Wade Caskey</div>
              <div className='details-team'>CEB Position</div>
              <div className='emails-team'>nsbe.latech.blajh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default SectionWrapper(Programs,'programs');