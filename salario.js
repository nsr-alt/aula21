function calcular(){
    const funcionario = document.getElementById('funcionario').value
    const salario = Number(document.getElementById('salario').value)
    const vendas = Number(document.getElementById('vendas').value)
    const comissao = Number(document.getElementById('comissao').value)
    const resultado = document.getElementById('resultado')    

    const valorComissao = (comissao / 100) * vendas
    const salarioBruto = salario + valorComissao
    const salarioLiquido = salarioBruto - ((8 / 100) * salarioBruto)

    resultado.innerHTML = `<p>${funcionario} suas seguintes informações são: <br>
     Valor da comissão: ${valorComissao.toFixed(2)} <br>
     Salário bruto: ${salarioBruto.toFixed(2)} <br>
     Salário líquido (8% INSS): ${salarioLiquido.toFixed(2)}</p>`
}