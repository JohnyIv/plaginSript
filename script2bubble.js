/*
Author:       	GTeam
Author E-mail:	jjobbox@gmail.com
Version:		1.3
*/
// script for menu shadow
let LiForProducts = document.getElementById('menu-item-37');		

let LiForAccessories = document.getElementById('menu-item-38');		
	
let LiForService = document.getElementById('menu-item-369');

let LiForInfo = document.getElementById('menu-item-825');


let divBg = document.createElement('div');

// div to li
LiForProducts.appendChild(divBg);

LiForAccessories.appendChild(divBg);

LiForService.appendChild(divBg);

LiForInfo.appendChild(divBg);

// special for nodes
function isInside(node, target) {
	for (; node != null; node = node.parentNode)
		if (node == target) return true;
};


function classInc() {
	divBg.className = 'bg_hover_menu';
};
	
function classDel() {
	divBg.classList.remove('bg_hover_menu')
};

// listeners for menu parts
LiForProducts.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, LiForProducts))
	classInc();
	}
);
	
LiForProducts.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, LiForProducts))
	classDel();
  	}	
);

LiForInfo.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, LiForInfo))
	classInc();
	}
);
	
LiForInfo.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, LiForInfo))
	classDel();
  	}	
);

LiForAccessories.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, LiForAccessories))
	classInc();
	}
);

LiForAccessories.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, LiForAccessories))
	classDel();
  	}	
);

LiForService.addEventListener("mouseover", function(event) {
    if (!isInside(event.relatedTarget, LiForService))
	classInc();
	}
);

LiForService.addEventListener("mouseout", function(event) {
    if (!isInside(event.relatedTarget, LiForService))
	classDel();
  	}	
);
// end script for menu shadow


/*--this script painting and hide bubbls --*/
document.addEventListener("DOMContentLoaded",function() {
		let  WhiteHeaderBar = document.getElementsByClassName('whb-general-header')[0];
		
		let spanCheckCart = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[0];
	
		let spanCheckCartMob = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[1];
	
		let spanCheckWishList = WhiteHeaderBar.getElementsByClassName('wishlist-count')[0];
		
		let spanCheckCartIcon = WhiteHeaderBar.getElementsByClassName('woodmart-cart-totals')[0];
	
		let spanCheckMobCartIcon = WhiteHeaderBar.getElementsByClassName('woodmart-cart-totals')[1];
	
		let bgWhiteHeaderBar = window.getComputedStyle(WhiteHeaderBar).backgroundColor;

	// create observer constraction x3	
		let observerTextCart = new MutationObserver(mutationsTextCart => {
  			mutationsTextCart.forEach(recordTextCart => {
				setTimeout(()=>{},1500);
				WhiteHeaderBar = document.getElementsByClassName('whb-general-header')[0];
				spanCheckCart = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[0];
						
				if (spanCheckCart.innerText == '0 items' )  {
					spanCheckCart.classList.remove('visible-blank-bubble');
				} else {spanCheckCart.classList.add('visible-blank-bubble');	
				};
			});
  		}); 

		let observerTextCartMob = new MutationObserver(mutationsTextCartMob => {
  			mutationsTextCartMob.forEach(recordTextCartMob => {
				setTimeout(()=>{},1500);
				WhiteHeaderBar = document.getElementsByClassName('whb-general-header')[0];
				spanCheckCartMob = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[1];
						
				if (spanCheckCartMob.innerText == '0 items' )  {
					spanCheckCartMob.classList.remove('visible-blank-bubble');
				} else {spanCheckCartMob.classList.add('visible-blank-bubble');	
				};
			});
  		});	

		let observerTextWishList = new MutationObserver(mutationsTextWishList => {
  			mutationsTextWishList.forEach(recordTextWishList => {				
				WhiteHeaderBar = document.getElementsByClassName('whb-general-header')[0];
				spanCheckWishList = WhiteHeaderBar.getElementsByClassName('wishlist-count')[0];
						
				if (spanCheckWishList.innerText == 0 )  {
					spanCheckWishList.classList.remove('visible-blank-bubble');
				} else {spanCheckWishList.classList.add('visible-blank-bubble');					
				};							
			});
  		}); 

/*-------basic checks-----*/

		if (spanCheckCart.innerText == '0 items' )  {
			spanCheckCart.classList.toggle('visible-blank-bubble',false);
		} else {
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckCart.classList.add('visible-blank-bubble');
				spanCheckCart.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckCart.classList.add('visible-blank-bubble');
					spanCheckCart.classList.toggle('bg-white-color-bubble',false);
						}
					}
				};
	
		if (spanCheckCartMob.innerText == '0 items' )  {
			spanCheckCartMob.classList.toggle('visible-blank-bubble',false);
		} else {
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckCartMob.classList.add('visible-blank-bubble');
				spanCheckCartMob.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckCartMob.classList.add('visible-blank-bubble');
					spanCheckCartMob.classList.toggle('bg-white-color-bubble',false);
				}
			}
		};

		if (spanCheckWishList.innerText == 0 )  {
			spanCheckWishList.classList.toggle('visible-blank-bubble',false);
		} else {
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckWishList.classList.add('visible-blank-bubble');
				spanCheckWishList.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckWishList.classList.add('visible-blank-bubble');
					spanCheckWishList.classList.toggle('bg-white-color-bubble',false);
				}
			}
		};
	//--observers init		
		observerTextCart.observe(spanCheckCartIcon,{childList: true});
	
		observerTextCartMob.observe(spanCheckMobCartIcon,{childList: true}); 
	
		observerTextWishList.observe(spanCheckWishList,{childList: true});
	
	//-- listener transition
		WhiteHeaderBar.addEventListener('transitionend', function() {
			bgWhiteHeaderBar = window.getComputedStyle(WhiteHeaderBar).backgroundColor;			
			WhiteHeaderBar = document.getElementsByClassName('whb-general-header')[0];
			spanCheckCart = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[0];
			spanCheckCartMob = WhiteHeaderBar.getElementsByClassName('woodmart-cart-number')[1];
			spanCheckWishList = WhiteHeaderBar.getElementsByClassName('wishlist-count')[0];			
			
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckCart.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckCart.classList.remove('bg-white-color-bubble',);
				}
			};
					
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckCartMob.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckCartMob.classList.remove('bg-white-color-bubble',);
				}
			};
			
			if (bgWhiteHeaderBar == 'rgba(0, 0, 0, 0)')  {
				spanCheckWishList.classList.add('bg-white-color-bubble');
			} else {
				if (bgWhiteHeaderBar == 'rgb(255, 255, 255)') {
					spanCheckWishList.classList.remove('bg-white-color-bubble');
				}
			}					
		});	
});
// end script painting and hide bubbls 