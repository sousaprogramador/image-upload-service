# Image Upload Service

## Descrição

O **Image Upload Service** é um micro serviço serverless para upload de imagens, construído usando AWS Lambda, API Gateway e S3. A infraestrutura é gerenciada usando Terraform, permitindo fácil deploy e escalabilidade automática.

# Funcionalidades

- **Upload de Imagens**: Upload de arquivos de imagem para o S3 via API Gateway usando AWS Lambda.
- **Infraestrutura Gerenciada por Terraform**: Provisionamento automático de S3, Lambda, API Gateway, e IAM Roles.
- **Documentação e Testes Locais**: Uso do Serverless Framework para testes locais e documentação.

# Requisitos

- **Node.js** (versão 14 ou superior)
- **AWS CLI** configurado
- **Terraform** instalado
- **Serverless Framework** instalado globalmente

# Configuração e Instalação

1. **Clone o Repositório**

   ```bash
   git clone git@github.com:sousaprogramador/image-upload-service.git
   cd image-upload-service
   ```

   ```bash
    yarn install
   ```

## Estrutura do Projeto

```plaintext
image-upload-service/
├── src/                                     # Código da função Lambda
│   ├── handler.ts                           # Função Lambda para upload de imagens
├── infra/                                   # Arquivos de configuração Terraform
│   ├── main.tf                              # Definição dos recursos AWS (S3, Lambda, API Gateway)
│   ├── variables.tf                         # Variáveis usadas no Terraform
│   ├── outputs.tf                           # Saídas do Terraform (ex: URLs, nomes de recursos)
│   └── provider.tf                          # Configuração do provedor AWS no Terraform
├── .env.example                             # Exemplo de variáveis de ambiente
├── .gitignore                               # Arquivos e diretórios ignorados pelo Git
├── package.json                             # Dependências e scripts do Node.js
├── serverless.yml                           # Configuração do Serverless Framework
├── tsconfig.json                            # Configuração do TypeScript
└── README.md                                # Documentação do projeto
```
