import { render  } from '@testing-library/react';
import React from 'react';
import About from './About'


 test ('right text kaffe' , () => {
      const rendered = render(<About />)
      expect(rendered.getByText('Vårt kaffe'));
      
})   

test ('right Pumpkin text  ' , () => {
  const rendered = render(<About />)
    expect(rendered.getByText('Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.'));
    
})  

test ('right text Que dark text' , () => {
  const rendered = render(<About />)
    expect(rendered.getByText('Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.'));
    
}) 

test ('right text Roast id text' , () => {
  const rendered = render(<About />)
    expect(rendered.getByText('Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.'));
    
})    
describe('women founder picture', () => {
  it('profile ', () => {
    render(< About/>)
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("eva-cortado.jpg");
  })
}); 

 
test ('right name Eva Cortado' , () => {
  const rendered = render(<About />)
    expect(rendered.getByText('Eva Cortado'));
    
})  

test ('position' , () => {
  const rendered = render(<About />)
    expect(rendered.getByText('VD & Grundare'));
    
})   


