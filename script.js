document.getElementById('generate-btn').addEventListener('click', generateNPC);

function generateNPC() 
{
const names = ["Atreus","Deacon","Eisenberg","Fornax","Funesto","Husky","Joaquim","Joaquinus","Kraing","Kyo","Morg","Odayaka","Perseus","Rastakhan","Troyd","Yazurha","Zagnar","Zantetsu"];
    const classes = ["Arcanista","Barbáro","Bardo","Bucaneiro","Caçador","Cavaleiro","Clérigo","Druida","Guerreiro","Inventor","Ladino","Lutador","Nobre","Paladino"];
    const race = ["Anão","Bugbear","Centauro","Ceratops","Dahllan","Duende","Eiradaan","Elfo","Elfo-do-mar","Finntroll","Galokk","Gnoll","Goblin","Golem","Golem","Harpia","Hobgoblin","Humano","Hynne","Kaijin","Kallyanach","Kappa","Kliren","Kobolds","Lefou","Mashin","Medusa","Meio-elfo","Meio-orc","Minauro","Minotauro","Moreau","Nagah","Nezumi","Ogro","Orc","Osteon","Pteros","Qareen","Sereia/tritão","Soterrado","Suraggel","Sátiro","Sílfide","Tabrachi","Tengu","Trog","Trog anão","Velocis","Voracis","Yidishan"];
    const personalities = ["Corajoso", "Covarde", "Arrogante", "Sábio", "Amigável"];
    const backgrounds = [
        "Fugiu de um culto maligno e agora busca redenção.",
        "Vagou por terras desconhecidas, tentando esquecer seu passado.",
        "Ex-membro de um grupo de mercenários, agora em busca de paz.",
        "Herói lendário, mas com um grande segredo que nunca revelou.",
        "Nascido em uma cidade em ruínas, agora luta para reconstruí-la."
    ];

    // Randomiza as paradas
    const npcName = names[Math.floor(Math.random() * names.length)];
    const npcClass = classes[Math.floor(Math.random() * classes.length)];
    const npcRace = race[Math.floor(Math.random() * race.length)];
    const npcPersonality = personalities[Math.floor(Math.random() * personalities.length)];
    const npcBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Envia as info
    document.getElementById('npc-name').innerText = npcName;
    document.getElementById('npc-class').innerText = `Classe: ${npcClass}`;
    document.getElementById('npc-race').innerText = `Raça: ${npcRace}`;
    document.getElementById('npc-personality').innerText = `Personalidade: ${npcPersonality}`;
    document.getElementById('npc-background').innerText = `História: ${npcBackground}`;

    // Mostrar a área com as informações
    document.getElementById('npc-info').classList.remove('hidden');
    console.log(npcName);
}