import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Home from "./Home.jsx";


it('Should display todo text', () => {
    render(<Home/>);

    const h1Element = document.querySelector('h1').textContent;
    

    expect(h1Element).toEqual('We are here to make your shopping experience better !');
});
