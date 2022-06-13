import * as C from "./stylehome";
import logo from "../Assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import backgroundimg from "../Assets/background.png"
import { useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";
 function Home() {
const [userEmail, setUserEmail] = useState('')
const [password, setPassword] = useState('')
function loginCheck(){
  const user = JSON.parse(localStorage.getItem('listUser'))
  
  if(setUserEmail.length < 0 ){
    console.log('oi')
  }
  if(userEmail != user.emailCad){
    toast.error('Email não cadastrado')
  }
  if(password != user.passwordCad){
    toast.error('senha incorreta')
  }
  if(userEmail === user.emailCad && password === user.passwordCad){
    toast.success('Usuario logado')
    Router.push('/welcome')
  }
 
  
}




  return (
    <C.ContainerMain>
      <C.Container>
        <C.Description>
          <h1>Até onde conseguimos chegar?</h1>
          <p>
            A <strong>Curiosidade</strong> de descobrir essa resposta é a que{" "}
            <strong>nos move</strong> no dia-a-dia.
          </p>
          <Image src={logo} width="400px" height="120px" />
        </C.Description>
        

        <C.FormLabel>
        
          <C.LabelText>Email</C.LabelText>
          <C.InputLabel type="email" placeholder="Digite seu email" name="email" id="" 
          onChange={e => setUserEmail(e.target.value)}
          />
          <C.LabelText>Senha</C.LabelText>
          <C.InputLabel
          className="input"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            id=""
            onChange={e => setPassword(e.target.value)}
            />
          <p>
            Não tem cadastro? <Link href="/register">Cadastre-se agora!</Link>
          </p>
          <Link href="/">
            <C.ButtonPage onClick={loginCheck}>Entrar</C.ButtonPage>
          </Link>
        </C.FormLabel>
        <C.imgBackground>

<Image src={backgroundimg} width={
350} height={600} />
  </C.imgBackground>
      </C.Container>


      
    </C.ContainerMain>
  );
}
export default Home