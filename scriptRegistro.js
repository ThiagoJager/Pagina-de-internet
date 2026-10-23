const formulario = document.getElementById("formCadastro");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const senha = document.getElementById("senha").value;
            const confirmarSenha =
                document.getElementById("confirmarSenha").value;

            if (senha !== confirmarSenha) {
                alert("As senhas não são iguais!");
                return;
            }

            alert("Validação concluída! Formulário preenchido corretamente.");
        });