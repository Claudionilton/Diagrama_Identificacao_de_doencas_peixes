///// ~~~ INICIO  ~~~  ///
resp = prompt("O peixe apresenta manchas ou estruturas anormais na superficie do corpo?");
//PRIMEIRO BLOCO
if (resp == 1) {

  resp = prompt("Estas estruturas são pontos visiveis na pele?");

  if (resp == 1) {
    resp = prompt("Pequenos pontos brancos espalhados por todo o corpo ou nadadeiras?");
    if (resp == 1) {
      //DOENÇA 1 DETECTADA ICTIO
      prompt("Doença dos pontos Brancos ou Ictio!, Causada pelo protozoário Ichthyophthyrus Multifilis")
    } else if (resp == 2) {
      resp = prompt("Os pontos são brilhantes, numerosos, similares a gotinhas douradas aveludadas?");
      if (resp == 1) {
        //DOENÇA DETECTADA DOENÇA DO VELUDO OU OODINIOSE
        prompt("Doença do Veludo ou Oodiniose. É causada pelo protozoário Oodinium pilullaris. ")
      } else if (resp == 2) {
        resp = prompt("Reavalie.")
      } else {
        alert("Resposta invalida. ")
      }

    } else {
      prompt("Resposta invalida")
    }

  } else if (resp == 2) {
    resp = prompt("Há uma crosta aparentando limo ou manchas como mofo?")
    if (resp == 1) {
      resp = prompt("Limo branco acizentado, cobrindo as brânquias e grande extensão do corpo?")
      if (resp == 1) {
        //DOENÇA DETECTADA  COSTIOSE
        alert("Costiose. É causada pelos protozoários Ichthyobodo sp. (Costia sp.) e Chilodonella sp. entre outros")
      } else if (resp == 2) {
        resp = prompt("Limo nebuloso cobrindo apenas os olhos?")

        if (resp == 1) {
          resp = prompt("Olhos se mostram 'Saltados?'")
          if (resp == 1) {
            alert("Olhos inchados(pop-eye). É causada por bactérias , fungos ou vermes.")
          } else if (resp == 2) {
            //DOENÇA DETECTADA OLHOS EMBAÇADOS
            alert("Olhos embaçados, É causada pelos trematodos monogenéticos Dactylogyrus sp. ou Gyrodactylus sp.");
          }
        } else if (resp == 2) {
          resp = prompt("Muco excessivo ao redor da boca chegando a formar tufos semelhantes a algodão?")
          if (resp = 1) {
            alert("Fungo na Boca (cotton mouth). Apesar do nome, normalmente é causada pela ação da bactéria Flexibacter columnaris. É comum a ocorrência simultânea de fungos.")
          } else if (resp = 2) {
            resp = prompt("Existem manchas brancas ou tufos semelhantes a algodão no corpo?");
            if (resp == 1) {
              alert("Doença do algodão. É causada pelos fungos Saprolegnia sp., Achlya sp. ou lchthyosporidium sp.")
            } else {
              alert("Reavalie!")
            }

          } else {

          }
        }


      } else {
        alert("Reavalie!")
      }
    }




    else if (resp == 2) {
      resp = prompt("O peixe se mostra barrigudo e com as escamas eriçadas?");
      if (resp == 1) {
        alert("Hidropsia (Ventre volumoso). É causada por bactérias que atacam os orgãos internos.")
      } else if (resp == 2) {
        resp = prompt("O peixe está magro e com o ventre retraído? ");
        if (resp == 1) {
          alert("Tuberculose ou Barriga Seca. Infecção bacteriana relacionada com a má qualidade da água.");
        } else if (resp == 2) {
          resp = prompt("O peixe apresenta feridas (buracos) na cabeça?");
          if (resp == 1) {
            alert("Buracos na cabeça (Hole-in-head). Sintoma ligado ao protozoário Hexamita sp. e possivelmente a bactérias. É também conhecida como doença dos Ciclídeos.");
          } else if (resp == 2) {
            resp = prompt("As nadadeiras apresentam-se desfiadas ou roídas?");
            if (resp == 1) {
              alert("Nadadeiras Roídas. Causada por bactérias. Em geral há ocorrência de fungos associados. As nadadeiras ficam esbranquiçadas e comeram a se desfazer.");
            } else if (resp == 2) {
              resp = prompt("Vermelidão na base das nadadeiras?")
              if (resp == 1) {
                (alert("Septicemia. Resultado de infecção causada por bactérias."))
              } else {
                alert("Reavalie!")
              }
            } else {
              alert("Reavalie!")
            }
          } else {
            alert("Reavalie!");
          }
        } else {
          alert("Reavalie!")
        }

      }



    } else {
      alert("Resposta invalida.")
    }

  } else {
    prompt("Resposta invalida.");
  }

} else if (resp == 2) {
  //SEGUNDO BLOCO
  resp = prompt("Natação irregular e tremores?");
  if (resp == 1) {
    resp = prompt("Escamas eriçadas e nadadeiras fechadas?")
    if (resp == 1) {
      alert("Água muito ácida.")
    } else {
      resp == prompt("Respiração ofegante próximo à superfície e perda de brilho das escamas? ");
      if (resp == 1) {
        alert("Água muito alcalina ou Cloro na água.")
      } else {
        alert("Reavalie!")
      }
    }
  } else {
    alert("Reavalie!")
  }

} else {
  //RESPOSTA DIFERENTE DE SIM OU NÃO.
  prompt("Resposta invalida.");
}