function validateLogin() {
	var user = $('#user').val(),
	    pass = $('#pass').val();
	if(user.length == 0 || user == '') {
		$('#user').parent().addClass('is-invalid');
		$('#user').parent().find('span').html('Ingrese el usuario.');
		return;
	}
	if(pass.length == 0 || pass == '') {
		$('#pass').parent().addClass('is-invalid');
		$('#pass').parent().find('span').html('Ingrese la constrase&ntilde;a.');
		return;
	}
	$.ajax({
		url  : 'login',
		data : {user : user,
		        pass : pass},
		type : 'POST'
	}).done( function(data) {
		if(data.error == 0) {
			location.href = data.url;
		}else {
			$('#user').parent().addClass('is-invalid');
			$('#user').parent().find('span').html('');
			$('#pass').parent().addClass('is-invalid');
			$('#pass').parent().find('span').html(data.msj);
		}
	})

}