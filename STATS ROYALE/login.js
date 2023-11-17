   
        
        function logar(){
            event.preventDefault();

            let user = document.getElementById('login').value;
            let pass = document.getElementById('senha').value;

            if(user == "golem" && pass == "golem"){
                alert('Sucesso');
                window.location.href = "pagina inicial.html";
            }else{
                alert('Usuário ou senha incorretas');
            }
        }

