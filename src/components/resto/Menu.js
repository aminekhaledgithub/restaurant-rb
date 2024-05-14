import React from 'react'
import './Menu.css'

export default function Menu() {
    return (
        <section id="resto-menu">
            <div className="menu">
                <div className="row">
                    <div className="col">
                        <h5>Entrées</h5>
                        <div className="menu-detail">
                            <p>
                                Tartelette forestière...............9 €
                            </p>
                            <p>
                                Sanglier, champignons, gougères au potiron, mûre.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Toasts des bois.................7 €
                            </p>
                            <p>
                                Fromages de chèvre, bufflonne et brebis.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Croustilles particulières....................6 €
                            </p>
                            <p>
                                Sauterelles, grillons, chenilles, accompagnés de sauces.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Dessert</h5>
                        <div className="menu-detail">
                            <p>
                                Cœur chocolaté..............6 €
                            </p>
                            <p>
                                Chocolat, glace vanille, tarte sablée aux fruits rouges.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Myrtilles des bois...............7 €
                            </p>
                            <p>
                                Myrtilles, glace vanille, pâtisserie aux framboises, mûres et myrtilles.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Tarte automnale..........................6 €
                            </p>
                            <p>
                                Tarte noisettes et noix, giroflée, glace vanille.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5>Plats</h5>
                        <div className="menu-detail">
                            <p>
                                Sanglier aux baies forestières.............14 €
                            </p>
                            <p>
                                Sanglier, baies, champignons, fruits rouges.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Champignons sublimés...............12 €
                            </p>
                            <p>
                                Cèpes, velouté d'épinards, trompettes de la mort et pleurotes.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Chevreuil et Baies de printemps...................13 €
                            </p>
                            <p>
                                Chevreuil, baies de printemps, légumes verts.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Boissons</h5>
                        <div className="menu-detail">
                            <p>
                                L'écorce des bois......................9 €
                            </p>
                            <p>
                                Whisky tourbé, liqueur de chêne, cointreau et citron.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                Jardin Zen..........................11 €
                            </p>
                            <p>
                                Vermouth blanc, génépi, rhum, sucre roux, limonade.
                            </p>
                        </div>
                        <div className="menu-detail">
                            <p>
                                La forêt enchantée.................12 €
                            </p>
                            <p>
                                Kirsch, liqueur de vanille, cerise, amarula, cacao, menthe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
