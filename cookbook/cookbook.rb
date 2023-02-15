puts "Bem vindo ao COOKBOOK, sua rede social de receitas "

receitas = []
puts "[1] Cadastrar receita"
puts "[2] Ver receitas"
puts "[3] sair"

print "Escolha uma opçao: "
opcao = gets.to_i()
while(opcao != 3)

    if(opcao ==1)
        puts "Digite o nome da receita: "
        nome = gets.chomp()

        puts "Digite o nome da receita: "
        tipo = gets.chomp()

        puts
        receitas << {nome: nome, tipo: tipo}
        puts

        puts
        puts "Receita #{nome} cadastrada com sucesso"
        puts
    

    elsif(opcao == 2)
        puts "====Receitas cadastradas==="
        receitas.each do |receita|
           puts "#{receita[:nome]} - #{receita[:tipo]}"
        end
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
        puts "[1] Cadastrar receita"
        puts "[2] Ver receitas"
        puts "[3] sair"

        print "Escolha uma opçao: "
        opcao = gets.to_i()
end

puts "obrigado por usar o cookbook"