import React from 'react'
import Countdown from 'react-countdown';

export default function CountDown() {
  // Random component
  // const Completionist = () => <span></span>;


  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return '';
    } else {
      return (
        <section className={`section countdown-part`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mx-auto">
                <div className="countdown-content">
                  <h3>special discount offer for vegetable items</h3>
                  <p>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis
                    voluptatum fugiat mollitia quia minima</p>
                  <div className="countdown countdown-clock" data-countdown="2022/12/22"><span
                    className="countdown-time"><span>{days}</span><small>days</small></span><span
                      className="countdown-time"><span>{hours}</span><small>hours</small></span><span
                        className="countdown-time"><span>{minutes}</span><small>minutes</small></span><span
                          className="countdown-time"><span>{seconds}</span><small>seconds</small></span></div><a
                            href="shop-4column.html" className="btn btn-inline"><i
                              className="fas fa-shopping-basket"></i><span>shop now</span></a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="countdown-img"><img src="images/countdown.png" alt="countdown" />
                  <div className="countdown-off"><span>20%</span><span>off</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      )
    }
  };


  return (
    <Countdown
      date={Date.now() + 10000000}
      renderer={renderer}
    />
  )
}
