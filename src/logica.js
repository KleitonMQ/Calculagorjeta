function calcular(event) {
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let qualidadeDeServico = document.getElementById('qualidadeDeServico').value;
    let pessoas = document.getElementById('pessoas').value;
    
    if(pessoas == "" | pessoas <=1){
        pessoas = 1;
        document.getElementById('each').style.display = "none";
    } else{
        document.getElementById('each').style.display = "block";
    }

    if (conta == '' | qualidadeDeServico =="-1"){
        alert("por favor, preencha todos os campos.");
        return;
    } else{
        let total = (conta*qualidadeDeServico) / pessoas;
        total = total.toFixed(2);
        document.getElementById('tip').innerHTML = total;
        document.getElementById('gorjetaTotal').style.display = "block";
    }

}

document.getElementById('gorjetaTotal').style.display = "none";

document.getElementById('gorjetaForm').addEventListener('submit', calcular);