

$(document).ready(function(){
alert($('#input').tagsinput('items'));
});
jQuery(function($) {

$('#tags input').on('focusout', function() {
 var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
 if (txt) $(this).before('<span class="tag">' + txt + '</span>');
 this.value = "";
 this.focus();
}).on('keyup', function(e) {
 // comma|enter (add more keyCodes delimited with | pipe)
 if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
});

$('#tags').on('click', '.tag', function() {
 if (confirm("Really delete this tag?")) $(this).remove();
});

});
/**/
$(document).ready(function(){
alert($('#input').tagsinput('items'));
});
jQuery(function($) {

$('#tags_1 input').on('focusout', function() {
 var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
 if (txt) $(this).before('<span class="tag">' + txt + '</span>');
 this.value = "";
 this.focus();
}).on('keyup', function(e) {
 // comma|enter (add more keyCodes delimited with | pipe)
 if (/(188|13)/.test(e.which)) $(this).trigger('focusout');
});

$('#tags_1').on('click', '.tag', function() {
 if (confirm("Really delete this tag?")) $(this).remove();
});

});

/**/
$(document).ready(function() {

handleStatusChanged();

});

function handleStatusChanged() {
 $('#toggleElement_1').on('change', function () {
   toggleStatus_1();
 });
}

function toggleStatus_1() {
 if ($('#toggleElement_1').is(':checked')) {
     $('#elementsToOperateOn :input').attr('disabled', true);
 } else {
     $('#elementsToOperateOn :input').removeAttr('disabled');
 }
}
 ;
