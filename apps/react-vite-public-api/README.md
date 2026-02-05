# Consumo de API Pública com React 📦

Este repositório demonstra um exemplo prático de consumo de API utilizando React, com foco em boas práticas de tratamento de erros, controle de estado e renderização condicional.

O projeto foi desenvolvido como uma extensão da aula de nº #301 que faz parte do curso React Completo, da Origamid, e tem caráter educacional.

# Objetivo do Projeto 🎯

Consumir dados de uma API pública de produtos

Demonstrar o uso de fetch com async/await

Tratar erros de rede e HTTP com try/catch

Implementar estado de carregamento (loading) para melhorar a experiência do usuário

Manter o código simples, legível e alinhado a boas práticas

#Tecnologias Utilizadas 🛠️

Node.js — v24.12.0

Vite — v7.2.4

React — v19.2.0

# API Utilizada 🔗

Os dados são consumidos a partir da API pública de estudos da Origamid:

https://ranekapi.origamid.dev/json/api/produto/

Trata-se de uma API fictícia, criada exclusivamente para fins educacionais.

# Funcionalidades ⚙️

Busca dinâmica de produtos a partir de botões

Exibição de:

Título

Preço

Imagem

Descrição

Feedback visual durante o carregamento dos dados

Tratamento de erros de requisição exibidos no console de forma clara

# Estrutura do Projeto 🧠

O funcionamento da aplicação se baseia principalmente em dois arquivos:

# App.jsx 📁

Responsável por 99% da lógica da aplicação, incluindo:

Criação de dois hooks principais:

useState para armazenar os dados do produto

useState para controle do estado de carregamento (loading)

Função assíncrona que:

Inicia o carregamento (setLoading(true))

Realiza a requisição via fetch

Verifica erros HTTP através de response.ok

Converte a resposta para JSON

Atualiza o estado com os dados retornados

Finaliza o carregamento (setLoading(false))

O texto de cada botão é utilizado como parâmetro dinâmico para definir qual produto será buscado na API.

# Produto.jsx 📁

Componente responsável exclusivamente pela apresentação dos dados, mantendo o princípio de separação de responsabilidades.

Exibe:

Nome do produto

Preço formatado

Imagem

Descrição
 
# Renderização Condicional 🧩

No retorno JSX do componente App, temos:

Três botões, cada um representando um produto diferente

Renderização condicional para:

Exibir "Carregando..." enquanto os dados são buscados

Renderizar o componente Produto quando os dados estão disponíveis

Essa abordagem garante uma interface responsiva e previsível, mesmo em cenários de latência de rede.

# Boas Práticas Aplicadas 📌

Uso de async/await para melhor legibilidade

Tratamento explícito de erros HTTP

Estados bem definidos e com responsabilidade clara

Componentes reutilizáveis

Código organizado e de fácil manutenção
