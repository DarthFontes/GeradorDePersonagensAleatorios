document.getElementById('generate-btn').addEventListener('click', generateNPC);

//#region Dados
const names = ["Atreus", "Deacon", "Eisenberg", "Fornax", "Funesto", "Husky", "Joaquim", "Joaquinus", "Kraing", "Kyo", "Morg", "Odayaka", "Perseus", "Rastakhan", "Troyd", "Yazurha", "Zagnar", "Zantetsu", "Aelara", "Aelindor", "Aelindra", "Aelion", "Baelindra", "Baelith", "Baelor", "Brynna", "Caelara", "Caelith", "Caelum", "Cyrilla", "Daelia", "Daelindra", "Daelion", "Drystan", "Elyndel", "Elyndra", "Eryndor", "Eryndra", "Faelara", "Faelindor", "Faelion", "Faelyn", "Gaelindra", "Gaelira", "Gaelith", "Gwyneth", "Haelara", "Haelion", "Haelith", "Haldir", "Ilyndor", "Ilyndra", "Iryndel", "Iryndor", "Jaelindra", "Jaelion", "Jaelith", "Jorund", "Kaelara", "Kaelindra", "Kaelion", "Kaelith", "Laelindra", "Laelith", "Lirien", "Lorindel", "Maelindor", "Maelion", "Maelith", "Maelora", "Naelindra", "Naelith", "Naelora", "Nyssara", "Oryndel", "Oryndel", "Oryndel", "Oryndra", "Phaedra", "Phaelara", "Phaelindra", "Phaelyn", "Quelara", "Quelindra", "Quelion", "Quelion", "Raelindor", "Raelindra", "Raelith", "Ravena", "Saelindor", "Saelion", "Saelira", "Sylvaris", "Thaelara", "Thaelindra", "Thaelion", "Thalindra", "Ulyndel", "Ulyndel", "Ulyndor", "Ulyndra", "Vaelindra", "Vaelion", "Vaelith", "Vaelora", "Waelindra", "Waelith", "Waelora", "Wynter", "Xaelara", "Xaelindor", "Xaelion", "Xandria", "Ylthara", "Ylthindra", "Ylthindra", "Ylthion", "Zaelara", "Zaelion", "Zaelith", "Zorvyn"];
const classes = ["Arcanista", "Barbáro", "Bardo", "Bucaneiro", "Caçador", "Cavaleiro", "Clérigo", "Druida", "Frade", "Guerreiro", "Inventor", "Ladino", "Lutador", "Nobre", "Paladino", "Treinador"];
const race = ["Aggelus", "Anão", "Bugbear", "Centauro", "Ceratops", "Dahllan", "Duende", "Eiradaan", "Elfo", "Elfo-do-mar", "Finntroll", "Galokk", "Gnoll", "Goblin", "Golem", "Harpia", "Hobgoblin", "Humano", "Hynne", "Kaijin", "Kallyanach", "Kappa", "Kliren", "Kobolds", "Lefou", "Mashin", "Medusa", "Meio-elfo", "Meio-orc", "Minauro", "Minotauro", "Moreau", "Nagah", "Nezumi", "Ogro", "Orc", "Osteon", "Pteros", "Qareen", "Sereia/tritão", "Soterrado", "Sulfure", "Sátiro", "Sílfide", "Tabrachi", "Tengu", "Trog", "Trog anão", "Velocis", "Voracis", "Yidishan"];
const origem = ["Acólito", "Agricultor Sambur", "Amazona de Hippion", "Amazona de Hippion", "Amigo dos Animais", "Amnésico", "Amoque Púrpura", "Andarilho Ubaneri", "Anão de Armas", "Aprendiz de Dragoeiro", "Aprendiz de Drogadora", "Aristocrata", "Aristocrata Dai’zenshi", "Armeiro Armado", "Artesão", "Artista", "Aspirante a Herói", "Assistente Forense", "Assistente de Laboratório", "Bacharel", "Bandoleiro da Fortaleza", "Barão Arruinado,", "Batedor", "Boticário", "Capanga", "Carcereiro", "Carpinteiro de Guilda", "Catador da Catástrofe", "Catador da Cidade Velha", "Cativo das Fadas", "Caçador de Ratos", "Charlatão", "Chef Hynne", "Circense", "Cirurgião-Barbeiro", "Citadino Abastado", "Cocheiro", "Competidor do Circuito", "Construtor", "Contrabandista", "Cosmopolita", "Coureiro", "Cria da Favela", "Criado pelas Voracis", "Criminoso", "Curandeiro", "Cão de Briga", "De Outro Mundo", "Descendente Colleniano", "Desertor da Supremacia", "Duplo Feérico", "Duyshidakk Infiltrado", "Emissário Ubaneri", "Eremita", "Escravo", "Escriba", "Escudeiro Solitário", "Escudeiro da Luz", "Espião", "Estandarte Vivo", "Estudante da Academia", "Estudante do Colégio Real", "Estudioso", "Explorador de Ruínas", "Fazendeiro", "Ferreiro Guerreiro", "Filhote da Revoada", "Forasteiro", "Freira", "Futura Lenda", "Ginete de Tumarkhân", "Gladiador", "Goradista", "Grumete Pirata", "Guarda", "Guardião Glacial", "Herdeiro", "Herói", "Iniciado dos Caça-Monstros", "Insciente", "Insurgente Tapistano", "Interrogador", "Irmão sem Esporas", "Ladrão de Túmulos", "Legionário", "Lenhador de Tollon", "Liricista de Lenórienn", "Marujo", "Mateiro", "Membro de Guilda", "Membro do Principado", "Menestrel", "Mensageiro", "Mercador", "Minerador", "Nitamuraniano", "Nobre Zakharoviano", "Náufrago", "Nômade", "Nômade Sar-Allan", "Padeiro", "Pedinte", "Pescador", "Pescador Parrudo", "Pivete", "Plebeu Arcano", "Prisioneiro das Catacumbas", "Procurado: Vivo ou Morto", "Profeta do Akzath", "Querido Filho", "Rebelde Agitador", "Receptador das Nuvens", "Recruta Arcano", "Recruta da Fênix", "Refugiado", "Seguidor", "Selvagem", "Selvagem Sanguinário", "Servo", "Soldado", "Sucateiro de Batalhas", "Suporte de Tropas", "Sábio Matemático", "Tamalu", "Taverneiro", "Tocado pela Dama Altiva", "Tocado pelo Indomável", "Trabalhador", "Tradicionalista Svalano", "Trapaceiro Ahleniense", "Turista da Academia", "Um com os Kami"];
const trejeitos = ["Adora contar piada. Em qualquer ocasião.", "Adora dormir depois do almoço", "Ama café", "Ama cantar. Sempre.", "Ama doces, odeia frutas", "Ama queijos", "Amarra um elástico no pulso quando sobe de nível", "Anda descalço", "Bate palmas quando algo da certo", "Carrega uma marionete quebrado", "Chama todo guerreiro de campeão", "Chama todo mundo de Meu querido", "Chama todos de tio ou tia", "Cita provérbios inventados por si próprio", "Coleciona alguma coisa", "Começa todas as frases com Pois bem...", "Confere todo dinheiro que recebe", "Confia em nobres", "Conta histórias exageradas", "Coça o nariz quando desconfortável", "Declama um poema quando vence um combate", "Desconfia de animais", "Desconfia de nobres", "Desenha bem", "Escreve poemas e espalha por aí", "Espirra alto", "Estala a língua ao invés de dizer sim", "Está sempre com fome", "Está sempre lendo", "Está sempre mascando alguma coisa", "Está sempre mexendo em algo", "Está sempre mexendo os dedos", "Está sempre se mexendo", "Está sempre sorrindo, mesmo triste", "Fala alto até quando não devia", "Fala muito rápido quando se empolga", "Fala pouco quando em combate", "Fala rimando sempre que pode", "Fala sozinha(mas finge que não, se alguém notar)", "Faz mesuras ao se apresentar", "Fica enrolando a ponta dos cabelos", "Fraco para bebidas", "Fuma cachimbo", "Gasta demais", "Gosta de brincar com adagas", "Gosta de dançar", "Gosta de estralar os dedos", "Gosta de fingir que é de outra raça", "Gosta de fofocas. Demais.", "Guarda um pouco de terra de cada lugar que visita", "Inventa citações de gente famosa", "Mantém tudo sempre limpo", "Mente muito mal", "Muito calmo", "Mão de vaca", "Nunca tira a armadura", "Não come carne", "Não gosta das cores preto, vermelho, azul e branco", "Não gosta de animais com pelo", "Não tem medo de mortos-vivos", "O joelho dói quando vai chover", "Odeia Sol", "Odeia chuva", "Odeia galinhas", "Odeia insetos", "Odeia se molhar à toa", "Parente muito distante de um herói famoso", "Pisca um olho quando diz algo esperto", "Quer conhecer o Reinado inteiro", "Reclama muito quando está frio", "Ri até de piada sem graça", "Rosna antes do combate", "Sabe equilibrar coisas", "Sabe muitas canções de piratas", "Sabe muitas músicas de taverna", "Se distrai fácil", "Se emociona fácil", "Se empolga com qualquer missão", "Se fascina rápido por outras pessoas", "Sempre se oferece para ser o ombro amigo do grupo", "Sonha tocar um instrumento", "Só aceita pagamentos em joias", "Tem algum sotaque", "Tem fortes superstições", "Tem um bicho de estimação. Invisível. Que não existe.", "Tem um tibar de sorte no bolso (e nunca gasta)", "Tem uma história triste no passado", "Tem uma magia preferida, mas não é mago", "Tende a desconfiar de pessoas estranhas ao grupo", "Toma chá todos os dias", "Trata todas as pessoas por senhor, senhorita ou equivalente", "Usa 2 medalhões de 2 deuses diferentes", "Usa bengala, só por estilo", "Usa muitas gírias", "Usa muitos anéis", "Usa uma aliança, mas aparentemente não casou", "Vegano", "Você tem uma verruga, ela fala com você", "É fã de todos os deuses de Arton, como se fossem ídolos", "Às vezes troca o nome das pessoas"];
const aparencia = ["4 Chifres bem pequenos", "Albino", "Banguela", "Barriga largamente proeminente", "Bigode grosso", "Bochechas rosadas", "Cabelo MUITO longo", "Cabelo afro, dos grandes", "Cabelo com franja", "Cabelo moicano", "Cabelo naturalmente de duas cores", "Cabelo sempre bem curto", "Cabelo sempre de uma cor diferente", "Cabelo todo trançado", "Cabelos grisalhos, mesmo sendo jovem", "Calvo", "Calvo de cabelo comprido", "Careca bem lustrosa", "Cavanhaque pontudo com penduricalhos", "Cicatriz atravessando o pescoço", "Cicatriz em forma de X no rosto", "Corcunda, mas musculoso", "Corpo troncudo", "Dentes da frente de metal", "Grande cicatriz no peito", "Lingua bipartida", "Manca por conta de uma flechada no joelho", "Manchas na pele", "Muito magro, ainda que saudável", "Mãos enrugadas", "Mãos grandes", "Nariz longo e pontudo", "Nariz pequeno, de batatinha", "Nariz quebrado", "Nasceu com dois rabos", "Nasceu com um rabo", "Não pisca", "Não tem sobrancelhas", "Olheiras constantes", "Olhos completamente pretos", "Olhos de cores diferentes", "Olhos estreitos", "Olhos totalmente brancos", "Orelhas de gato", "Orelhas maiores que o normal", "Parece muito forte", "Parece muito fraco", "Parece ser bem mais velho do que é", "Parece ser muito mais novo do que é", "Parece um pouco mais velho do que realmente é", "Pata de animal (coelho, gato) no lugar dos pés", "Peito cheio de tatuagens", "Pele lilás", "Perdeu um dedo da mão", "Perdeu um dedo do pé", "Perdeu um olho", "Perna(s) prostética(s)", "Pernas longas", "Piercings em lugares diversos", "Pinta a unha dos mindinhos", "Pintura de caveira no rosto", "Princípio calvície no alto da cabeça", "Pés grandes", "Queixo pontudo", "Queixo quadrado", "Rosto de fada", "Se veste sempre de preto", "Sempre usa chapéu", "Sinal de nascença misterioso", "Sorriso brilhante", "Só usa roupas muito coloridas", "Tatuagem do deus de quem é devoto", "Tatuagem que não se lembra de ter feito", "Tem caninos pontudos", "Tem muitos pelos no corpo todo", "Tem postura impecável", "Tem sardas", "Tem tatuagens nas mãos", "Terceiro mamilo", "Um dedo a mais em uma das mãos", "Um olho branco", "Uma orelha pontuda", "Unhas muito compridas", "Usa brincos grandes", "Usa capa, sempre", "Usa monóculo", "Usa penteados exuberantes", "Usa roupas equivalentes às de um nobre", "Usa óculos", "Verruga grande em alguma parte do corpo", "Voz muito fina", "Voz muito grossa", "Voz rouca", "Várias tatuagens no rosto", "É muito mais alto que o normal", "É muito mais baixo que o normal"];
const deuses = {
    Aharadak: { druidaAceito: true, aceitaTodos: true },
    Alihanna: { druidaAceito: true, classes: ["Bárbaro", "Caçador", "Druida", "Treinador"], race: ["Centauro", "Ceratops", "Dahllan", "Duende", "Eiradaan", "Elfo", "Elfo-do-mar", "Galokk", "Gnoll", "Nagah", "Ogro", "Orc", "Pteros", "Sátiro", "Sílfide", "Tabrachi", "Velocis", "Voracis"] },
    Arsenal: { classes: ["Bárbaro", "Cavaleiro", "Guerreiro", "Lutador"], race: ["Anão", "Bugbear", "Ceratops", "Elfo-do-mar", "Galokk", "Hobgoblin", "Kaijin", "Kallyanach", "Minotauro", "Nezumi", "Ogro", "Orc", "Tengu", "Voracis", "Yidishidan"] },
    Azgher: { paladinoAceito: true, classes: ["Arcanista", "Bárbaro", "Cavaleiro", "Caçador", "Guerreiro", "Nobre"], race: ["Aggelus", "Ceratops", "Qareen"] },
    Hyninn: { classes: ["Bardo", "Bucaneiro", "Inventor", "Ladino", "Nobre"], race: ["Elfo-do-mar", "Gnoll", "Goblin", "Harpia", "Hynne", "Kappa", "Nagah", "Sátiro", "Sílfide"] },
    Kallyadranoch: { classes: ["Arcanista", "Cavaleiro", "Guerreiro", "Lutador", "Nobre"], race: ["Elfo", "Finntroll", "Kallyanach", "Kobolds", "Medusa", "Nagah", "Sulfure"] },
    Khalmyr: { paladinoAceito: true, classes: ["Cavaleiro", "Guerreiro", "Nobre"], race: ["Aggelus", "Anão", "Kobolds", "Tengu"] },
    Lena: { paladinoAceito: true, classes: ["Nobre"], race: ["Ceratops", "Dahllan", "Eiradaan", "Kappa", "Kobolds", "Pteros", "Qareen", "Velocis"] },
    LinWu: { paladinoAceito: true, classes: ["Cavaleiro", "Guerreiro", "Nobre"], race: ["Anão", "Kaijin", "Kappa", "Mashin", "Tengu"] },
    Marah: { paladinoAceito: true, classes: ["Bardo", "Nobre"], race: ["Aggelus", "Elfo", "Gnoll", "Hynne", "Pteros", "Qareen", "Sátiro", "Velocis"] },
    Megalokk: { druidaAceito: true, classes: ["Bárbaro", "Caçador", "Druida", "Lutador", "Treinador"], race: ["Bugbear", "Centauro", "Ceratops", "Elfo-do-mar", "Finntroll", "Galokk", "Gnoll", "Goblin", "Harpia", "Hobgoblin", "Kallyanach", "Kobolds", "Medusa", "Minotauro", "Nagah", "Nezumi", "Ogro", "Orc", "Sulfure", "Tabrachi", "Trog", "Voracis", "Yidishidan"] },
    Nimb: { classes: ["Arcanista", "Bardo", "Bucaneiro", "Bárbaro", "Inventor", "Ladino", "Treinador"], race: ["Duende", "Gnoll", "Goblin", "Orc", "Qareen", "Sátiro", "Sílfide", "Tabrachi", "Yidishidan"] },
    Oceano: { druidaAceito: true, classes: ["Bucaneiro", "Bárbaro", "Caçador", "Treinador"], race: ["Dahllan", "Elfo-do-mar", "Hynne", "Kappa", "Minotauro", "Sereia/tritão"] },
    Sszzaas: { classes: ["Arcanista", "Bardo", "Bucaneiro", "Inventor", "Ladino", "Nobre"], race: ["Finntroll", "Medusa", "Nagah", "Sátiro", "Tabrachi"] },
    TannaToh: { paladinoAceito: true, classes: ["Arcanista", "Bardo", "Inventor", "Nobre", "Paladino"], race: ["Golem", "Kliren", "Tengu"] },
    Tenebra: { druidaAceito: true, classes: ["Arcanista", "Bardo", "Druida", "Ladino", "Treinador"], race: ["Anão", "Bugbear", "Finntroll", "Gnoll", "Harpia", "Hobgoblin", "Kobolds", "Medusa", "Nagah", "Nezumi", "Ogro", "Orc", "Osteon", "Qareen", "Soterrado", "Sulfure", "Tabrachi", "Trog"] },
    Thowr: { aceitaTodos: true },
    Thyatis: { paladinoAceito: true, classes: ["Aggelus", "Eiradaan"], race: ["Cavaleiro", "Guerreiro", "Inventor", "Lutador"] },
    Valkaria: { paladinoAceito: true, aceitaTodos: true },
    Wynna: { classes: ["Arcanista", "Bardo", "Treinador"], race: ["Duende", "Eiradaan", "Elfo", "Golem", "Kallyanach", "Nagah", "Ptero", "Qareen", "Sátiro", "Sílfide", "Tengu"] },
    Panteão: { paladinoAceito: true, druidaAceito: true, classes: ["Clérigo", "Frade"], race: [] },
    Descrente: { classes: ["Arcanista", "Barbáro", "Bardo", "Bucaneiro", "Caçador", "Cavaleiro", "Guerreiro", "Inventor", "Ladino", "Lutador", "Nobre", "Treinador"], race: [] },
};
const backgrounds = [
    "Fugiu de um culto maligno e agora busca redenção.",
    "Vagou por terras desconhecidas, tentando esquecer seu passado.",
    "Ex-membro de um grupo de mercenários, agora em busca de paz.",
    "Herói lendário, mas com um grande segredo que nunca revelou.",
    "Nascido em uma cidade em ruínas, agora luta para reconstruí-la.",
    "Abandonado por sua família, cresceu nas ruas e aprendeu a sobreviver por conta própria.",
    "Agricultor que descobriu ter poderes místicos após um evento sobrenatural.",
    "Artista famoso que abandonou sua carreira para se tornar um aventureiro.",
    "Caçador de recompensas que se arrependeu de suas ações e busca redenção.",
    "Escravo liberto que jurou vingança contra seus antigos captores.",
    "Estudante de magia que foi expulso da academia por praticar magias proibidas.",
    "Ex-atirador de elite que se recusou a cumprir uma ordem imoral.",
    "Ex-bardo que perdeu sua voz e agora busca uma nova forma de se expressar.",
    "Ex-capitão de navio que perdeu sua tripulação para um monstro marinho.",
    "Ex-carcereiro que libertou seus prisioneiros e fugiu com eles.",
    "Ex-carniçal que se cansou da violência e busca uma vida pacífica.",
    "Ex-cavaleiro da morte que se libertou do controle de seu mestre sombrio.",
    "Ex-cavaleiro que perdeu seu título após ser acusado de traição.",
    "Ex-caçador de dragões que se tornou protetor das criaturas que antes caçava.",
    "Ex-caçador de relíquias que descobriu um artefato amaldiçoado e busca se livrar dele.",
    "Ex-caçador que se tornou protetor das criaturas que antes perseguia.",
    "Ex-comerciante que perdeu tudo e agora busca recomeçar em terras distantes.",
    "Ex-cortesão que foi exilado por conspirar contra o rei.",
    "Ex-coveiro que descobriu um segredo sombrio enterrado sob a terra.",
    "Ex-embaixador que foi traído por seu próprio reino e busca justiça.",
    "Ex-escravo que se tornou líder de uma rebelião e busca liberdade para todos.",
    "Ex-escudeiro que herdou a espada de seu mestre após sua morte.",
    "Ex-gladiador que conquistou sua liberdade e agora luta por uma causa maior.",
    "Ex-ladrão que se arrependeu e agora usa suas habilidades para ajudar os necessitados.",
    "Ex-líder de um culto que se arrependeu e agora busca destruir o que criou.",
    "Ex-monge que abandonou seu monastério após questionar seus ensinamentos.",
    "Ex-pirata que naufragou e jurou nunca mais voltar ao mar.",
    "Ex-sacerdote que perdeu a fé após uma tragédia pessoal e agora busca um novo propósito.",
    "Ex-servo de um deus menor que foi abandonado por seu mestre divino.",
    "Ex-soldado que desertou após testemunhar atrocidades cometidas por seu exército.",
    "Exilado de seu reino por um crime que não cometeu, busca provar sua inocência.",
    "Filho de um alquimista, herdou seus experimentos perigosos e busca controlá-los.",
    "Filho de um bárbaro, tenta encontrar seu lugar em um mundo civilizado.",
    "Filho de um demônio e um humano, busca aceitação em um mundo que o rejeita.",
    "Filho de um fazendeiro, descobriu ser o herói profetizado para salvar o mundo.",
    "Filho de um feiticeiro, herdou poderes que ainda não consegue controlar.",
    "Filho de um ferreiro lendário, busca superar o legado de seu pai.",
    "Filho de um ferreiro, deixou tudo para trás para seguir o caminho da magia.",
    "Filho de um herói caído, carrega o peso do legado de seu pai.",
    "Filho de um herói traído, busca vingança contra aqueles que destruíram sua família.",
    "Filho de um nobre, fugiu de casa para escapar de um casamento arranjado.",
    "Filho de um pescador, descobriu um tesouro antigo no fundo do mar.",
    "Guardião de um antigo segredo que foi traído por aqueles em quem confiava.",
    "Guardião de um portal para outro mundo que foi destruído por invasores.",
    "Guia espiritual que perdeu sua conexão com os deuses e busca reconquistá-la.",
    "Viajante que perdeu a memória e agora busca descobrir sua verdadeira identidade.",
    "Vítima de um experimento alquímico que deixou sua mente conectada a outro plano de existência.",
    "Vítima de um experimento alquímico que deixou sua mente fragmentada.",
    "Vítima de um experimento mágico que deixou marcas permanentes em seu corpo e alma.",
    "Vítima de um experimento mágico que deixou sua alma presa entre dois mundos.",
    "Vítima de um feitiço que transformou seu corpo em pedra, busca reverter a maldição.",
    "Vítima de um pacto demoníaco que busca quebrar o contrato antes que seja tarde demais.",
    "Vítima de uma maldição ancestral que busca uma cura antes que seja tarde demais.",
    "Vítima de uma praga mágica que transforma lentamente seu corpo em cristal.",
    "Único sobrevivente de uma vila destruída por uma criatura misteriosa, agora caça a besta.",
    "Órfão criado por um velho sábio, herdou seus conhecimentos e segredos."

];
//#endregion

function generateNPC() {

    const npcName = names[Math.floor(Math.random() * names.length)];
    const npcClass = classes[Math.floor(Math.random() * classes.length)];
    const npcRace = race[Math.floor(Math.random() * race.length)];
    const npcOrigem = origem[Math.floor(Math.random() * origem.length)];
    const npcTrejeitos = trejeitos[Math.floor(Math.random() * trejeitos.length)];
    const npcAparencia = aparencia[Math.floor(Math.random() * aparencia.length)];
    const npcBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    const personagem = { classe: npcClass, race: npcRace };
    const deus = setGod(personagem, deuses);

    document.getElementById('npc-name').innerText = npcName;
    document.getElementById('npc-class').innerText = `Classe: ${npcClass}`;
    document.getElementById('npc-race').innerText = `Raça: ${npcRace}`;
    document.getElementById('npc-god').innerText = `Devoto: ${deus}`;
    document.getElementById('npc-origem').innerText = `Origem: ${npcOrigem}`;
    document.getElementById('npc-personality').innerText = `Trejeito: ${npcTrejeitos}`;
    document.getElementById('npc-aparencia').innerText = `Aparência: ${npcAparencia}`;
    document.getElementById('npc-background').innerText = `História: ${npcBackground}`;

    // Mostrar a área com as informações
    document.getElementById('npc-info').classList.remove('hidden');
}

function setGod(personagem, deuses) {
    let opcoes = [];

    if (personagem.classe == "Paladino") {
        for (let deus of Object.keys(deuses)) {
            if (deuses[deus].paladinoAceito) {
                opcoes.push(deus);
            }
        }
    }
    else if (personagem.classe == "Druida") {
        for (let deus of Object.keys(deuses)) {
            if (deuses[deus].druidaAceito)
                opcoes.push(deus);
        }
    }
    else if ((personagem.classe == "Clérigo") || (personagem.race == "Humano") || (personagem.race == "Minauro") || (personagem.race == "Meio-elfo") || (personagem.race == "Meio-orc") || (personagem.race == "Moreau")) {
        for (let deus of Object.keys(deuses)) {
            opcoes.push(deus);
        }
    }
    else {
        for (const [deus, regras] of Object.entries(deuses)) {
            if (regras.aceitaTodos) {
                opcoes.push(deus);
            }
            else if (regras.classes?.includes(personagem.classe) || regras.racas?.includes(personagem.raca)) {
                opcoes.push(deus)
            }
        }
    }

    if (opcoes.length > 0) {
        const sorteado = Math.floor(Math.random() * opcoes.length);
        return opcoes[sorteado];
    }

}