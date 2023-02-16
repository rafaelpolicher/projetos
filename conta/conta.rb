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

end