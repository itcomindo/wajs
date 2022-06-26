<?php
function whatsapp_footer() {
?>

    <!-- Parent ini ganti class -->
    <div id="appwrapper" class="app_is_not_active animate__animated animate__rubberBand">

        <span onclick="stopApp()" class="not_active" id="togglecloseapp">X</span>

        <!-- Top Row & Toggle to Run ganti class toggle_is_active-->

        <div onclick="runApp()" id="toggletorun" class="toggle_is_active">

            <div id="firstgreeting" class="is_active">Hi, we're here Let's make a Chat 👌</div>

        </div>

        <div id="toggletorun2" class="not_active animate__animated">

            <span id="secondgreeting">

                Not find you looking for? 👌
            </span>

        </div>

        <!-- Content ini ganti class jadi app_content_is_not_active -->
        <div id="appcontent" class="app_content_is_not_active">

            <!-- Hero -->
            <div class="hero_conc">
                <h3>Welcome, How may I help You?</h3>
                <span>Feel free to exploring our offers for you.</span>
            </div>

            <!-- Button CTA -->
            <div id="wr_btn" class="row_in_bottom">
                <!-- Chat Button -->
                <button class="bgwa">
                    <a href="#">
                        <i class='bx bx-sm bxl-whatsapp'></i>
                        <span>Chat Us
                            <small>on Whatsapp</small></span>
                    </a>
                </button>
                <!-- Call Button -->
                <button class="bgcall">
                    <a href="#"><i class='bx bx-sm bx-phone-call'></i> <span>
                            Call Us
                            <small>on Phone</small>
                        </span>
                    </a>
                </button>
            </div>


            <!-- Offering Button Row 1-->
            <div id="row_satu" class="row_in_bottom">
                <!-- col left -->
                <div id="rib_left" class="col_in_row"><i class='bx bx-md bx-play-circle'></i></div>
                <!-- col mid -->
                <div id="rib_med" class="col_in_row"><span class="head_in_col_row">Watch Our presentation</span></div>
                <!-- col right -->
                <div id="rib_right" class="col_in_row"><i class='bx bx-md bx-chevron-right'></i></div>
            </div>

            <!-- Offering Button Row 2 -->
            <div id="row_dua" class="row_in_bottom">
                <!-- col left -->
                <div id="rib_left" class="col_in_row"><i class='bx bx-md bx-box'></i></div>
                <!-- col mid -->
                <div id="rib_med" class="col_in_row"><span class="head_in_col_row">Learn Our Portfolio</span></div>
                <!-- col right -->
                <div id="rib_right" class="col_in_row"><i class='bx bx-md bx-chevron-right'></i></div>
            </div>

            <!-- LAST Offering Button -->
            <div onclick="munculkanContactForm()" id="last_row_in_bottom" class="last_row_in_bottom_is_active">
                <div onclick="munculkanContactForm()" id="go_to_contact_form" class="col_in_row">

                    Contact Form

                </div>
            </div>
            <!-- Contact Form Start Dari Sinih -->
            <div id="row_contact_form" class="row_contact_form_is_not_active">

                <div id="inner_row_contact_form" class="inner_row_contact_form_is_not_active">

                    <h3>Contact Form</h3>

                    <p>
                        Silahkan isi dan kirimkan pesan Anda melalui e-mail kami:
</p>

                    <div id="wr_form" class="wr_form_is_active">
                        <form>
                            <input type=" text" id="nama" value="" placeholder="Nama">

                            <input type="text" id="email" value="" placeholder="e-mail">

                            <input type="text" id="no_hp" value="" placeholder="Nomor HP">

                            <input type="text" id="judul" value="" placeholder="Judul">

                            <textarea rows="5" id="nama" value="" placeholder="ketikan pesan"></textarea>

                            <label class="captchalabel" for="captcha">Isi captcha berapa
                                <small>9x20=?</small>
                            </label>
                            
                            <input class="captcha_kosong" onkeyup="cekCaptcha()" name="captcha" type="text"
                                id="formcaptcha" placeholder="isi jawaban disini">

                            <button class="send_btn_is_not_active" id="kirim">
                                <a href="#">Kirim</a>
                            </button>
                            <!-- cancel kirim email -->
                            <div onclick="gkJadiKirimEmail()" id="ckm" class="ckm_is_active">
                                Cancel
                            </div>
                        </form>

                    </div>
                </div>

            </div>

            <div id="wr_sosmed" class="sosmed_is_active">

                <div class="item_sosmed">
                    <a href="#">
                        <i class='bx bx-sm bxl-facebook-square'></i>
                    </a>
                </div>

                <div class="item_sosmed">
                    <a href="#">
                        <i class='bx bx-sm bxl-instagram'></i>
                    </a>
                </div>

                <div class="item_sosmed">
                    <a href="#">
                        <i class='bx bx-sm bxl-youtube'></i>
                    </a>
                </div>

                <div class="item_sosmed">
                    <a href="#">
                        <i class='bx bx-sm bxl-twitter'></i>
                    </a>
                </div>


            </div>

        </div>

    </div>
    <div id="gth_trigger" class="not_active animate__animated animate__delay-1s">

        <span id="love" class="icon_love animate__animated animate__delay-2s"><i class='bx bx-md bxs-heart'></i></span>

        <span class="tanyapromo">Yuk di klik, Ada Promo Untuk Anda, Maukan?</span>

        <span onclick="runGth()" class="maupromo">Ya Mau Promo</span>

        <span onclick="tidakMauPromo()" class="tidakmaupromo"><a href="/">Tidak Terimakasih</a></span>
    </div>

    <div id="gth" class="gth_is_not_active">

        <div class="inner_gth">
            <div id="close_gth"><a href="/">Click to Close This Shit!</a></div>
            <div id="promo">
                <h1>Hadiah Langsung Tanpa di Undi!!</h1>
                <p>Dapatkan: 1 unit mobil Lexus tanpa diundi dengan hanya menjual 2Kg Sabu dihalte Mabes Polri.</p>
                <div id="wr_btn" class="row_in_bottom">
                <!-- Chat Button -->
                <button class="bgwa">
                    <a href="#">
                        <i class='bx bx-sm bxl-whatsapp'></i>
                        <span>Chat Us
                            <small>on Whatsapp</small></span>
                    </a>
                </button>
                <!-- Call Button -->
                <button class="bgcall">
                    <a href="#"><i class='bx bx-sm bx-phone-call'></i> <span>
                            Call Us
                            <small>on Phone</small>
                        </span>
                    </a>
                </button>
            </div>
            </div>
        </div>
    </div>


<?php
}

add_action( "wp_footer", "whatsapp_footer", 3);
