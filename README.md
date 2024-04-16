# REQUISITOS BÁSICOS
nodejs, vscode

npm install --global expo-cli
npm install -g expo-cli
npm install --global expo-cli@4.4.7 -> versão utilizada no curso
expo --version

# Git

expo init my-project

npx expo start -> "a" - opção para abrir no android
npx expo start --android

# TYPESCRIPT
Novos projetos criados pela CLI React Native ou modelos populares como Ignite usarão TypeScript por padrão.
TypeScript também pode ser usado com Expo , que mantém modelos TypeScript, ou solicitará que você instale e configure automaticamente o TypeScript quando um arquivo .tsou .tsxfor adicionado ao seu projeto.

npx create-expo-app --template

# Adicionando TypeScript a um projeto:
Adicione plug-ins TypeScript, tipos e ESLint ao seu projeto.
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript

# OBSERVAÇÃO
Este comando adiciona a versão mais recente de cada dependência. As versões podem precisar ser alteradas para corresponder aos pacotes existentes usados ​​pelo seu projeto. Você pode usar uma ferramenta como React Native Upgrade Helper para ver as versões fornecidas pelo React Native.

Adicione um arquivo de configuração TypeScript. Crie um tsconfig.jsonna raiz do seu projeto:
{
  "extends": "@tsconfig/react-native/tsconfig.json"
}

Renomeie um arquivo JavaScript para ser*.tsx
Você deve deixar o ./index.jsarquivo do ponto de entrada como está, caso contrário poderá ter problemas ao agrupar uma construção de produção.

Execute yarn tscpara verificar o tipo de seus novos arquivos TypeScript.

# PROPS
Então outro conceito fundamental do Kinect e do reaquecimento é a gente trabalhar com propriedade as

famosas PROPS:
-Definir uma interface de propriedade.

A gente faz assim e fez eu vou chamar de botão um botão próprio.

Eu vou falar uma propriedade que eu quero passar.

Eu quero mudar.

Eu estou criando um botão é justamente o título

do tipo isso aí a gente vem aqui.

Quando a gente cria se abre e fecha parênteses a gente fala que pode colocar fecha.

Escrevi o título.

Falar do tipo ele é do tipo botão próprio.

E aí depois que a gente faz isso eu venho aqui há um ano tal texto fixo e coloco assim entre chaves.

O título vou salvar.

Então ele vai pedir todos os textos e o verso também vai reclamar.

Agora se a gente for guia problemas aqui está falando que a propriedade está faltando.

O que eu preciso fazer voltar no meu.

Para cada componente que eu criei eu passar que é a propriedade então propriedade de título esse aqui

vai ser o.

Esse título vai ser 2 assim por diante.

Só.

Se mais rápido.

Botão um botão dois botão 13 e botão 4.

E aí sim salvando Angola.

A gente está passando a propriedade de forma mais dinâmica bem mais isso eu fiz para a legenda e se

eu quisesse mudar a cor do botão porque a cor do botão também está fixo para gente fazer isso tem um

recurso mais bacana ainda que a gente pode estender esse botão.

Voltando aqui no botão TS X.

E a gente criou a interface.

A gente pode falar que a gente tem essa propriedade mas a gente pode dar um existentes comentou.

O meu componente principal é esse bom passe que a gente pode falar que a gente vai estender Toshiba.

O paciente propôs.

A gente faz o importe e agora além das propriedades.

Além desse que a gente fez é do título a gente pode colocar assim que eu tenha acesso a qualquer propriedade

do Toshiba próprios.

A gente faz três pontinhos teste para gente informar que a gente pode passar isso dentro do componente

antes de fechar.

A gente abre e fecha a chave três pontinhos.

Se ele salvar e agora voltar lá no meu componente a componente principal que é o EP hora que a gente

dá um contra o espaço aqui a gente vai ter todas as propriedades desse componente Toshiba que a gente

pode passar dessa forma a gente consegue personalizar e ganhar ainda mais propriedades dentro dos componentes.