import React from 'react';
import '../design/Pricings.css';
import '../design/cards.css'

export default function Pricings() {
    return (
        <section id="pricings" className="pricings">
            <h2 id="pricing">ABONNEMENTS</h2>
            <div className="card-container">
                <div className="card pricing">
                    <h3>STANDARD</h3>
                    <p className="price"><em>3€ / mois pendant 12 mois</em></p>
                    <p>
                        <ul>
                            <li>100 Go de stockage</li><br />
                            <li>6 Go de RAM</li><br />
                            <li>10 bases de données</li><br />
                            <li>Bande passante illimitée</li>
                        </ul>
                    </p>
                </div>

                <div className="card pricing">
                    <h3>PLUS</h3>
                    <p className="price"><em>6€ / mois pendant 12 mois</em></p>
                    <p>
                        <ul>
                            <li>250 Go de stockage</li><br />
                            <li>9 Go de RAM</li><br />
                            <li>250 bases de données</li><br />
                            <li>Bande passante illimitée</li>
                        </ul>
                    </p>
                </div>
                <div className="card pricing">
                    <h3>PREMIUM</h3>
                    <p className="price"><em>12€ / mois pendant 12 mois </em></p>
                    <p>
                        <ul>
                            <li>500 Go de stockage</li><br />
                            <li>20 Go de RAM</li><br />
                            <li>500 bases de données</li><br />
                            <li>Bande passante illimitée</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}
