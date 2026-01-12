/*
 * Obfuscated & Protected by Igor Ferraz dos Santos and <DEV³>
 * CPF: 119.796.287-50
 * Date: 2025-01-11
 * © All Rights Reserved - Farma<Dev³> Project
 * Unauthorized copying, modification, or distribution is strictly prohibited.
 * For licensing: igor.ferraz.trab10@gmail.com  and dev3company@gmail.com
 */
document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("footerContactForm"),t=document.getElementById("footerSuccess");e&&e.addEventListener("submit",async function(n){n.preventDefault();const o=document.getElementById("footerNome").value,a=document.getElementById("footerEmail").value,s=document.getElementById("footerMensagem").value,i=e.querySelector(".btn-footer-submit"),r=i.innerHTML;i.innerHTML='<i class="bi bi-hourglass-split"></i> Enviando...',i.disabled=!0;try{await fetch("https://script.google.com/macros/s/AKfycbyIZtcB4OwKW7YgJJ02ljfprr7Disfh_v3hyYWSMBOLM__x6m9a6STWKXy9RoBbh-HV/exec",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:o,email:a,mensagem:s,data:(new Date).toLocaleString("pt-BR")})});e.style.display="none",t.classList.add("active"),setTimeout(()=>{e.style.display="flex",t.classList.remove("active"),e.reset(),i.innerHTML=r,i.disabled=!1},5e3)}catch(e){console.error("Erro ao enviar:",e),alert("Erro ao enviar mensagem. Tente novamente."),i.innerHTML=r,i.disabled=!1}})});