import './Test.css';
import {useState} from "react";

export const Test = function () {
    //testPaste est pour utiliser la valeur. setter est pour changer la valeur
    const [testPaste, setTestPaste] = useState('')
    const [testCopy, setTestCopy] = useState('Hello John');

    //useState renvoie un tableau, mais c'est plus long et décomposé. Autre méthode d'utilisation :
    // const state = useState('');
    // const testPase = [0];
    // const setTestPaste = state[1];

    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        // setTestPaste( e.target.value.slice(start, stop));
        setTestPaste( testCopy.slice(start, stop));
        //testPaste et setTestpaste sont liés maitnenant setTestPaste est utlisé à chaque mise à jour
        //testCopy dispose d'une valeur par défaut, il n'y a pas besoin d'aller chercher e.target.value. Possibilité d'utiliser directerment la variable du state
    }

    return(
      <>
          {/*Met à jour l'input si l'utilisateur rentre du texte */}
          <input type="text" name="text-copy" value={testCopy} onCopy={handleCopy} onChange={e=>setTestCopy(e.target.value)}/>
          <input type="text" name='text-paste' value={testPaste}/>
          <div>Valeur de testPaste : <span>{testPaste}</span></div>
      </>
    );
    //Le state est synchronisé avec le rendu HTML. les valeurs sont mise à jour automatiquement
}