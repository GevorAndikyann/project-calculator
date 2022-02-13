function insertFunc(num) {
  form.textveiw.value = form.textveiw.value + num;
}
function clearFunc() {
    form.textveiw.value = ''
}
function backFunc() {
    var exp = document.form.textveiw.value;
    document.form.textveiw.value = exp.substring(0,exp.length -1)
}
function equalFunc() {
    var exp = form.textveiw.value;
        form.textveiw.value = eval(exp);
    
}