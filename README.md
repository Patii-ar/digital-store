# 🛍️ Digital Store

**Digital Store** é um projeto de e-commerce desenvolvido com React, com foco em responsividade, experiência do usuário e funcionalidades essenciais para uma loja online moderna.

## 🔗 Deploy

Acesse a aplicação em produção:  
👉 [https://sudobrunowoodo.github.io/digital-store/](https://sudobrunowoodo.github.io/digital-store/)

> ✅ O projeto está hospedado via GitHub Pages.

## 📦 Funcionalidades

- Cadastro e login de usuários
- Validação de formulários
- Preenchimento automático de endereço via CEP
- Lista de produtos
- Página de detalhes de produto
- Carrinho de compras com atualização de quantidade
- Cálculo automático de frete por CEP
- Cupom de desconto
- Responsividade mobile
- Produtos relacionados no carrinho
- Footer estilizado

## 🧭 Navegação entre Páginas

A navegação entre páginas foi implementada com `React Router DOM`. Veja abaixo as principais rotas disponíveis:

| Página                    | Caminho                          | Acesso                                     
|---------------------------|----------------------------------|--------------------------------------------
| Página inicial            | `/`                              | Lista de produtos                          
| Login                     | `/login`                         | Tela de autenticação                       
| Criar Conta (etapa 1)     | `/criarcontasimples`             | Cadastro de email e caminho para cadastro                  
| Criar Conta Completa      | `/criarcontacompleta`            | Cadastro de dados pessoais e endereço 
| Produto                   | `/productpage`                   | Filtro, classificação de relevancia, preço e avaliação
| Produto (detalhes)        | `/produto/:id`                   | Detalhes do produto selecionado e produtos relacionados          
| Carrinho de Compras       | `/carrinho`                      | Itens adicionados, cálculo de frete, cupom de desconto e produtos relacionados       
| Finalização de compra     | `/checkout`                      | Detalhes e finalização de compra, dados para entrega e informações de pagamento  
| Compra Finalizada         | `/confirmation`                  | Compra Finalizada com sucesso e impressão de comprovante
| Páginas de ERRO 404       | `/categorias` `/meus pedidos`    | Páginas com Erro 404 - NOT FOUND 


A navegação é feita por meio de links no menu ou por redirecionamentos após ações (ex: login bem-sucedido ou cadastro completo).

## 🧑‍💻 Tecnologias Utilizadas

- **React.jsx**
- **React Router DOM**
- **useState / useEffect / useMimo**
- **CSS Modules + Tailwind CSS**
- **API ViaCEP** (consulta de endereço por CEP)
- **LocalStorage** (para persistência de dados)
- **JavaScript**
- **HTML5 / CSS3**

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   
      `bash`
      `git clone https://github.com/sudobrunowoodo/digital-store.git
      cd digital-store`

2. **Instale as dependências:**
   
     `bash`
     `npm install`

3. **Inicie o projeto:**
   
     `bash`
     `npm run dev`

4. **Acesse no navegador:**

      `http://localhost:5173/`

7. **Instruções de Navegação**
   
      ***Página de LOGIN:***

         Login: teste
   
         Senha: 123456

      ***Carrrinho:***
   
        adicionar Cupom: DESCONTO10 e PROMO20
         

🗂️ ***Estrutura de Pastas***

  digital-store/
  
  ├── public/
  
  ├── src/
  
  │   ├── components/
  
  │   ├── pages/
  
  │   ├── css/
  
  │   ├── routes/
  
  │   └── App
  
  ├── .gitignore
  
  ├── package.json
  
  └── README.md

👥 Projeto realizado por: 

Bruno de Oliveira - @sudobrunowoodo 
   
 Patricia Araujo - @Patii-ar


    Feito com muito empenho, dedicação e vontade de aprender. 
    esperamos que vejam esse projeto com carinho 🤝

💡 Projeto educacional com foco em práticas modernas de desenvolvimento front-end.
