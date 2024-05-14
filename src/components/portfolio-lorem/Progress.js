import React from 'react'
import './Progress.css'
export default function Progress() {
  return (
    
    <section id="progress">
        <div className="container">
            <div className="row">

                <div className="col-md-6 competences">
                    <h2>Nos Compétences</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque id aut nemo praesentium quia quos,
                        accusantium fugit tempora quas vel consectetur, consequatur laborum asperiores ipsam incidunt
                        impedit quis cum natus.</p>
                </div>


                <div className="col-md-6 pt-1">
                    <p className="m-0">Marketing Digital</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width :"25%"}} aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="m-0">Growth Hacking</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped " role="progressbar" style={{width :"50%"}}
                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="m-0">Communication</p>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width :"75%"}} aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className="m-0">Réseaux</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped " role="progressbar" style={{width :"100%"}}
                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}
