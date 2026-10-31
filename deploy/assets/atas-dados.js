/* ══ Conteúdo das atas — fonte única ═════════════════════════════════════════
   Lido por ata.html e por ata-v2.html. Antes vivia inline no ata.html; com dois
   desenhos concorrendo viraria duas cópias, e correção feita numa não chegaria
   na outra — foi o que quase aconteceu com os selos de vigência.

   Cada ata:
     categoria, titulo, manchete, chamada     — identificação e abertura
     imagem, alt                              — foto de capa
     selos?                                   — sobrepõe SELOS_PADRAO; só declare
                                                "Ata vigente" onde há ARP vigente
     dados: [[rótulo, valor] × 4]
     sobreTitulo, sobreTexto
     blocos: [[rótulo, título, texto] × 3]
     tituloGaleria, galeria: [[src, alt]]
     itens: [...]
     video?: [src, poster, legenda]
     formTitulo, formPlaceholder
   ══════════════════════════════════════════════════════════════════════════ */

const ATAS = {
  "sala-multissensorial": {
    categoria: "Inclusão", titulo: "Sala multissensorial",
    manchete: "Transforme a inclusão da sua rede em referência",
    chamada: "Ambientes sensoriais completos, do projeto à implantação — modelos P, M, G e GG.",
    imagem: "assets/img/sensorial-01.jpeg", alt: "Sala multissensorial implantada em escola municipal",
    dados: [["Modalidade", "Projeto sob demanda com implantação assistida"], ["Tamanhos", "P, M, G e GG"], ["Atende", "Educação infantil ao fundamental"], ["Entrega", "Instalada e com equipe formada"]],
    sobreTitulo: "Um ambiente que estimula todos os sentidos",
    sobreTexto: "A sala multissensorial é projetada para estimular o visual, o tátil, o auditivo e o cinestésico, promovendo desenvolvimento cognitivo, motor e emocional. É uma entrega que a cidade inteira vê: inclusão de verdade para crianças atípicas e para toda a rede de ensino.",
    blocos: [["P", "Sala compacta", "Para a escola que tem uma sala pequena disponível e quer começar pelo essencial."], ["M", "Sala padrão", "O formato mais adotado: cobre estimulação visual, tátil e vestibular no mesmo ambiente."], ["G", "Sala ampliada", "Atende mais de uma turma por período, com circuito motor e área de regulação separadas."], ["GG", "Centro de referência", "Para o município que centraliza o atendimento especializado em um polo da rede."]],
    tituloGaleria: "O que entra na sala",
    galeria: [["assets/img/sensorial-01.jpeg", "Recursos sensoriais instalados"], ["assets/img/sensorial-02.jpeg", "Parede de escalada e balanço sensorial"], ["assets/img/sensorial-04.jpeg", "Piso e almofadas de regulação sensorial"], ["assets/img/sensorial-03.jpeg", "Sala multissensorial completa"]],
    itens: ["Piscina de bolinhas com LED", "Parede de escalada", "Balanço sensorial", "Piso emborrachado", "Painéis táteis", "Circuito motor em espuma", "Iluminação cênica", "Cabana de regulação"],
    formTitulo: "Conte qual sala vai virar a sala sensorial",
    formPlaceholder: "Metragem aproximada, escola, número de alunos atendidos"
  },
  "brinquedos-educacionais": {
    categoria: "Playground e pátio", titulo: "Brinquedos e equipamentos educacionais",
    manchete: "O pátio e a sala de recursos em uma ata só",
    chamada: "Mais de 300 itens registrados, do playground ao alfabeto ilustrado da sala de recursos.",
    imagem: "assets/img/playground-02.jpeg", alt: "Playground com piso modular entregue em escola municipal",
    dados: [["Abrangência", "Mais de 300 itens registrados"], ["Aplicação", "Playground, pátio e sala de recursos"], ["Atende", "Creche ao ensino fundamental"], ["Entrega", "Instalada pela nossa equipe"]],
    sobreTitulo: "Do parque ao material da sala de recursos",
    sobreTexto: "Uma única ata cobre o playground do pátio, os jogos pedagógicos da sala e os recursos da educação especial. O gestor monta a lista por escola e recebe tudo no mesmo cronograma, sem abrir processo para cada categoria.",
    blocos: [["Pátio", "Playground e recreação", "Estruturas de brincar, superfícies de impacto e mobiliário externo."], ["Sala", "Jogos e alfabetização", "Ábaco, blocos lógicos, alfabeto móvel, bingo de letras e sistema monetário."], ["Recursos", "Educação especial", "Letras em braille, caixa de percepção tátil, caixa de luz e aramados."]],
    tituloGaleria: "Entregas recentes",
    galeria: [["assets/img/playground-02.jpeg", "Playground com piso modular"], ["assets/img/playground-01.jpeg", "Estrutura de brincar instalada"], ["assets/img/playground-03.jpeg", "Pátio escolar entregue"], ["assets/img/playground-04.jpeg", "Superfície esportiva instalada"]],
    itens: ["Alfabeto ilustrado", "Blocos lógicos", "Caixa de luz", "Conjunto de aramados", "Instrumentos musicais infantis", "Letras em braille", "Bingo de letras", "Blocos de montagem"],
    formTitulo: "Monte a lista do seu município",
    formPlaceholder: "Escolas atendidas, faixa etária, itens prioritários"
  },
  "uniformes-escolares": {
    categoria: "Uniforme e identidade", titulo: "Uniformes escolares",
    manchete: "Toda criança vestindo a mesma camisa",
    chamada: "Do uniforme completo à meia antiderrapante, com a identidade do município.",
    imagem: "assets/img/uniforme-02.jpeg", alt: "Uniforme escolar completo entregue ao município",
    dados: [["Composição", "Uniforme completo, meia e kit"], ["Personalização", "Brasão da prefeitura bordado"], ["Grade", "Fechada por escola"], ["Entrega", "Antes do primeiro dia de aula"]],
    sobreTitulo: "Identidade visual que o município reconhece",
    sobreTexto: "O uniforme é a peça mais visível de uma gestão na educação: todo dia, em toda escola. A ata cobre a grade completa, do infantil ao fundamental, com tecido testado em laboratório e reposição durante o ano letivo.",
    blocos: [["01", "Grade completa", "Camiseta, agasalho, bermuda e meia, nos tamanhos de toda a rede."], ["02", "Tecido com laudo", "Composição testada em laboratório, com relatório para a área técnica."], ["03", "Reposição no ano", "Ajuste de grade durante o ano letivo, sem novo processo."]],
    tituloGaleria: "Peças da ata",
    galeria: [["assets/img/uniforme-02.jpeg", "Uniforme escolar completo"], ["assets/img/uniforme-01.jpeg", "Kit de uniforme entregue"], ["assets/img/uniforme-03.jpeg", "Kit escolar do município"], ["assets/img/uniforme-04.jpeg", "Alunos com uniforme da rede"]],
    itens: ["Uniforme completo", "Meia padrão", "Meia social", "Meia antiderrapante", "Meia infantil antiderrapante", "Agasalho", "Bermuda", "Bordado com brasão"],
    formTitulo: "Quantos alunos a sua rede veste",
    formPlaceholder: "Número de alunos por etapa, escolas e prazo desejado"
  },
  "mobiliario-escolar": {
    categoria: "Sala de aula", titulo: "Mobiliário escolar",
    manchete: "A sala de aula inteira, do conjunto ao armário",
    chamada: "Conjunto aluno em MDP e ABS, coletivos, refeitório, armários e carteiras com prancheta.",
    imagem: "assets/img/mobiliario-sala-aula.jpeg", alt: "Sala de aula com conjuntos aluno em uso: carteiras e cadeiras azuis ocupadas pela turma",
    dados: [["Itens", "Conjuntos, coletivos, refeitório e armários"], ["Materiais", "MDP e ABS"], ["Acessibilidade", "Mesa para cadeira de rodas"], ["Entrega", "Montada, sala por sala"]],
    sobreTitulo: "Mobiliário que aguenta o ano letivo inteiro",
    sobreTexto: "A ata cobre a sala de aula, o refeitório, a biblioteca e a sala do professor. Os conjuntos seguem a escala por tamanho, do infantil ao adulto, e há mesa acessível para estudante em cadeira de rodas.",
    blocos: [["Sala", "Conjuntos por tamanho", "Conjunto aluno nos tamanhos 1 a 6, em MDP ou ABS, e conjunto professor."], ["Refeitório", "Mesas coletivas", "Refeitório infantil, juvenil e adulto, com e sem encosto, de 8 lugares."], ["Guarda", "Armários e nichos", "Porta cartolina, trocador, expositor de livros, porta brinquedos e 15 nichos."]],
    tituloGaleria: "Mobiliário em uso",
    galeria: [["assets/img/mobiliario-sala.jpeg", "Sala de aula equipada"], ["assets/img/mobiliario-01.jpeg", "Conjunto aluno em MDP"], ["assets/img/mobiliario-02.jpeg", "Mobiliário escolar entregue"], ["assets/img/mobiliario-03.jpeg", "Conjunto coletivo instalado"]],
    itens: ["Conjunto aluno MDP", "Conjunto aluno ABS", "Conjunto hexagonal", "Mesa acessível", "Conjunto professor", "Refeitório 8 lugares", "Armário trocador", "Carteira com prancheta"],
    formTitulo: "Quantas salas você precisa equipar",
    formPlaceholder: "Número de salas, escolas e etapas atendidas"
  },
  "espumado-psicomotricidade": {
    categoria: "Educação infantil", titulo: "Espumado e psicomotricidade",
    manchete: "O corpo aprende antes da letra",
    chamada: "Conjuntos Emoção e Imaginação, Pequenos Passos e Praticar, em espuma D23 revestida.",
    imagem: "assets/img/espumado-01.png", alt: "Circuito de psicomotricidade em espuma revestida",
    dados: [["Conjuntos", "Emoção e Imaginação, Pequenos Passos, Praticar"], ["Espuma", "Densidade D23"], ["Revestimento", "Bagum 0,40 mm"], ["Atende", "Berçário à educação infantil"]],
    sobreTitulo: "Circuitos que desenvolvem equilíbrio e coordenação",
    sobreTexto: "Peças em espuma revestida montam circuitos de psicomotricidade seguros para creche e educação infantil. Cada conjunto tem uma função: brincar simbólico, primeiros passos ou circuito motor completo.",
    blocos: [["01", "Emoção e Imaginação", "Dominó de espuma, cara ou careta, cilindro das profissões, robô geométrico e sala de leitura."], ["02", "Pequenos Passos", "Circuito bebê, ponte, soft túnel e mini ginasta para os primeiros deslocamentos."], ["03", "Praticar", "Conjunto de pneus, passa minhoca, equilíbrio em S e circuito olímpico."]],
    tituloGaleria: "Conjuntos da ata",
    galeria: [["assets/img/espumado-01.png", "Circuito de psicomotricidade em espuma"], ["assets/img/sensorial-04.jpeg", "Recursos de estimulação motora"], ["assets/img/sensorial-05.jpeg", "Ambiente sensorial montado"], ["assets/img/sensorial-02.jpeg", "Espaço de psicomotricidade"]],
    itens: ["Dominó de espuma", "Cara ou careta", "Tapete multicolorido", "Cilindro das profissões", "Circuito bebê", "Soft túnel baby", "Passa minhoca", "Circuito olímpico"],
    formTitulo: "Conte sobre as creches da rede",
    formPlaceholder: "Número de creches, turmas e espaço disponível"
  },
  "notebooks-tablets": {
    categoria: "Laboratório móvel", titulo: "Notebooks e tablets",
    manchete: "Tecnologia que chega na escola pronta para usar",
    chamada: "Equipamento para a rede e para o estudante, com garantia e suporte durante a vigência.",
    imagem: "assets/img/tecnologia-01.jpeg", alt: "Laboratório móvel de informática entregue à rede municipal",
    dados: [["Equipamentos", "Notebooks e tablets educacionais"], ["Formato", "Laboratório móvel ou uso individual"], ["Suporte", "Durante toda a vigência da ata"], ["Entrega", "Configurada e testada"]],
    sobreTitulo: "Um laboratório que circula entre as escolas",
    sobreTexto: "Em vez de uma sala de informática parada, o equipamento vai até a turma. O carrinho leva os notebooks carregados e prontos, e volta para a base ao fim da aula — o mesmo conjunto atende várias escolas.",
    blocos: [["01", "Para a rede", "Notebooks para a secretaria, a coordenação e o laboratório móvel da escola."], ["02", "Para o estudante", "Tablets de uso individual em sala, com gestão de conteúdo."], ["03", "Suporte", "Garantia e atendimento técnico durante a vigência da ata."]],
    tituloGaleria: "Equipamento em uso",
    galeria: [["assets/img/tecnologia-01.jpeg", "Laboratório móvel de informática"], ["assets/img/tecnologia-02.jpeg", "Equipamento de tecnologia educacional em uso"], ["assets/img/tecnologia-poster.jpeg", "Sala equipada com tecnologia"], ["assets/img/lab-maker-movel.jpeg", "Carrinho com notebooks e ferramentas"]],
    itens: ["Notebook educacional", "Tablet educacional", "Carrinho de carga", "Gestão de conteúdo", "Garantia estendida", "Suporte técnico"],
    formTitulo: "Quantos equipamentos a rede precisa",
    formPlaceholder: "Número de escolas, estudantes e uso pretendido"
  },
  "telas-interativas": {
    categoria: "Sala conectada", titulo: "Telas interativas",
    // ARP 009.2024 (lousas digitais) vencida (portfólio, 30/10/2026).
    selos: ["Consulte a ata aplicável", "Adesão sem nova licitação", "Lei 14.133/2021"],
    manchete: "Tecnologia que a professora usa no primeiro dia",
    chamada: "Telas Ultra HD 4K com inteligência artificial e software de colaboração.",
    imagem: "assets/img/tela-interativa-01.jpeg", alt: "Professor conduzindo aula de geografia na tela interativa com a turma",
    dados: [["Composição", "Três itens, comercializados em conjunto"], ["Tela", "Ultra HD 4K, som 2.1 de 60 W, câmera 48 MP"], ["Software", "DeepHub Class, Board e Broadcast"], ["Módulo OPS", "Windows 11, Intel i7, 8 GB, SSD 240 GB"]],
    sobreTitulo: "A lousa que a escola realmente usa",
    sobreTexto: "A ata registra três itens que só são comercializados juntos: a tela interativa, o software de gestão educacional e o módulo Windows OPS que roda dentro dela. Chega instalada, com o software configurado e a equipe pedagógica treinada.",
    blocos: [["01", "Tela interativa", "Ultra HD 4K, som 2.1 de 60 W, câmera de 48 MP, escrita com reconhecimento de caligrafia e pressão da caneta, desbloqueio por NFC e digital."], ["02", "Software de gestão", "DeepHub Class com biblioteca de objetos 3D e caneta de IA; DeepHub Board para mapas mentais e votação; Broadcast para espelhar em qualquer dispositivo."], ["03", "Módulo Windows OPS", "Windows 11, Intel i7 de 11ª geração, 8 GB de RAM, SSD de 240 GB, RJ-45 e Wi-Fi."]],
    tituloGaleria: "O conjunto da ata",
    galeria: [["assets/img/lousa-tela.jpeg", "Tela interativa Ultra HD 4K"], ["assets/img/lousa-ops.jpeg", "Módulo Windows OPS que se acopla à tela"], ["assets/img/tela-interativa-01.jpeg", "Aula na tela interativa com a turma"], ["assets/img/tela-interativa-02.jpeg", "Tela interativa instalada na sala de aula"]],
    itens: ["Tela interativa Ultra HD 4K", "Som 2.1 de 60 W", "Câmera de 48 MP", "Reconhecimento de caligrafia", "Caneta de IA que gera modelos 3D", "DeepHub Class", "DeepHub Board", "Broadcast e Cast", "Módulo Windows OPS", "Formação da equipe"],
    formTitulo: "Quantas salas quer conectar",
    formPlaceholder: "Número de salas, escolas e infraestrutura disponível"
  },
  "kit-inclusivo": {
    categoria: "Inclusão", titulo: "Kit inclusivo",
    manchete: "O estudante neurodivergente com o que precisa ao alcance da mão",
    chamada: "Kit individual para autorregulação, concentração, comunicação e conforto sensorial.",
    imagem: "assets/img/kit-inclusivo-03.jpeg", alt: "Kit inclusivo com caderno de pauta ampliada, tesoura dupla adaptada, massa de modelar e recursos sensoriais",
    dados: [["Formato", "Kit individual por estudante"], ["Eixos", "Autorregulação, concentração, comunicação"], ["Atende", "Estudantes neurodivergentes"], ["Entrega", "Kit montado, pronto para uso"]],
    sobreTitulo: "Recursos que acompanham o estudante",
    sobreTexto: "Nem toda escola tem sala de recursos, mas todo estudante pode ter os seus. O kit reúne os itens de regulação sensorial, apoio à escrita e comunicação que permitem a permanência em sala, sem depender de um espaço exclusivo. Vem montado, incluindo a mochila que o estudante leva todo dia.",
    blocos: [["01", "Autonomia e vida diária", "Mochila sensorial, copo de treinamento antivazamento e avental infantil com bolso."], ["02", "Regulação sensorial", "Colar mordedor, pop it spinner, squish, livro sensorial, slime e abafador de ruídos."], ["03", "Escrita e coordenação motora", "Adaptadores de lápis, lápis grafite triangular, borracha ergonômica, tesoura dupla tandem e caderno de pauta ampliada."], ["04", "Arte e expressão criativa", "Giz de cera com encaixe no dedo, hidrocor de ponta reforçada, lápis de cor apagável, pincel ergonômico e massinhas."], ["05", "Recursos pedagógicos", "Quadro de rotinas apagável, cartela de adesivos de emoções e kit de livros paradidáticos."]],
    tituloGaleria: "O que vem no kit",
    galeria: [["assets/img/kit-inclusivo-03.jpeg", "Kit inclusivo com caderno de pauta ampliada, tesoura dupla e massa de modelar"], ["assets/img/mochila-inclusiva-01.jpeg", "Mochila do kit, com abafador de ruído no bolso frontal"], ["assets/img/mochila-inclusiva-02.jpeg", "Mochila Inclusiva exposta com os itens que a compõem"], ["assets/img/kit-inclusivo-02.jpeg", "Kit inclusivo entregue ao estudante"]],
    itens: ["Mochila sensorial", "Copo de treinamento antivazamento", "Avental infantil com bolso", "Colar mordedor", "Pop it spinner", "Squish sensorial", "Livro sensorial", "Slime", "Abafador de ruídos infantil", "Adaptador de lápis em EVA", "Adaptador de lápis com encaixe de dedos", "Lápis grafite big triangular", "Borracha ergonômica hexagonal", "Tesoura escolar dupla tandem", "Caderno com pauta ampliada", "Giz de cera com encaixe no dedo", "Giz de cera retrátil", "Hidrocor big ponta que não afunda", "Lápis de cor apagável big", "Pincel com pega ergonômica", "Kit massinha de areia", "Maleta com massa de modelar", "Livro de colorir", "Quadro de rotinas apagável", "Cartela de adesivos de emoções", "Kit de livros paradidáticos"],
    formTitulo: "Quantos estudantes serão atendidos",
    formPlaceholder: "Número de estudantes com laudo, escolas e etapas"
  },
  "cidade-segura": {
    categoria: "Segurança pública", titulo: "Aplicativo Cidade Segura",
    manchete: "A cidade inteira com o botão de pânico no bolso",
    chamada: "Apps Cidadão, Morador e Atendente, com Pânico Maria da Penha, pânico escolar e câmeras públicas.",
    imagem: "assets/img/cidade-segura-01.png", alt: "Aplicativo Cidade Segura no celular do morador",
    dados: [["Aplicativos", "Cidadão, Morador e Atendente"], ["Recursos", "Pânico Maria da Penha e pânico escolar"], ["Integração", "Câmeras públicas do município"], ["Entrega", "Implantado com treinamento da central"]],
    sobreTitulo: "Segurança que a população usa no celular",
    sobreTexto: "Três aplicativos conectados a uma central: o morador aciona, o atendente recebe e a guarda responde. Inclui o botão de pânico da Lei Maria da Penha e o acionamento escolar, com integração às câmeras públicas.",
    blocos: [["01", "Cidadão e Morador", "Acionamento de emergência, ocorrências e comunicação com a guarda."], ["02", "Atendente", "Central que recebe, classifica e despacha o atendimento."], ["03", "Pânico protegido", "Botão Maria da Penha e pânico escolar com prioridade na fila."]],
    tituloGaleria: "Segurança pública",
    galeria: [["assets/img/cidade-segura-01.png", "Aplicativo Cidade Segura"], ["assets/img/uniforme-05.jpeg", "Uniforme profissional da guarda municipal"]],
    itens: ["App Cidadão", "App Morador", "App Atendente", "Pânico Maria da Penha", "Pânico escolar", "Câmeras públicas", "Central de atendimento"],
    formTitulo: "Conte como funciona a sua guarda hoje",
    formPlaceholder: "População do município, efetivo da guarda e central existente"
  },
  "superficies-esportivas": {
    categoria: "Esporte e lazer", titulo: "Superfícies esportivas",
    manchete: "O chão que aguenta o recreio inteiro",
    chamada: "Piso modular de alto impacto que drena chuva e não descola no sol, com dez anos de garantia.",
    imagem: "assets/img/quadra-modular-01.jpeg", alt: "Quadra com piso modular esportivo verde e amarelo instalada",
    dados: [["Produto", "Piso modular de alto impacto"], ["Garantia", "Dez anos em contrato"], ["Drenagem", "Escoamento integrado ao módulo"], ["Entrega", "Instalada pela nossa equipe"]],
    sobreTitulo: "Quadra pronta para uso o ano inteiro",
    sobreTexto: "O piso modular absorve impacto de queda, drena a chuva e não descola no sol. Instalação sobre a base existente, sem obra pesada, e garantia de dez anos em contrato.",
    blocos: [["01", "Absorve impacto", "Reduz lesão em queda, o que importa em pátio de escola."], ["02", "Drena a chuva", "A quadra volta a ser usada assim que a chuva passa."], ["03", "Dez anos", "Garantia contratual contra descolamento e desgaste de cor."]],
    tituloGaleria: "Quadras entregues",
    video: ["assets/video/piso-modular.mp4", "assets/img/piso-modular-poster.jpeg", "Instalação do piso modular sobre a base existente: os módulos encaixam sem obra pesada, e a quadra volta a ser usada no mesmo dia."],
    galeria: [["assets/img/quadra-modular-01.jpeg", "Quadra com piso modular instalada"], ["assets/img/playground-05.jpeg", "Superfície esportiva entregue"], ["assets/img/playground-02.jpeg", "Piso modular instalado"], ["assets/img/playground-04.jpeg", "Superfície esportiva entregue"], ["assets/img/playground-06.jpeg", "Espaço esportivo escolar"]],
    itens: ["Piso modular esportivo", "Demarcação de quadra", "Drenagem integrada", "Instalação sobre base existente", "Garantia de dez anos"],
    formTitulo: "Qual quadra vai ser reformada",
    formPlaceholder: "Metragem da quadra, estado da base atual e prazo"
  },
  "movimento-educacao-fisica": {
    categoria: "Educação física", titulo: "Movimento e educação física",
    manchete: "Aula de educação física com material para a turma toda",
    chamada: "Kit pedagógico-esportivo completo para o ensino fundamental.",
    imagem: "assets/img/edfisica-01.jpeg", alt: "Formação de professores de educação física em quadra escolar",
    dados: [["Formato", "Kit pedagógico-esportivo"], ["Atende", "Ensino fundamental"], ["Uso", "Aula regular e projetos esportivos"], ["Entrega", "Kit completo por escola"]],
    sobreTitulo: "Material que chega para a turma inteira",
    sobreTexto: "A aula de educação física trava quando falta material. O kit cobre as modalidades da BNCC com quantidade suficiente para a turma toda participar, não só assistir.",
    blocos: [["01", "Modalidades", "Material para as práticas corporais previstas na BNCC."], ["02", "Quantidade", "Kit dimensionado para a turma inteira em atividade."], ["03", "Durabilidade", "Itens especificados para uso diário em quadra e pátio."]],
    tituloGaleria: "Espaços e prática",
    galeria: [["assets/img/edfisica-01.jpeg", "Formação de professores de educação física"], ["assets/img/edfisica-02.jpeg", "Material pedagógico-esportivo organizado na escola"], ["assets/img/edfisica-03.jpeg", "Prática orientada em quadra coberta"], ["assets/img/playground-01.jpeg", "Área de recreação entregue"], ["assets/img/playground-03.jpeg", "Pátio escolar"]],
    itens: ["Kit pedagógico-esportivo", "Material por modalidade", "Uso em quadra e pátio", "Alinhado à BNCC"],
    formTitulo: "Quantas escolas recebem o kit",
    formPlaceholder: "Escolas, número de turmas e espaço disponível"
  },
  "uniformes-profissionais": {
    categoria: "Servidores", titulo: "Uniformes profissionais",
    manchete: "Catorze lotes para vestir o município inteiro",
    chamada: "Da guarda municipal à saúde, da limpeza às obras.",
    imagem: "assets/img/uniforme-prof-01.jpeg", alt: "Equipe de limpeza urbana uniformizada ao lado do caminhão da prefeitura",
    dados: [["Abrangência", "Catorze lotes"], ["Setores", "Guarda, saúde, limpeza e obras"], ["Personalização", "Identidade da prefeitura"], ["Grade", "Fechada por secretaria"]],
    sobreTitulo: "Cada secretaria com o uniforme da sua função",
    sobreTexto: "Uma ata cobre a guarda municipal, as equipes de saúde, a limpeza urbana e as obras. Cada lote traz a especificação técnica da função, com a identidade visual da prefeitura.",
    blocos: [["01", "Guarda municipal", "Uniforme operacional com especificação para o serviço de rua."], ["02", "Saúde", "Peças para unidades básicas e equipes de atendimento."], ["03", "Limpeza e obras", "Uniforme com requisitos de segurança e alta visibilidade."]],
    tituloGaleria: "Uniformes da ata",
    galeria: [["assets/img/uniforme-prof-01.jpeg", "Equipe de limpeza urbana uniformizada"], ["assets/img/uniforme-prof-02.jpeg", "Equipe de atendimento móvel de urgência"], ["assets/img/uniforme-prof-03.jpeg", "Uniforme administrativo do corpo de bombeiros"], ["assets/img/uniforme-prof-04.jpeg", "Equipe de defesa civil em plantão"], ["assets/img/uniforme-prof-05.jpeg", "Equipe de manutenção predial em serviço"], ["assets/img/uniforme-05.jpeg", "Uniforme profissional produzido"]],
    itens: ["Guarda municipal", "Saúde", "Limpeza urbana", "Obras", "Alta visibilidade", "Bordado com brasão"],
    formTitulo: "Quantos servidores serão uniformizados",
    formPlaceholder: "Secretarias, número de servidores e prazo desejado"
  },
  "sala-maker": {
    categoria: "Cultura maker", titulo: "Sala Maker",
    manchete: "A sala onde o estudante deixa de assistir e passa a construir",
    chamada: "Ambiente completo de prototipagem: mobiliário exclusivo, cenografia, impressora 3D, robótica e eletrônica.",
    imagem: "assets/img/sala-maker-01.jpeg", alt: "Estudantes construindo protótipos na Sala Maker, com impressora 3D e mural do processo criativo ao fundo",
    dados: [["Modalidade", "Ambiente completo, da concepção à entrega"], ["Inclui", "Mobiliário, cenografia e equipamentos"], ["Alinhamento", "Pensamento computacional na BNCC"], ["Entrega", "Sala pronta para uso"]],
    sobreTitulo: "Um laboratório de inovação dentro da escola",
    sobreTexto: "A Sala Maker é entregue pronta: mobiliário exclusivo, cenografia personalizada, impressora 3D, kits de robótica, componentes eletrônicos e ferramentas. O ambiente é planejado para a colaboração, a resolução de problemas e as competências de pensamento computacional previstas na BNCC.",
    blocos: [["01", "Ambiente", "Mobiliário exclusivo, cenografia e ambientação acolhedora."], ["02", "Equipamentos", "Impressora 3D, robótica, eletrônica, tablets e ferramentas maker."], ["03", "Formação", "Livros de apoio ao professor e assessoria na implantação."]],
    tituloGaleria: "A sala montada",
    galeria: [["assets/img/sala-maker-01.jpeg", "Sala Maker em uso, com bancadas, mural e impressora 3D"], ["assets/img/maker-impressora-01.jpeg", "Estudantes operando a impressora 3D"], ["assets/img/maker-robotica-01.jpeg", "Professor e estudantes montando um kit de robótica"], ["assets/img/lab-sala-maker.jpeg", "Bancadas e mural de projetos da sala"]],
    itens: ["Mobiliário exclusivo", "Cenografia personalizada", "Impressora 3D", "Kit de robótica", "Componentes eletrônicos", "Ferramentas maker", "Tablet para programação", "Assessoria formativa"],
    formTitulo: "Qual escola vai receber a Sala Maker",
    formPlaceholder: "Escola, metragem da sala e número de estudantes atendidos"
  },
  "laboratorio-maker-movel": {
    categoria: "Laboratório itinerante", titulo: "Laboratório Maker Móvel",
    manchete: "A escola sem sala disponível também faz maker",
    chamada: "Um carrinho leva robótica, prototipagem e eletrônica de uma sala para a outra.",
    imagem: "assets/img/maker-movel-01.jpeg", alt: "Laboratório maker móvel: carrinho com bancada, painel de ferramentas, gavetas e notebook",
    dados: [["Modalidade", "Laboratório itinerante em carrinho"], ["Mobilidade", "Circula entre salas e escolas"], ["Inclui", "Robótica, prototipagem e eletrônica"], ["Entrega", "Carrinho montado e equipado"]],
    sobreTitulo: "Inovação que chega a todas as escolas",
    sobreTexto: "Nem toda escola tem espaço físico para uma Sala Maker. O laboratório móvel reúne, em uma estrutura prática e organizada, os recursos de robótica, programação, eletrônica e prototipagem — e vai até a turma. Um único conjunto beneficia um número maior de estudantes.",
    blocos: [["01", "Mobilidade", "Estrutura com rodas, resistente, para transporte entre salas."], ["02", "Equipamentos", "Kits de robótica, componentes eletrônicos e ferramentas maker."], ["03", "Alcance", "Um conjunto atende várias turmas e várias escolas da rede."]],
    tituloGaleria: "O carrinho por dentro",
    galeria: [["assets/img/maker-movel-01.jpeg", "Carrinho maker aberto, com bancada e painel de ferramentas"], ["assets/img/maker-robotica-01.jpeg", "Turma montando robótica com o professor"], ["assets/img/maker-impressora-01.jpeg", "Impressora 3D em uso pelos estudantes"], ["assets/img/sala-maker-01.jpeg", "Sala Maker completa"]],
    itens: ["Carrinho personalizável", "Kit de robótica", "Componentes eletrônicos", "Ferramentas maker", "Impressora 3D", "Notebook", "Armazenamento organizado"],
    formTitulo: "Quantas escolas o carrinho vai atender",
    formPlaceholder: "Número de escolas, distância entre elas e turmas atendidas"
  },
  "carrinho-neurodiversidade": {
    categoria: "Inclusão itinerante", titulo: "Carrinho de Neurodiversidade",
    manchete: "Os recursos da inclusão circulando pela escola",
    chamada: "Recursos pedagógicos, sensoriais e terapêuticos que circulam entre salas, biblioteca e atendimento especializado.",
    imagem: "assets/img/neurodiversidade-01.jpeg", alt: "Sala de recursos inclusiva com circuito motor, mesa sensorial e crianças em atividade — ambiente onde o carrinho circula",
    dados: [["Modalidade", "Solução itinerante"], ["Recursos", "Pedagógicos, sensoriais e terapêuticos"], ["Atende", "Crianças típicas e atípicas"], ["Entrega", "Carrinho montado e organizado"]],
    sobreTitulo: "Inclusão sem depender de um espaço exclusivo",
    sobreTexto: "A educação inclusiva acontece quando cada estudante tem acesso aos recursos de que precisa. O carrinho reúne materiais que estimulam o desenvolvimento cognitivo, sensorial, motor, emocional e social — e leva esses recursos para a sala de aula, a biblioteca e o atendimento especializado.",
    blocos: [["01", "Organização", "Gaveteiros identificados, com material separado por objetivo pedagógico."], ["02", "Atendimento", "Especial atenção a estudantes com TEA e outras necessidades específicas."], ["03", "Mobilidade", "Sai da sala de recursos e chega a qualquer ambiente da escola."]],
    tituloGaleria: "O carrinho em uso",
    galeria: [["assets/img/neurodiversidade-02.jpeg", "Carrinho de neurodiversidade com dezesseis gaveteiros identificados"], ["assets/img/neurodiversidade-01.jpeg", "Sala de recursos inclusiva onde o carrinho é usado"], ["assets/img/sensorial-01.jpeg", "Recursos sensoriais de apoio"], ["assets/img/kit-inclusivo-03.jpeg", "Kit inclusivo do estudante"]],
    itens: ["Gaveteiros identificados", "Recursos sensoriais", "Material terapêutico", "Jogos pedagógicos", "Atendimento a TEA", "Estrutura com rodas"],
    formTitulo: "Quantos estudantes atípicos a rede atende",
    formPlaceholder: "Estudantes com laudo, escolas e estrutura de atendimento atual"
  },
  "materiais-escolares": {
    categoria: "Início do ano letivo", titulo: "Material e kit escolar",
    manchete: "Cada criança da rede começa o ano com o mesmo material",
    chamada: "Do avental ao compasso: material de uso diário e kit individual por estudante, com itens adaptados no mesmo pacote.",
    imagem: "assets/img/kit-inclusivo-03.jpeg", alt: "Kit escolar com caderno de pauta ampliada, tesoura dupla adaptada, massa de modelar e canetas",
    dados: [["Escopo", "Material da rede e kit por estudante"], ["Inclusão", "Itens adaptados no kit padrão"], ["Personalização", "Identidade do município"], ["Entrega", "Programada por escola, antes das aulas"]],
    sobreTitulo: "O material que sustenta o ano letivo",
    sobreTexto: "Uma ata só cobre as duas pontas: o material de uso diário de toda a rede e o kit individual que cada estudante recebe. Os itens adaptados — pauta ampliada, tesoura dupla, apoio de preensão — vêm no kit padrão, então o estudante com necessidade específica recebe junto com a turma, sem separação. A entrega é programada escola por escola, com conferência na recepção.",
    blocos: [["01", "Uso diário", "Canetas, lápis, apontadores, borrachas e cadernos para toda a rede."], ["02", "Kit por estudante", "Composição diferente para educação infantil e fundamental."], ["03", "Itens adaptados", "Pauta ampliada, tesoura dupla e apoio de preensão no kit padrão."], ["04", "Logística", "Entrega programada por escola, com conferência na recepção."]],
    tituloGaleria: "O que vem no kit",
    galeria: [["assets/img/kit-inclusivo-03.jpeg", "Kit escolar com caderno de pauta ampliada e tesoura dupla adaptada"], ["assets/img/material-escolar-01.jpeg", "Itens de material escolar de uso diário"], ["assets/img/kit-escolar-01.jpeg", "Kit montado para entrega"], ["assets/img/uniforme-03.jpeg", "Kit do município entregue à escola"]],
    itens: ["Canetas hidrográficas", "Lápis e apontador", "Borracha", "Caderno de pauta ampliada", "Tesoura dupla adaptada", "Apoio de preensão", "Massa de modelar", "Avental de atividades"],
    formTitulo: "Quantos kits a rede precisa",
    formPlaceholder: "Número de escolas, estudantes por etapa e prazo"
  },
  "bullying-cyberbullying": {
    categoria: "Convivência escolar", titulo: "Bullying e cyberbullying",
    manchete: "Prevenção estruturada, não campanha de uma semana",
    chamada: "Kit Compasso da educação infantil ao fundamental: fantoches, cartelas de convivência e guia do professor.",
    imagem: "assets/img/convivencia-01.jpeg", alt: "Crianças deitadas na grama, sorrindo juntas em roda",
    dados: [["Programa", "Kit Compasso"], ["Atende", "Educação infantil ao fundamental"], ["Material", "Professor, estudante e família"], ["Entrega", "Kit completo por turma"]],
    sobreTitulo: "Um programa para o ano letivo inteiro",
    sobreTexto: "O kit organiza a prevenção ao bullying e ao cyberbullying em aulas estruturadas, com material para o professor conduzir e cartelas que ficam visíveis na sala. Não é palestra pontual: é rotina de convivência.",
    blocos: [["01", "Educação infantil", "Fantoches e cartelas para trabalhar emoções e regras de convivência."], ["02", "Fundamental", "Cadernos por ano, com situações de conflito e resolução."], ["03", "Professor", "Guia de orientações didáticas para conduzir cada encontro."]],
    tituloGaleria: "O kit por etapa",
    galeria: [["assets/img/bullying-01.jpeg", "Kit Compasso da educação infantil"], ["assets/img/socioemocional-01.jpeg", "Kit Compasso do ensino fundamental"], ["assets/img/cultura-paz-01.jpeg", "Coleção paradidática de cultura de paz"], ["assets/img/material-escolar-01.jpeg", "Materiais de apoio"]],
    itens: ["Fantoches", "Cartelas de convivência", "Caderno do professor", "Material do estudante", "Guia de orientações didáticas", "Kit por faixa etária"],
    formTitulo: "Quantas turmas vão receber o programa",
    formPlaceholder: "Escolas, número de turmas e etapas atendidas"
  },
  "educacao-socioemocional": {
    categoria: "Da educação infantil ao 9º ano", titulo: "Programa Compasso Socioemocional",
    manchete: "Socioemocional com hora marcada na grade, não campanha de uma semana",
    chamada: "Versão brasileira do Second Step: currículo estruturado, com a pauta de aula pronta na mão do professor da turma.",
    imagem: "assets/img/compasso-socio-aula.jpeg", alt: "Professora acompanhando de perto a atividade de uma estudante em sala de aula",
    dados: [["Atende", "Educação infantil (4 e 5 anos) ao 9º ano"], ["Origem", "Versão brasileira do Second Step"], ["Currículo", "Quatro unidades, retomadas a cada ano"], ["Carga", "10 a 15 min diários no infantil · 1 aula semanal no fundamental"]],
    sobreTitulo: "Quem dá a aula é o professor da turma",
    sobreTexto: "O programa não terceiriza a conversa para um palestrante de fora. O professor recebe pauta de aula pronta, material do estudante e formação para conduzir. As quatro unidades voltam todo ano com mais profundidade, e o caderno do aluno leva a conversa para dentro de casa.",
    blocos: [["01", "Habilidades para aprendizagem", "Escutar com atenção, focar, ignorar distrações e pedir o que precisa de forma assertiva."], ["02", "Empatia", "Reconhecer o próprio sentimento e o do outro, assumir perspectiva e agir com compaixão."], ["03", "Lidando com as emoções", "Nomear a emoção forte e se acalmar: mão na barriga, dizer pare, respirar fundo, contar."], ["04", "Resolução de problemas", "Resolver o conflito de forma segura e respeitosa, e sustentar amizades."]],
    tituloGaleria: "O kit muda a cada etapa",
    galeria: [["assets/img/bullying-01.jpeg", "Kit da educação infantil, 4 e 5 anos, com fantoches, cartelas e cartazes de habilidades"], ["assets/img/socioemocional-01.jpeg", "Kit do 2º ano do fundamental, com caderno do aluno, caderno do professor e cartazes"]],
    itens: ["Caderno do professor", "Caderno do aluno", "Pautas de unidade e de aula", "Fantoches", "Cartazes e minicartazes", "Cartas dos sentimentos", "Jogo da trilha", "Exercícios para o cérebro", "Plataforma digital"],
    formTitulo: "Quantas turmas entram no programa",
    formPlaceholder: "Escolas, etapas atendidas e número de turmas por ano"
  },
  "compasso-kids": {
    categoria: "Primeira infância · 3 anos", titulo: "Compasso Kids",
    selos: ["Programa pedagógico", "Consulte a ata aplicável", "Lei 14.133/2021"],
    manchete: "A roda de história deixa de ser passatempo e vira método",
    chamada: "Programa socioemocional para crianças de 3 anos, construído sobre a contação de histórias da tradição oral.",
    imagem: "assets/img/compasso-kids-01.jpeg", alt: "Educadora lendo o Livro do Educador do Compasso Kids para um grupo de crianças pequenas",
    dados: [["Atende", "Crianças de 3 anos"], ["Método", "Contos da tradição oral universal"], ["Formação", "Educador vira contador de histórias"], ["Alinhamento", "Campos de Experiência da BNCC"]],
    sobreTitulo: "Por que história, e não cartilha",
    sobreTexto: "Ouvir uma história ativa empatia, imaginação e vocabulário ao mesmo tempo, e deixa a criança simular experiências sem correr o risco. O Compasso Kids pega esse mecanismo e organiza: um conto da tradição oral, a atividade que desdobra o conto em sala e a atividade que vai para casa com a família. O educador recebe formação própria em narração — vinte tópicos, do desenvolvimento do cérebro na primeira infância à escolha do repertório.",
    blocos: [["01", "Conto", "História da tradição oral universal, escolhida para a faixa etária."], ["02", "Sala", "Atividades pedagógicas que desdobram o conto em brincadeira e criação."], ["03", "Casa", "Atividade impressa que traz a família para dentro da mesma história."], ["04", "Educador", "Formação assíncrona em narração de histórias, disponível na plataforma."]],
    tituloGaleria: "O programa em sala",
    galeria: [["assets/img/compasso-kids-01.jpeg", "Educadora lendo o Livro do Educador do Compasso Kids para as crianças"], ["assets/img/compasso-kids-02.jpeg", "Educador conduzindo roda de história na educação infantil"], ["assets/img/compasso-kids-03.jpeg", "Educadora com livro aberto em sala de leitura"], ["assets/img/compasso-kids-04.jpeg", "Crianças lendo livros da coleção"]],
    itens: ["Livro do Educador", "Contos da tradição oral", "Atividades para a sala", "Atividades para a família", "Formação em narração de histórias", "Materiais impressos e digitais", "Memória, cultura e tradição oral"],
    formTitulo: "Quantas turmas de 3 anos a rede tem",
    formPlaceholder: "Creches e pré-escolas, número de turmas e de educadores"
  },
  "compasso-mind": {
    categoria: "Do infantil ao ensino médio", titulo: "Compasso Mind",
    selos: ["Programa pedagógico", "Consulte a ata aplicável", "Lei 14.133/2021"],
    manchete: "Antes de ensinar qualquer conteúdo, ensine a prestar atenção",
    chamada: "Programa socioemocional estruturado sobre treino de atenção, foco e concentração, com prática diária de 5 a 10 minutos.",
    imagem: "assets/img/compasso-mind-aula.jpeg", alt: "Turma uniformizada sentada em roda ao ar livre durante uma sessão do programa",
    dados: [["Atende", "Educação infantil ao ensino médio"], ["Base", "Treino de atenção e autoconsciência"], ["Rotina", "2 aulas semanais e treino diário de 5 a 10 min"], ["Apoio", "Aulas expositivas gravadas em plataforma"]],
    sobreTitulo: "O pilar que falta antes do conteúdo",
    sobreTexto: "Não falta material nem informação na escola. Falta o estudante ter domínio da própria atenção: saber para onde direcionar o foco, sustentar apesar da conversa paralela ao lado, e perceber a própria emoção antes de reagir a ela. O Mind treina isso como se treina qualquer habilidade — todo dia, em blocos curtos, com o educador apoiado por roteiro e vídeo.",
    blocos: [["01", "Aula expositiva", "Gravada e disponível na plataforma; o educador se prepara pelo roteiro ou pelo vídeo."], ["02", "Aula de expedição", "Conduzida pelo educador, conecta o conteúdo à realidade da turma e tira dúvidas."], ["03", "Treino diário", "Cinco a dez minutos por dia de atenção, foco e concentração."], ["04", "Educação infantil", "Seis módulos lúdicos: relaxamento, atenção plena, conexões, alegria, equanimidade e compaixão."]],
    tituloGaleria: "Material por etapa",
    galeria: [["assets/img/compasso-mind-02.jpeg", "Livro do Educador do Compasso Mind da educação infantil, 4 anos"], ["assets/img/compasso-mind-01.jpeg", "Livro do Educador do Compasso Mind do 3º ano do fundamental"], ["assets/img/compasso-mind-03.jpeg", "Livro do Educador e Diário de Bordo do 7º ano"]],
    itens: ["Livro do Educador", "Diário de Bordo do estudante", "Plataforma digital", "Aulas expositivas gravadas", "Roteiros de expedição", "Treinos diários de atenção", "Formação inicial e continuada", "Conexão com a família"],
    formTitulo: "Quais etapas entram no programa",
    formPlaceholder: "Escolas, etapas atendidas e número de turmas"
  },
  "cultura-de-paz": {
    categoria: "Coleção paradidática", titulo: "Cultura de paz",
    // ARP 010.2024 vencida (portfólio, 30/10/2026). Enquanto não houver ata nova
    // registrada, esta página não pode afirmar vigência.
    selos: ["Consulte a ata aplicável", "Adesão sem nova licitação", "Lei 14.133/2021"],
    manchete: "Convivência ensinada pela literatura",
    chamada: "Livros que ensinam convivência, empatia e resolução de conflitos, do infantil ao fundamental.",
    imagem: "assets/img/cultura-paz-01.jpeg", alt: "Coleção paradidática de cultura de paz com oito títulos ilustrados",
    dados: [["Formato", "Coleção paradidática"], ["Temas", "Convivência, empatia e direitos"], ["Atende", "Educação infantil ao fundamental"], ["Entrega", "Coleção completa por escola"]],
    sobreTitulo: "A conversa difícil começa por uma história",
    sobreTexto: "A coleção reúne títulos de autores brasileiros sobre convivência, diferença, direitos humanos e resolução de conflitos. Os livros abrem a conversa em sala com uma história, e não com uma regra afixada na parede.",
    blocos: [["01", "Convivência", "Títulos sobre amizade, conflito e reparação entre colegas."], ["02", "Diferença", "Histórias sobre identidade, respeito e pertencimento."], ["03", "Direitos", "Declaração Universal dos Direitos Humanos em linguagem para crianças."]],
    tituloGaleria: "Títulos da coleção",
    galeria: [["assets/img/cultura-paz-01.jpeg", "Oito títulos da coleção de cultura de paz"], ["assets/img/bullying-01.jpeg", "Kit de convivência escolar"], ["assets/img/socioemocional-01.jpeg", "Programa socioemocional"], ["assets/img/material-escolar-01.jpeg", "Materiais de apoio"]],
    itens: ["Coleção completa", "Autores brasileiros", "Educação infantil", "Ensino fundamental", "Direitos humanos para crianças", "Acompanha CD em títulos selecionados"],
    formTitulo: "Quantas escolas recebem a coleção",
    formPlaceholder: "Escolas, bibliotecas e etapas atendidas"
  }
};

// Playgrounds saiu de brinquedos-educacionais e virou ata própria. Entrada mínima só para
// o link da vitrine resolver — o conteúdo entra quando montarmos a página dessa ata.
ATAS["playgrounds"] = {
  categoria: "Playground e pátio", titulo: "Playgrounds",
  selos: ["Programa em estruturação", "Consulte a ata aplicável", "Lei 14.133/2021"],
  manchete: "Estruturas de brincar para o pátio da escola",
  chamada: "Playground modular, casinha, gangorra, barco pirata e trave, em polietileno para área externa.",
  imagem: "assets/img/play-modular-01.jpeg", alt: "Playground modular com torre, escorregador e túnel instalado em área externa",
  dados: [["Aplicação", "Pátio e área externa"], ["Material", "Polietileno rotomoldado"], ["Atende", "Educação infantil e fundamental"], ["Entrega", "Instalado pela nossa equipe"]],
  sobreTitulo: "O pátio que a criança quer usar no recreio",
  sobreTexto: "Estruturas de brincar em polietileno, dimensionadas para pátio escolar e instaladas pela nossa equipe. Esta página ainda será detalhada a partir do catálogo da ata.",
  blocos: [["01", "Estruturas", "Playground modular com torre, escorregador, túnel e escalada."], ["02", "Brinquedos", "Casinha, gangorra, barco pirata e trave de futebol."], ["03", "Instalação", "Montagem no local, sobre superfície de impacto."]],
  tituloGaleria: "Itens da ata",
  galeria: [["assets/img/play-modular-01.jpeg", "Playground modular com torre e escorregador"], ["assets/img/play-casinha.jpeg", "Casinha infantil em polietileno"], ["assets/img/play-barco.jpeg", "Barco pirata de escalada"], ["assets/img/play-gangorra.jpeg", "Gangorra em polietileno"]],
  itens: ["Playground modular", "Casinha infantil", "Gangorra", "Gangorra jacaré", "Barco pirata", "Trave de futebol infantil"],
  formTitulo: "Quantas escolas recebem playground",
  formPlaceholder: "Escolas, área disponível no pátio e faixa etária atendida"
};

// Linha Pikler e Montessori. Conteúdo lido do catálogo consolidado de
// julho/2026 — as 154 peças estão na vitrine, com foto de cada uma.
ATAS["pikler-montessori"] = {
  categoria: "Educação infantil", titulo: "Pikler e Montessori",
  totalItens: 154,                 // a lista de itens abaixo é amostra por família
  selos: ["Linha em estruturação", "Consulte a ata aplicável", "Lei 14.133/2021"],
  manchete: "A criança sobe, alcança e guarda sozinha",
  chamada: "Cento e cinquenta e quatro peças em madeira de reflorestamento: escalada, movimento livre e mobiliário na altura de quem usa.",
  imagem: "assets/img/sens-0255.png", alt: "Triângulo aberto de escalada em madeira, da linha Pikler",
  dados: [["Peças", "154 no catálogo consolidado"], ["Material", "Madeira de reflorestamento com verniz atóxico"], ["Atende", "Berçário, creche e pré-escola"], ["Acabamento", "Cantos arredondados, sem partes cortantes"]],
  sobreTitulo: "Mobiliário que devolve a iniciativa para a criança",
  sobreTexto: "A abordagem Pikler parte do movimento livre: a criança escala, desce e se equilibra no próprio ritmo, sem o adulto posicionando o corpo dela. A Montessori completa com mobiliário na altura certa — armário que ela alcança, bancada onde ela trabalha, cabideiro onde ela guarda o próprio casaco. As 154 peças da linha combinam essas duas frentes num ambiente só.",
  blocos: [["Movimento", "Escalada e equilíbrio", "Triângulos articulados, rampas com barras, cubos alpinistas, pontes, gangorras e túneis."], ["Autonomia", "Na altura da criança", "Dezoito armários organizadores, bancadas de atividades, cabideiros com espelho e cantinhos de leitura."], ["Estímulo", "Painéis e luz", "Dezesseis painéis de atividades psicomotoras, caixa de luz, biombos em acrílico espelhado e espelhos que não estilhaçam."]],
  tituloGaleria: "A linha na sala",
  galeria: [["assets/img/sens-0255.png", "Triângulo aberto alpinista em madeira"], ["assets/img/sens-0239.png", "Rampa com barras para escalada"], ["assets/img/sens-0147.png", "Cantinho da leitura com laterais e estofado"], ["assets/img/sens-0214.png", "Painel casinha de atividades psicomotoras com LED"], ["assets/img/sens-0174.png", "Cubo fechado alpinista"], ["assets/img/sens-0144.png", "Caixa de luz com LED RGB"]],
  itens: ["Triângulo articulado", "Triângulo alpinista", "Rampa com barras", "Cubo alpinista", "Ponte de equilíbrio", "Túnel sensorial", "Gangorra", "Armário organizador", "Bancada de atividades", "Cantinho da leitura", "Cabideiro com espelho", "Painel de atividades", "Caixa de luz", "Biombo articulável", "Mesa de atividades"],
  formTitulo: "Quantas salas de educação infantil",
  formPlaceholder: "Creches e pré-escolas, número de salas e faixa etária"
};

// Frentes acrescentadas na revisão do portfólio de 30/10/2026. Vigência lida no
// nome do catálogo de cada ata, não presumida. Entrada mínima para o link da
// vitrine resolver — conteúdo entra quando montarmos a página.
ATAS["mobiliario-corporativo"] = {
  categoria: "Secretarias e gabinetes", titulo: "Mobiliário corporativo",
  manchete: "Quem atende o cidadão passa o dia nessa cadeira",
  chamada: "Cadeiras giratórias com regulagem, longarinas de espera, mesas e estações para as secretarias e salas de atendimento da prefeitura.",
  imagem: "assets/img/mob-corporativo.jpeg", alt: "Estações de trabalho e cadeiras giratórias em sala administrativa",
  dados: [["Atas", "ARP 30001-2025 e 30002-2025 CMRJ"], ["Vigência", "Até 05/06/2027"], ["Aplicação", "Secretarias, gabinetes e atendimento"], ["Entrega", "Montada pela nossa equipe"]],
  sobreTitulo: "A prefeitura também é um lugar de trabalho",
  sobreTexto: "O mobiliário escolar costuma entrar primeiro, e o administrativo fica para depois — até que a cadeira do setor de atendimento esteja com a espuma gasta e o servidor passe oito horas por dia nela. Esta frente cobre o outro lado do prédio público: posto de trabalho, sala de espera e gabinete, registrado em duas atas do Consórcio CMRJ com vigência até junho de 2027.",
  blocos: [["Assentos", "Giratórias e fixas", "Cadeira giratória com regulagem de altura e braços, encosto em tela, cadeira fixa e poltrona de recepção."], ["Espera", "Longarinas", "Bancos de dois a cinco lugares para recepção, triagem e sala de atendimento ao público."], ["Trabalho", "Mesas e apoio", "Estações de trabalho, mesas de reunião, gaveteiros e armários de apoio."]],
  tituloGaleria: "O mobiliário da ata",
  galeria: [["assets/img/mob-corporativo.jpeg", "Estações de trabalho e cadeiras giratórias em sala administrativa"], ["assets/img/mob-cadeira-giratoria.jpeg", "Cadeira giratória com encosto em tela e apoio de cabeça"], ["assets/img/mob-longarina-sala.jpeg", "Longarina de três lugares em área de espera"], ["assets/img/mob-poltrona.jpeg", "Poltrona de recepção em couro sintético"], ["assets/img/mob-sofa.jpeg", "Sofá de dois lugares para recepção"]],
  itens: ["Cadeira giratória com regulagem", "Cadeira fixa", "Poltrona de recepção", "Sofá de recepção", "Longarina de espera", "Mesa de trabalho", "Estação de trabalho", "Mesa de reunião", "Gaveteiro", "Armário de apoio"],
  formTitulo: "Quais setores recebem mobiliário",
  formPlaceholder: "Secretarias, número de postos de trabalho e prazo"
};

ATAS["mobiliario-aco"] = {
  categoria: "Arquivo e guarda", titulo: "Mobiliário em aço",
  manchete: "Onde o município guarda documento, material e merenda",
  chamada: "Armários, arquivos de gavetas, roupeiros, estantes e longarinas em aço com pintura eletrostática.",
  imagem: "assets/img/mob-aco.jpeg", alt: "Armário de aço de duas portas com fechadura",
  dados: [["Ata", "ARP 693-2025 AMGESP"], ["Vigência", "Até 13/06/2027"], ["Material", "Aço com pintura eletrostática"], ["Aplicação", "Almoxarifado, arquivo, vestiário e espera"]],
  sobreTitulo: "Aço resolve onde o MDP não aguenta",
  sobreTexto: "Almoxarifado com umidade, arquivo morto com carga, vestiário que leva água todo dia, depósito de merenda que precisa de limpeza frequente: são ambientes onde o painel de madeira incha, descola e precisa ser trocado em dois anos. A pintura eletrostática sobre aço aguenta esse uso e aceita produto de limpeza sem perder o acabamento.",
  blocos: [["Guarda", "Armários e roupeiros", "Armário de duas portas com fechadura, roupeiro de vestiário com vãos individuais e armário alto de almoxarifado."], ["Arquivo", "Gavetas e estantes", "Arquivo de quatro gavetas para pasta suspensa e estante desmontável com prateleiras reguláveis."], ["Espera", "Longarinas em aço", "Bancos de três a cinco lugares para recepção e corredor de atendimento."]],
  tituloGaleria: "A linha em aço",
  galeria: [["assets/img/mob-aco.jpeg", "Armário de aço de duas portas com fechadura"], ["assets/img/mob-arquivo-aco.jpeg", "Arquivo de aço com gavetas para pasta suspensa"], ["assets/img/mob-estante-aco.jpeg", "Estante de aço com prateleiras reguláveis"], ["assets/img/mob-longarina.jpeg", "Longarina em aço para área de espera"], ["assets/img/mob-longarina-sala.jpeg", "Longarina instalada em recepção"]],
  itens: ["Armário de aço 2 portas", "Armário alto de almoxarifado", "Roupeiro de vestiário", "Arquivo de 4 gavetas", "Estante desmontável", "Longarina 3 lugares", "Longarina 5 lugares"],
  formTitulo: "O que precisa de guarda em aço",
  formPlaceholder: "Almoxarifado, arquivo, vestiário — e quantas unidades"
};

const ORDEM = Object.keys(ATAS);

// Selos exibidos no topo da página. Só afirme "Ata vigente" onde existe ARP registrada:
// para declarar isso em uma solução, basta remover o campo `selos` dela e ela volta ao padrão.
const SELOS_PADRAO = ["Ata vigente", "Adesão sem nova licitação", "Lei 14.133/2021"];

const ETAPAS = [
  ["1", "Solicitação da adesão", "O órgão ou entidade pública interessada encaminha o pedido por e-mail."],
  ["2", "Avaliação pelo órgão gerenciador", "O órgão gerenciador da ata analisa os pedidos de adesão e verifica a viabilidade."],
  ["3", "Análise pelo fornecedor", "O detentor da ata entende a demanda e elabora projeto e cronograma antes do aceite."],
  ["4", "Envio de documentos", "O interessado recebe os documentos do órgão gerenciador e do fornecedor."],
  ["5", "Elaboração e assinatura do contrato", "O interessado elabora a minuta com base nos termos da ata, assina e publica."],
  ["6", "Emissão do empenho", "Envio do empenho devidamente assinado."],
  ["7", "Ordem de serviço ou fornecimento", "Envio da ordem devidamente assinada."],
  ["8", "Entrega do objeto contratado", "O fornecedor entrega o que foi efetivamente contratado."],
  ["9", "Pagamento ao fornecedor", "Concluída a entrega e atestado o recebimento, o pagamento é realizado."]
];


// slugs que já circularam e precisam continuar resolvendo
const ANTIGOS_ATA = { "mochila-inclusiva": "kit-inclusivo", "material-kit-escolar": "materiais-escolares" };

// Exposto no window de propósito: o script da página é avaliado pelo support.js
// e pode não enxergar as ligações léxicas deste arquivo.
Object.assign(window, { ATAS, ORDEM, SELOS_PADRAO, ETAPAS, ANTIGOS_ATA });
