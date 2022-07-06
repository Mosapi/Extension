document.onreadystatechange = function(){
	if(document.readyState === 'complete'){
		vkl1 = document.querySelector(".bint1"), vkl2 = document.querySelector(".bint2"), vkl3 = document.querySelector(".bint3"), dot1 = document.querySelector(".dot1"), dot2 = document.querySelector(".dot2"), dot3 = document.querySelector(".dot3"), setnas = document.querySelector("#setnas");
		pi7 = document.querySelector("#par7"),pi9 = document.querySelector("#par9"),pi11 = document.querySelector("#par11");
		
		chrome.storage.sync.get(['setnag'], function(items){
			if(items.setnag == undefined || items == ''){
				console.log('Настройки пустые');
			}else{
				var maner = items.setnag;
				for(index = 0; index < maner.length; ++index){
					gangis = maner[index];
					var urlx = document.querySelector('input[id="par'+index+'"]');
					if(gangis == 1){
						urlx.checked = true;
					}else{
						urlx.checked = false;
					}
				}
				if(pi7.checked || pi9.checked){
					pi11.setAttribute('disabled', 'true');
				}
				if(pi11.checked){
					pi7.setAttribute('disabled', 'true');
					pi9.setAttribute('disabled', 'true');
				}
			}
		});
		setnas.addEventListener("click", function(){
			//colo = '';
			chrome.storage.sync.clear();//Прежде очищаем хранилище
			var koss = [];
			pund = document.querySelectorAll('input[type="checkbox"]');
			for (var i =0, pedos=pund.length; i< pedos; i++){
				koki = pund[i];
				if(koki.checked){
					koss.push('1');
				}else{
					koss.push('0');
				}
			}
			chrome.storage.sync.set({'setnag':koss});//Записываем в хранилище
			//console.log(koss);
			chrome.tabs.reload();
		});
		pi11.addEventListener("change", function(){
			if(pi11.checked){
				pi7.setAttribute('disabled', 'true');
				pi9.setAttribute('disabled', 'true');
			}else{
				pi7.removeAttribute('disabled');
				pi9.removeAttribute('disabled');
			}
			
		});
		pi7.addEventListener("change", function(){
			if(pi7.checked){
				pi11.setAttribute('disabled', 'true');
			}else{
				if(!pi9.checked){
					pi11.removeAttribute('disabled');
				}
			}	
		});
		pi9.addEventListener("change", function(){
			if(pi9.checked){
				pi11.setAttribute('disabled', 'true');
			}else{
				if(!pi7.checked){
					pi11.removeAttribute('disabled');
				}
			}			
		});
		vkl1.addEventListener("click", function(){
			vkl1.classList.add('active');
			vkl2.classList.remove('active');
			vkl3.classList.remove('active');
			dot1.classList.add('active');
			dot1.classList.remove('deactive');
			dot2.classList.add('deactive');
			dot2.classList.remove('active');
			dot3.classList.add('deactive');
			dot3.classList.remove('active');
			setnas.style.display = 'block';
		});
		vkl2.addEventListener("click", function(){
			vkl2.classList.add('active');
			vkl1.classList.remove('active');
			vkl3.classList.remove('active');
			dot1.classList.add('deactive');
			dot1.classList.remove('active');
			dot3.classList.add('deactive');
			dot3.classList.remove('active');
			dot2.classList.add('active');
			dot2.classList.remove('deactive');
			setnas.style.display = 'block';
		});
		vkl3.addEventListener("click", function(){
			vkl3.classList.add('active');
			vkl2.classList.remove('active');
			vkl1.classList.remove('active');
			dot1.classList.add('deactive');
			dot1.classList.remove('active');
			dot2.classList.add('deactive');
			dot2.classList.remove('active');
			dot3.classList.add('active');
			dot3.classList.remove('deactive');
			setnas.style.display = 'none';
		});
	}
}