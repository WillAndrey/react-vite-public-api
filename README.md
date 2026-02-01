# Consumindo API pública da origamid

Sou um dos alunos do curso de React Completo da origamid e este é um pequeno exemplo de consumo de API utilizando blocos try, catch para capturar erros de rede "HTTP".

🔧## Tecnologias utilizadas
- NodeJS versão: 24.12.0
- Vite versão: 7.2.4
- React JS versão: 19.2.0

# O que o código faz?

Consome dados de um API de produtos fictícios criados única e exclusivamente para fins de estudo.
Verifica possíveis erros de rede e retorna no console de forma mais amigável para o desenvolvedor.

# Em que consiste o código dessa aplicação ?

São basicamente dois arquivos principais, sendos estes: App.jsx e Produto.jsx. No App.jsx está 99% da lógica do programa.

Na função principal de App crio dois hooks sendo um para controlar e armazenar os estados dos dados e um outro para prover um loading enquanto carrego os dados da API. O loading nada mais é do que uma simples tag <p> Carregando... </p> que aparecerá caso a chamada da API demore mais que o habitual, sendo quase instântanea essa chamada.

logo abaixo dos hooks seguem uma função maniupuladora do evento de clique nos botões que viram a seguir; Essa função ira iniciar com um bloco try que irá setar o estado de loading para verdadeiro indicando que os dados da API estão sendo carregados, em seguida temos uma constante response que receberá as informações da promise retornada pelo fetch da nossa api pública: "https://ranekapi.origamid.dev/json/api/produto/" o parâmetro da função assincrona se encarrega de pegar o texto de cada botão.

Logo após verificamos se o status da nossa response não foi verdadeiro, caso não tenha sido, capturaremos o erro e lançaremos logo abaixo no bloco catch.

Em seguida atribuímos a uma constante json a resposta dos dados em formato json e setamos os dados no nosso hook.

SetLoading se torna falso o que indica que o carregamento ocorreu e não será mais necessário.

#return JSX

No nosso retorno da função componente App temos três botões cada um indicando um produto diferente que será chamado pela API ao ser realizado o clique. e em seguida duas renderizações condicionais são disparadas caso o loading seja true e outra para quando o loading se tornar false renderizando também nosso componente Produto que mostrará título do produto, preço, imagem e descrição.

