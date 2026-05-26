const ENDPOINTS = {
    usuario:{
        base: "/usuarios",
        criar: "/usuarios",
        login: "/usuarios/login",
        verPorId: (id)=> `/usuarios/${id}`,
        modificar: (id)=> `/usuarios/${id}`,
        deletar: (id)=> `/usuarios/${id}`
    },
    instituicoes:{
        base: "/instituicoes",
        criar: "/instituicoes",
        verPorId: (id)=> `/instituicoes/${id}`,
        modificar: (id)=> `/instituicoes/${id}`,
        deletar: (id)=> `/instituicoes/${id}`
    },
    pets:{
        base: "/pets",
        criar: "/pets",
        verTodos: "/pets",
        verPorId: (id)=> `/pets/${id}`,
        modificar: (id)=> `/pets/${id}`,
        deletar: (id)=> `/pets/${id}`
    },
    usuario:{
        base: "/usuarios",
        criar: "/usuarios",
        login: "/usuarios/login",
        verPorId: (id)=> `/usuarios/${id}`,
        modificar: (id)=> `/usuarios/${id}`,
        deletar: (id)=> `/usuarios/${id}`
    },


}