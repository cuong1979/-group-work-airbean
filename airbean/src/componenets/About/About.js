import React from 'react';
import style from './About.module.css';
import image from '../../assets/graphics/eva-cortado.jpg';
import HamburgerMenu from '../Hamburger-menu/HamburgerMenu'

function About() {
    return (
        <div className={style.wrap}>
            <header className="header-container">
                <nav className={style.headerContents}>
                    <HamburgerMenu />
                </nav>
            </header>
            <main className={style.main}>
                <div className={style.container}>
                    <h1  data-testid='h1-cafe'  className={style.h1}>Vårt kaffe</h1>
                    <p className={style.p}>
                        <strong className={style.strong}>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</strong>
                    </p>
                    <p className={style.p}>
                        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
                    </p>
                    <p className={style.p}>
                        Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
                    </p>
                </div>
                <section className={style.section}>
                    <img src={image} className={style.img}/>
                    <h2 className={style.h2}>Eva Cortado</h2>
                    <p className={style.p}> VD & Grundare </p>
                </section>
            </main>
        </div>
    );
}

export default About;