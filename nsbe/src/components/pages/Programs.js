import React from 'react';
import { SectionWrapper } from '../../hoc';
import { img4,cory,male,female, lili, joe, alvin, makayla, trey, wade} from '../../assets';
import "./Programs.css"

function Programs() {
  return (
    <>
    <div className='body-team'>
      <div className='team'>
        <h1>CEB Members</h1>
        <div className='content-team-top'>
        <div className='card-team1'>
            <div className='box-team'>
                  <img src={lili} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Liliane Lavine</div>
              <div className='details-team'>President</div>
              <div className='emails-team'>nsbelatech.chair@gmail.com</div>
            </div>
          </div>
          <div className='card-team2'>
            <div className='box-team'>
                  <img src={joe} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Joeseph Johnson</div>
              <div className='details-team'>Vice-President</div>
              <div className='emails-team'>nsbelatech.vice@gmail.com</div>
            </div>
          </div>
        </div>
        <div className='content-team'>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={alvin} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Alvin Kie</div>
              <div className='details-team'>Parlimentarian</div>
              <div className='emails-team'>nsbelatech.parl@gmail.com</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Kristen Steelman</div>
              <div className='details-team'>Public Relations Chair</div>
              <div className='emails-team'>nsbelatech.pub@gmail.com</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={cory} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Cory Strickland</div>
              <div className='details-team'>Telecoms Chair</div>
              <div className='emails-team'>nsbelatech.tele@gmail.com</div>
            </div>
          </div>
        
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Janae Dotson</div>
              <div className='details-team'>Academic Excellence Chair</div>
              <div className='emails-team'>nsbelatech.aex@gmail.com</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={male} />
            </div>
            <div className='info-team'>
              <div className='name-team'>TBD</div>
              <div className='details-team'>Programs Chair</div>
              <div className='emails-team'>nsbelatech.programs@gmailcom</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={female} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Kelsie Cubert</div>
              <div className='details-team'>Membership Chair</div>
              <div className='emails-team'>nsbelatech.mem@gmail.com</div>
            </div>
          </div>
          
          <div className='card-team'>
            <div className='box-team'>
                  <img src={wade} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Wade Caskey</div>
              <div className='details-team'>Senator 2</div>
              <div className='emails-team'>nsbelatech.senator2@gmail.com</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={makayla} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Makayla Isaac</div>
              <div className='details-team'>Treasurer </div>
              <div className='emails-team'>nsbelatech.treasurer@gmail.com</div>
            </div>
          </div>
          <div className='card-team'>
            <div className='box-team'>
                  <img src={trey} />
            </div>
            <div className='info-team'>
              <div className='name-team'>Tremond Thompson</div>
              <div className='details-team'>Senator 1</div>
              <div className='emails-team'>nsbelatech.senator1@gmail.com</div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </>
    )
}

export default SectionWrapper(Programs,'programs');