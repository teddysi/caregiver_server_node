const restify = require('restify');
const server = restify.createServer({
    name: 'Server Caregvers Test',
    version: '1.0.0'
});

const myIp = 'http://192.168.33.12'

server.use(restify.queryParser());
server.use(restify.bodyParser());

function getAll(request, response, next) {
    const leaderboard =
        [{
            id: 1, 
            name: "Paciente 01",
            problem: "necessita de cuiados continuados",
            needs: [{
                        id: 0, 
                        name: "necessidade 01",
                        
                        materials: [{
                                        idx: 0, name: "Material 01",
                                        type: "txt",
                                        strLink: myIp + ":8080/materials/st_7_2.txt"
                                        ,dateCreation: "2017-04-25"
                                    },
                                    {
                                        idx: 1, name: "Material 02",
                                        type: "txt",
                                        strLink: myIp + ":8080/materials/st_7_2.txt"
                                        , dateCreation: "2017-04-25"
                                    }]
                     },
                    {
                        id: 1,
                        name: "Necessidade 02",

                        materials: [{
                            idx: 0, name: "Material 01",
                            type: "txt",
                            strLink: myIp + ":8080/materials/st_7_2.txt"
                            , dateCreation: "2017-04-25"
                        },
                        {
                            idx: 1, name: "Material 02",
                            type: "txt",
                            strLink: myIp + ":8080/materials/st_7_2.txt"
                            , dateCreation: "2017-04-25"
                        }]
                    }]
            }, 
            {
                id: 2,
                name: "Paciente 02",
                problem: "necessita de cuiados continuados 2",
                needs: [{
                    id: 0,
                    name: "necessidade 01",

                    materials: [{
                        idx: 0, name: "Material 01",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 1, name: "Material 02",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    }]
                },
                {
                    id: 1,
                    name: "Necessidade 02",

                    materials: [{
                        idx: 0, name: "Material 01",
                        type: "jpg",
                        strLink: myIp + ":8080/materials/imagem01.jpg"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 1, name: "Material 02 ",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 2, name: "Material 03",
                        type: "mp4",
                        strLink: myIp + ":8080/materials/movie_file_1.mp4"
                        , dateCreation: "2017-04-25"
                    }]
                }]
            },
            {
                id: 3,
                name: "Paciente 03",
                problem: "necessita de cuiados continuados 2",
                needs: [{
                    id: 0,
                    name: "necessidade 01",

                    materials: [{
                        idx: 0, name: "Material 01",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 1, name: "Material 02",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    }]
                },
                {
                    id: 1,
                    name: "Necessidade 02",

                    materials: [{
                        idx: 0, name: "Material 01",
                        type: "jpg",
                        strLink: myIp + ":8080/materials/imagem01.jpg"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 1, name: "Material 02 ",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    },
                    {
                        idx: 2, name: "Material 03",
                        type: "mp4",
                        strLink: myIp + ":8080/materials/movie_file_1.mp4"
                        , dateCreation: "2017-04-25"
                    }, {
                        idx: 3, name: "Material 06 ",
                        type: "txt",
                        strLink: myIp + ":8080/materials/st_7_2.txt"
                        , dateCreation: "2017-04-25"
                    }
                    ]
                }]
            }]

           



            
            
        ;


    console.log("#SERVER# : Client request [/api/v1/patients] ");
    response.json(leaderboard);
    return next();
}
function getAllItems(request, response, next) {
    const leaderboard = [{ id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    { id: 3, name: "Piqué", role: "Defender" },
    { id: 4, name: "I. Rakitic", role: "Midfielder" },
    { id: 5, name: "Sergio", role: "Midfielder" },
    { id: 6, name: "Denis Suárez", role: "Midfielder" },
    { id: 7, name: "Arda", role: "Midfielder" },
    { id: 8, name: "A. Iniesta", role: "Midfielder" }];


    console.log("#SERVER# : Client request [/api/v1/patients] ");
    response.json(leaderboard);
    return next();
}

server.get('/api/v1/patients/', getAll);
server.get('/api/v1/items/', getAllItems);

server.get(/^\/(?!api\/).*/, restify.serveStatic({
    directory: './static-files/',
    default: ''
}));
server.listen(8080, myIp.substring(7, 22), function () {

    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('Get patients list [ no Auth ] :');
    console.log('http://'+myIp+':8080/api/v1/patients -> Json list ')
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('%s listening at %s', server.name, server.url);

});
