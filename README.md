# REQUISITOS BÁSICOS
nodejs, vscode

npm install --global expo-cli
npm install -g expo-cli
npm install --global expo-cli@4.4.7 -> versão utilizada no curso
expo --version


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