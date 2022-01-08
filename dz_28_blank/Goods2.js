class Goods2 extends GoodsImg {

    constructor(name, amount, img, count, sale) {
        super(name, amount, img, count);

        this.sale = sale;
    }

    draw(element) {
        super.draw(element);

        element.innerHTML += `<p>${this.sale}</p>`;
    }

}