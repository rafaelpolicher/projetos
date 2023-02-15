puts "Bem vindo ao COOKBOOK, sua rede social de receitas "

receitas = []

while(true) do
    puts "Digite o nome da receita: "
    nome = gets.chomp()

    receitas << nome

    puts
    puts "Receita #{nome} cadastrada com sucesso"
    puts

    puts "====Receitas cadastradas==="

    puts receitas
    #########igual#############
    #receitas.each do |receita|
    #    puts receita
    #end
    ###########igual#############
    #for receita in receitas do
    #    puts receita
    #end
end