var newNode;document.querySelectorAll("[obscure]").forEach(function(e){for(var n in(newNode=document.createElement("span")).innerHTML=e.innerHTML,e.classList&&(newNode.classList=e.classList),e.id&&(newNode.id=e.id),e.dataset)newNode.innerHTML=newNode.innerHTML.replaceAll("%"+n.replace("p",""),e.dataset[n]);e.parentNode.insertBefore(newNode,e),e.remove()});