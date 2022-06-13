import * as C from "./styleregister";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import backgroundimg from "../../Assets/background.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
  
  function submitForm() {
    let users = {
      nameCad: name,
      emailCad: email,
      passwordCad: password,
    };
    localStorage.setItem("listUser", JSON.stringify(users));

    if(name.length < 5){
      toast.error('Informe seu nome completo')
    }
    if (!emailRegex.test(String(email).toLowerCase())) {
      toast.error("Informe um email vailido");
    }
    if(!senhaRegex.test(String(password))){
      toast.error('Informe uma senha valida')
    } else{
      Router.push('/')
    }
  }

  return (
    <C.ContainerMain>
      <C.Container>
        <C.Description>
          <h1>Até onde conseguimos chegar?</h1>
          <p>
            A <strong>Curiosidade</strong> de descobrir essa resposta é a que
            <strong>nos move</strong> no dia-a-dia.
          </p>
          <Image src={logo} width="400px" height="120px" />
        </C.Description>

        <C.FormLabel>
          <C.LabelText>Seu nome</C.LabelText>
          <C.InputLabel
            type="text"
            placeholder="Nome"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <C.LabelText>Email</C.LabelText>
          <C.InputLabel
            type="email"
            placeholder="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.LabelText>Senha</C.LabelText>
          <C.InputLabel
            className="input"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <C.CheckboxAling>
            <C.CheckboxButton type="checkbox" className="checkbox" />
            <p>
              Eu li e aceito os <Link href="/">termos de condições</Link>
            </p>
          </C.CheckboxAling>

          <C.ButtonPage onClick={submitForm}>Cadastrar</C.ButtonPage>
        </C.FormLabel>
        <C.imgBackground>
          <Image src={backgroundimg} width={350} height={600} />
        </C.imgBackground>
      </C.Container>
    </C.ContainerMain>
  );
}
export default register