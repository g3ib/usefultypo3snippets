/* 
  Use this tiny browser console snippet to highlight the fields you need to select in the backend (usergroup) section.
  If you want to add a usergroup for your new extension, apply the key "tx_myext_domain_model" below and all the corresponding accordions will become red or get a red border so that you don't need to expand all fields. It is also useful if you have fields with the same label like title or category.
*/

var iframe = document.getElementById('typo3-contentIframe');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
var checkboxes = innerDoc.querySelectorAll('input[type="checkbox"][value^="tx_myext_domain_model"]');
checkboxes.forEach(function(item, index){ 
	item.closest('tr').style.backgroundColor = 'red'; 
	item.closest('.panel').style.border = '5px solid red'; 
});
