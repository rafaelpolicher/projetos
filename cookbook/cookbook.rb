

def bem_vindo
    puts "Bem vindo ao COOKBOOK, sua rede social de receitas "
end

def menu
    puts "[1] Cadastrar receita"
    puts "[2] Ver receitas"
    puts "[3] sair"
    print "Escolha uma opçao: "
    return gets.to_i()
end

def inserir_receita
    puts "Digite o nome da receita: "
    nome = gets.chomp()

     puts "Digite o tipo da receita: "
    tipo = gets.chomp()

    puts

    puts
    puts "Receita #{nome} cadastrada com sucesso"
    puts
    return receitas << {nome: nome, tipo: tipo}
end

def imprimir_receitas(r)
    puts "====Receitas cadastradas==="
    r.each do |receita|
       puts "#{receita[:nome]} - #{receita[:tipo]}"
end
bem_vindo

receitas = []

opcao = menu()

opcao = gets.to_i()
while(opcao != 3)

    if(opcao ==1)
    receitas << inserir_receita()
    

    elsif(opcao == 2)
        imprimir_receitas(receitas)
        #########igual#############
        #receitas.each do |receita|
        #    puts receita
        #end
        ###########igual#############
        #for receita in receitas do
        #    puts receita
        #end
    

    else
        puts "Escolha uma opçao valida"
    end

    opcao = menu()
end

puts "obrigado por usar o cookbook"