let clientes = [
    {
        nome: "Conrado",
        email: "conrado@gmail.com",
        telefone: "(85) 00000 0000",
        dta: "05/05/2025"
    },
    {
        nome: "Emanuel",
        email: "amanuel@gmail.com",
        telefone: "(85) 00000 0000",
        dta: "05/05/2025"
    },
    {
        nome: "Ana",
        email: "ana@gmail.com",
        telefone: "(85) 00000 0000",
        dta: "05/05/2025"
    },
    {
        nome: "Maciel",
        email: "maciel@gmail.com",
        telefone: "(85) 00000 0000",
        dta: "05/05/2025"
    }
];

function carregarClientes(ListaDeClientes){
    let tbodyElement = document.querySelector("#tabela");
    ListaDeClientes.map((cliente) => {
        tbodyElement.innerHTML += `
         <tr class="*:leading-[40px]">
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.dta}</td>

                    <td class="w-[100px] flex justify-center gap-4">
                        <box-icon name="pencil"></box-icon>
                        <box-icon name="trash"></box-icon>
                    </td>
                </tr>
`
    })
}
carregarClientes(clientes);