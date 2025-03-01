class Cliente {
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.telefones = new Set();
        this.#cpf = cpf;
    }

    get cpf() {
        return this.#cpf;
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    getNomeCaixaAlta() {
        return this.nome.toUpperCase();
    }

    getNomeCaixaBaixa() {
        return this.nome.toLowerCase();
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    getDDDCaixaAlta() {
        return this.ddd.toString().toUpperCase();
    }

    getDDDCaixaBaixa() {
        return this.ddd.toString().toLowerCase();
    }

    getNumeroCaixaAlta() {
        return this.numero.toString().toUpperCase();
    }

    getNumeroCaixaBaixa() {
        return this.numero.toString().toLowerCase();
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    getEstadoCaixaAlta() {
        return this.estado.toUpperCase();
    }

    getEstadoCaixaBaixa() {
        return this.estado.toLowerCase();
    }

    getCidadeCaixaAlta() {
        return this.cidade.toUpperCase();
    }

    getCidadeCaixaBaixa() {
        return this.cidade.toLowerCase();
    }

    getRuaCaixaAlta() {
        return this.rua.toUpperCase();
    }

    getRuaCaixaBaixa() {
        return this.rua.toLowerCase();
    }

    getNumeroCaixaAlta() {
        return this.numero.toString().toUpperCase();
    }

    getNumeroCaixaBaixa() {
        return this.numero.toString().toLowerCase();
    }
}

class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    detalhe() {
        let detalhes = `Razão Social: ${this.razaoSocial}\nNome fantasia: ${this.nomeFantasia}\n---\n`;

        this.clientes.forEach(cliente => {
            detalhes += `Nome: ${cliente.nome}\n`;
            detalhes += `Estado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero}\n`;

            cliente.telefones.forEach(telefone => {
                detalhes += `DDD: ${telefone.ddd} Número: ${telefone.numero}\n`;
            });

            detalhes += '\n';
        });

        return detalhes;
    }
}

const enderecoEmpresa = new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 123);

const telefoneEmpresa1 = new Telefone(12, 34567890);
const telefoneEmpresa2 = new Telefone(12, 98765432);

const empresa = new Empresa('ABC LTDA', 'Mercado Online', '12345678901234', enderecoEmpresa);
empresa.adicionarTelefone(telefoneEmpresa1);
empresa.adicionarTelefone(telefoneEmpresa2);

const cliente1 = new Cliente('João', '11111111111', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 987));
cliente1.adicionarTelefone(new Telefone(99, 99999999));
cliente1.adicionarTelefone(new Telefone(99, 99999999));

const cliente2 = new Cliente('Gabriel', '22222222222', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 412));
cliente2.adicionarTelefone(new Telefone(88, 88888888));
cliente2.adicionarTelefone(new Telefone(88, 88888888));

const cliente3 = new Cliente('Barbara', '33333333333', new Endereco('SP', 'São José dos Campos', 'Av São João', 789));
cliente3.adicionarTelefone(new Telefone(77, 77777777));
cliente3.adicionarTelefone(new Telefone(77, 77777777));

const cliente4 = new Cliente('Márcia', '44444444444', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 452));
cliente4.adicionarTelefone(new Telefone(66, 66666666));
cliente4.adicionarTelefone(new Telefone(66, 66666666));


empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);
empresa.adicionarCliente(cliente3);
empresa.adicionarCliente(cliente4);

console.log(empresa.detalhe());