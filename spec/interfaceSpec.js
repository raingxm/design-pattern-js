var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);

var FormItem = new Interface('FormItem', ['save']);

var CompositeForm = function() {

};

var complexedForm = new CompositeForm();

Interface.ensureImplements(complexedForm, Composite);