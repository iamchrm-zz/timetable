'use strict';
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

 client.on('ready', () => {
     const channels =  client.channels.cache.find( channel => channel.name === 'timetable' );
     console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    switch (msg.content) {
        case '.tc':
            const embed = new MessageEmbed()
                // Set the title of the field
                .setTitle('Commands info | .tc = timetable commands')
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription(`
                    1. .lu (muestra las clases disponibles del dia lunes) 
                    
                    2. .ma (muestra las clases disponibles del dia martes) 
                    
                    3. .mi (muestra las clases disponibles del dia miercoles) 
                    
                    4. .ju (muestra las clases disponibles del dia jueves) 
                    
                    5. .vi (muestra las clases disponibles del dia viernes) 
                    
                    6. .sa (muestra las clases disponibles del dia sabado)
                    
                    7. .about (Información adicional)
                     `);
            // Send the embed to the same channel as the message
            msg.channel.send(embed);
            break;
        case '.lu':
            msg.channel.send({embed : {
                    color: 3447003,
                    title: 'DIA LUNES',
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Integración de plataformas | 19:00 - 20:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277888_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Evaluación de proyectos | 20:30 - 22:00 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277890_1&mode=view",
                }})
            break;
        case '.ma':
            msg.channel.send({embed: {
                    color: 3447003,
                    title: "Dia Martes"
                }});
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Gestión Agil de Proyectos | 19:00 - 20:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277885_1&mode=view",
                }})
            break;
        case '.mi':
            msg.channel.send({embed: {
                    color: 3447003,
                    title: "Dia Miercoles"
                }});
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Integración de plataformas | 19:00 - 20:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277888_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Proyectos de innovación | 20:30 - 22:00 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277858_1&mode=view",
                }})

            break;
        case '.ju':
            msg.channel.send({embed: {
                    color: 3447003,
                    title: "Dia Jueves"
                }});
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Gestión Agil de Proyectos | 19:00 - 20:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277885_1&mode=view",
                }})
            break;
        case '.vi':
            msg.channel.send({embed: {
                    color: 3447003,
                    title: "Dia Viernes"
                }});
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Procesos de negocios | 19:00 - 20:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277886_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Liderazgo y Negociación | 20:30 - 22:00 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277852_1&mode=view",
                }})
            break;
        case '.sa':
            msg.channel.send({embed: {
                    color: 3447003,
                    title: "Dia Sabado"
                }});
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Proyectos de innovación | 08:30 - 10:00 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277858_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Procesos de negocios | 10:00 - 11:30',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277886_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Evaluación de proyectos | 13:00 - 14:30 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277890_1&mode=view",
                }})
            msg.channel.send({embed: {
                    color: 3447003,
                    title: 'Liderazgo y Negociación | 14:30 - 16:00 ',
                    description: "https://campusvirtual.duoc.cl/webapps/collab-ultra/tool/collabultra?course_id=_277852_1&mode=view",
                }})
            break;
        case '.about':
            msg.channel.send({embed: {
                    color: 0xff0000,
                    title: 'Sobre el creador ',
                    description: "Este pequeño script esta disponible para su completa edición y mejoramiento. https://github.com/iamchrm",
                }})
            break;

    }
  });



client.login("ODI1MTI5ODI3NTEwMTI0NjE2.YF5cCQ.RbvxB4auczPLUe75zdElFwCeG0s");
