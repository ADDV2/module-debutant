/*
 * N'hésitez pas à jeter un oeil 👁 sur ce code et à me prévenir
 * si vous rencontrez un bogue !
 *
 * Vous pouvez me joindre par email sur jeremy@javascriptdezero.com
 * ou via Slack : https://javascriptdezero.slack.com
 *
 * Merci 👍
 */

/* eslint-disable no-unused-vars */
const classesCSS = {
  enonce: 'enonce',
  message: 'message',
  succes: 'succes',
  echec: 'echec',
};

const enonces = {
  attente: 'En attente de code à tester... À vous de jouer !',
  succes: 'Félicitations ! Vous avez réussi 👍 !',
  echec: "Ce n'est pas la bonne réponse... 😭 Réessayez !",

  extraireMessage(enonce) {
    return enonce.getElementsByClassName(classesCSS.message)[0];
  },
  definirAttente(enonce) {
    enonce.classList.remove(classesCSS.echec);
    enonce.classList.remove(classesCSS.succes);
    enonce.classList.add(classesCSS.enonce);
    const message = this.extraireMessage(enonce);
    message.classList = classesCSS.message;
    message.innerHTML = this.attente;
  },
  definirSucces(enonce, bonneReponse) {
    enonce.classList.remove(classesCSS.echec);
    enonce.classList.add(classesCSS.succes);
    const message = this.extraireMessage(enonce);
    message.classList.remove(classesCSS.echec);
    message.classList.add(classesCSS.succes);
    message.innerHTML = `<p style="display: inline-block;">▶︎ Bonne réponse :&nbsp;<pre class="valeur">${bonneReponse}</pre></p>
    <p style="margin-top: var(--dim-triple)">${this.succes}</p>`;
  },
  definirEchec(enonce, valeurs) {
    enonce.classList.remove(classesCSS.succes);
    enonce.classList.add(classesCSS.echec);
    const message = this.extraireMessage(enonce);
    message.classList.remove(classesCSS.succes);
    message.classList.add(classesCSS.echec);
    const { valeurRecue, valeurAttendue } = valeurs;
    message.innerHTML = `<p>▶︎ Valeur reçue :</p><pre class="valeur">${valeurRecue || 'Aucune (undefined)'}</pre>
    <p>▶︎ Valeur attendue :</p><pre class="valeur">${valeurAttendue}</pre>
    <p style="margin-top: var(--dim-triple)">${this.echec}</p>`;
  },
  liste: [],
};
