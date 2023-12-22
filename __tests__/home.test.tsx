import { render, screen } from '@testing-library/react';
import Home from '@/app/page'
import '@testing-library/jest-dom'


describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home/>)
    
        const myElement = screen.getByText('Docs')
    
        expect(myElement).toBeInTheDocument()
    })
    it('should have information text', () => {
        render(<Home/>)
    
        const myElement = screen.getByText(/information/i)
    
        expect(myElement).toBeInTheDocument()
    })
    it('should have heading with Learn written', () => {
        render(<Home/>)
    
        const myElement = screen.getByRole('heading', {
            name: 'Learn'
        })
    
        expect(myElement).toBeInTheDocument()
    })

})