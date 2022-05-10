class app {

    static requisicao() {
        const startVitrine = document.querySelector('.vitrineProdutos')
        console.log(startVitrine)
        const ul = document.createElement('ul')
        startVitrine.appendChild(ul)
        ul.innerHTML = ''

        fetch('https://m2-kenzie-shop.herokuapp.com/products')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                data.products.forEach((produtoAtual) => {

                    const li = document.createElement('li')
                    const img = document.createElement('img')
                    const stars = document.createElement('span')
                    const descricao = document.createElement('p')
                    const valor = document.createElement('span')
                    const button = document.createElement('button')
                    button.innerText = 'COMPRAR'
                    const urlimg = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${produtoAtual.id}/Image.png`

                    img.src = urlimg
                    stars.innerHTML = produtoAtual.reviews
                    descricao.innerText = produtoAtual.productName
                    if (produtoAtual.promotionStatus == true) {
                        valor.innerHTML = `de R$<s> ${produtoAtual.price.productPrice},00</s> 
                        por R$ ${produtoAtual.price.productPromotionPrice},00`
                    } else {
                        valor.innerText = `R$ ${produtoAtual.price.productPrice},00`
                    }

                    li.appendChild(img)
                    li.appendChild(stars)
                    li.appendChild(descricao)
                    li.appendChild(valor)
                    li.appendChild(button)
                    ul.appendChild(li)


                });

                //AQUI VOCÊ PODE FAZER UM LOOP, PARA PEGAR TODOS OS PRODUTOS
                //FAZER A CRIAÇÃO DO TEMPLATE

            })

    }

    static template() {

        return this.requisicao()
    }

}

export default app

/* 
id
img
price
price.promo
name
status promo
reviews
*/