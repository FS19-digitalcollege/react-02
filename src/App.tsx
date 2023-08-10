import Card from "./components/Card"
import CardList from "./components/CardList"

const App = () => {

  return (
    <>
      <CardList>
        <Card
          titulo='titulo 1'
          imagem='https://imgnike-a.akamaihd.net/1300x1300/010228IE.jpg'
          descricao="Tenis masculino preto"
          categoria="Tenis"
        />
        <Card
          titulo='titulo 2'
          imagem='https://cdn.sistemawbuy.com.br/arquivos/166fcfbb01a4298859733979165c67aa/produtos/RAE4JAE4/1629848564549-61258425bd9e3.jpg'
          descricao="Tenis feminino branco"
          acoes
        />
      </CardList>
    </>
  )
}

export default App
