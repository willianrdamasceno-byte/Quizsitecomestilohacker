export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const basicQuestions: Question[] = [
  {
    id: 1,
    question: "O que significa a sigla CPU?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
      "Computer Processing Utility"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Qual é a função principal da memória RAM?",
    options: [
      "Armazenar dados permanentemente",
      "Armazenar dados temporariamente durante o processamento",
      "Executar programas",
      "Conectar à internet"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "O que é um Sistema Operacional?",
    options: [
      "Um tipo de hardware",
      "Um programa de edição de texto",
      "Software que gerencia recursos do computador",
      "Um navegador web"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qual destes é um dispositivo de entrada?",
    options: [
      "Monitor",
      "Impressora",
      "Teclado",
      "Alto-falante"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "O que significa HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "High Technology Transfer Process",
      "HyperText Transmission Page",
      "Home Tool Transfer Protocol"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Qual a unidade básica de armazenamento?",
    options: [
      "Bit",
      "Byte",
      "Megabyte",
      "Gigabyte"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "O que é um navegador web?",
    options: [
      "Um tipo de antivírus",
      "Software para acessar páginas da internet",
      "Um sistema operacional",
      "Um dispositivo de rede"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Quantos bits formam um byte?",
    options: [
      "4",
      "8",
      "16",
      "32"
    ],
    correctAnswer: 1
  }
];

export const intermediateQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a diferença entre TCP e UDP?",
    options: [
      "TCP é mais rápido que UDP",
      "TCP garante entrega de pacotes, UDP não",
      "UDP é usado apenas para email",
      "Não há diferença"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "O que é uma API?",
    options: [
      "Um tipo de banco de dados",
      "Interface de Programação de Aplicações",
      "Um protocolo de segurança",
      "Um tipo de servidor"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "O que significa DNS?",
    options: [
      "Data Network System",
      "Domain Name System",
      "Digital Network Server",
      "Domain Network Security"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Qual é a função de um firewall?",
    options: [
      "Acelerar a internet",
      "Proteger a rede de acessos não autorizados",
      "Armazenar dados",
      "Criar backups automáticos"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "O que é um algoritmo de hash?",
    options: [
      "Um método de compressão de arquivos",
      "Uma função que converte dados em valor fixo",
      "Um tipo de criptografia reversível",
      "Um protocolo de rede"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Qual porta padrão do protocolo HTTPS?",
    options: [
      "80",
      "443",
      "8080",
      "3306"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "O que é SQL injection?",
    options: [
      "Um método de backup de banco de dados",
      "Uma técnica de ataque a aplicações web",
      "Um tipo de linguagem de programação",
      "Um protocolo de segurança"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "O que significa REST em APIs?",
    options: [
      "Remote Electronic System Transfer",
      "Representational State Transfer",
      "Restricted Electronic Service Tool",
      "Remote Server Technology"
    ],
    correctAnswer: 1
  }
];

export const advancedQuestions: Question[] = [
  {
    id: 1,
    question: "Qual a complexidade de tempo do algoritmo QuickSort no pior caso?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(log n)"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "O que é o CAP Theorem em sistemas distribuídos?",
    options: [
      "Conceito sobre capacidade de processamento",
      "Trade-off entre Consistency, Availability e Partition tolerance",
      "Protocolo de comunicação entre servidores",
      "Método de criptografia avançada"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual padrão de design implementa uma única instância de uma classe?",
    options: [
      "Factory",
      "Observer",
      "Singleton",
      "Decorator"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "O que é um ataque de timing side-channel?",
    options: [
      "Ataque que explora diferenças no tempo de execução",
      "Invasão durante horário específico",
      "Sobrecarga de servidores",
      "Interceptação de pacotes de rede"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Qual estrutura de dados oferece O(1) para busca, inserção e remoção?",
    options: [
      "Array",
      "Linked List",
      "Hash Table (caso médio)",
      "Binary Tree"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "O que é um Zero-Day exploit?",
    options: [
      "Vulnerabilidade conhecida há muito tempo",
      "Vulnerabilidade explorada antes de ser conhecida pelo desenvolvedor",
      "Ataque que leva zero dias para ser executado",
      "Sistema sem vulnerabilidades"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Qual protocolo utiliza Diffie-Hellman para troca de chaves?",
    options: [
      "HTTP",
      "FTP",
      "TLS/SSL",
      "SMTP"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "O que é um Docker Container?",
    options: [
      "Uma máquina virtual completa",
      "Ambiente isolado que compartilha o kernel do host",
      "Um tipo de servidor em nuvem",
      "Sistema de backup automático"
    ],
    correctAnswer: 1
  }
];
