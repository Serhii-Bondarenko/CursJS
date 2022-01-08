class GoodsImg extends Goods {

    constructor(name, amount, img, count) {
        super(name, amount);

        this.img = img;
        this.count = count;

    }

    draw(element) {
        element.innerHTML += `<h3>${this.name}</h3>
                         <p>${this.amount}</p>
                         <img src="${this.img}">
                         <p>${this.count}</p>`
    }

}