import './Test.css';

export const Test = function () {
    //Evenement copie : copie colle contenu du 1er input au second
    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        e.target.nextElementSibling.value = e.target.value.slice(start, stop)
    }
    //Colle ce qu'on met dans le deuxième input dans le textarea
    const handlePaste = (e) => {
        e.target.nextElementSibling.value = e.clipboardData.getData('text/plain');
    }

    //Donne le code de la touche
    const handleKeyDown = (e) => {
        console.log(e.keyCode)
    }

    //au click supprime la cible en question
    const handleClick = (e) => {
        e.target.remove()
    }

    //Ajoute une phrase dans un élément en cas de survol de ce dit élément, même effet avec onMouseEnter
    const handleEnter = (e) => {
        e.target.innerText = 'La souris est entrée le chat va la manger'
    }

    //Désactive le clique droit sur la cible
    const handleContextMenu = (e) => {
        e.preventDefault();
    }

    return(
      <>
          <input type="text" name="text-copy" onCopy={handleCopy}/>
          <input type="text" name='text-paste' onContextMenu={handleContextMenu}/>
          <textarea name="target" id="target" cols="30" rows="10" contentEditable={false} onMouseOver={handleEnter} />
      </>
    );
}