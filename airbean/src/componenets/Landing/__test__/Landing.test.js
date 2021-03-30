import React from 'react';
import Landing from '../Landing'
import { render, getByTestId } from '@testing-library/react';






describe('menu componenet', () => {
    it('render without crashing', () => {
        const componenet = render(<Landing />)

    })



    describe('test all img', () => {
        it('logo img ', () => {
            const { container } = render(< Landing />)
            const logoImage = getByTestId(container, "img-logo");
            expect(logoImage.src).toContain("airbean-landing.svg");
        })
        
        it('landingLeft img', () => {
            const { container } = render(< Landing />)
            const imgLandingLeft = getByTestId(container, "img-landingLeft");
            expect(imgLandingLeft.src).toContain("intro-graphic-left.svg");
        })


  
        it('landingRight img', () => {
            const { container } = render(< Landing />)
            const imgLandingRight = getByTestId(container, "img-landingRight");
            expect(imgLandingRight.src).toContain("intro-graphic-right.svg");
        })


    })
})
