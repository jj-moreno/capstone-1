import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Product from "../Components/Product";

let container = null;

beforeEach(() => {
    //setup DOM element as a render target
    container = document.createElement("div");
    document.body.append(container);
});

afterEach(() => {
    //remove DOM element for clean up on exit
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders product data", () => {
    const product = {
        name: "Bowling Ball Top Glider",
        image: "http://about:blank",
        number: "AN123",
        price: 100.0,
        manufacturer: "FILA",
        category: "Pro Bowling",
        quantity: 100000000,
    };

    act(() => {
        render(<Product product={product} />, container);
    });

    expect(container.textContent).toContain(product.name);
    expect(container.textContent).toContain(product.price);
    expect(container.textContent).toContain(product.number);
    expect(container.textContent).toContain(product.quantity);
    expect(container.textContent).toEqual(
        expect.not.stringContaining(product.manufacturer)
    );
    expect(container.textContent).toEqual(
        expect.not.stringContaining(product.category)
    );
    expect(container.querySelector("img").getAttribute("src")).toEqual(
        product.image
    );
});
