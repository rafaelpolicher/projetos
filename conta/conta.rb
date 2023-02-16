class Conta
    
#V para acessar atributos somente leitura
    attr_reader :numero, :titular

#V para acessar atributos mutaveis
    attr_accessor :saldo

#V necessario initialize com os atributos
    def initialize(numero, titular, saldo)
        @numero = numero
        @titular = titular
        @saldo = saldo
    end

    def sacar(valor)
        if saldo >= valor
            @saldo -= valor #saldo é igual a saldo - valor////// @ pode ser substituido por self.saldo, igual a this em js
        else
            puts "saldo indisponivel"
        end
    end

    def depositar(valor)
        self.saldo += valor
    end

    def transferir(conta_destino, valor)
        if saldo >= valor
            sacar(valor)
            conta_destino.depositar(valor)
        else
            puts "saldo indisponivel"
        end
    end
end