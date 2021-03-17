/* 
  Use this tiny browser console snippet to highlight the fields you need to select in the backend (usergroup) section.
  If you want to add a usergroup for your new extension, apply the key "tx_myext_domain_model" below and all the corresponding accordions will become red or get a red border so that you don't need to expand all fields. It is also useful if you have fields with the same label like title or category.
*/

var myExtension = 'tx_myext_domain_model';
var autoCheckAll = true;
var autoUnCheckAll = false;

/* typo3-contentIframe is the id of the main iframe in the backend */
var iframe = document.getElementById('typo3-contentIframe');
/* get into it */
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

innerDoc.querySelectorAll('input[type="checkbox"][value^="'+myExtension+'"]').forEach(function(item, index){ 
    item.closest('tr').style.backgroundColor = 'red'; /* section show / edit tables */
    item.closest('.panel').style.border = '5px solid red'; /* section non exclude fields */
    
    if (autoCheckAll) {
      item.checked = true;
    }
    if (autoUnCheckAll) {
      item.checked = false;
    }
  
});
