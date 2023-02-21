require_relative 'conta'

class ContaCorrente < Conta
    attr_accessor :limite

    def initialize(numero, titular, saldo, limite)

#V usa o initialize do pai (conta)
        super(numero, titular, saldo)
        @limite = limite
    end

    def sacar(valor)
        if (saldo + limite) >= valor
            @saldo -= valor #saldo é igual a saldo - valor////// @ pode ser substituido por self.saldo, igual a this em JS
        else
            puts "saldo indisponivel!"
        end

end