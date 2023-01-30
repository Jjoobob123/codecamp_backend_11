export const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: '주밥이의 미니프로젝트',
            version: '1.0.0',
            description: 'mini project swagger API 구현'
        },
        server: [ {
            url: "http://localhost:4000"
        }]
    },
    apis : ['./swagger/*.swagger.js'],
}