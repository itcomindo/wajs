// Jalankan APP
function runApp() {
    var appwrapper = document.getElementById("appwrapper");
    var toggletorun = document.getElementById("toggletorun");
    var appcontent = document.getElementById("appcontent");
    var toggleCloseApp = document.getElementById("togglecloseapp");
    var secondGreeting = document.getElementById("secondgreeting");
    var loveIcon = document.getElementById("love");
    appwrapper.classList.remove("app_is_not_active");
	appwrapper.classList.add("animate__bounceInUp");
	appwrapper.classList.add("app_is_active");
	appwrapper.classList.remove("animate__rubberBand");
	appwrapper.classList.remove("animate__delay-1s");
	toggletorun.classList.remove("toggle_is_active");
	toggletorun.classList.add("toggle_is_not_active");
	appcontent.classList.remove("app_content_is_not_active");
	appcontent.classList.add("app_content_is_active");
	toggleCloseApp.classList.remove("not_active");
	secondGreeting.classList.remove("animate__delay-2s");
    loveIcon.classList.remove("animate__zoomIn");
}

// STOP APP
function stopApp() {
    var appwrapper = document.getElementById("appwrapper");
    var toggletorun = document.getElementById("toggletorun");
    var appcontent = document.getElementById("appcontent");
    var toggleCloseApp = document.getElementById("togglecloseapp");
    var toggletorun2 = document.getElementById("toggletorun2");
    var gthTrigger = document.getElementById("gth_trigger");
    var loveIcon = document.getElementById("love");
	appwrapper.classList.remove("app_is_active");
	appwrapper.classList.remove("animate__bounceInUp");
	appwrapper.classList.add("app_is_not_active");
	appwrapper.classList.add("animate__rubberBand");
	toggletorun.classList.remove("toggle_is_not_active");
	toggletorun.classList.add("toggle_is_active");
	appcontent.classList.remove("app_content_is_active");
	appcontent.classList.add("app_content_is_not_active");
	toggleCloseApp.classList.add("not_active");
	toggletorun.classList.add("not_active");
	toggletorun2.classList.remove("not_active");
	toggletorun2.classList.add("toggle_is_active");
	toggletorun2.classList.add("animate__bounce");
	toggletorun2.classList.add("animate__delay-2s");
	gthTrigger.classList.remove("not_active");
	gthTrigger.classList.add("gth_trigger_is_active");
	gthTrigger.classList.add("animate__bounceInRight");
    loveIcon.classList.add("animate__zoomIn");

}


// Munculkan Contact Form
function munculkanContactForm() {
    var lastRow = document.getElementById("last_row_in_bottom");
    var contactForm = document.getElementById("row_contact_form");
    var rowSatu = document.getElementById("row_satu");
    var rowDua = document.getElementById("row_dua");
    var toggleCloseApp = document.getElementById("togglecloseapp");
    var wrSosmed = document.getElementById("wr_sosmed");
    var innerRowContactForm = document.getElementById("inner_row_contact_form");
	lastRow.classList.remove("last_row_in_bottom_is_active");
	lastRow.classList.add("last_row_in_bottom_is_not_active");
	// munculkan contact form
	contactForm.classList.remove("row_contact_form_is_not_active");
	contactForm.classList.add("row_contact_form_is_active");
	// hidding row 1 and 2
	rowSatu.classList.remove("row_in_bottom");
	rowSatu.classList.add("not_active");
	rowDua.classList.remove("row_in_bottom");
	rowDua.classList.add("not_active");
	// hidding close button
	toggleCloseApp.classList.add("not_active");
	// hide sosmed
	wrSosmed.classList.add("not_active");
	// run show innerRowContactForm
	innerRowContactForm.classList.remove("inner_row_contact_form_is_not_active");
	innerRowContactForm.classList.add("inner_row_contact_form_is_active");
}

// Munculkan tombol kirim Setelah isi Captcha benar
function cekCaptcha() {
    // buat var
    var cancelKirimEmailButton = document.getElementById("ckm");
    var tombolKirimEmail = document.getElementById("kirim");
    var formCaptcha = document.getElementById("formcaptcha");
	var form = document.forms[0];
	var selectElement = form.querySelector('input[name="captcha"]');
	var selectedValue = selectElement.value;

    // Jalankan algo captcha
	if (selectedValue == 180) {
		cancelKirimEmailButton.classList.remove("ckm_is_active");
		cancelKirimEmailButton.classList.add("ckm_is_not_active");
		tombolKirimEmail.classList.remove("send_btn_is_not_active");
		tombolKirimEmail.classList.add("send_btn_is_active");
		formCaptcha.classList.remove("captcha_kosong");
		formCaptcha.classList.add("captcha_isi");

	} else {

		tombolKirimEmail.classList.remove("send_btn_is_active");
		tombolKirimEmail.classList.add("send_btn_is_not_active")
		formCaptcha.classList.remove("captcha_isi");
		formCaptcha.classList.add("captcha_kosong");
		cancelKirimEmailButton.classList.remove("ckm_is_not_active");
		cancelKirimEmailButton.classList.add("ckm_is_active");

	};
}



// Gak Jadi Kirim email alias sembunyikan form
function gkJadiKirimEmail() {
    var toggleCloseApp = document.getElementById("togglecloseapp");
    var lastRow = document.getElementById("last_row_in_bottom");
    var contactForm = document.getElementById("row_contact_form");
    var rowSatu = document.getElementById("row_satu");
    var rowDua = document.getElementById("row_dua");
    var innerRowContactForm = document.getElementById("inner_row_contact_form");
    var wrSosmed = document.getElementById("wr_sosmed");
    var appwrapper = document.getElementById("appwrapper");
	// hidding close button
	toggleCloseApp.classList.remove("not_active");
	lastRow.classList.remove("last_row_in_bottom_is_not_active");
	lastRow.classList.add("last_row_in_bottom_is_active");
	// munculkan contact form
	contactForm.classList.remove("row_contact_form_is_active");
	contactForm.classList.add("row_contact_form_is_not_active");
	// balikin row 1 and 2 yang di hidden
	rowSatu.classList.remove("not_active");
	rowSatu.classList.add("row_in_bottom");
	rowDua.classList.remove("not_active");
	rowDua.classList.add("row_in_bottom");
	// run hide innerRowContactForm
	innerRowContactForm.classList.remove("inner_row_contact_form_is_active");
	innerRowContactForm.classList.add("inner_row_contact_form_is_not_active");
	toggleCloseApp.classList.remove("not_active");

	// show sosmed
	wrSosmed.classList.remove("not_active");
	appwrapper.classList.remove("animate__delay-1s");
}



// Tawarkan Promo
function runGth() {
    var goToHell = document.getElementById("gth");
	goToHell.classList.remove("gth_is_not_active");
	goToHell.classList.add("gth_is_active");
}

