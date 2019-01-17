import React from "react";

import { Container, Layout, ThumbnailLarge } from "../components/index";

const IndexPage = () => (
  <Layout authenticated={true}>
    <Container
      fullwidth={true}
      isFixed={false}
      title="Current Page is: Latest News"
    >
      <ThumbnailLarge
        title="Sporting e Benfica vão defrontar-se duas vezes em menos de uma semana"
        cover="https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/5b81abfc0cf2532cd6cb0ad5/600.jpg"
        url="https://maisfutebol.iol.pt/derbi/16-01-2019/sporting-e-benfica-vao-defrontar-se-duas-vezes-em-menos-de-uma-semana"
        source="Maisfutebol.iol.pt"
        published="2019-01-16T22:51:50Z"
      />
      <ThumbnailLarge
        title="Secretário de Estado das Comunidades Portuguesas cancela a próxima viagem à Venezuela"
        cover="https://www.dnoticias.pt/binrepository/480x343/0c47/480d250/none/11506/JWWT/image_content_1976131_20190116222020.jpg"
        url="https://www.dnoticias.pt/pais/secretario-de-estado-das-comunidades-portuguesas-cancela-a-proxima-viagem-a-venezuela-YF4241980"
        source="Dnoticias.pt"
        published="2019-01-16T22:21:00Z"
      />
      <ThumbnailLarge
        title="Acidente com carro da PSP faz sete feridos"
        cover="https://cdn1.newsplex.pt/fotos/2019/1/16/674725.JPG?type=Artigo"
        url="https://sol.sapo.pt/artigo/642508/acidente-com-carro-da-psp-faz-sete-feridos"
        source="Sapo.pt"
        published="2019-01-16T22:21:00Z"
      />
    </Container>
  </Layout>
);

export default IndexPage;
