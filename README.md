# 🐾 Mi Audota — Frontend

Interface web para o sistema de adoção de animais **Mi Audota**, conectando adotantes, instituições e pets de forma simples e moderna.

> Consome a [Pets API](https://github.com/thalesfercaetano/Pets_API) — sistema RESTful de gerenciamento de adoções.

---

## 🚀 Tecnologias

- **React** + **Vite** (JavaScript)
- **React Router v6** — roteamento
- **Axios** — cliente HTTP
- **TanStack Query** — cache e sincronização de dados da API
- **React Hook Form** — gerenciamento de formulários
- **Zustand** — estado global (autenticação)
- **React Leaflet** — mapa de resgates
- **Tailwind CSS** — estilização

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── router.jsx          # Definição de rotas
│   ├── providers.jsx       # Composição de providers
│   └── App.jsx
│
├── shared/
│   ├── api/
│   │   └── client.js       # Instância axios + interceptors
│   ├── constants/
│   │   ├── endpoints.js    # URLs da API centralizadas
│   │   ├── routes.js       # Rotas do frontend
│   │   └── storage-keys.js # Chaves do localStorage
│   ├── components/         # Componentes reutilizáveis
│   ├── hooks/              # Hooks genéricos
│   └── lib/                # Utilitários e helpers
│
└── features/
    ├── auth/               # Login, cadastro, proteção de rotas
    ├── usuarios/
    ├── instituicoes/
    ├── pets/
    ├── matches/            # Sistema de swipe
    ├── adocoes/
    ├── resgates/           # Mapa de resgates
    ├── doacoes/
    └── enderecos/
```

---

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- NPM ou Yarn
- [Pets API](https://github.com/thalesfercaetano/Pets_API) rodando localmente

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd mi-adota
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz baseado no `.env.example`:

```ini
VITE_API_BASE_URL=http://localhost:3003
```

### 4. Inicie o projeto

```bash
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🔗 Conexão com a API

A comunicação com a Pets API é feita via **Axios** com uma instância centralizada em `shared/api/client.js`.

- Todas as URLs da API estão mapeadas em `shared/constants/endpoints.js`
- O token JWT é injetado automaticamente via interceptor em todas as requisições autenticadas
- Erros 401 (token inválido/expirado) redirecionam automaticamente para o login

---

## 🔐 Autenticação

O sistema possui dois tipos de atores:

| Ator | Acesso |
|---|---|
| **Usuário (adotante)** | Swipe em pets, adoções, doações, resgates |
| **Instituição (ONG)** | Gerenciar pets, ver adoções, swipe em adotantes |

O token JWT é armazenado no `localStorage` e gerenciado via **Zustand**.

---

## 📄 Scripts disponíveis

```bash
npm run dev       # Inicia em modo desenvolvimento
npm run build     # Gera build de produção
npm run preview   # Visualiza o build localmente
npm run lint      # Verifica erros de lint
```

---

## 📅 Entregas

| Entrega | Data | Descrição |
|---|---|---|
| **Fase 0** | — | Fundação: estrutura, client, services |
| **2ª Entrega** | 26/05 | Landing Page Parte 1 |
| **3ª Entrega** | 29/05 | Landing Page Completa |
| **4ª Entrega** | 02/06 | Auth + Tela de Pets |
| **Final** | 09/06 | Refinamentos + Fluxo de Adoção |

---

## 👥 Equipe

Luiz Eduardo, Liandra, Kaua e Karol

---

## 📝 Licença

Projeto acadêmico — uso educacional.