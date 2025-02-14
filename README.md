# BasilioPensionSim

BasilioPensionSim é uma aplicação web desenvolvida com **Angular**, **Micro-Frontends** e **Tailwind CSS** para simulação de investimentos em **planos de previdência privada** (VGBL/PGBL). O sistema permite que os usuários escolham um plano, insiram dados de contribuição e visualizem projeções financeiras interativas. Utilizando arquitetura modular com **Webpack Module Federation**, o projeto visa desempenho otimizado e escalabilidade. O deploy é automatizado via **GitHub Actions** e hospedado na **Vercel**.

## Tecnologias Utilizadas
- **Angular** - Framework para desenvolvimento web.
- **Webpack Module Federation** - Implementação de micro-frontends.
- **Tailwind CSS** - Para estilização rápida e otimizada.
- **Chart.js** - Para renderização dos gráficos de simulação.
- **GitHub Actions** - CI/CD para build e deploy automatizado.
- **Vercel** - Hospedagem da aplicação.

## Estrutura do Projeto
O projeto é estruturado como um **monorepo** contendo múltiplos micro-frontends:

1. **Shell App** - Aplicativo principal que orquestra os micro-frontends.
2. **MFE Global** - Fornece componentes reutilizáveis para os outros MFEs.
3. **MFE Home** - Página inicial com seleção de planos de previdência.
4. **MFE Simulação** - Formulário de entrada para a simulação financeira.
5. **MFE Resultado** - Exibe os resultados e projeções da simulação.
6. **MFE Detalhes do Plano** - Mostra informações adicionais sobre os planos.

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/FelipeBasilio/BasilioPensionSim.git
   cd BasilioPensionSim
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie a aplicação:
   ```sh
   npm run start
   ```

## CI/CD e Deploy
- **GitHub Actions** é utilizado para build e testes automáticos.
- O deploy é realizado automaticamente na **Vercel** após cada merge na branch principal.

## Contribuição
Pull requests são bem-vindos! Certifique-se de seguir as diretrizes do projeto e abrir issues para discutir mudanças antes de implementá-las.

## Licença
Este projeto está licenciado sob a **MIT License**.

